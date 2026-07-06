import { Container, Page, ProjectPreviewCard, Section, Stack } from "@developer-os/ui";
import type { ProjectPreview } from "@developer-os/types";

export interface ProjectsPageViewProps {
  projects: ProjectPreview[];
}

export function ProjectsPageView({ projects }: ProjectsPageViewProps) {
  return (
    <Page>
      <Section spacing="hero">
        <Container>
          <Stack gap={4}>
            <p className="text-foreground-muted text-sm font-medium uppercase tracking-wide">
              Engineering portfolio
            </p>
            <h1 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Projects
            </h1>
            <p className="text-foreground-secondary max-w-2xl text-base leading-relaxed sm:text-lg">
              Case studies focused on production systems, backend architecture, and the engineering
              decisions behind each build.
            </p>
          </Stack>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectPreviewCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>
    </Page>
  );
}
