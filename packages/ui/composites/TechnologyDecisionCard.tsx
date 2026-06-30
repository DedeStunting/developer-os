import type { TechnologyDecision } from "@developer-os/types";

import { Stack } from "../layouts/Stack";

export interface TechnologyDecisionCardProps {
  decision: TechnologyDecision;
}

export function TechnologyDecisionCard({ decision }: TechnologyDecisionCardProps) {
  return (
    <article className="border-border bg-background-subtle rounded-xl border p-5">
      <h3 className="text-foreground text-base font-semibold">{decision.name}</h3>
      <p className="text-foreground-secondary mt-2 text-sm leading-relaxed">{decision.reason}</p>
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
    <Stack gap={4}>
      <h2 className="text-foreground text-2xl font-semibold tracking-tight md:text-3xl">
        Technology Decisions
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {decisions.map((decision) => (
          <TechnologyDecisionCard key={decision.name} decision={decision} />
        ))}
      </div>
    </Stack>
  );
}
