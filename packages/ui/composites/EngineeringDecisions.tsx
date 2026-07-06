import type { EngineeringCallout } from "@developer-os/types";

import { SectionLabel } from "./SectionLabel";

export interface EngineeringDecisionsProps {
  callouts: EngineeringCallout[];
}

export function EngineeringDecisions({ callouts }: EngineeringDecisionsProps) {
  if (callouts.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-4 sm:gap-5">
      <SectionLabel className="mb-0">Engineering Decisions</SectionLabel>
      <ul className="project-list">
        {callouts.map((callout) => (
          <li key={callout.title} className="project-list-item">
            <p className="text-foreground-muted font-mono text-[10px] uppercase tracking-[0.14em] sm:text-[11px]">
              {callout.title}
            </p>
            <p className="text-foreground mt-2 text-sm font-medium sm:text-[15px]">
              {callout.decision}
            </p>
            <p className="text-foreground-secondary mt-2 text-sm leading-relaxed sm:text-[15px]">
              {callout.rationale}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
