import { Github } from "lucide-react";

import type { HeroContent } from "@developer-os/types";

import { Stack } from "../layouts/Stack";
import { ButtonLink } from "../primitives/ButtonLink";

export interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  return (
    <Stack gap={6}>
      <div className="flex flex-col gap-3">
        <p className="text-foreground-muted text-sm font-medium uppercase tracking-wide">
          {content.title}
        </p>
        <h1 className="text-foreground text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          {content.name}
        </h1>
        <p className="text-foreground max-w-3xl text-xl font-medium leading-snug md:text-2xl">
          {content.headline}
        </p>
      </div>

      <p className="text-foreground-secondary max-w-2xl text-lg leading-relaxed">
        {content.supportingParagraph}
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <ButtonLink href={content.primaryCta.href} size="lg">
          {content.primaryCta.label}
        </ButtonLink>
        <ButtonLink href={content.secondaryCta.href} variant="secondary" size="lg">
          {content.secondaryCta.label}
        </ButtonLink>
      </div>

      {content.githubUrl ? (
        <a
          href={content.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground-secondary hover:text-foreground focus-visible:ring-accent inline-flex w-fit items-center gap-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          <Github className="h-4 w-4" aria-hidden />
          <span>GitHub profile</span>
        </a>
      ) : null}
    </Stack>
  );
}
