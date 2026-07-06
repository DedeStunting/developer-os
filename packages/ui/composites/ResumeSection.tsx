import type { ReactNode } from "react";

import { SectionLabel } from "./SectionLabel";

export interface ResumeSectionProps {
  title: string;
  children: ReactNode;
}

export function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="flex flex-col gap-4 sm:gap-5">
      <SectionLabel className="mb-0">{title}</SectionLabel>
      {children}
    </section>
  );
}
