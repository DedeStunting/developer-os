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
  Stack,
} from "@developer-os/ui";

export interface ResumePageViewProps {
  resume: Resume;
}

export function ResumePageView({ resume }: ResumePageViewProps) {
  return (
    <Page>
      <Section spacing="default">
        <Container size="narrow">
          <Stack gap={12}>
            <div className="flex justify-end">
              <ResumeDownloadButton />
            </div>

            <ResumeHeader profile={resume.profile} />

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
          </Stack>
        </Container>
      </Section>
    </Page>
  );
}
