import type { ProjectPreview } from "@developer-os/types";

import { ProjectPreviewCard } from "./ProjectPreviewCard";
import { Stack } from "../layouts/Stack";

export interface RelatedProjectsProps {
  projects: ProjectPreview[];
  title?: string;
}

export function RelatedProjects({ projects, title = "Related Projects" }: RelatedProjectsProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <Stack gap={6}>
      <h2 className="text-foreground text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectPreviewCard key={project.slug} project={project} />
        ))}
      </div>
    </Stack>
  );
}
