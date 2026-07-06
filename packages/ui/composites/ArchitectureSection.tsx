import { MarkdownContent } from "./MarkdownContent";
import { CaseStudySection } from "./CaseStudySection";

export interface ArchitectureSectionProps {
  content: string;
}

export function ArchitectureSection({ content }: ArchitectureSectionProps) {
  if (!content.trim()) {
    return null;
  }

  return (
    <CaseStudySection title="Architecture">
      <MarkdownContent content={content} />
    </CaseStudySection>
  );
}
