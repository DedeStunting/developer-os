import type { ExperienceEntry } from "@developer-os/types";

import { formatExperienceRange } from "../lib/formatting";

import { Stack } from "../layouts/Stack";

export interface TimelineProps {
  entries: ExperienceEntry[];
}

export function Timeline({ entries }: TimelineProps) {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {entries.map((entry) => (
        <li
          key={`${entry.company}-${entry.startDate}`}
          className="border-border bg-background-subtle rounded-xl border p-6"
        >
          <Stack gap={2}>
            <div>
              <h3 className="text-foreground text-lg font-semibold">{entry.company}</h3>
              <p className="text-foreground-secondary text-sm font-medium">{entry.role}</p>
            </div>
            <p className="text-foreground-muted text-sm">
              {formatExperienceRange(entry.startDate, entry.endDate)}
            </p>
            <p className="text-foreground-secondary text-sm leading-relaxed">{entry.description}</p>
          </Stack>
        </li>
      ))}
    </ol>
  );
}
