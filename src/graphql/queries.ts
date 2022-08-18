/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLink = /* GraphQL */ `
  query GetLink($id: ID!) {
    getLink(id: $id) {
      id
      from
      to
      createdAt
      updatedAt
    }
  }
`;
export const listLinks = /* GraphQL */ `
  query ListLinks(
    $filter: ModelLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        from
        to
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
