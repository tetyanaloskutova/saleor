import DialogContentText from "@material-ui/core/DialogContentText";
import * as React from "react";
import { Route } from "react-router-dom";

import ActionDialog from "../../components/ActionDialog";
import AssignSkillDialog from "../../components/AssignSkillDialog";
import Messages from "../../components/messages";
import Navigator from "../../components/Navigator";
import { createPaginationState, Paginator } from "../../components/Paginator";
import { WindowTitle } from "../../components/WindowTitle";
import { SearchSkillsProvider } from "../../containers/SearchSkills";
import i18n from "../../i18n";
import { getMutationState, maybe } from "../../misc";
import { skillUrl } from "../../skills/urls";
import { CollectionInput } from "../../types/globalTypes";
import CollectionDetailsPage, {
  CollectionDetailsPageFormData
} from "../components/CollectionDetailsPage/CollectionDetailsPage";
import CollectionOperations from "../containers/CollectionOperations";
import { TypedCollectionDetailsQuery } from "../queries";
import { CollectionAssignSkill } from "../types/CollectionAssignSkill";
import { CollectionUpdate } from "../types/CollectionUpdate";
import { RemoveCollection } from "../types/RemoveCollection";
import { UnassignCollectionSkill } from "../types/UnassignCollectionSkill";
import {
  collectionAddSkillPath,
  collectionAddSkillUrl,
  collectionImageRemovePath,
  collectionImageRemoveUrl,
  collectionListUrl,
  collectionRemovePath,
  collectionRemoveUrl,
  collectionUrl
} from "../urls";

export type CollectionDetailsQueryParams = Partial<{
  after: string;
  before: string;
}>;

interface CollectionDetailsProps {
  id: string;
  params: CollectionDetailsQueryParams;
}

const PAGINATE_BY = 20;

export const CollectionDetails: React.StatelessComponent<
  CollectionDetailsProps
> = ({ id, params }) => (
  <Messages>
    {pushMessage => (
      <Navigator>
        {navigate => {
          const paginationState = createPaginationState(PAGINATE_BY, params);

          return (
            <TypedCollectionDetailsQuery
              displayLoader
              variables={{ id, ...paginationState }}
              require={["collection"]}
            >
              {({ data, loading }) => {
                const handleCollectionUpdate = (data: CollectionUpdate) => {
                  if (data.collectionUpdate.errors.length === 0) {
                    pushMessage({
                      text: i18n.t("Updated collection", {
                        context: "notification"
                      })
                    });
                    navigate(collectionUrl(id));
                  } else {
                    const backgroundImageError = data.collectionUpdate.errors.find(
                      error =>
                        error.field ===
                        ("backgroundImage" as keyof CollectionInput)
                    );
                    if (backgroundImageError) {
                      pushMessage({
                        text: backgroundImageError.message
                      });
                    }
                  }
                };

                const handleSkillAssign = (data: CollectionAssignSkill) => {
                  if (data.collectionAddSkills.errors.length === 0) {
                    pushMessage({
                      text: i18n.t("Added skill to collection", {
                        context: "notification"
                      })
                    });
                    navigate(collectionUrl(id), true);
                  }
                };

                const handleSkillUnassign = (
                  data: UnassignCollectionSkill
                ) => {
                  if (data.collectionRemoveSkills.errors.length === 0) {
                    pushMessage({
                      text: i18n.t("Removed skill from collection", {
                        context: "notification"
                      })
                    });
                  }
                };

                const handleCollectionRemove = (data: RemoveCollection) => {
                  if (data.collectionDelete.errors.length === 0) {
                    pushMessage({
                      text: i18n.t("Removed collection", {
                        context: "notification"
                      })
                    });
                    navigate(collectionListUrl);
                  }
                };
                return (
                  <CollectionOperations
                    onUpdate={handleCollectionUpdate}
                    onSkillAssign={handleSkillAssign}
                    onSkillUnassign={handleSkillUnassign}
                    onRemove={handleCollectionRemove}
                  >
                    {({
                      updateCollection,
                      updateCollectionWithHomepage,
                      assignSkill,
                      unassignSkill,
                      removeCollection
                    }) => {
                      const handleSubmit = (
                        formData: CollectionDetailsPageFormData
                      ) => {
                        const input = {
                          backgroundImageAlt: formData.backgroundImageAlt,
                          descriptionJson: JSON.stringify(formData.description),
                          isPublished: formData.isPublished,
                          name: formData.name,
                          seo: {
                            description: formData.seoDescription,
                            title: formData.seoTitle
                          }
                        };
                        const isFeatured = data.shop.homepageCollection
                          ? data.shop.homepageCollection.id ===
                            data.collection.id
                          : false;

                        if (formData.isFeatured !== isFeatured) {
                          updateCollectionWithHomepage.mutate({
                            homepageId: formData.isFeatured ? id : null,
                            id,
                            input
                          });
                        } else {
                          updateCollection.mutate({
                            id,
                            input
                          });
                        }
                      };

                      const formTransitionState = getMutationState(
                        updateCollection.opts.called ||
                          updateCollectionWithHomepage.opts.called,
                        updateCollection.opts.loading ||
                          updateCollectionWithHomepage.opts.loading,
                        maybe(
                          () =>
                            updateCollection.opts.data.collectionUpdate.errors
                        ),
                        maybe(
                          () =>
                            updateCollectionWithHomepage.opts.data
                              .collectionUpdate.errors
                        ),
                        maybe(
                          () =>
                            updateCollectionWithHomepage.opts.data
                              .homepageCollectionUpdate.errors
                        )
                      );
                      const assignTransitionState = getMutationState(
                        assignSkill.opts.called,
                        assignSkill.opts.loading,
                        maybe(
                          () =>
                            assignSkill.opts.data.collectionAddSkills.errors
                        )
                      );
                      const removeTransitionState = getMutationState(
                        removeCollection.opts.called,
                        removeCollection.opts.loading,
                        maybe(
                          () =>
                            removeCollection.opts.data.collectionDelete.errors
                        )
                      );
                      const imageRemoveTransitionState = getMutationState(
                        updateCollection.opts.called,
                        updateCollection.opts.loading,
                        maybe(
                          () =>
                            updateCollection.opts.data.collectionUpdate.errors
                        )
                      );

                      return (
                        <>
                          <WindowTitle
                            title={maybe(() => data.collection.name)}
                          />
                          <Paginator
                            pageInfo={maybe(
                              () => data.collection.skills.pageInfo
                            )}
                            paginationState={paginationState}
                            queryString={params}
                          >
                            {({ loadNextPage, loadPreviousPage, pageInfo }) => (
                              <CollectionDetailsPage
                                onAdd={() =>
                                  navigate(
                                    collectionAddSkillUrl(id),
                                    false,
                                    true
                                  )
                                }
                                onBack={() => navigate(collectionListUrl)}
                                disabled={loading}
                                collection={data.collection}
                                isFeatured={maybe(
                                  () =>
                                    data.shop.homepageCollection.id ===
                                    data.collection.id,
                                  false
                                )}
                                onCollectionRemove={() =>
                                  navigate(collectionRemoveUrl(id), false, true)
                                }
                                onImageDelete={() =>
                                  navigate(
                                    collectionImageRemoveUrl(id),
                                    false,
                                    true
                                  )
                                }
                                onImageUpload={file =>
                                  updateCollection.mutate({
                                    id,
                                    input: {
                                      backgroundImage: file
                                    }
                                  })
                                }
                                onSubmit={handleSubmit}
                                onNextPage={loadNextPage}
                                onPreviousPage={loadPreviousPage}
                                pageInfo={pageInfo}
                                onSkillUnassign={(skillId, event) => {
                                  event.stopPropagation();
                                  unassignSkill.mutate({
                                    collectionId: id,
                                    skillId,
                                    ...paginationState
                                  });
                                }}
                                onRowClick={id => () =>
                                  navigate(skillUrl(id))}
                                saveButtonBarState={formTransitionState}
                              />
                            )}
                          </Paginator>
                          <Route
                            path={collectionAddSkillPath(":id")}
                            render={({ match }) => (
                              <SearchSkillsProvider>
                                {(searchSkills, searchSkillsOpts) => (
                                  <AssignSkillDialog
                                    confirmButtonState={assignTransitionState}
                                    open={!!match}
                                    onFetch={searchSkills}
                                    loading={searchSkillsOpts.loading}
                                    onClose={() =>
                                      navigate(collectionUrl(id), true, true)
                                    }
                                    onSubmit={formData =>
                                      assignSkill.mutate({
                                        ...paginationState,
                                        collectionId: id,
                                        skillIds: formData.skills.map(
                                          skill => skill.id
                                        )
                                      })
                                    }
                                    skills={maybe(() =>
                                      searchSkillsOpts.data.skills.edges
                                        .map(edge => edge.node)
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
                            path={collectionRemovePath(":id")}
                            render={({ match }) => (
                              <ActionDialog
                                confirmButtonState={removeTransitionState}
                                onClose={() =>
                                  navigate(collectionUrl(id), true, true)
                                }
                                onConfirm={() =>
                                  removeCollection.mutate({ id })
                                }
                                open={!!match}
                                title={i18n.t("Remove collection", {
                                  context: "modal title"
                                })}
                                variant="delete"
                              >
                                <DialogContentText
                                  dangerouslySetInnerHTML={{
                                    __html: i18n.t(
                                      "Are you sure you want to remove <strong>{{ collectionName }}</strong>?",
                                      {
                                        collectionName: maybe(
                                          () => data.collection.name
                                        ),
                                        context: "modal"
                                      }
                                    )
                                  }}
                                />
                              </ActionDialog>
                            )}
                          />
                          <Route
                            path={collectionImageRemovePath(":id")}
                            render={({ match }) => (
                              <ActionDialog
                                confirmButtonState={imageRemoveTransitionState}
                                onClose={() =>
                                  navigate(collectionUrl(id), true, true)
                                }
                                onConfirm={() =>
                                  updateCollection.mutate({
                                    id,
                                    input: {
                                      backgroundImage: null
                                    }
                                  })
                                }
                                open={!!match}
                                title={i18n.t("Remove collection", {
                                  context: "modal title"
                                })}
                                variant="delete"
                              >
                                <DialogContentText>
                                  {i18n.t(
                                    "Are you sure you want to remove collection's image?"
                                  )}
                                </DialogContentText>
                              </ActionDialog>
                            )}
                          />
                        </>
                      );
                    }}
                  </CollectionOperations>
                );
              }}
            </TypedCollectionDetailsQuery>
          );
        }}
      </Navigator>
    )}
  </Messages>
);
export default CollectionDetails;
