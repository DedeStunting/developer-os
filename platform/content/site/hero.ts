import { resumeDownload } from "@developer-os/config/resume";

export const hero = {
  headline:
    "Backend Software Engineer building scalable products, developer tools, and production systems.",
  supportingParagraph:
    "Backend engineer focused on shipping reliable production systems, from API design and data modeling to cloud deployment and operational readiness.",
  primaryCta: {
    label: "Projects",
    href: "/#projects",
  },
  secondaryCta: {
    label: "Download PDF",
    href: resumeDownload.url,
  },
} as const;
