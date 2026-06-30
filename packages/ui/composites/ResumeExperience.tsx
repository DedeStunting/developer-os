import type { ExperienceEntry } from "@developer-os/types";

import { formatExperienceRange } from "../lib/formatting";

import { Stack } from "../layouts/Stack";

export interface ResumeExperienceProps {
  entries: ExperienceEntry[];
}

export function ResumeExperience({ entries }: ResumeExperienceProps) {
  return (
    <Stack gap={8}>
      {entries.map((entry) => (
        <article key={`${entry.company}-${entry.start}`}>
          <Stack gap={2}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-foreground text-lg font-semibold">{entry.title}</h3>
                <p className="text-foreground-secondary text-sm font-medium">
                  {entry.company}
                  {entry.location ? ` · ${entry.location}` : ""}
                </p>
              </div>
              <p className="text-foreground-muted shrink-0 text-sm">
                {formatExperienceRange(entry.start, entry.end)}
              </p>
            </div>

            <ul className="text-foreground-secondary list-disc space-y-2 pl-5 text-sm leading-relaxed">
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            {entry.technologies && entry.technologies.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {entry.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="bg-background-muted text-foreground-secondary rounded-md px-2 py-1 text-xs font-medium"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            ) : null}

            {entry.links && entry.links.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {entry.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm font-medium hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </Stack>
        </article>
      ))}
    </Stack>
  );
}
