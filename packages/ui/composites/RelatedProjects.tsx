import type { ProjectPreview } from "@developer-os/types";

import { ProjectList } from "./ProjectList";
import { SectionHeading } from "./SectionHeading";

export interface RelatedProjectsProps {
  projects: ProjectPreview[];
  title?: string;
}

export function RelatedProjects({ projects, title = "More projects" }: RelatedProjectsProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <div>
      <SectionHeading>{title}</SectionHeading>
      <ProjectList projects={projects} />
    </div>
  );
}
