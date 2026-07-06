import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { ProjectPreview } from "@developer-os/types";

import { cn } from "../lib/cn";

export interface ProjectListProps {
  projects: ProjectPreview[];
  className?: string;
}

function ProjectListItem({ project }: { project: ProjectPreview }) {
  const linkClass =
    "project-list-link focus-visible:ring-accent flex gap-4 focus-visible:ring-2 focus-visible:outline-none sm:gap-5";

  const content = (
    <>
      {project.logoUrl ? (
        <Image
          src={project.logoUrl}
          alt={project.imageAlt ?? `${project.title} logo`}
          width={32}
          height={32}
          className="project-logo"
        />
      ) : null}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-foreground group-hover:text-foreground-secondary group-focus-within:text-foreground-secondary text-base font-semibold transition-colors sm:text-[17px]">
            {project.title}
          </h3>
          <ArrowUpRight
            className="text-foreground-muted group-hover:text-foreground group-focus-within:text-foreground project-list-arrow mt-0.5 h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
            aria-hidden
          />
        </div>
        <p className="text-foreground-secondary mt-1 text-sm leading-relaxed">{project.summary}</p>
      </div>
    </>
  );

  if (project.external) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        aria-label={`${project.title} (opens in new tab)`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={project.href} className={linkClass}>
      {content}
    </Link>
  );
}

export function ProjectList({ projects, className }: ProjectListProps) {
  return (
    <ul className={cn("project-list", className)}>
      {projects.map((project) => (
        <li key={project.slug} className="project-list-item group">
          <ProjectListItem project={project} />
        </li>
      ))}
    </ul>
  );
}
