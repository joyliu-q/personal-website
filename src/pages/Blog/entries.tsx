interface BlogEntry {
  title: string;
  subtitle?: string;
  date: string;
  path: string;
}

export const BLOGS: { [key: string]: BlogEntry }= {
  "make-website-two-hours": {
    "title": "Making a personal website in 2 hours (and what I learned)",
    "subtitle": "The art of getting backburner projects done",
    "date": "2022-05-16",
    "path": "2022-05-16.md",
  },
}