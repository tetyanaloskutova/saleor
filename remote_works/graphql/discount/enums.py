import graphene

from ...discount import DiscountValueType, VoucherType


class DiscountValueTypeEnum(graphene.Enum):
    FIXED = DiscountValueType.FIXED
    PERCENTAGE = DiscountValueType.PERCENTAGE


class VoucherTypeEnum(graphene.Enum):
    SKILL = VoucherType.SKILL
    COLLECTION = VoucherType.COLLECTION
    CATEGORY = VoucherType.CATEGORY
    DELIVERY = VoucherType.DELIVERY
    VALUE = VoucherType.VALUE
