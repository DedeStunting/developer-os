import type { ResumeProject } from "@developer-os/types";

import Link from "next/link";

import { Stack } from "../layouts/Stack";

export interface ResumeProjectListProps {
  projects: ResumeProject[];
}

export function ResumeProjectList({ projects }: ResumeProjectListProps) {
  return (
    <Stack gap={4}>
      {projects.map((project) => (
        <article key={project.slug}>
          <Stack gap={2}>
            <h3 className="text-foreground text-base font-semibold">
              <Link href={project.href} className="hover:text-accent transition-colors">
                {project.title}
              </Link>
            </h3>
            <p className="text-foreground-secondary text-sm leading-relaxed">{project.summary}</p>
          </Stack>
        </article>
      ))}
    </Stack>
  );
}
