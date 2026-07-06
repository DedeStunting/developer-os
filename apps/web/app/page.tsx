import type { Metadata } from "next";

import { getHomePageData, getHomeSeo } from "@developer-os/core/content";

import { HomePageView } from "@/features/home";

export function generateMetadata(): Metadata {
  const homeSeo = getHomeSeo();

  return {
    title: homeSeo.title,
    description: homeSeo.description,
    ...(homeSeo.url ? { alternates: { canonical: homeSeo.url } } : {}),
    openGraph: {
      title: homeSeo.title,
      description: homeSeo.description,
      type: "website",
      ...(homeSeo.ogImage ? { images: [homeSeo.ogImage] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: homeSeo.title,
      description: homeSeo.description,
      ...(homeSeo.ogImage ? { images: [homeSeo.ogImage] } : {}),
    },
  };
}

export default function HomePage() {
  const data = getHomePageData();

  return <HomePageView data={data} />;
}
