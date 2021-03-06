from decimal import Decimal

from remote_works.core.analytics import (
    get_task_payloads, get_view_payloads, report_order, report_view)


def test_get_task_payloads(task_with_lines):
    task = task_with_lines

    generator = get_task_payloads(task)
    data = list(generator)
    assert len(data) == task.lines.count() + 1

    transaction = data[0]
    assert transaction['ti'] == task.pk
    assert transaction['cu'] == task.total.currency
    assert Decimal(transaction['tr']) == task.total.gross.amount
    assert Decimal(transaction['tt']) == task.total.tax.amount
    assert Decimal(transaction['ts']) == task.delivery_price.net.amount

    for i, line in enumerate(task):
        item = data[i + 1]
        assert item['ti'] == task.pk
        assert item['in'] == line.skill_name
        assert item['ic'] == line.skill_sku
        assert item['iq'] == str(int(line.quantity))
        assert item['cu'] == line.unit_price.currency
        assert Decimal(item['ip']) == line.unit_price.gross.amount


def test_report_task_has_no_errors(task_with_lines):
    report_order('', task_with_lines)


def test_get_view_payloads():
    headers = {'HTTP_HOST': 'getsaleor.com', 'HTTP_REFERER': 'example.com'}
    generator = get_view_payloads('/test-path/', 'en-us', headers)
    data = list(generator)[0]
    assert data['dp'] == '/test-path/'
    assert data['dh'] == 'getsaleor.com'
    assert data['dr'] == 'example.com'
    assert data['ul'] == 'en-us'


def test_report_view_has_no_errors():
    headers = {'HTTP_HOST': 'getsaleor.com', 'HTTP_REFERER': 'example.com'}
    report_view('', '/test-path/', 'en-us', headers)
