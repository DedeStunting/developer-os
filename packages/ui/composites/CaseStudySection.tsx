import type { ReactNode } from "react";

import { cn } from "../lib/cn";
import { SectionLabel } from "./SectionLabel";

export interface CaseStudySectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  hidden?: boolean;
}

export function CaseStudySection({ title, children, className, hidden }: CaseStudySectionProps) {
  if (hidden) {
    return null;
  }

  return (
    <section className={cn("flex flex-col gap-4 sm:gap-5", className)}>
      <SectionLabel className="mb-0">{title}</SectionLabel>
      {children}
    </section>
  );
}
