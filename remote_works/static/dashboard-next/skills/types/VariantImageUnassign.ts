/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: VariantImageUnassign
// ====================================================

export interface VariantImageUnassign_variantImageUnassign_errors {
  __typename: "Error";
  field: string | null;
  message: string | null;
}

export interface VariantImageUnassign_variantImageUnassign_skillVariant_attributes_attribute_values {
  __typename: "AttributeValue";
  id: string;
  name: string | null;
  slug: string | null;
}

export interface VariantImageUnassign_variantImageUnassign_skillVariant_attributes_attribute {
  __typename: "Attribute";
  id: string;
  name: string | null;
  slug: string | null;
  values: (VariantImageUnassign_variantImageUnassign_skillVariant_attributes_attribute_values | null)[] | null;
}

export interface VariantImageUnassign_variantImageUnassign_skillVariant_attributes_value {
  __typename: "AttributeValue";
  id: string;
  name: string | null;
  slug: string | null;
}

export interface VariantImageUnassign_variantImageUnassign_skillVariant_attributes {
  __typename: "SelectedAttribute";
  attribute: VariantImageUnassign_variantImageUnassign_skillVariant_attributes_attribute;
  value: VariantImageUnassign_variantImageUnassign_skillVariant_attributes_value;
}

export interface VariantImageUnassign_variantImageUnassign_skillVariant_costPrice {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface VariantImageUnassign_variantImageUnassign_skillVariant_images {
  __typename: "SkillImage";
  id: string;
  url: string;
}

export interface VariantImageUnassign_variantImageUnassign_skillVariant_priceOverride {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface VariantImageUnassign_variantImageUnassign_skillVariant_skill_images {
  __typename: "SkillImage";
  id: string;
  alt: string;
  sortTask: number;
  url: string;
}

export interface VariantImageUnassign_variantImageUnassign_skillVariant_skill_thumbnail {
  __typename: "Image";
  url: string;
}

export interface VariantImageUnassign_variantImageUnassign_skillVariant_skill_variants_images {
  __typename: "SkillImage";
  id: string;
  url: string;
}

export interface VariantImageUnassign_variantImageUnassign_skillVariant_skill_variants {
  __typename: "SkillVariant";
  id: string;
  name: string;
  sku: string;
  images: (VariantImageUnassign_variantImageUnassign_skillVariant_skill_variants_images | null)[] | null;
}

export interface VariantImageUnassign_variantImageUnassign_skillVariant_skill {
  __typename: "Skill";
  id: string;
  images: (VariantImageUnassign_variantImageUnassign_skillVariant_skill_images | null)[] | null;
  name: string;
  thumbnail: VariantImageUnassign_variantImageUnassign_skillVariant_skill_thumbnail | null;
  variants: (VariantImageUnassign_variantImageUnassign_skillVariant_skill_variants | null)[] | null;
}

export interface VariantImageUnassign_variantImageUnassign_skillVariant {
  __typename: "SkillVariant";
  id: string;
  attributes: VariantImageUnassign_variantImageUnassign_skillVariant_attributes[];
  costPrice: VariantImageUnassign_variantImageUnassign_skillVariant_costPrice | null;
  images: (VariantImageUnassign_variantImageUnassign_skillVariant_images | null)[] | null;
  name: string;
  priceOverride: VariantImageUnassign_variantImageUnassign_skillVariant_priceOverride | null;
  skill: VariantImageUnassign_variantImageUnassign_skillVariant_skill;
  sku: string;
  quantity: number;
  quantityAllocated: number;
}

export interface VariantImageUnassign_variantImageUnassign {
  __typename: "VariantImageUnassign";
  errors: VariantImageUnassign_variantImageUnassign_errors[] | null;
  skillVariant: VariantImageUnassign_variantImageUnassign_skillVariant | null;
}

export interface VariantImageUnassign {
  variantImageUnassign: VariantImageUnassign_variantImageUnassign | null;
}

export interface VariantImageUnassignVariables {
  variantId: string;
  imageId: string;
}
