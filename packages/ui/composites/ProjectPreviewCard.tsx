import { ArrowUpRight } from "lucide-react";

import type { ProjectPreview } from "@developer-os/types";

import { cn } from "../lib/cn";
import { ButtonLink } from "../primitives/ButtonLink";

export interface ProjectPreviewCardProps {
  project: ProjectPreview;
  className?: string;
}

export function ProjectPreviewCard({ project, className }: ProjectPreviewCardProps) {
  return (
    <article
      className={cn(
        "border-border bg-background flex h-full flex-col overflow-hidden rounded-xl border",
        className,
      )}
    >
      <div
        className="bg-background-muted text-foreground-muted flex aspect-video items-center justify-center text-sm font-medium"
        role="img"
        aria-label={project.imageAlt ?? `${project.title} screenshot placeholder`}
      >
        Screenshot placeholder
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-foreground text-xl font-semibold">{project.title}</h3>
          <p className="text-foreground-secondary text-sm leading-relaxed">{project.summary}</p>
        </div>

        {project.technologies.length > 0 ? (
          <ul className="flex flex-wrap gap-2" aria-label="Technologies">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="bg-background-muted text-foreground-secondary rounded-md px-2 py-1 text-xs font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto flex flex-wrap gap-3">
          <ButtonLink href={project.href} variant="secondary">
            View Project
          </ButtonLink>
          {project.liveUrl ? (
            <ButtonLink href={project.liveUrl} variant="ghost" external>
              Live demo
              <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden />
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
