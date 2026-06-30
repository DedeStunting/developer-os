import type { Resume, ResumeSeo } from "@developer-os/types";

export function buildPersonJsonLd(resume: Resume, seo: ResumeSeo) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: resume.profile.name,
    jobTitle: seo.jobTitle,
    email: resume.profile.email || undefined,
    url: resume.profile.portfolio,
    sameAs: seo.sameAs,
    knowsAbout: seo.knowsAbout,
    worksFor: seo.worksFor
      ? {
          "@type": "Organization",
          name: seo.worksFor.name,
          url: seo.worksFor.url,
        }
      : undefined,
  };
}
