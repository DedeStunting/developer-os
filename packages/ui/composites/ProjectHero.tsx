import Link from "next/link";

import type { ProjectMetadata } from "@developer-os/types";

import { Stack } from "../layouts/Stack";
import { ButtonLink } from "../primitives/ButtonLink";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="text-foreground-muted flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-foreground focus-visible:ring-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-foreground font-medium" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast ? <span aria-hidden>/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export interface ProjectHeroProps {
  metadata: ProjectMetadata;
}

export function ProjectHero({ metadata }: ProjectHeroProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <Stack gap={4}>
        <h1 className="text-foreground text-4xl font-bold tracking-tight md:text-5xl">
          {metadata.title}
        </h1>
        <p className="text-foreground-secondary text-lg leading-relaxed">{metadata.summary}</p>
        {metadata.technologies.length > 0 ? (
          <ul className="flex flex-wrap gap-2" aria-label="Technologies">
            {metadata.technologies.map((tech) => (
              <li
                key={tech}
                className="bg-background-muted text-foreground-secondary rounded-md px-2 py-1 text-xs font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="flex flex-wrap gap-3">
          {metadata.liveUrl ? (
            <ButtonLink href={metadata.liveUrl} external>
              Live URL
            </ButtonLink>
          ) : null}
          {metadata.repositoryUrl ? (
            <ButtonLink href={metadata.repositoryUrl} variant="secondary" external>
              Repository
            </ButtonLink>
          ) : metadata.repositoryAccess === "private" ? (
            <span className="text-foreground-muted inline-flex h-10 items-center text-sm">
              Repository: Private
            </span>
          ) : null}
        </div>
      </Stack>

      <div
        className="bg-background-muted text-foreground-muted flex aspect-video items-center justify-center rounded-xl text-sm font-medium"
        role="img"
        aria-label={metadata.imageAlt}
      >
        Project screenshot placeholder
      </div>
    </div>
  );
}
