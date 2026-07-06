import { social } from "@developer-os/config/social";
import type { HeroContent } from "@developer-os/types";

import { SocialLinks, type SocialLink } from "./SocialLinks";

export interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  const socialLinks: SocialLink[] = [
    { label: "GitHub", href: content.githubUrl, external: true, icon: "github" },
    { label: "X", href: social.twitter, external: true },
    { label: "Email", href: social.email },
  ];

  return (
    <header className="hero-header">
      <h1 className="hero-name text-foreground font-bold">{content.name}</h1>
      <p className="hero-title text-foreground-muted text-[10px] font-medium uppercase tracking-[0.24em] sm:text-[11px]">
        {content.title}
      </p>
      <SocialLinks links={socialLinks} />
      <p className="hero-about text-foreground-secondary max-w-[36rem] text-sm leading-relaxed sm:text-[15px]">
        {content.supportingParagraph}
      </p>
    </header>
  );
}
