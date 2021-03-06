from django.utils.translation import pgettext_lazy


class SkillAvailabilityStatus:
    NOT_PUBLISHED = 'not-published'
    VARIANTS_MISSSING = 'variants-missing'
    OUT_OF_AVAILABILITY = 'out-of-availability'
    LOW_AVAILABILITY = 'low-availability'
    NOT_YET_AVAILABLE = 'not-yet-available'
    READY_FOR_PURCHASE = 'ready-for-purchase'

    @staticmethod
    def get_display(status):
        if status == SkillAvailabilityStatus.NOT_PUBLISHED:
            return pgettext_lazy('Skill status', 'not published')
        elif status == SkillAvailabilityStatus.VARIANTS_MISSSING:
            return pgettext_lazy('Skill status', 'variants missing')
        elif status == SkillAvailabilityStatus.OUT_OF_AVAILABILITY:
            return pgettext_lazy('Skill status', 'out of availability')
        elif status == SkillAvailabilityStatus.LOW_AVAILABILITY:
            return pgettext_lazy('Skill status', 'availability running low')
        elif status == SkillAvailabilityStatus.NOT_YET_AVAILABLE:
            return pgettext_lazy('Skill status', 'not yet available')
        elif status == SkillAvailabilityStatus.READY_FOR_PURCHASE:
            return pgettext_lazy('Skill status', 'ready for purchase')
        else:
            raise NotImplementedError('Unknown status: %s' % status)


class VariantAvailabilityStatus:
    AVAILABLE = 'available'
    OUT_OF_AVAILABILITY = 'out-of-availability'

    @staticmethod
    def get_display(status):
        if status == VariantAvailabilityStatus.AVAILABLE:
            return pgettext_lazy('Variant status', 'available')
        elif status == VariantAvailabilityStatus.OUT_OF_AVAILABILITY:
            return pgettext_lazy('Variant status', 'out of availability')
        else:
            raise NotImplementedError('Unknown status: %s' % status)
