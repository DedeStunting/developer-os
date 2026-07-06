import type { ProjectCaseStudy, ProjectPreview } from "@developer-os/types";
import {
  ApiEndpointList,
  ArchitectureSection,
  Breadcrumb,
  CaseStudySection,
  Container,
  EngineeringDecisions,
  MarkdownContent,
  Page,
  ProjectHero,
  ProjectMetadataPanel,
  RelatedProjects,
  Section,
  SecurityChecklist,
  TechnologyDecisions,
} from "@developer-os/ui";

export interface ProjectDetailViewProps {
  project: ProjectCaseStudy;
  relatedProjects: ProjectPreview[];
}

export function ProjectDetailView({ project, relatedProjects }: ProjectDetailViewProps) {
  const { metadata, sections } = project;

  return (
    <Page>
      <Section spacing="hero">
        <Container size="content">
          <div className="page-stack">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Projects", href: "/projects" },
                { label: metadata.title },
              ]}
            />
            <ProjectHero metadata={metadata} />
            <ProjectMetadataPanel metadata={metadata} />
          </div>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container size="content">
          <div className="page-stack">
            <CaseStudySection title="Overview" hidden={!sections.overview}>
              <MarkdownContent content={sections.overview} />
            </CaseStudySection>

            <CaseStudySection title="Business Problem" hidden={!sections.businessProblem}>
              <MarkdownContent content={sections.businessProblem} />
            </CaseStudySection>

            <CaseStudySection title="Technical Challenges" hidden={!sections.technicalChallenges}>
              <MarkdownContent content={sections.technicalChallenges} />
            </CaseStudySection>

            <ArchitectureSection content={sections.architecture} />

            {metadata.engineeringCallouts ? (
              <EngineeringDecisions callouts={metadata.engineeringCallouts} />
            ) : null}

            {metadata.technologyDecisions ? (
              <TechnologyDecisions decisions={metadata.technologyDecisions} />
            ) : null}

            <CaseStudySection title="Database Design" hidden={!sections.databaseDesign}>
              <MarkdownContent content={sections.databaseDesign} />
            </CaseStudySection>

            <CaseStudySection title="API Design" hidden={!sections.apiDesign}>
              <MarkdownContent content={sections.apiDesign} />
              {metadata.apiEndpoints ? <ApiEndpointList endpoints={metadata.apiEndpoints} /> : null}
            </CaseStudySection>

            <CaseStudySection
              title="Security"
              hidden={!sections.security && !metadata.securityTopics}
            >
              <MarkdownContent content={sections.security} />
              {metadata.securityTopics ? (
                <SecurityChecklist topics={metadata.securityTopics} />
              ) : null}
            </CaseStudySection>

            <CaseStudySection title="Performance" hidden={!sections.performance}>
              <MarkdownContent content={sections.performance} />
            </CaseStudySection>

            <CaseStudySection title="Lessons Learned" hidden={!sections.lessons}>
              <MarkdownContent content={sections.lessons} />
            </CaseStudySection>

            <CaseStudySection title="Future Improvements" hidden={!sections.future}>
              <MarkdownContent content={sections.future} />
            </CaseStudySection>
          </div>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container size="content">
          <RelatedProjects projects={relatedProjects} />
        </Container>
      </Section>
    </Page>
  );
}
