import * as React from "react";

import CardSpacer from "../../../components/CardSpacer";
import { ConfirmButtonTransitionState } from "../../../components/ConfirmButton";
import Container from "../../../components/Container";
import Form from "../../../components/Form";
import Grid from "../../../components/Grid";
import PageHeader from "../../../components/PageHeader";
import SaveButtonBar from "../../../components/SaveButtonBar";
import { Tab } from "../../../components/Tab";
import TabContainer from "../../../components/Tab/TabContainer";
import i18n from "../../../i18n";
import { maybe } from "../../../misc";
import { ListProps, UserError } from "../../../types";
import {
  VoucherDiscountValueType,
  VoucherType
} from "../../../types/globalTypes";
import { VoucherDetails_voucher } from "../../types/VoucherDetails";
import DiscountCategories from "../DiscountCategories";
import DiscountCollections from "../DiscountCollections";
import DiscountSkills from "../DiscountSkills";
import VoucherCountries from "../VoucherCountries";
import VoucherInfo from "../VoucherInfo";
import VoucherOptions from "../VoucherOptions";
import VoucherSummary from "../VoucherSummary";

export enum VoucherDetailsPageTab {
  categories = "categories",
  collections = "collections",
  skills = "skills"
}
export function voucherDetailsPageTab(tab: string): VoucherDetailsPageTab {
  return tab === VoucherDetailsPageTab.skills
    ? VoucherDetailsPageTab.skills
    : tab === VoucherDetailsPageTab.collections
    ? VoucherDetailsPageTab.collections
    : VoucherDetailsPageTab.categories;
}

export interface FormData {
  applyOncePerTask: boolean;
  code: string;
  discountType: VoucherDiscountValueType;
  endDate: string;
  minAmountSpent: number;
  name: string;
  startDate: string;
  type: VoucherType;
  usageLimit: number;
  value: number;
}

export interface VoucherDetailsPageProps
  extends Pick<ListProps, Exclude<keyof ListProps, "onRowClick">> {
  activeTab: VoucherDetailsPageTab;
  defaultCurrency: string;
  errors: UserError[];
  saveButtonBarState: ConfirmButtonTransitionState;
  voucher: VoucherDetails_voucher;
  onBack: () => void;
  onCategoryAssign: () => void;
  onCategoryUnassign: (id: string) => void;
  onCategoryClick: (id: string) => () => void;
  onCollectionAssign: () => void;
  onCollectionUnassign: (id: string) => void;
  onCollectionClick: (id: string) => () => void;
  onCountryAssign: () => void;
  onCountryUnassign: (code: string) => void;
  onSkillAssign: () => void;
  onSkillUnassign: (id: string) => void;
  onSkillClick: (id: string) => () => void;
  onRemove: () => void;
  onSubmit: (data: FormData) => void;
  onTabClick: (index: VoucherDetailsPageTab) => void;
}

const CategoriesTab = Tab(VoucherDetailsPageTab.categories);
const CollectionsTab = Tab(VoucherDetailsPageTab.collections);
const SkillsTab = Tab(VoucherDetailsPageTab.skills);

const VoucherDetailsPage: React.StatelessComponent<VoucherDetailsPageProps> = ({
  activeTab,
  defaultCurrency,
  disabled,
  errors,
  pageInfo,
  saveButtonBarState,
  voucher,
  onBack,
  onCategoryAssign,
  onCategoryClick,
  onCategoryUnassign,
  onCountryAssign,
  onCountryUnassign,
  onCollectionAssign,
  onCollectionClick,
  onCollectionUnassign,
  onNextPage,
  onPreviousPage,
  onSkillAssign,
  onSkillClick,
  onSkillUnassign,
  onTabClick,
  onRemove,
  onSubmit
}) => {
  const initialForm: FormData = {
    applyOncePerTask: maybe(() => voucher.applyOncePerTask, false),
    code: maybe(() => voucher.code, ""),
    discountType: maybe(
      () => voucher.discountValueType,
      VoucherDiscountValueType.FIXED
    ),
    endDate: maybe(() => voucher.endDate, ""),
    minAmountSpent: maybe(() => voucher.minAmountSpent.amount, 0),
    name: maybe(() => voucher.name, ""),
    startDate: maybe(() => voucher.startDate, ""),
    type: maybe(() => voucher.type, VoucherType.VALUE),
    usageLimit: maybe(() => voucher.usageLimit || 0, 0),
    value: maybe(() => voucher.discountValue, 0)
  };

  return (
    <Form errors={errors} initial={initialForm} onSubmit={onSubmit}>
      {({ change, data, errors: formErrors, hasChanged, submit }) => (
        <Container width="md">
          <PageHeader title={maybe(() => voucher.name)} onBack={onBack} />
          <Grid>
            <div>
              <VoucherInfo
                data={data}
                disabled={disabled}
                errors={formErrors}
                variant="update"
                onChange={change}
              />
              <CardSpacer />
              <VoucherOptions
                data={data}
                disabled={disabled}
                defaultCurrency={defaultCurrency}
                errors={formErrors}
                onChange={change}
              />
              <CardSpacer />
              {data.type === VoucherType.CATEGORY ||
              data.type === VoucherType.COLLECTION ||
              data.type === VoucherType.SKILL ? (
                <>
                  <TabContainer>
                    <CategoriesTab
                      isActive={activeTab === VoucherDetailsPageTab.categories}
                      changeTab={onTabClick}
                    >
                      {i18n.t("Categories ({{ number }})", {
                        number: maybe(
                          () => voucher.categories.totalCount.toString(),
                          "…"
                        )
                      })}
                    </CategoriesTab>
                    <CollectionsTab
                      isActive={activeTab === VoucherDetailsPageTab.collections}
                      changeTab={onTabClick}
                    >
                      {i18n.t("Collections ({{ number }})", {
                        number: maybe(
                          () => voucher.collections.totalCount.toString(),
                          "…"
                        )
                      })}
                    </CollectionsTab>
                    <SkillsTab
                      isActive={activeTab === VoucherDetailsPageTab.skills}
                      changeTab={onTabClick}
                    >
                      {i18n.t("Skills ({{ number }})", {
                        number: maybe(
                          () => voucher.skills.totalCount.toString(),
                          "…"
                        )
                      })}
                    </SkillsTab>
                  </TabContainer>
                  <CardSpacer />
                  {activeTab === VoucherDetailsPageTab.categories ? (
                    <DiscountCategories
                      disabled={disabled}
                      onCategoryAssign={onCategoryAssign}
                      onCategoryUnassign={onCategoryUnassign}
                      onNextPage={onNextPage}
                      onPreviousPage={onPreviousPage}
                      onRowClick={onCategoryClick}
                      pageInfo={pageInfo}
                      discount={voucher}
                    />
                  ) : activeTab === VoucherDetailsPageTab.collections ? (
                    <DiscountCollections
                      disabled={disabled}
                      onCollectionAssign={onCollectionAssign}
                      onCollectionUnassign={onCollectionUnassign}
                      onNextPage={onNextPage}
                      onPreviousPage={onPreviousPage}
                      onRowClick={onCollectionClick}
                      pageInfo={pageInfo}
                      discount={voucher}
                    />
                  ) : (
                    <DiscountSkills
                      disabled={disabled}
                      onNextPage={onNextPage}
                      onPreviousPage={onPreviousPage}
                      onSkillAssign={onSkillAssign}
                      onSkillUnassign={onSkillUnassign}
                      onRowClick={onSkillClick}
                      pageInfo={pageInfo}
                      discount={voucher}
                    />
                  )}
                </>
              ) : data.type === VoucherType.DELIVERY ? (
                <VoucherCountries
                  disabled={disabled}
                  onCountryAssign={onCountryAssign}
                  onCountryUnassign={onCountryUnassign}
                  voucher={voucher}
                />
              ) : null}
            </div>
            <div>
              <VoucherSummary
                defaultCurrency={defaultCurrency}
                voucher={voucher}
              />
            </div>
          </Grid>
          <SaveButtonBar
            disabled={disabled || !hasChanged}
            onCancel={onBack}
            onDelete={onRemove}
            onSave={submit}
            state={saveButtonBarState}
          />
        </Container>
      )}
    </Form>
  );
};
VoucherDetailsPage.displayName = "VoucherDetailsPage";

export default VoucherDetailsPage;
