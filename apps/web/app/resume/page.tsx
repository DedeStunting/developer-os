import type { Metadata } from "next";
import Script from "next/script";

import { buildPersonJsonLd } from "@developer-os/core/seo";
import { getResume, getResumeSeo } from "@developer-os/core/content";

import { ResumePageView } from "@/features/resume";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const seo = getResumeSeo();

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "profile",
    },
    twitter: {
      card: "summary",
      title: seo.title,
      description: seo.description,
    },
  };
}

export default function ResumePage() {
  const resume = getResume();
  const seo = getResumeSeo();
  const personJsonLd = buildPersonJsonLd(resume, seo);

  return (
    <>
      <Script
        id="resume-person-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <ResumePageView resume={resume} />
    </>
  );
}
