import { ArrowUpRight } from "lucide-react";

import type { FeaturedProjectShowcase } from "@developer-os/types";

import { Stack } from "../layouts/Stack";
import { ButtonLink } from "../primitives/ButtonLink";

export interface FeaturedProjectProps {
  project: FeaturedProjectShowcase;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <div className="border-border bg-background overflow-hidden rounded-2xl border">
      <div className="grid gap-0 lg:grid-cols-2">
        <div
          className="bg-background-muted text-foreground-muted flex min-h-56 items-center justify-center p-8 text-sm font-medium lg:min-h-full"
          role="img"
          aria-label={`${project.title} product preview`}
        >
          Product showcase placeholder
        </div>

        <div className="flex flex-col gap-6 p-5 sm:p-6 md:p-8">
          <Stack gap={4}>
            <p className="text-foreground-muted text-sm font-medium uppercase tracking-wide">
              Featured project
            </p>
            <h2 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
              {project.title}
            </h2>
            <p className="text-foreground-secondary leading-relaxed">{project.summary}</p>
          </Stack>

          {project.technologies.length > 0 ? (
            <ul className="flex flex-wrap gap-2" aria-label="Technology stack">
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

          <Stack gap={2}>
            <h3 className="text-foreground text-sm font-semibold">Architecture</h3>
            <p className="text-foreground-secondary text-sm leading-relaxed">
              {project.architectureSummary}
            </p>
          </Stack>

          {project.challengesSolved.length > 0 ? (
            <Stack gap={2}>
              <h3 className="text-foreground text-sm font-semibold">Challenges solved</h3>
              <ul className="text-foreground-secondary list-disc space-y-1 pl-5 text-sm leading-relaxed">
                {project.challengesSolved.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </Stack>
          ) : null}

          <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={project.caseStudyHref} className="w-full sm:w-auto">
              Read Case Study
            </ButtonLink>
            {project.liveUrl ? (
              <ButtonLink
                href={project.liveUrl}
                variant="secondary"
                external
                className="w-full sm:w-auto"
              >
                View live
                <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden />
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
