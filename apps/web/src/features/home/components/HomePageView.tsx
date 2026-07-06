import {
  Container,
  ExperienceList,
  Hero,
  Page,
  ProjectList,
  ResumeDownloadButton,
  Section,
  SectionLabel,
} from "@developer-os/ui";

import type { HomePageData } from "@developer-os/types";

export interface HomePageViewProps {
  data: HomePageData;
}

export function HomePageView({ data }: HomePageViewProps) {
  return (
    <Page>
      <Section id="top" spacing="hero" className="!pb-0">
        <Container size="content">
          <Hero content={data.hero} />
        </Container>
      </Section>

      <div className="portfolio-sections">
        <Section id="projects" spacing="none">
          <Container size="content">
            <SectionLabel as="h2">Projects</SectionLabel>
            <ProjectList projects={data.selectedProjects} />
          </Container>
        </Section>

        <Section id="experience" spacing="none">
          <Container size="content">
            <SectionLabel as="h2">Experience</SectionLabel>
            <ExperienceList entries={data.experience} />
          </Container>
        </Section>

        <Section id="resume" spacing="none">
          <Container size="content">
            <SectionLabel as="h2">Resume</SectionLabel>
            <ResumeDownloadButton />
          </Container>
        </Section>
      </div>
    </Page>
  );
}
