import type { ExperienceEntry } from "@developer-os/types";

import { formatExperienceRange } from "../lib/formatting";

export interface ResumeExperienceProps {
  entries: ExperienceEntry[];
}

export function ResumeExperience({ entries }: ResumeExperienceProps) {
  return (
    <ul className="flex flex-col gap-9 sm:gap-10">
      {entries.map((entry) => (
        <li key={`${entry.company}-${entry.start}`}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div>
              <h3 className="text-foreground text-base font-semibold sm:text-[17px]">
                {entry.title}
              </h3>
              <p className="text-foreground-secondary mt-1 text-sm sm:text-[15px]">
                {entry.company}
                {entry.location ? ` · ${entry.location}` : ""}
              </p>
            </div>
            <p className="text-foreground-muted shrink-0 text-sm sm:text-[15px]">
              {formatExperienceRange(entry.start, entry.end)}
            </p>
          </div>

          <ul className="text-foreground-secondary mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed sm:mt-4 sm:text-[15px]">
            {entry.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          {entry.technologies && entry.technologies.length > 0 ? (
            <p className="text-foreground-muted mt-3 font-mono text-[10px] uppercase tracking-[0.14em] sm:mt-4 sm:text-[11px]">
              {entry.technologies.join(" · ")}
            </p>
          ) : null}

          {entry.links && entry.links.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 sm:mt-4">
              {entry.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-secondary hover:text-foreground focus-visible:ring-accent inline-flex min-h-11 items-center text-sm underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-none focus-visible:ring-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
