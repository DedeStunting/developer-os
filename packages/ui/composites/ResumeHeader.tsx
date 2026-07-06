import { Github } from "lucide-react";

import type { Profile } from "@developer-os/types";

export interface ResumeHeaderProps {
  profile: Profile;
}

export function ResumeHeader({ profile }: ResumeHeaderProps) {
  const contactItems = [
    profile.email ? (
      <a
        key="email"
        href={`mailto:${profile.email}`}
        className="text-foreground-secondary hover:text-foreground focus-visible:ring-accent min-h-11 break-all underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-none focus-visible:ring-2"
      >
        {profile.email}
      </a>
    ) : null,
    profile.location ? (
      <span key="location" className="text-foreground-muted">
        {profile.location}
      </span>
    ) : null,
    profile.github ? (
      <a
        key="github"
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-foreground-secondary hover:text-foreground focus-visible:ring-accent inline-flex min-h-11 items-center transition-colors focus-visible:outline-none focus-visible:ring-2"
      >
        <Github className="h-5 w-5" aria-hidden strokeWidth={1.75} />
        <span className="sr-only">GitHub</span>
      </a>
    ) : null,
    profile.portfolio ? (
      <a
        key="portfolio"
        href={profile.portfolio}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground-secondary hover:text-foreground focus-visible:ring-accent min-h-11 underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-none focus-visible:ring-2"
      >
        Portfolio
      </a>
    ) : null,
  ].filter(Boolean);

  return (
    <header className="flex flex-col gap-5 sm:gap-6">
      <div className="flex flex-col gap-2 sm:gap-3">
        <h1 className="font-display text-foreground text-2xl font-normal tracking-tight sm:text-3xl md:text-4xl">
          {profile.name}
        </h1>
        <p className="text-foreground-muted text-[10px] font-medium uppercase tracking-[0.28em] sm:text-[11px]">
          {profile.title}
        </p>
      </div>

      {contactItems.length > 0 ? (
        <div className="hero-social-links flex flex-wrap items-center">{contactItems}</div>
      ) : null}

      <p className="text-foreground-secondary text-[15px] leading-relaxed sm:text-base md:leading-7">
        {profile.summary}
      </p>
    </header>
  );
}
