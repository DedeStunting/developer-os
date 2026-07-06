export const site = {
  name: "Developer OS",
  title: "Chiedu David",
  description: "Professional engineering platform.",
  url: "https://chiedudev.vercel.app",
  author: "Chiedu David",
  locale: "en-US",
} as const;

export type SiteConfig = typeof site;
