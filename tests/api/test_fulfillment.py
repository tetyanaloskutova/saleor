import graphene
import pytest

from remote_works.task import TaskEvents, TaskEventsEmails
from remote_works.task.models import FulfillmentStatus
from tests.api.utils import get_graphql_content

CREATE_FULFILLMENT_QUERY = """
    mutation fulfillTask(
        $task: ID, $lines: [FulfillmentLineInput]!, $tracking: String,
        $notify: Boolean
    ) {
        orderFulfillmentCreate(
            task: $task,
            input: {
                lines: $lines, trackingNumber: $tracking,
                notifyCustomer: $notify}
        ) {
            errors {
                field
                message
            }
            fulfillment {
                fulfillmentTask
                status
                trackingNumber
            lines {
                id
            }
        }
    }
}
"""


def test_create_fulfillment(
        staff_api_client, task_with_lines, staff_user,
        permission_manage_orders):
    task = task_with_lines
    query = CREATE_FULFILLMENT_QUERY
    task_id = graphene.Node.to_global_id('Task', task.id)
    task_line = task.lines.first()
    task_line_id = graphene.Node.to_global_id('TaskLine', task_line.id)
    tracking = 'Flames tracking'
    assert not task.events.all()
    variables = {
        'task': task_id,
        'lines': [{'orderLineId': task_line_id, 'quantity': 1}],
        'tracking': tracking, 'notify': True}
    response = staff_api_client.post_graphql(
        query, variables, permissions=[permission_manage_orders])
    content = get_graphql_content(response)
    data = content['data']['orderFulfillmentCreate']['fulfillment']
    assert data['fulfillmentTask'] == 1
    assert data['status'] == FulfillmentStatus.FULFILLED.upper()
    assert data['trackingNumber'] == tracking
    assert len(data['lines']) == 1

    event_fulfillment, event_email_sent = task.events.all()
    assert event_fulfillment.type == (
        TaskEvents.FULFILLMENT_FULFILLED_ITEMS.value)
    assert event_fulfillment.parameters == {'quantity': 1}
    assert event_fulfillment.user == staff_user

    assert event_email_sent.type == TaskEvents.EMAIL_SENT.value
    assert event_email_sent.user == staff_user
    assert event_email_sent.parameters == {
        'email': task.user_email,
        'email_type': TaskEventsEmails.FULFILLMENT.value}


def test_create_fulfillment_with_emtpy_quantity(
        staff_api_client, task_with_lines, staff_user,
        permission_manage_orders):
    task = task_with_lines
    query = CREATE_FULFILLMENT_QUERY
    task_id = graphene.Node.to_global_id('Task', task.id)
    task_lines = task.lines.all()
    task_line_ids = [
        graphene.Node.to_global_id(
            'TaskLine', task_line.id) for task_line in task_lines]
    tracking = 'Flames tracking'
    assert not task.events.all()
    variables = {
        'task': task_id,
        'lines': [{
            'orderLineId': task_line_id,
            'quantity': 1} for task_line_id in task_line_ids],
        'tracking': tracking, 'notify': True}
    variables['lines'][0]['quantity'] = 0
    response = staff_api_client.post_graphql(
        query, variables, permissions=[permission_manage_orders])
    content = get_graphql_content(response)
    data = content['data']['orderFulfillmentCreate']['fulfillment']
    assert data['fulfillmentTask'] == 1
    assert data['status'] == FulfillmentStatus.FULFILLED.upper()


@pytest.mark.parametrize(
    'quantity, error_message',
    (
        (0, 'Total quantity must be larger than 0.'),
        (100, 'Only 3 items remaining to fulfill.')))
def test_create_fulfillment_not_sufficient_quantity(
        staff_api_client, task_with_lines, staff_user, quantity,
        error_message, permission_manage_orders):
    query = CREATE_FULFILLMENT_QUERY
    task_line = task_with_lines.lines.first()
    task_line_id = graphene.Node.to_global_id('TaskLine', task_line.id)
    variables = {
        'task': graphene.Node.to_global_id('Task', task_with_lines.id),
        'lines': [{'orderLineId': task_line_id, 'quantity': quantity}]}
    response = staff_api_client.post_graphql(
        query, variables, permissions=[permission_manage_orders])
    content = get_graphql_content(response)
    data = content['data']['orderFulfillmentCreate']
    assert data['errors']
    assert data['errors'][0]['field'] in (str(task_line), 'lines')
    assert data['errors'][0]['message'] == error_message


def test_create_fulfillment_with_invalid_input(
        staff_api_client, task_with_lines, permission_manage_orders):
    query = CREATE_FULFILLMENT_QUERY
    variables = {
        'task': graphene.Node.to_global_id('Task', task_with_lines.id),
        'lines': [{'orderLineId': 'fake-orderline-id', 'quantity': 1}]}
    response = staff_api_client.post_graphql(
        query, variables, permissions=[permission_manage_orders])
    content = get_graphql_content(response)
    data = content['data']['orderFulfillmentCreate']
    assert data['errors']
    assert data['errors'][0]['field'] == 'lines'
    assert data['errors'][0]['message'] == (
        'Could not resolve to a nodes with the global id list'
        ' of \'[\'fake-orderline-id\']\'.')


def test_fulfillment_update_tracking(
        staff_api_client, fulfillment, permission_manage_orders):
    query = """
    mutation updateFulfillment($id: ID!, $tracking: String) {
            orderFulfillmentUpdateTracking(
                id: $id, input: {trackingNumber: $tracking}) {
                    fulfillment {
                        trackingNumber
                    }
                }
        }
    """
    fulfillment_id = graphene.Node.to_global_id('Fulfillment', fulfillment.id)
    tracking = 'stationary tracking'
    variables = {'id': fulfillment_id, 'tracking': tracking}
    response = staff_api_client.post_graphql(
        query, variables, permissions=[permission_manage_orders])
    content = get_graphql_content(response)
    data = content['data']['orderFulfillmentUpdateTracking']['fulfillment']
    assert data['trackingNumber'] == tracking


def test_cancel_fulfillment_reavail_items(
        staff_api_client, fulfillment, staff_user, permission_manage_orders):
    query = """
    mutation cancelFulfillment($id: ID!, $reavail: Boolean) {
            orderFulfillmentCancel(id: $id, input: {reavail: $reavail}) {
                    fulfillment {
                        status
                    }
                }
        }
    """
    fulfillment_id = graphene.Node.to_global_id('Fulfillment', fulfillment.id)
    variables = {'id': fulfillment_id, 'reavail': True}
    response = staff_api_client.post_graphql(
        query, variables, permissions=[permission_manage_orders])
    content = get_graphql_content(response)
    data = content['data']['orderFulfillmentCancel']['fulfillment']
    assert data['status'] == FulfillmentStatus.CANCELED.upper()
    event_reavailed_items = fulfillment.task.events.get()
    assert event_reavailed_items.type == (
        TaskEvents.FULFILLMENT_RESTOCKED_ITEMS.value)
    assert event_reavailed_items.parameters == {
        'quantity': fulfillment.get_total_quantity()}
    assert event_reavailed_items.user == staff_user


def test_cancel_fulfillment(
        staff_api_client, fulfillment, staff_user, permission_manage_orders):
    query = """
    mutation cancelFulfillment($id: ID!, $reavail: Boolean) {
            orderFulfillmentCancel(id: $id, input: {reavail: $reavail}) {
                    fulfillment {
                        status
                    }
                }
        }
    """
    fulfillment_id = graphene.Node.to_global_id('Fulfillment', fulfillment.id)
    variables = {'id': fulfillment_id, 'reavail': False}
    response = staff_api_client.post_graphql(
        query, variables, permissions=[permission_manage_orders])
    content = get_graphql_content(response)
    data = content['data']['orderFulfillmentCancel']['fulfillment']
    assert data['status'] == FulfillmentStatus.CANCELED.upper()
    event_cancel_fulfillment = fulfillment.task.events.get()
    assert event_cancel_fulfillment.type == (
        TaskEvents.FULFILLMENT_CANCELED.value)
    assert event_cancel_fulfillment.parameters == {
        'composed_id': fulfillment.composed_id}
    assert event_cancel_fulfillment.user == staff_user
