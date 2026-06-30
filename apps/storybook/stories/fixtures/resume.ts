import type { Resume } from "@developer-os/types";

export const resumeFixture: Resume = {
  profile: {
    name: "Chiedu David",
    title: "Backend Software Engineer",
    email: "hello@chiedudavid.com",
    location: "Remote",
    summary:
      "Backend engineer focused on shipping reliable production systems, from API design and data modeling to cloud deployment and operational readiness.",
    github: "https://github.com/chiedudavid",
    portfolio: "https://chiedudavid.com",
  },
  experience: [
    {
      company: "Bundo Tech Inc.",
      title: "Backend Software Engineer",
      location: "Remote",
      start: "2024-03",
      end: null,
      highlights: [
        "Designed and shipped production APIs, data workflows, and deployment pipelines.",
        "Modeled relational data in PostgreSQL for marketplace operations.",
      ],
      technologies: ["TypeScript", "Node.js", "PostgreSQL"],
    },
  ],
  education: [],
  skillGroups: [
    { category: "Backend", items: ["Java", "Node.js"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB"] },
  ],
  projects: [
    {
      slug: "bundo",
      title: "Bundo",
      summary: "Production-grade platform for managing workflows and customer operations.",
      href: "/projects/bundo",
      featured: true,
    },
  ],
};
