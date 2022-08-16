export const PUBLIC_URL = process.env.PUBLIC_URL ?? "http://localhost:3000";

export interface LinkData {
  from: string,
  to: string,
}

// TODO: If you add `not-found` as a from link, then it wouldn't work. This should be fixed.
const LINKS: LinkData[] = [
  {
    from: 'joymart',
    to: 'https://joymart.joyliu.dev/'
  },
  {
    from: 'hello',
    to: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
]

export const getLinks = () => {
  return LINKS;
}
export const getLinkMap = () => {
  const map = new Map<string, LinkData>();
  LINKS.forEach(link => {
    map.set(link.from, link);
  })
  return map;
};
