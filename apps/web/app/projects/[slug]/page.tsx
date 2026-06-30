import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProject, getProjectSlugs, getRelatedProjects } from "@developer-os/core/content";

import { ProjectDetailView } from "@/features/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  const seo = project.metadata.seo;

  return {
    title: seo?.title ?? `${project.metadata.title} — Case Study`,
    description: seo?.description ?? project.metadata.summary,
    alternates: {
      canonical: project.metadata.caseStudyHref,
    },
    openGraph: {
      title: seo?.title ?? project.metadata.title,
      description: seo?.description ?? project.metadata.summary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.title ?? project.metadata.title,
      description: seo?.description ?? project.metadata.summary,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(slug);

  return <ProjectDetailView project={project} relatedProjects={relatedProjects} />;
}
