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

function getProjectHref(metadata: ProjectMetadata): Pick<ProjectPreview, "href" | "external"> {
  if (metadata.liveUrl) {
    return { href: metadata.liveUrl, external: true };
  }

  if (metadata.repositoryUrl) {
    return { href: metadata.repositoryUrl, external: true };
  }

  return { href: metadata.caseStudyHref, external: false };
}

function toProjectPreview(metadata: ProjectMetadata): ProjectPreview {
  const link = getProjectHref(metadata);

  return {
    slug: metadata.slug,
    title: metadata.title,
    summary: metadata.summary,
    technologies: [...metadata.technologies],
    featured: metadata.featured,
    liveUrl: metadata.liveUrl,
    repositoryUrl: metadata.repositoryUrl,
    logoUrl: metadata.logoUrl,
    imageAlt: metadata.imageAlt,
    ...link,
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
