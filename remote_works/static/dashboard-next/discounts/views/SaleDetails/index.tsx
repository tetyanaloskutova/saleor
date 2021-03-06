import DialogContentText from "@material-ui/core/DialogContentText";
import { stringify as stringifyQs } from "qs";
import * as React from "react";
import { Route } from "react-router-dom";

import { categoryUrl } from "../../../categories/urls";
import { collectionUrl } from "../../../collections/urls";
import ActionDialog from "../../../components/ActionDialog";
import AssignCategoriesDialog from "../../../components/AssignCategoryDialog";
import AssignCollectionDialog from "../../../components/AssignCollectionDialog";
import AssignSkillDialog from "../../../components/AssignSkillDialog";
import Messages from "../../../components/messages";
import Navigator from "../../../components/Navigator";
import {
  createPaginationState,
  Paginator
} from "../../../components/Paginator";
import Shop from "../../../components/Shop";
import { WindowTitle } from "../../../components/WindowTitle";
import { SearchCategoriesProvider } from "../../../containers/SearchCategories";
import { SearchCollectionsProvider } from "../../../containers/SearchCollections";
import { SearchSkillsProvider } from "../../../containers/SearchSkills";
import i18n from "../../../i18n";
import { decimal, getMutationState, maybe } from "../../../misc";
import { skillUrl } from "../../../skills/urls";
import { DiscountValueTypeEnum, SaleType } from "../../../types/globalTypes";
import SaleDetailsPage, {
  SaleDetailsPageTab
} from "../../components/SaleDetailsPage";
import {
  TypedSaleCataloguesAdd,
  TypedSaleCataloguesRemove,
  TypedSaleDelete,
  TypedSaleUpdate
} from "../../mutations";
import { TypedSaleDetails } from "../../queries";
import { SaleCataloguesAdd } from "../../types/SaleCataloguesAdd";
import { SaleDelete } from "../../types/SaleDelete";
import { SaleUpdate } from "../../types/SaleUpdate";
import { saleListUrl, saleUrl } from "../../urls";
import {
  saleAssignCategoriesPath,
  saleAssignCategoriesUrl,
  saleAssignCollectionsPath,
  saleAssignCollectionsUrl,
  saleAssignSkillsPath,
  saleAssignSkillsUrl,
  saleDeletePath,
  saleDeleteUrl
} from "./urls";

const PAGINATE_BY = 20;

export type SaleDetailsQueryParams = Partial<{
  after: string;
  before: string;
  tab: SaleDetailsPageTab;
}>;

interface SaleDetailsProps {
  id: string;
  params: SaleDetailsQueryParams;
}

function discountValueTypeEnum(type: SaleType): DiscountValueTypeEnum {
  return type.toString() === DiscountValueTypeEnum.FIXED
    ? DiscountValueTypeEnum.FIXED
    : DiscountValueTypeEnum.PERCENTAGE;
}

export const SaleDetails: React.StatelessComponent<SaleDetailsProps> = ({
  id,
  params
}) => (
  <>
    <WindowTitle title={i18n.t("Sales")} />
    <Shop>
      {shop => (
        <Messages>
          {pushMessage => (
            <Navigator>
              {navigate => {
                const paginationState = createPaginationState(
                  PAGINATE_BY,
                  params
                );
                const changeTab = (tab: SaleDetailsPageTab) =>
                  navigate(
                    "?" +
                      stringifyQs({
                        tab
                      })
                  );

                const handleCatalogueAdd = (data: SaleCataloguesAdd) => {
                  if (data.saleCataloguesAdd.errors.length === 0) {
                    navigate(saleUrl(id), true, true);
                  }
                };

                const handleSaleDelete = (data: SaleDelete) => {
                  if (data.saleDelete.errors.length === 0) {
                    pushMessage({
                      text: i18n.t("Removed sale", {
                        context: "notification"
                      })
                    });
                    navigate(saleListUrl, true);
                  }
                };

                const handleSaleUpdate = (data: SaleUpdate) => {
                  if (data.saleUpdate.errors.length === 0) {
                    pushMessage({
                      text: i18n.t("Updated sale", {
                        context: "notification"
                      })
                    });
                  }
                };

                return (
                  <TypedSaleCataloguesRemove>
                    {(saleCataloguesRemove, saleCataloguesRemoveOpts) => (
                      <TypedSaleCataloguesAdd onCompleted={handleCatalogueAdd}>
                        {(saleCataloguesAdd, saleCataloguesAddOpts) => (
                          <TypedSaleUpdate onCompleted={handleSaleUpdate}>
                            {(saleUpdate, saleUpdateOpts) => (
                              <TypedSaleDelete onCompleted={handleSaleDelete}>
                                {(saleDelete, saleDeleteOpts) => (
                                  <TypedSaleDetails
                                    displayLoader
                                    variables={{ id, ...paginationState }}
                                  >
                                    {({ data, loading }) => {
                                      const pageInfo =
                                        params.tab ===
                                        SaleDetailsPageTab.categories
                                          ? maybe(
                                              () =>
                                                data.sale.categories.pageInfo
                                            )
                                          : params.tab ===
                                            SaleDetailsPageTab.collections
                                          ? maybe(
                                              () =>
                                                data.sale.collections.pageInfo
                                            )
                                          : maybe(
                                              () => data.sale.skills.pageInfo
                                            );
                                      const formTransitionState = getMutationState(
                                        saleUpdateOpts.called,
                                        saleUpdateOpts.loading,
                                        maybe(
                                          () =>
                                            saleUpdateOpts.data.saleUpdate
                                              .errors
                                        )
                                      );
                                      const assignTransitionState = getMutationState(
                                        saleCataloguesAddOpts.called,
                                        saleCataloguesAddOpts.loading,
                                        maybe(
                                          () =>
                                            saleCataloguesAddOpts.data
                                              .saleCataloguesAdd.errors
                                        )
                                      );
                                      const removeTransitionState = getMutationState(
                                        saleDeleteOpts.called,
                                        saleDeleteOpts.loading,
                                        maybe(
                                          () =>
                                            saleDeleteOpts.data.saleDelete
                                              .errors
                                        )
                                      );

                                      return (
                                        <Paginator
                                          pageInfo={pageInfo}
                                          paginationState={paginationState}
                                          queryString={params}
                                        >
                                          {({
                                            loadNextPage,
                                            loadPreviousPage,
                                            pageInfo
                                          }) => (
                                            <>
                                              <SaleDetailsPage
                                                defaultCurrency={maybe(
                                                  () => shop.defaultCurrency
                                                )}
                                                sale={maybe(() => data.sale)}
                                                disabled={
                                                  loading ||
                                                  saleCataloguesRemoveOpts.loading
                                                }
                                                errors={maybe(
                                                  () =>
                                                    saleUpdateOpts.data
                                                      .saleUpdate.errors
                                                )}
                                                pageInfo={pageInfo}
                                                onNextPage={loadNextPage}
                                                onPreviousPage={
                                                  loadPreviousPage
                                                }
                                                onCategoryAssign={() =>
                                                  navigate(
                                                    saleAssignCategoriesUrl(id),
                                                    false,
                                                    true
                                                  )
                                                }
                                                onCategoryClick={id => () =>
                                                  navigate(categoryUrl(id))}
                                                onCollectionAssign={() =>
                                                  navigate(
                                                    saleAssignCollectionsUrl(
                                                      id
                                                    ),
                                                    false,
                                                    true
                                                  )
                                                }
                                                onCollectionUnassign={collectionId =>
                                                  saleCataloguesRemove({
                                                    variables: {
                                                      ...paginationState,
                                                      id,
                                                      input: {
                                                        collections: [
                                                          collectionId
                                                        ]
                                                      }
                                                    }
                                                  })
                                                }
                                                onCategoryUnassign={categoryId =>
                                                  saleCataloguesRemove({
                                                    variables: {
                                                      ...paginationState,
                                                      id,
                                                      input: {
                                                        categories: [categoryId]
                                                      }
                                                    }
                                                  })
                                                }
                                                onCollectionClick={id => () =>
                                                  navigate(collectionUrl(id))}
                                                onSkillAssign={() =>
                                                  navigate(
                                                    saleAssignSkillsUrl(id),
                                                    false,
                                                    true
                                                  )
                                                }
                                                onSkillUnassign={skillId =>
                                                  saleCataloguesRemove({
                                                    variables: {
                                                      ...paginationState,
                                                      id,
                                                      input: {
                                                        skills: [skillId]
                                                      }
                                                    }
                                                  })
                                                }
                                                onSkillClick={id => () =>
                                                  navigate(skillUrl(id))}
                                                activeTab={params.tab}
                                                onBack={() =>
                                                  navigate(saleListUrl)
                                                }
                                                onTabClick={changeTab}
                                                onSubmit={formData =>
                                                  saleUpdate({
                                                    variables: {
                                                      id,
                                                      input: {
                                                        endDate:
                                                          formData.endDate ===
                                                          ""
                                                            ? null
                                                            : formData.endDate,
                                                        name: formData.name,
                                                        startDate:
                                                          formData.startDate ===
                                                          ""
                                                            ? null
                                                            : formData.startDate,
                                                        type: discountValueTypeEnum(
                                                          formData.type
                                                        ),
                                                        value: decimal(
                                                          formData.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                }
                                                onRemove={() =>
                                                  navigate(saleDeleteUrl(id))
                                                }
                                                saveButtonBarState={
                                                  formTransitionState
                                                }
                                              />
                                              <Route
                                                path={saleAssignSkillsPath(
                                                  ":id"
                                                )}
                                                render={({ match }) => (
                                                  <SearchSkillsProvider>
                                                    {(
                                                      searchSkills,
                                                      searchSkillsOpts
                                                    ) => (
                                                      <AssignSkillDialog
                                                        confirmButtonState={
                                                          assignTransitionState
                                                        }
                                                        open={!!match}
                                                        onFetch={searchSkills}
                                                        loading={
                                                          searchSkillsOpts.loading
                                                        }
                                                        onClose={() =>
                                                          navigate(
                                                            saleUrl(id),
                                                            true,
                                                            true
                                                          )
                                                        }
                                                        onSubmit={formData =>
                                                          saleCataloguesAdd({
                                                            variables: {
                                                              ...paginationState,
                                                              id,
                                                              input: {
                                                                skills: formData.skills.map(
                                                                  skill =>
                                                                    skill.id
                                                                )
                                                              }
                                                            }
                                                          })
                                                        }
                                                        skills={maybe(() =>
                                                          searchSkillsOpts.data.skills.edges
                                                            .map(
                                                              edge => edge.node
                                                            )
                                                            .filter(
                                                              suggestedSkill =>
                                                                suggestedSkill.id
                                                            )
                                                        )}
                                                      />
                                                    )}
                                                  </SearchSkillsProvider>
                                                )}
                                              />
                                              <Route
                                                path={saleAssignCategoriesPath(
                                                  ":id"
                                                )}
                                                render={({ match }) => (
                                                  <SearchCategoriesProvider>
                                                    {(
                                                      searchCategories,
                                                      searchCategoriesOpts
                                                    ) => (
                                                      <AssignCategoriesDialog
                                                        categories={maybe(() =>
                                                          searchCategoriesOpts.data.categories.edges
                                                            .map(
                                                              edge => edge.node
                                                            )
                                                            .filter(
                                                              suggestedCategory =>
                                                                suggestedCategory.id
                                                            )
                                                        )}
                                                        confirmButtonState={
                                                          assignTransitionState
                                                        }
                                                        open={!!match}
                                                        onFetch={
                                                          searchCategories
                                                        }
                                                        loading={
                                                          searchCategoriesOpts.loading
                                                        }
                                                        onClose={() =>
                                                          navigate(
                                                            saleUrl(id),
                                                            true,
                                                            true
                                                          )
                                                        }
                                                        onSubmit={formData =>
                                                          saleCataloguesAdd({
                                                            variables: {
                                                              ...paginationState,
                                                              id,
                                                              input: {
                                                                categories: formData.categories.map(
                                                                  skill =>
                                                                    skill.id
                                                                )
                                                              }
                                                            }
                                                          })
                                                        }
                                                      />
                                                    )}
                                                  </SearchCategoriesProvider>
                                                )}
                                              />
                                              <Route
                                                path={saleAssignCollectionsPath(
                                                  ":id"
                                                )}
                                                render={({ match }) => (
                                                  <SearchCollectionsProvider>
                                                    {(
                                                      searchCollections,
                                                      searchCollectionsOpts
                                                    ) => (
                                                      <AssignCollectionDialog
                                                        collections={maybe(() =>
                                                          searchCollectionsOpts.data.collections.edges
                                                            .map(
                                                              edge => edge.node
                                                            )
                                                            .filter(
                                                              suggestedCategory =>
                                                                suggestedCategory.id
                                                            )
                                                        )}
                                                        confirmButtonState={
                                                          assignTransitionState
                                                        }
                                                        open={!!match}
                                                        onFetch={
                                                          searchCollections
                                                        }
                                                        loading={
                                                          searchCollectionsOpts.loading
                                                        }
                                                        onClose={() =>
                                                          navigate(
                                                            saleUrl(id),
                                                            true,
                                                            true
                                                          )
                                                        }
                                                        onSubmit={formData =>
                                                          saleCataloguesAdd({
                                                            variables: {
                                                              ...paginationState,
                                                              id,
                                                              input: {
                                                                collections: formData.collections.map(
                                                                  skill =>
                                                                    skill.id
                                                                )
                                                              }
                                                            }
                                                          })
                                                        }
                                                      />
                                                    )}
                                                  </SearchCollectionsProvider>
                                                )}
                                              />
                                              <Route
                                                path={saleDeletePath(":id")}
                                                render={({ match }) => (
                                                  <ActionDialog
                                                    open={!!match}
                                                    title={i18n.t(
                                                      "Remove Sale"
                                                    )}
                                                    confirmButtonState={
                                                      removeTransitionState
                                                    }
                                                    onClose={() =>
                                                      navigate(saleUrl(id))
                                                    }
                                                    variant="delete"
                                                    onConfirm={() =>
                                                      saleDelete({
                                                        variables: { id }
                                                      })
                                                    }
                                                  >
                                                    <DialogContentText
                                                      dangerouslySetInnerHTML={{
                                                        __html: i18n.t(
                                                          "Are you sure you want to remove <strong>{{ saleName }}</strong>?",
                                                          {
                                                            saleName: maybe(
                                                              () =>
                                                                data.sale.name
                                                            )
                                                          }
                                                        )
                                                      }}
                                                    />
                                                  </ActionDialog>
                                                )}
                                              />
                                            </>
                                          )}
                                        </Paginator>
                                      );
                                    }}
                                  </TypedSaleDetails>
                                )}
                              </TypedSaleDelete>
                            )}
                          </TypedSaleUpdate>
                        )}
                      </TypedSaleCataloguesAdd>
                    )}
                  </TypedSaleCataloguesRemove>
                );
              }}
            </Navigator>
          )}
        </Messages>
      )}
    </Shop>
  </>
);
export default SaleDetails;
