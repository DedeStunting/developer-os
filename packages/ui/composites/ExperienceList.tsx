import type { ExperienceEntry } from "@developer-os/types";

import { formatExperienceRange } from "../lib/formatting";

export interface ExperienceListProps {
  entries: ExperienceEntry[];
}

export function ExperienceList({ entries }: ExperienceListProps) {
  return (
    <ul className="experience-list">
      {entries.map((entry) => (
        <li key={`${entry.company}-${entry.start}`} className="experience-entry">
          <h3 className="text-foreground text-base font-semibold leading-snug sm:text-[17px]">
            {entry.title}
          </h3>
          <p className="text-foreground-secondary text-sm leading-snug sm:text-[15px]">
            {entry.company}
            {entry.location ? ` · ${entry.location}` : ""}
          </p>
          <p className="text-foreground-muted text-sm leading-snug sm:text-[15px]">
            {formatExperienceRange(entry.start, entry.end)}
          </p>
        </li>
      ))}
    </ul>
  );
}
