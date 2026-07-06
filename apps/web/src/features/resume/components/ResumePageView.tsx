import type { Resume } from "@developer-os/types";
import {
  Container,
  Page,
  ResumeDownloadButton,
  ResumeEducation,
  ResumeExperience,
  ResumeHeader,
  ResumeProjectList,
  ResumeSection,
  ResumeSkills,
  Section,
} from "@developer-os/ui";

export interface ResumePageViewProps {
  resume: Resume;
}

export function ResumePageView({ resume }: ResumePageViewProps) {
  return (
    <Page>
      <Section spacing="hero">
        <Container size="content">
          <div className="page-stack">
            <div className="flex justify-center sm:justify-end">
              <ResumeDownloadButton />
            </div>
            <ResumeHeader profile={resume.profile} />
          </div>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container size="content">
          <div className="page-stack">
            <ResumeSection title="Experience">
              <ResumeExperience entries={resume.experience} />
            </ResumeSection>

            <ResumeSection title="Projects">
              <ResumeProjectList projects={resume.projects} />
            </ResumeSection>

            {resume.education.length > 0 ? (
              <ResumeSection title="Education">
                <ResumeEducation entries={resume.education} />
              </ResumeSection>
            ) : null}

            <ResumeSection title="Skills">
              <ResumeSkills groups={resume.skillGroups} />
            </ResumeSection>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
