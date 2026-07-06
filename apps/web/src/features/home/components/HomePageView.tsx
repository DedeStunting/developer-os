import type { HomePageData } from "@developer-os/types";
import {
  CallToAction,
  Container,
  FeaturedProject,
  Hero,
  MetricGrid,
  Page,
  ProjectPreviewCard,
  Section,
  Stack,
  TechStackGrid,
  Timeline,
} from "@developer-os/ui";

interface SectionHeadingProps {
  title: string;
  description?: string;
}

function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <Stack gap={2}>
      <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="text-foreground-secondary max-w-2xl text-base leading-relaxed">
          {description}
        </p>
      ) : null}
    </Stack>
  );
}

export interface HomePageViewProps {
  data: HomePageData;
}

export function HomePageView({ data }: HomePageViewProps) {
  return (
    <Page>
      <Section spacing="hero">
        <Container>
          <Hero content={data.hero} />
        </Container>
      </Section>

      <Section>
        <Container>
          <Stack gap={8}>
            <SectionHeading title="Trust Signals" />
            <MetricGrid metrics={data.trustMetrics} />
          </Stack>
        </Container>
      </Section>

      <Section>
        <Container>
          <Stack gap={8}>
            <SectionHeading
              title="Featured Project"
              description="A production system that demonstrates end-to-end engineering ownership."
            />
            <FeaturedProject project={data.featuredProject} />
          </Stack>
        </Container>
      </Section>

      <Section>
        <Container>
          <Stack gap={8}>
            <SectionHeading
              title="Experience"
              description="Recent roles focused on backend delivery and production impact."
            />
            <Timeline entries={data.experience} />
          </Stack>
        </Container>
      </Section>

      <Section>
        <Container>
          <Stack gap={8}>
            <SectionHeading
              title="Technical Expertise"
              description="Skills organized by domain to reflect how I approach system design."
            />
            <TechStackGrid groups={data.techStack} />
          </Stack>
        </Container>
      </Section>

      <Section>
        <Container>
          <Stack gap={8}>
            <SectionHeading
              title="Selected Projects"
              description="Representative work across production platforms and full-stack applications."
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {data.selectedProjects.map((project) => (
                <ProjectPreviewCard key={project.slug} project={project} />
              ))}
            </div>
          </Stack>
        </Container>
      </Section>

      <Section spacing="loose">
        <Container size="narrow">
          <CallToAction content={data.cta} />
        </Container>
      </Section>
    </Page>
  );
}
