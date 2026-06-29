export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNavigation = [
  { label: "GitHub", href: "", external: true },
  { label: "Email", href: "", external: true },
  { label: "Resume", href: "/resume", external: false },
  { label: "Bundo", href: "/projects/bundo", external: false },
] as const;

export const futureNavigation = [
  { label: "Blog", href: "/blog", feature: "blog" },
  { label: "Speaking", href: "/speaking", feature: "speaking" },
  { label: "Notes", href: "/notes", feature: "notes" },
  { label: "Open Source", href: "/open-source", feature: "openSource" },
] as const;

export type PrimaryNavigation = typeof primaryNavigation;
export type FooterNavigation = typeof footerNavigation;
