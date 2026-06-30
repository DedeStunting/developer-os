import type { EngineeringCallout } from "@developer-os/types";

import { Stack } from "../layouts/Stack";

export interface EngineeringDecisionsProps {
  callouts: EngineeringCallout[];
}

export function EngineeringDecisions({ callouts }: EngineeringDecisionsProps) {
  if (callouts.length === 0) {
    return null;
  }

  return (
    <aside className="border-border bg-background-subtle rounded-2xl border p-6 md:p-8">
      <Stack gap={4}>
        <h2 className="text-foreground text-xl font-semibold">Engineering Decisions</h2>
        <div className="grid gap-4">
          {callouts.map((callout) => (
            <div
              key={callout.title}
              className="border-border border-t pt-4 first:border-t-0 first:pt-0"
            >
              <p className="text-foreground-muted text-xs font-semibold uppercase tracking-wide">
                {callout.title}
              </p>
              <p className="text-foreground mt-2 text-sm font-medium">{callout.decision}</p>
              <p className="text-foreground-secondary mt-2 text-sm leading-relaxed">
                {callout.rationale}
              </p>
            </div>
          ))}
        </div>
      </Stack>
    </aside>
  );
}
