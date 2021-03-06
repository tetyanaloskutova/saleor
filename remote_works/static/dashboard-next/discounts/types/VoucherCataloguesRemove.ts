/* tslint:disable */
// This file was automatically generated and should not be edited.

import { CatalogueInput, VoucherDiscountValueType, VoucherType } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: VoucherCataloguesRemove
// ====================================================

export interface VoucherCataloguesRemove_voucherCataloguesRemove_errors {
  __typename: "Error";
  field: string | null;
  message: string | null;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove_voucher_countries {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove_voucher_minAmountSpent {
  __typename: "Money";
  currency: string;
  amount: number;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove_voucher_skills_edges_node_skillType {
  __typename: "SkillType";
  id: string;
  name: string;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove_voucher_skills_edges_node_thumbnail {
  __typename: "Image";
  url: string;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove_voucher_skills_edges_node {
  __typename: "Skill";
  id: string;
  name: string;
  skillType: VoucherCataloguesRemove_voucherCataloguesRemove_voucher_skills_edges_node_skillType;
  isPublished: boolean;
  thumbnail: VoucherCataloguesRemove_voucherCataloguesRemove_voucher_skills_edges_node_thumbnail | null;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove_voucher_skills_edges {
  __typename: "SkillCountableEdge";
  node: VoucherCataloguesRemove_voucherCataloguesRemove_voucher_skills_edges_node;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove_voucher_skills_pageInfo {
  __typename: "PageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove_voucher_skills {
  __typename: "SkillCountableConnection";
  edges: VoucherCataloguesRemove_voucherCataloguesRemove_voucher_skills_edges[];
  totalCount: number | null;
  pageInfo: VoucherCataloguesRemove_voucherCataloguesRemove_voucher_skills_pageInfo;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove_voucher_collections_edges_node_skills {
  __typename: "SkillCountableConnection";
  totalCount: number | null;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove_voucher_collections_edges_node {
  __typename: "Collection";
  id: string;
  name: string;
  skills: VoucherCataloguesRemove_voucherCataloguesRemove_voucher_collections_edges_node_skills | null;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove_voucher_collections_edges {
  __typename: "CollectionCountableEdge";
  node: VoucherCataloguesRemove_voucherCataloguesRemove_voucher_collections_edges_node;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove_voucher_collections_pageInfo {
  __typename: "PageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove_voucher_collections {
  __typename: "CollectionCountableConnection";
  edges: VoucherCataloguesRemove_voucherCataloguesRemove_voucher_collections_edges[];
  totalCount: number | null;
  pageInfo: VoucherCataloguesRemove_voucherCataloguesRemove_voucher_collections_pageInfo;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove_voucher_categories_edges_node_skills {
  __typename: "SkillCountableConnection";
  totalCount: number | null;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove_voucher_categories_edges_node {
  __typename: "Category";
  id: string;
  name: string;
  skills: VoucherCataloguesRemove_voucherCataloguesRemove_voucher_categories_edges_node_skills | null;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove_voucher_categories_edges {
  __typename: "CategoryCountableEdge";
  node: VoucherCataloguesRemove_voucherCataloguesRemove_voucher_categories_edges_node;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove_voucher_categories_pageInfo {
  __typename: "PageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove_voucher_categories {
  __typename: "CategoryCountableConnection";
  edges: VoucherCataloguesRemove_voucherCataloguesRemove_voucher_categories_edges[];
  totalCount: number | null;
  pageInfo: VoucherCataloguesRemove_voucherCataloguesRemove_voucher_categories_pageInfo;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove_voucher {
  __typename: "Voucher";
  id: string;
  name: string | null;
  startDate: any;
  endDate: any | null;
  usageLimit: number | null;
  discountValueType: VoucherDiscountValueType;
  discountValue: number;
  countries: (VoucherCataloguesRemove_voucherCataloguesRemove_voucher_countries | null)[] | null;
  minAmountSpent: VoucherCataloguesRemove_voucherCataloguesRemove_voucher_minAmountSpent | null;
  type: VoucherType;
  code: string;
  used: number;
  applyOncePerTask: boolean;
  skills: VoucherCataloguesRemove_voucherCataloguesRemove_voucher_skills | null;
  collections: VoucherCataloguesRemove_voucherCataloguesRemove_voucher_collections | null;
  categories: VoucherCataloguesRemove_voucherCataloguesRemove_voucher_categories | null;
}

export interface VoucherCataloguesRemove_voucherCataloguesRemove {
  __typename: "VoucherRemoveCatalogues";
  errors: VoucherCataloguesRemove_voucherCataloguesRemove_errors[] | null;
  voucher: VoucherCataloguesRemove_voucherCataloguesRemove_voucher | null;
}

export interface VoucherCataloguesRemove {
  voucherCataloguesRemove: VoucherCataloguesRemove_voucherCataloguesRemove | null;
}

export interface VoucherCataloguesRemoveVariables {
  input: CatalogueInput;
  id: string;
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}
