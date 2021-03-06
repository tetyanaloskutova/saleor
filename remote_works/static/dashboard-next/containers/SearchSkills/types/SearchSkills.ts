/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchSkills
// ====================================================

export interface SearchSkills_skills_edges_node_thumbnail {
  __typename: "Image";
  url: string;
}

export interface SearchSkills_skills_edges_node {
  __typename: "Skill";
  id: string;
  thumbnail: SearchSkills_skills_edges_node_thumbnail | null;
  name: string;
}

export interface SearchSkills_skills_edges {
  __typename: "SkillCountableEdge";
  node: SearchSkills_skills_edges_node;
}

export interface SearchSkills_skills {
  __typename: "SkillCountableConnection";
  edges: SearchSkills_skills_edges[];
}

export interface SearchSkills {
  skills: SearchSkills_skills | null;
}

export interface SearchSkillsVariables {
  query: string;
}
