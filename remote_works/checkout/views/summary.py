from django.contrib import messages
from django.shortcuts import redirect
from django.template.response import TemplateResponse
from django.utils.translation import pgettext

from ...account.models import Address
from ...core import analytics
from ...core.exceptions import InsufficientStock
from ...discount.models import NotApplicable
from ...task import TaskEvents, TaskEventsEmails
from ...task.emails import send_task_confirmation
from ..forms import CartNoteForm
from ..utils import (
    create_order, get_cart_data_for_checkout, get_taxes_for_cart,
    update_billing_address_in_anonymous_cart, update_billing_address_in_cart,
    update_billing_address_in_cart_with_delivery)


def handle_task_placement(request, cart):
    """Try to create an task and redirect the user as necessary.

    This function creates an task from cart and performs post-create actions
    such as removing the checkout instance, sending task notification email
    and creating task history events.
    """
    try:
        task = create_order(
            cart=cart,
            tracking_code=analytics.get_client_id(request),
            discounts=request.discounts,
            taxes=get_taxes_for_cart(cart, request.taxes))
    except InsufficientStock:
        return redirect('cart:index')
    except NotApplicable:
        messages.warning(
            request, pgettext(
                'Checkout warning', 'Please review your checkout.'))
        return redirect('checkout:summary')

    # remove cart after checkout is created
    cart.delete()
    task.events.create(type=TaskEvents.PLACED.value)
    send_task_confirmation.delay(task.pk)
    task.events.create(
        type=TaskEvents.EMAIL_SENT.value,
        parameters={
            'email': task.get_user_current_email(),
            'email_type': TaskEventsEmails.TASK.value})
    return redirect('task:payment', token=task.token)


def summary_with_delivery_view(request, cart):
    """Display task summary with billing forms for a logged in user.

    Will create an task if all data is valid.
    """
    note_form = CartNoteForm(request.POST or None, instance=cart)
    if note_form.is_valid():
        note_form.save()

    user_addresses = (
        cart.user.addresses.all() if cart.user else Address.objects.none())

    addresses_form, address_form, updated = (
        update_billing_address_in_cart_with_delivery(
            cart, user_addresses, request.POST or None, request.country))

    if updated:
        return handle_task_placement(request, cart)

    taxes = get_taxes_for_cart(cart, request.taxes)
    ctx = get_cart_data_for_checkout(cart, request.discounts, taxes)
    ctx.update({
        'additional_addresses': user_addresses,
        'address_form': address_form,
        'addresses_form': addresses_form,
        'note_form': note_form})
    return TemplateResponse(request, 'checkout/summary.html', ctx)


def anonymous_summary_without_delivery(request, cart):
    """Display task summary with billing forms for an unauthorized user.

    Will create an task if all data is valid.
    """
    note_form = CartNoteForm(request.POST or None, instance=cart)
    if note_form.is_valid():
        note_form.save()

    user_form, address_form, updated = (
        update_billing_address_in_anonymous_cart(
            cart, request.POST or None, request.country))

    if updated:
        return handle_task_placement(request, cart)

    taxes = get_taxes_for_cart(cart, request.taxes)
    ctx = get_cart_data_for_checkout(cart, request.discounts, taxes)
    ctx.update({
        'address_form': address_form,
        'note_form': note_form,
        'user_form': user_form})
    return TemplateResponse(
        request, 'checkout/summary_without_delivery.html', ctx)


def summary_without_delivery(request, cart):
    """Display task summary for cases where delivery is not required.

    Will create an task if all data is valid.
    """
    note_form = CartNoteForm(request.POST or None, instance=cart)
    if note_form.is_valid():
        note_form.save()

    user_addresses = cart.user.addresses.all()

    addresses_form, address_form, updated = update_billing_address_in_cart(
        cart, user_addresses, request.POST or None, request.country)

    if updated:
        return handle_task_placement(request, cart)

    taxes = get_taxes_for_cart(cart, request.taxes)
    ctx = get_cart_data_for_checkout(cart, request.discounts, taxes)
    ctx.update({
        'additional_addresses': user_addresses,
        'address_form': address_form,
        'addresses_form': addresses_form,
        'note_form': note_form})
    return TemplateResponse(
        request, 'checkout/summary_without_delivery.html', ctx)
