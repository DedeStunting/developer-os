import type { Metadata } from "next";

import { getProjects, getProjectsSeo } from "@developer-os/core/content";

import { ProjectsPageView } from "@/features/projects";

export function generateMetadata(): Metadata {
  const seo = getProjectsSeo();

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export default function ProjectsPage() {
  const projects = getProjects();

  return <ProjectsPageView projects={projects} />;
}
