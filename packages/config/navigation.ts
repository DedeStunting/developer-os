import { resumeDownload } from "./resume";

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
] as const;

export const footerNavigation = [
  { label: "Download PDF", href: resumeDownload.url, external: false },
  { label: "Bundo", href: "https://bundo.ng", external: true },
] as const;

export const futureNavigation = [
  { label: "Blog", href: "/blog", feature: "blog" },
  { label: "Speaking", href: "/speaking", feature: "speaking" },
  { label: "Notes", href: "/notes", feature: "notes" },
  { label: "Open Source", href: "/open-source", feature: "openSource" },
] as const;

export type PrimaryNavigation = typeof primaryNavigation;
export type FooterNavigation = typeof footerNavigation;
