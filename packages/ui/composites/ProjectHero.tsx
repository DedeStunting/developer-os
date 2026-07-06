import Link from "next/link";

import type { ProjectMetadata } from "@developer-os/types";

import { cn } from "../lib/cn";
import { TextLink } from "../primitives/TextLink";

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
      <ol className="text-foreground-muted flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex max-w-full items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-foreground focus-visible:ring-accent transition-colors focus-visible:outline-none focus-visible:ring-2"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={cn("truncate", isLast ? "text-foreground-secondary" : undefined)}>
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
    <header className="flex flex-col gap-4 sm:gap-5">
      <h1 className="font-display text-foreground text-2xl font-normal tracking-tight sm:text-3xl md:text-4xl">
        {metadata.title}
      </h1>
      <p className="text-foreground-secondary text-[15px] leading-relaxed sm:text-base md:leading-7">
        {metadata.summary}
      </p>
      {metadata.technologies.length > 0 ? (
        <p className="text-foreground-muted font-mono text-[10px] uppercase tracking-[0.14em] sm:text-[11px]">
          {metadata.technologies.join(" · ")}
        </p>
      ) : null}
      <div className="flex flex-wrap gap-x-5 gap-y-1">
        {metadata.liveUrl ? (
          <TextLink href={metadata.liveUrl} external>
            Live
          </TextLink>
        ) : null}
        {metadata.repositoryUrl ? (
          <TextLink href={metadata.repositoryUrl} external>
            Repository
          </TextLink>
        ) : metadata.repositoryAccess === "private" ? (
          <span className="text-foreground-muted text-sm">Repository: Private</span>
        ) : null}
      </div>
    </header>
  );
}
