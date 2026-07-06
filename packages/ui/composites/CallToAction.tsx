import type { CallToActionContent } from "@developer-os/types";

import { Stack } from "../layouts/Stack";
import { ButtonLink } from "../primitives/ButtonLink";

export interface CallToActionProps {
  content: CallToActionContent;
}

export function CallToAction({ content }: CallToActionProps) {
  return (
    <div className="border-border bg-background-subtle rounded-2xl border px-5 py-8 text-center sm:px-6 sm:py-10 md:px-10 md:py-12">
      <Stack gap={6} className="items-center">
        <h2 className="text-foreground max-w-2xl text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
          {content.heading}
        </h2>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
          <ButtonLink href={content.primaryAction.href} size="lg" className="w-full sm:w-auto">
            {content.primaryAction.label}
          </ButtonLink>
          <ButtonLink
            href={content.secondaryAction.href}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            {content.secondaryAction.label}
          </ButtonLink>
        </div>
      </Stack>
    </div>
  );
}
