/* tslint:disable */
// This file was automatically generated and should not be edited.

import { VoucherDiscountValueType, VoucherType } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: VoucherDetails
// ====================================================

export interface VoucherDetails_voucher_countries {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface VoucherDetails_voucher_minAmountSpent {
  __typename: "Money";
  currency: string;
  amount: number;
}

export interface VoucherDetails_voucher_skills_edges_node_skillType {
  __typename: "SkillType";
  id: string;
  name: string;
}

export interface VoucherDetails_voucher_skills_edges_node_thumbnail {
  __typename: "Image";
  url: string;
}

export interface VoucherDetails_voucher_skills_edges_node {
  __typename: "Skill";
  id: string;
  name: string;
  skillType: VoucherDetails_voucher_skills_edges_node_skillType;
  isPublished: boolean;
  thumbnail: VoucherDetails_voucher_skills_edges_node_thumbnail | null;
}

export interface VoucherDetails_voucher_skills_edges {
  __typename: "SkillCountableEdge";
  node: VoucherDetails_voucher_skills_edges_node;
}

export interface VoucherDetails_voucher_skills_pageInfo {
  __typename: "PageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface VoucherDetails_voucher_skills {
  __typename: "SkillCountableConnection";
  edges: VoucherDetails_voucher_skills_edges[];
  totalCount: number | null;
  pageInfo: VoucherDetails_voucher_skills_pageInfo;
}

export interface VoucherDetails_voucher_collections_edges_node_skills {
  __typename: "SkillCountableConnection";
  totalCount: number | null;
}

export interface VoucherDetails_voucher_collections_edges_node {
  __typename: "Collection";
  id: string;
  name: string;
  skills: VoucherDetails_voucher_collections_edges_node_skills | null;
}

export interface VoucherDetails_voucher_collections_edges {
  __typename: "CollectionCountableEdge";
  node: VoucherDetails_voucher_collections_edges_node;
}

export interface VoucherDetails_voucher_collections_pageInfo {
  __typename: "PageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface VoucherDetails_voucher_collections {
  __typename: "CollectionCountableConnection";
  edges: VoucherDetails_voucher_collections_edges[];
  totalCount: number | null;
  pageInfo: VoucherDetails_voucher_collections_pageInfo;
}

export interface VoucherDetails_voucher_categories_edges_node_skills {
  __typename: "SkillCountableConnection";
  totalCount: number | null;
}

export interface VoucherDetails_voucher_categories_edges_node {
  __typename: "Category";
  id: string;
  name: string;
  skills: VoucherDetails_voucher_categories_edges_node_skills | null;
}

export interface VoucherDetails_voucher_categories_edges {
  __typename: "CategoryCountableEdge";
  node: VoucherDetails_voucher_categories_edges_node;
}

export interface VoucherDetails_voucher_categories_pageInfo {
  __typename: "PageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface VoucherDetails_voucher_categories {
  __typename: "CategoryCountableConnection";
  edges: VoucherDetails_voucher_categories_edges[];
  totalCount: number | null;
  pageInfo: VoucherDetails_voucher_categories_pageInfo;
}

export interface VoucherDetails_voucher {
  __typename: "Voucher";
  id: string;
  name: string | null;
  startDate: any;
  endDate: any | null;
  usageLimit: number | null;
  discountValueType: VoucherDiscountValueType;
  discountValue: number;
  countries: (VoucherDetails_voucher_countries | null)[] | null;
  minAmountSpent: VoucherDetails_voucher_minAmountSpent | null;
  type: VoucherType;
  code: string;
  used: number;
  applyOncePerTask: boolean;
  skills: VoucherDetails_voucher_skills | null;
  collections: VoucherDetails_voucher_collections | null;
  categories: VoucherDetails_voucher_categories | null;
}

export interface VoucherDetails {
  voucher: VoucherDetails_voucher | null;
}

export interface VoucherDetailsVariables {
  id: string;
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}
