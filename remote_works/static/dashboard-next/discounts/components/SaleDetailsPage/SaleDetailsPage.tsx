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
import { SaleType } from "../../../types/globalTypes";
import { SaleDetails_sale } from "../../types/SaleDetails";
import DiscountCategories from "../DiscountCategories";
import DiscountCollections from "../DiscountCollections";
import DiscountSkills from "../DiscountSkills";
import SaleInfo from "../SaleInfo";
import SalePricing from "../SalePricing";
import SaleSummary from "../SaleSummary";

export interface FormData {
  name: string;
  startDate: string;
  endDate: string;
  value: string;
  type: SaleType;
}

export enum SaleDetailsPageTab {
  categories = "categories",
  collections = "collections",
  skills = "skills"
}
export function saleDetailsPageTab(tab: string): SaleDetailsPageTab {
  return tab === SaleDetailsPageTab.skills
    ? SaleDetailsPageTab.skills
    : tab === SaleDetailsPageTab.collections
    ? SaleDetailsPageTab.collections
    : SaleDetailsPageTab.categories;
}

export interface SaleDetailsPageProps
  extends Pick<ListProps, Exclude<keyof ListProps, "onRowClick">> {
  activeTab: SaleDetailsPageTab;
  defaultCurrency: string;
  errors: UserError[];
  sale: SaleDetails_sale;
  saveButtonBarState: ConfirmButtonTransitionState;
  onBack: () => void;
  onCategoryAssign: () => void;
  onCategoryUnassign: (id: string) => void;
  onCategoryClick: (id: string) => () => void;
  onCollectionAssign: () => void;
  onCollectionUnassign: (id: string) => void;
  onCollectionClick: (id: string) => () => void;
  onSkillAssign: () => void;
  onSkillUnassign: (id: string) => void;
  onSkillClick: (id: string) => () => void;
  onRemove: () => void;
  onSubmit: (data: FormData) => void;
  onTabClick: (index: SaleDetailsPageTab) => void;
}

const CategoriesTab = Tab(SaleDetailsPageTab.categories);
const CollectionsTab = Tab(SaleDetailsPageTab.collections);
const SkillsTab = Tab(SaleDetailsPageTab.skills);

const SaleDetailsPage: React.StatelessComponent<SaleDetailsPageProps> = ({
  activeTab,
  defaultCurrency,
  disabled,
  errors,
  onRemove,
  onSubmit,
  onTabClick,
  pageInfo,
  sale,
  saveButtonBarState,
  onBack,
  onCategoryAssign,
  onCategoryUnassign,
  onCategoryClick,
  onCollectionAssign,
  onCollectionUnassign,
  onCollectionClick,
  onNextPage,
  onPreviousPage,
  onSkillAssign,
  onSkillUnassign,
  onSkillClick
}) => {
  const initialForm: FormData = {
    endDate: maybe(() => (sale.endDate ? sale.endDate : ""), ""),
    name: maybe(() => sale.name, ""),
    startDate: maybe(() => sale.startDate, ""),
    type: maybe(() => sale.type, SaleType.FIXED),
    value: maybe(() => sale.value.toString(), "")
  };
  return (
    <Form errors={errors} initial={initialForm} onSubmit={onSubmit}>
      {({ change, data, errors: formErrors, hasChanged, submit }) => (
        <Container width="md">
          <PageHeader title={maybe(() => sale.name)} onBack={onBack} />
          <Grid>
            <div>
              <SaleInfo
                data={data}
                disabled={disabled}
                errors={formErrors}
                onChange={change}
              />
              <CardSpacer />
              <SalePricing
                data={data}
                defaultCurrency={defaultCurrency}
                disabled={disabled}
                errors={formErrors}
                onChange={change}
              />
              <CardSpacer />
              <TabContainer>
                <CategoriesTab
                  isActive={activeTab === SaleDetailsPageTab.categories}
                  changeTab={onTabClick}
                >
                  {i18n.t("Categories ({{ number }})", {
                    number: maybe(
                      () => sale.categories.totalCount.toString(),
                      "…"
                    )
                  })}
                </CategoriesTab>
                <CollectionsTab
                  isActive={activeTab === SaleDetailsPageTab.collections}
                  changeTab={onTabClick}
                >
                  {i18n.t("Collections ({{ number }})", {
                    number: maybe(
                      () => sale.collections.totalCount.toString(),
                      "…"
                    )
                  })}
                </CollectionsTab>
                <SkillsTab
                  isActive={activeTab === SaleDetailsPageTab.skills}
                  changeTab={onTabClick}
                >
                  {i18n.t("Skills ({{ number }})", {
                    number: maybe(
                      () => sale.skills.totalCount.toString(),
                      "…"
                    )
                  })}
                </SkillsTab>
              </TabContainer>
              <CardSpacer />
              {activeTab === SaleDetailsPageTab.categories ? (
                <DiscountCategories
                  disabled={disabled}
                  onCategoryAssign={onCategoryAssign}
                  onCategoryUnassign={onCategoryUnassign}
                  onNextPage={onNextPage}
                  onPreviousPage={onPreviousPage}
                  onRowClick={onCategoryClick}
                  pageInfo={pageInfo}
                  discount={sale}
                />
              ) : activeTab === SaleDetailsPageTab.collections ? (
                <DiscountCollections
                  disabled={disabled}
                  onCollectionAssign={onCollectionAssign}
                  onCollectionUnassign={onCollectionUnassign}
                  onNextPage={onNextPage}
                  onPreviousPage={onPreviousPage}
                  onRowClick={onCollectionClick}
                  pageInfo={pageInfo}
                  discount={sale}
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
                  discount={sale}
                />
              )}
            </div>
            <div>
              <SaleSummary defaultCurrency={defaultCurrency} sale={sale} />
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
SaleDetailsPage.displayName = "SaleDetailsPage";
export default SaleDetailsPage;
