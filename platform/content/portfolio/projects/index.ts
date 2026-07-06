export const projectSlugs = ["bundo", "pizza-ordering-platform", "real-time-chat"] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export const projectsSeo = {
  title: "Projects — Chiedu David",
  description:
    "Engineering case studies covering production systems, backend architecture, and full-stack delivery.",
} as const;
