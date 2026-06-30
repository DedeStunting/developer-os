import type { ReactNode } from "react";

import { cn } from "../lib/cn";
import { Stack } from "../layouts/Stack";

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
    <section className={cn(className)}>
      <Stack gap={4}>
        <h2 className="text-foreground text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h2>
        {children}
      </Stack>
    </section>
  );
}
