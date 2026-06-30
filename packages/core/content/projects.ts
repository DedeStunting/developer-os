import { loadProjectSections } from "@developer-os/content/projects";
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
