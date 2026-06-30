import {
  hero as heroContent,
  homeCta,
  profile,
  seo,
  social,
  techStackGroups,
  trustMetrics,
  experience,
  bundoProject,
} from "@developer-os/platform/content";
import {
  CallToActionContentSchema,
  ExperienceSchema,
  FeaturedProjectShowcaseSchema,
  HeroContentSchema,
  ProfileSchema,
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
import { getProjects } from "./projects";

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
  return getProjects();
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

export {
  getProject,
  getProjects,
  getProjectSlugs,
  getProjectsSeo,
  getRelatedProjects,
} from "./projects";
