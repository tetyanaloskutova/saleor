import i18n from "../i18n";
import { VoucherType } from "../types/globalTypes";

export const translateVoucherTypes = () => ({
  [VoucherType.CATEGORY]: i18n.t("Selected Categories"),
  [VoucherType.COLLECTION]: i18n.t("Selected Collections"),
  [VoucherType.TYPE]: i18n.t("Selected Skills"),
  [VoucherType.DELIVERY]: i18n.t("Shipment"),
  [VoucherType.VALUE]: i18n.t("All Skills")
});
