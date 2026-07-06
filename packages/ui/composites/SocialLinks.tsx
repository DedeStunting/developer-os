import { Github } from "lucide-react";

import { cn } from "../lib/cn";

export type SocialLinkIcon = "github";

export interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
  icon?: SocialLinkIcon;
}

export interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

function SocialLinkContent({ link }: { link: SocialLink }) {
  if (link.icon === "github") {
    return (
      <>
        <Github className="h-5 w-5" aria-hidden strokeWidth={1.75} />
        <span className="sr-only">{link.label}</span>
      </>
    );
  }

  return link.label;
}

export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <nav
      aria-label="Social links"
      className={cn("hero-social-links flex flex-wrap gap-x-5 gap-y-2", className)}
    >
      {links.map((link) => (
        <a
          key={`${link.label}-${link.href}`}
          href={link.href}
          aria-label={link.icon ? link.label : undefined}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className={cn(
            "text-foreground-secondary hover:text-foreground focus-visible:ring-accent inline-flex items-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 sm:text-[15px]",
            link.icon
              ? "rounded-sm p-0.5"
              : "underline decoration-transparent underline-offset-4 hover:decoration-current",
          )}
        >
          <SocialLinkContent link={link} />
        </a>
      ))}
    </nav>
  );
}
