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
          key={`${entry.company}-${entry.start}`}
          className="border-border bg-background-subtle rounded-xl border p-6"
        >
          <Stack gap={2}>
            <div>
              <h3 className="text-foreground text-lg font-semibold">{entry.company}</h3>
              <p className="text-foreground-secondary text-sm font-medium">{entry.title}</p>
            </div>
            <p className="text-foreground-muted text-sm">
              {formatExperienceRange(entry.start, entry.end)}
            </p>
            <ul className="text-foreground-secondary list-disc space-y-1 pl-5 text-sm leading-relaxed">
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </Stack>
        </li>
      ))}
    </ol>
  );
}
