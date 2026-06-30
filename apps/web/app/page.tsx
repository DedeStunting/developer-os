import { site } from "@developer-os/config";
import { Container, Page, Section, Stack } from "@developer-os/ui";
import type { Project } from "@developer-os/types";

const featuredProject: Project = {
  slug: "bundo",
  title: "Bundo",
  summary: "Full-stack production application.",
  technologies: ["TypeScript", "React", "Node.js"],
  featured: true,
};

export default function HomePage() {
  return (
    <Page>
      <Section spacing="loose">
        <Container size="narrow">
          <Stack gap={6}>
            <p className="text-foreground-muted text-sm font-medium tracking-tight">{site.name}</p>
            <h1 className="text-foreground text-4xl font-bold tracking-tight md:text-5xl">
              {site.title}
            </h1>
            <p className="text-foreground-secondary text-lg leading-relaxed">{site.description}</p>
            <div className="border-border bg-background-subtle rounded-xl border p-6">
              <p className="text-foreground-muted text-sm font-medium">Featured project</p>
              <h2 className="text-foreground mt-2 text-2xl font-semibold">
                {featuredProject.title}
              </h2>
              <p className="text-foreground-secondary mt-2">{featuredProject.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-background-muted text-foreground-secondary rounded-md px-2 py-1 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Stack>
        </Container>
      </Section>
    </Page>
  );
}
