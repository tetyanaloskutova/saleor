from .account.resolvers import USER_SEARCH_FIELDS
from .discount.resolvers import SALE_SEARCH_FIELDS, VOUCHER_SEARCH_FIELDS
from .menu.resolvers import MENU_ITEM_SEARCH_FIELDS, MENU_SEARCH_FIELDS
from .task.resolvers import TASK_SEARCH_FIELDS
from .page.resolvers import PAGE_SEARCH_FIELDS
from .skill.resolvers import (
    ATTRIBUTES_SEARCH_FIELDS, CATEGORY_SEARCH_FIELDS, COLLECTION_SEARCH_FIELDS,
    SKILL_SEARCH_FIELDS)
from .utils import generate_query_argument_description

DESCRIPTIONS = {
    'attributes': generate_query_argument_description(
        ATTRIBUTES_SEARCH_FIELDS),
    'category': generate_query_argument_description(CATEGORY_SEARCH_FIELDS),
    'collection': generate_query_argument_description(
        COLLECTION_SEARCH_FIELDS),
    'menu': generate_query_argument_description(MENU_SEARCH_FIELDS),
    'menu_item': generate_query_argument_description(MENU_ITEM_SEARCH_FIELDS),
    'task': generate_query_argument_description(TASK_SEARCH_FIELDS),
    'page': generate_query_argument_description(PAGE_SEARCH_FIELDS),
    'skill': generate_query_argument_description(SKILL_SEARCH_FIELDS),
    'voucher': generate_query_argument_description(VOUCHER_SEARCH_FIELDS),
    'sale': generate_query_argument_description(SALE_SEARCH_FIELDS),
    'user': generate_query_argument_description(USER_SEARCH_FIELDS)}
