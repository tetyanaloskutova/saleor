/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CollectionList
// ====================================================

export interface CollectionList_collections_edges_node_skills {
  __typename: "SkillCountableConnection";
  totalCount: number | null;
}

export interface CollectionList_collections_edges_node {
  __typename: "Collection";
  id: string;
  isPublished: boolean;
  name: string;
  skills: CollectionList_collections_edges_node_skills | null;
}

export interface CollectionList_collections_edges {
  __typename: "CollectionCountableEdge";
  node: CollectionList_collections_edges_node;
}

export interface CollectionList_collections_pageInfo {
  __typename: "PageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface CollectionList_collections {
  __typename: "CollectionCountableConnection";
  edges: CollectionList_collections_edges[];
  pageInfo: CollectionList_collections_pageInfo;
}

export interface CollectionList {
  collections: CollectionList_collections | null;
}

export interface CollectionListVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
