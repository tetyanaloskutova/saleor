from django import forms
from django.utils.translation import pgettext_lazy

from ...site.models import SiteSettings


class TaxesConfigurationForm(forms.ModelForm):
    class Meta:
        model = SiteSettings
        fields = (
            'include_taxes_in_prices', 'display_gross_prices',
            'charge_taxes_on_delivery')
        labels = {
            'include_taxes_in_prices': pgettext_lazy(
                'Include taxes in prices',
                'All skills prices are entered with tax included'),
            'display_gross_prices': pgettext_lazy(
                'Display gross prices',
                'Show gross prices to customers in the storefront'),
            'charge_taxes_on_delivery': pgettext_lazy(
                'Charge taxes on delivery rates',
                'Charge taxes on delivery rates')}
