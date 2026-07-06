import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { ResumeProject } from "@developer-os/types";

export interface ResumeProjectListProps {
  projects: ResumeProject[];
}

export function ResumeProjectList({ projects }: ResumeProjectListProps) {
  return (
    <ul className="project-list">
      {projects.map((project) => (
        <li key={project.slug} className="project-list-item group">
          <a
            href={project.href}
            target={project.external ? "_blank" : undefined}
            rel={project.external ? "noopener noreferrer" : undefined}
            className="focus-visible:ring-accent flex gap-4 focus-visible:outline-none focus-visible:ring-2 sm:gap-5"
            aria-label={project.external ? `${project.title} (opens in new tab)` : project.title}
          >
            {project.logoUrl ? (
              <Image src={project.logoUrl} alt="" width={32} height={32} className="project-logo" />
            ) : null}
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-foreground group-hover:text-foreground-secondary text-xl font-normal tracking-tight transition-colors sm:text-2xl">
                  {project.title}
                </h3>
                <ArrowUpRight
                  className="text-foreground-muted mt-1 h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
              </div>
              <p className="text-foreground-secondary mt-2 text-sm leading-relaxed sm:text-[15px]">
                {project.summary}
              </p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
