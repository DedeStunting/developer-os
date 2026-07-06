import type { ProjectPreview } from "@developer-os/types";
import { Container, Page, ProjectList, Section, SectionHeading } from "@developer-os/ui";

export interface ProjectsPageViewProps {
  projects: ProjectPreview[];
}

export function ProjectsPageView({ projects }: ProjectsPageViewProps) {
  return (
    <Page>
      <Section spacing="hero">
        <Container size="content">
          <SectionHeading>Projects</SectionHeading>
          <p className="text-foreground-secondary -mt-4 text-[15px] leading-relaxed sm:text-base md:leading-7">
            A few things I have built. Select a project to visit the live site or repository.
          </p>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container size="content">
          <ProjectList projects={projects} />
        </Container>
      </Section>
    </Page>
  );
}
