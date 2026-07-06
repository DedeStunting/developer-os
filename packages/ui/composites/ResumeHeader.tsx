import type { Profile } from "@developer-os/types";

import { Stack } from "../layouts/Stack";

export interface ResumeHeaderProps {
  profile: Profile;
}

export function ResumeHeader({ profile }: ResumeHeaderProps) {
  const contactItems = [
    profile.email ? (
      <a
        key="email"
        href={`mailto:${profile.email}`}
        className="hover:text-foreground break-all transition-colors"
      >
        {profile.email}
      </a>
    ) : null,
    profile.location ? <span key="location">{profile.location}</span> : null,
    profile.github ? (
      <a
        key="github"
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-foreground transition-colors"
      >
        GitHub
      </a>
    ) : null,
    profile.portfolio ? (
      <a
        key="portfolio"
        href={profile.portfolio}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-foreground transition-colors"
      >
        Portfolio
      </a>
    ) : null,
  ].filter(Boolean);

  return (
    <header>
      <Stack gap={4}>
        <div className="flex flex-col gap-2">
          <h1 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {profile.name}
          </h1>
          <p className="text-foreground-secondary text-base font-medium sm:text-lg">
            {profile.title}
          </p>
        </div>

        {contactItems.length > 0 ? (
          <p className="text-foreground-muted flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            {contactItems.map((item, index) => (
              <span key={index} className="inline-flex items-center gap-3">
                {index > 0 ? <span aria-hidden>·</span> : null}
                {item}
              </span>
            ))}
          </p>
        ) : null}

        <p className="text-foreground-secondary max-w-3xl text-base leading-relaxed">
          {profile.summary}
        </p>
      </Stack>
    </header>
  );
}
