import { Amplify, API, graphqlOperation } from "aws-amplify";

import awsconfig from "../aws-exports";
import { getLink, listLinks } from "../graphql/queries";
import { createLink } from "../graphql/mutations";
import { GetLinkQuery, GetLinkQueryVariables, Link, ListLinksQuery } from "../API";
import { GraphQLResult } from "@aws-amplify/api";

Amplify.configure(awsconfig);

const hashFromAddress = (from: string) => {
    return from.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}

export async function addLink({ from, to }: { from: string, to?: string }) {
  // TODO: make sure it's a valid link

  const link = {
    id: hashFromAddress(from),
    from,
    to: to ?? hashFromAddress(from),
  };

  console.log(link);
  return await API.graphql(graphqlOperation(createLink, { input: link }));
}

// TODO: If you add `not-found` as a from link, then it wouldn't work. This should be fixed.
// const LINKS: LinkData[] = [
//   {
//     from: 'joymart',
//     to: 'https://joymart.joyliu.dev/'
//   },
//   {
//     from: 'hello',
//     to: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
//   }
// ]

function mapListTodosQuery(listLinksQuery: GraphQLResult<ListLinksQuery>): Link[] {
  console.log(listLinksQuery)
  return listLinksQuery.data?.listLinks?.items?.map(link => ({
    id: link?.id,
    from: link?.from,
    to: link?.to
  } as Link)) || []
}

export async function getLinkByTo(to: string) { 
  let res;
  try {
    res = await API.graphql({ query: getLink, variables: { id: to } as GetLinkQueryVariables }) as GraphQLResult<GetLinkQuery>;
  } catch (err) {
    return undefined;
  } 
  if (!res.data?.getLink ) {
    return undefined;
  }
  if (res.errors) {
    return undefined;
  }
  const link = res.data?.getLink;
  return ({
    id: link?.id,
    from: link?.from,
    to: link?.to
  } as Link);
}

export async function getLinks() {
  const res = await API.graphql(graphqlOperation(listLinks)) as GraphQLResult<ListLinksQuery>;
  return mapListTodosQuery(res);
}

export async function getLinkMap() {
  const links = await getLinks();
  const map = new Map<string, Link>();
  links.forEach(link => {
    map.set(link.from, link);
  })
  return map;
};
