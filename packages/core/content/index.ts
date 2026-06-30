import {
  bundoProject,
  hero as heroContent,
  homeCta,
  pizzaOrderingProject,
  profile,
  realTimeChatProject,
  seo,
  social,
  techStackGroups,
  trustMetrics,
  experience,
} from "@developer-os/platform/content";
import {
  CallToActionContentSchema,
  ExperienceSchema,
  FeaturedProjectShowcaseSchema,
  HeroContentSchema,
  ProfileSchema,
  ProjectPreviewSchema,
  TechStackGroupSchema,
  TrustMetricSchema,
} from "@developer-os/platform/schemas";
import type {
  CallToActionContent,
  ExperienceEntry,
  FeaturedProjectShowcase,
  HeroContent,
  HomePageData,
  ProjectPreview,
  TechStackGroup,
  TrustMetric,
} from "@developer-os/types";

import { sortExperience } from "../formatting";
import { validateContent } from "../validation";

export function getHero(): HeroContent {
  const hero: HeroContent = {
    name: profile.name,
    title: profile.title,
    headline: heroContent.headline,
    supportingParagraph: heroContent.supportingParagraph,
    primaryCta: heroContent.primaryCta,
    secondaryCta: heroContent.secondaryCta,
    githubUrl: social.github,
  };

  return validateContent(HeroContentSchema, hero, "hero content");
}

export function getTrustMetrics(): TrustMetric[] {
  return validateContent(TrustMetricSchema.array(), trustMetrics, "trust metrics");
}

export function getFeaturedProject(): FeaturedProjectShowcase {
  const featured = {
    ...bundoProject,
    caseStudyHref: bundoProject.caseStudyHref,
  };

  return validateContent(FeaturedProjectShowcaseSchema, featured, "featured project");
}

export function getExperience(): ExperienceEntry[] {
  const validated = validateContent(ExperienceSchema, experience, "experience");
  return sortExperience(validated);
}

export function getTechStack(): TechStackGroup[] {
  return validateContent(TechStackGroupSchema.array(), techStackGroups, "tech stack");
}

export function getSelectedProjects(): ProjectPreview[] {
  const previews: ProjectPreview[] = [
    {
      slug: bundoProject.slug,
      title: bundoProject.title,
      summary: bundoProject.summary,
      technologies: [...bundoProject.technologies],
      featured: bundoProject.featured,
      liveUrl: bundoProject.liveUrl,
      href: bundoProject.caseStudyHref,
      imageAlt: `${bundoProject.title} preview`,
    },
    {
      slug: realTimeChatProject.slug,
      title: realTimeChatProject.title,
      summary: realTimeChatProject.summary,
      technologies: [...realTimeChatProject.technologies],
      featured: realTimeChatProject.featured,
      href: realTimeChatProject.href,
      imageAlt: realTimeChatProject.imageAlt,
    },
    {
      slug: pizzaOrderingProject.slug,
      title: pizzaOrderingProject.title,
      summary: pizzaOrderingProject.summary,
      technologies: [...pizzaOrderingProject.technologies],
      featured: pizzaOrderingProject.featured,
      href: pizzaOrderingProject.href,
      imageAlt: pizzaOrderingProject.imageAlt,
    },
  ];

  return previews.map((preview, index) =>
    validateContent(ProjectPreviewSchema, preview, `selected project ${index + 1}`),
  );
}

export function getHomeCta(): CallToActionContent {
  return validateContent(CallToActionContentSchema, homeCta, "home CTA");
}

export function getProfile() {
  return validateContent(ProfileSchema, profile, "profile");
}

export function getHomePageData(): HomePageData {
  return {
    hero: getHero(),
    trustMetrics: getTrustMetrics(),
    featuredProject: getFeaturedProject(),
    experience: getExperience(),
    techStack: getTechStack(),
    selectedProjects: getSelectedProjects(),
    cta: getHomeCta(),
  };
}

export function getHomeSeo() {
  return seo;
}
