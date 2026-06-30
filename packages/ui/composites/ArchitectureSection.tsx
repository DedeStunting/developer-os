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
      <div className="border-border bg-background-subtle rounded-xl border p-6">
        <pre className="text-foreground-secondary overflow-x-auto whitespace-pre-wrap text-sm leading-relaxed">
          {`Client\n  ↓\nAPI Layer\n  ↓\nService Layer\n  ↓\nDatabase\n  ↓\nThird-party Services`}
        </pre>
      </div>
      <MarkdownContent content={content} />
    </CaseStudySection>
  );
}
