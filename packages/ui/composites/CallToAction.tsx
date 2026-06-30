import type { CallToActionContent } from "@developer-os/types";

import { Stack } from "../layouts/Stack";
import { ButtonLink } from "../primitives/ButtonLink";

export interface CallToActionProps {
  content: CallToActionContent;
}

export function CallToAction({ content }: CallToActionProps) {
  return (
    <div className="border-border bg-background-subtle rounded-2xl border px-6 py-10 text-center md:px-10 md:py-12">
      <Stack gap={6} className="items-center">
        <h2 className="text-foreground max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
          {content.heading}
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <ButtonLink href={content.primaryAction.href} size="lg">
            {content.primaryAction.label}
          </ButtonLink>
          <ButtonLink href={content.secondaryAction.href} variant="secondary" size="lg">
            {content.secondaryAction.label}
          </ButtonLink>
        </div>
      </Stack>
    </div>
  );
}
