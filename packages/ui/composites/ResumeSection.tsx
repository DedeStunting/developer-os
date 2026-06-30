import type { ReactNode } from "react";

import { Stack } from "../layouts/Stack";

export interface ResumeSectionProps {
  title: string;
  children: ReactNode;
}

export function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section>
      <Stack gap={4}>
        <h2 className="text-foreground border-border border-b pb-2 text-sm font-semibold uppercase tracking-widest">
          {title}
        </h2>
        {children}
      </Stack>
    </section>
  );
}
