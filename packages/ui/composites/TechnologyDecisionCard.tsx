import type { TechnologyDecision } from "@developer-os/types";

import { SectionLabel } from "./SectionLabel";

export interface TechnologyDecisionCardProps {
  decision: TechnologyDecision;
}

export function TechnologyDecisionCard({ decision }: TechnologyDecisionCardProps) {
  return (
    <article className="project-list-item">
      <h3 className="text-foreground text-sm font-semibold sm:text-[15px]">{decision.name}</h3>
      <p className="text-foreground-secondary mt-2 text-sm leading-relaxed sm:text-[15px]">
        {decision.reason}
      </p>
    </article>
  );
}

export interface TechnologyDecisionsProps {
  decisions: TechnologyDecision[];
}

export function TechnologyDecisions({ decisions }: TechnologyDecisionsProps) {
  if (decisions.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-4 sm:gap-5">
      <SectionLabel className="mb-0">Technology</SectionLabel>
      <ul className="project-list">
        {decisions.map((decision) => (
          <li key={decision.name}>
            <TechnologyDecisionCard decision={decision} />
          </li>
        ))}
      </ul>
    </section>
  );
}
