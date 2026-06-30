import type { ProjectMetadata } from "@developer-os/types";

export const bundoMetadataFixture: ProjectMetadata = {
  slug: "bundo",
  title: "Bundo",
  summary: "Production marketplace platform with modular backend architecture.",
  technologies: ["TypeScript", "React", "Node.js", "PostgreSQL"],
  featured: true,
  order: 1,
  caseStudyHref: "/projects/bundo",
  imageAlt: "Bundo preview",
  liveUrl: "https://bundo.example.com",
  repositoryAccess: "private",
  duration: "2024 — Present",
  role: "Backend Software Engineer",
  engineeringCallouts: [
    {
      title: "Authentication",
      decision: "Firebase Authentication instead of custom auth",
      rationale: "Reduced security surface area during early delivery.",
    },
  ],
};
