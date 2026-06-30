import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  bundoProject,
  pizzaOrderingProject,
  projectSlugs,
  projectsSeo,
  realTimeChatProject,
} from "@developer-os/platform/content";
import { ProjectCaseStudySchema, ProjectMetadataSchema } from "@developer-os/platform/schemas";
import type {
  ProjectCaseStudy,
  ProjectCaseStudySections,
  ProjectMetadata,
  ProjectPreview,
  ProjectSeo,
} from "@developer-os/types";

import { validateContent } from "../validation";

const metadataBySlug: Record<string, unknown> = {
  bundo: bundoProject,
  "real-time-chat": realTimeChatProject,
  "pizza-ordering-platform": pizzaOrderingProject,
};

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

const projectsRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../../platform/content/portfolio/projects",
);

function readSection(slug: string, filename: string): string {
  const filePath = path.join(projectsRoot, slug, filename);

  if (!existsSync(filePath)) {
    return "";
  }

  return readFileSync(filePath, "utf8").trim();
}

function loadProjectSections(slug: string): ProjectCaseStudySections {
  const sections = {} as ProjectCaseStudySections;

  for (const [key, filename] of Object.entries(sectionFiles)) {
    sections[key as keyof ProjectCaseStudySections] = readSection(slug, filename);
  }

  return sections;
}

function toProjectPreview(metadata: ProjectMetadata): ProjectPreview {
  return {
    slug: metadata.slug,
    title: metadata.title,
    summary: metadata.summary,
    technologies: [...metadata.technologies],
    featured: metadata.featured,
    liveUrl: metadata.liveUrl,
    repositoryUrl: metadata.repositoryUrl,
    href: metadata.caseStudyHref,
    imageAlt: metadata.imageAlt,
  };
}

export function getProjects(): ProjectPreview[] {
  return [...projectSlugs].map((slug) => {
    const metadata = validateContent(
      ProjectMetadataSchema,
      metadataBySlug[slug],
      `project metadata: ${slug}`,
    );
    return toProjectPreview(metadata);
  });
}

export function getProject(slug: string): ProjectCaseStudy | null {
  const rawMetadata = metadataBySlug[slug];

  if (!rawMetadata) {
    return null;
  }

  const metadata = validateContent(ProjectMetadataSchema, rawMetadata, `project metadata: ${slug}`);
  const sections = loadProjectSections(slug);

  return validateContent(
    ProjectCaseStudySchema,
    { metadata, sections },
    `project case study: ${slug}`,
  );
}

export function getRelatedProjects(slug: string, limit = 2): ProjectPreview[] {
  const projects = getProjects();
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    return projects.slice(0, limit);
  }

  const related = [...projects.slice(currentIndex + 1), ...projects.slice(0, currentIndex)];

  return related.slice(0, limit);
}

export function getProjectsSeo(): ProjectSeo {
  return projectsSeo;
}

export function getProjectSlugs(): string[] {
  return [...projectSlugs];
}
