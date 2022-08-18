/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLinkInput = {
  id?: string | null,
  from: string,
  to: string,
};

export type ModelLinkConditionInput = {
  from?: ModelStringInput | null,
  to?: ModelStringInput | null,
  and?: Array< ModelLinkConditionInput | null > | null,
  or?: Array< ModelLinkConditionInput | null > | null,
  not?: ModelLinkConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Link = {
  __typename: "Link",
  id: string,
  from: string,
  to: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLinkInput = {
  id: string,
  from?: string | null,
  to?: string | null,
};

export type DeleteLinkInput = {
  id: string,
};

export type ModelLinkFilterInput = {
  id?: ModelIDInput | null,
  from?: ModelStringInput | null,
  to?: ModelStringInput | null,
  and?: Array< ModelLinkFilterInput | null > | null,
  or?: Array< ModelLinkFilterInput | null > | null,
  not?: ModelLinkFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelLinkConnection = {
  __typename: "ModelLinkConnection",
  items:  Array<Link | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionLinkFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  from?: ModelSubscriptionStringInput | null,
  to?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLinkFilterInput | null > | null,
  or?: Array< ModelSubscriptionLinkFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateLinkMutationVariables = {
  input: CreateLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type CreateLinkMutation = {
  createLink?:  {
    __typename: "Link",
    id: string,
    from: string,
    to: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLinkMutationVariables = {
  input: UpdateLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type UpdateLinkMutation = {
  updateLink?:  {
    __typename: "Link",
    id: string,
    from: string,
    to: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLinkMutationVariables = {
  input: DeleteLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type DeleteLinkMutation = {
  deleteLink?:  {
    __typename: "Link",
    id: string,
    from: string,
    to: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetLinkQueryVariables = {
  id: string,
};

export type GetLinkQuery = {
  getLink?:  {
    __typename: "Link",
    id: string,
    from: string,
    to: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLinksQueryVariables = {
  filter?: ModelLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLinksQuery = {
  listLinks?:  {
    __typename: "ModelLinkConnection",
    items:  Array< {
      __typename: "Link",
      id: string,
      from: string,
      to: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLinkSubscriptionVariables = {
  filter?: ModelSubscriptionLinkFilterInput | null,
};

export type OnCreateLinkSubscription = {
  onCreateLink?:  {
    __typename: "Link",
    id: string,
    from: string,
    to: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLinkSubscriptionVariables = {
  filter?: ModelSubscriptionLinkFilterInput | null,
};

export type OnUpdateLinkSubscription = {
  onUpdateLink?:  {
    __typename: "Link",
    id: string,
    from: string,
    to: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLinkSubscriptionVariables = {
  filter?: ModelSubscriptionLinkFilterInput | null,
};

export type OnDeleteLinkSubscription = {
  onDeleteLink?:  {
    __typename: "Link",
    id: string,
    from: string,
    to: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
