interface BlogEntry {
  title: string;
  subtitle?: string;
  date: string;
  path: string; // markdown file path OR url
  isExternal?: boolean;
}

export const BLOGS: { [key: string]: BlogEntry } = {
  "typography": {
    title: "Brief Dive into Typography",
    subtitle: "Fonts, squares, and opinions",
    date: "2024-02-25",
    path: "2024-02-25.md",
  },
  "make-website-two-hours": {
    title: "Making a personal website in 2 hours (and what I learned)",
    subtitle: "The art of getting backburner projects done",
    date: "2022-05-16",
    path: "2022-05-16.md",
  },
  "2021-gsoc-story": {
    title: "To The Summer Of Code (And Many After) - My GSoC Story with in-toto",
    date: "2021-08-06",
    path: "https://coda.io/@joy/2021-gsoc-story",
    subtitle: "My Google Summer of Code Experience",
    isExternal: true,
  },
  childrenConversational: {
    title: "Children Conversational Training Data for Machine Learning",
    subtitle: "Education / Technology",
    date: "2021-07-13",
    path: "2021-07-13.md"
  }
}