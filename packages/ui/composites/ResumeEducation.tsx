import type { EducationEntry } from "@developer-os/types";

import { Stack } from "../layouts/Stack";

export interface ResumeEducationProps {
  entries: EducationEntry[];
}

export function ResumeEducation({ entries }: ResumeEducationProps) {
  if (entries.length === 0) {
    return null;
  }

  return (
    <Stack gap={4}>
      {entries.map((entry) => (
        <article key={`${entry.institution}-${entry.graduationDate}`}>
          <Stack gap={2}>
            <h3 className="text-foreground text-base font-semibold">{entry.institution}</h3>
            <p className="text-foreground-secondary text-sm">
              {entry.degree}
              {entry.field ? `, ${entry.field}` : ""}
            </p>
            <p className="text-foreground-muted text-sm">{entry.graduationDate}</p>
          </Stack>
        </article>
      ))}
    </Stack>
  );
}
