export const projectSlugs = ["bundo", "real-time-chat", "pizza-ordering-platform"] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export const projectsSeo = {
  title: "Projects — Chiedu David",
  description:
    "Engineering case studies covering production systems, backend architecture, and full-stack delivery.",
} as const;
