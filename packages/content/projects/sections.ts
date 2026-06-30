import type { ProjectCaseStudySections } from "@developer-os/types";

import { readMdxSections } from "../mdx/read";

const sectionFiles: Record<keyof ProjectCaseStudySections, string> = {
  overview: "overview.mdx",
  businessProblem: "business-problem.mdx",
  technicalChallenges: "technical-challenges.mdx",
  architecture: "architecture.mdx",
  databaseDesign: "database-design.mdx",
  apiDesign: "api-design.mdx",
  security: "security.mdx",
  performance: "performance.mdx",
  lessons: "lessons.mdx",
  future: "future.mdx",
};

export function loadProjectSections(slug: string): ProjectCaseStudySections {
  return readMdxSections(`portfolio/projects/${slug}`, sectionFiles);
}
