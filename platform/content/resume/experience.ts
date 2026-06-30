export const experience = [
  {
    company: "Bundo Tech Inc.",
    title: "Backend Software Engineer",
    location: "Remote",
    start: "2024-03",
    end: null,
    highlights: [
      "Designed and shipped production APIs, data workflows, and deployment pipelines for a customer-facing product used in live environments.",
      "Modeled relational data in PostgreSQL and implemented service boundaries that support marketplace operations at scale.",
      "Improved deployment reliability with containerized services and environment-aware configuration.",
    ],
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "Render"],
  },
  {
    company: "NDF",
    title: "Software Engineer",
    location: "Remote",
    start: "2022-06",
    end: "2024-02",
    highlights: [
      "Built backend services and integrations supporting business operations with maintainable architecture.",
      "Delivered API integrations and data workflows with emphasis on testing and delivery discipline.",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "MongoDB"],
  },
] as const;
