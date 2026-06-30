import {
  hero as heroContent,
  homeCta,
  profile,
  seo,
  social,
  trustMetrics,
  bundoProject,
} from "@developer-os/platform/content";
import {
  CallToActionContentSchema,
  FeaturedProjectShowcaseSchema,
  HeroContentSchema,
  TrustMetricSchema,
} from "@developer-os/platform/schemas";
import type {
  CallToActionContent,
  FeaturedProjectShowcase,
  HeroContent,
  HomePageData,
  ProjectPreview,
  TechStackGroup,
  TrustMetric,
} from "@developer-os/types";

import { validateContent } from "../validation";
import { getProjects } from "./projects";
import { getExperience, getSkillGroups } from "./resume";

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

export function getTechStack(): TechStackGroup[] {
  return getSkillGroups();
}

export function getSelectedProjects(): ProjectPreview[] {
  return getProjects();
}

export function getHomeCta(): CallToActionContent {
  return validateContent(CallToActionContentSchema, homeCta, "home CTA");
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
  getEducation,
  getExperience,
  getProfile,
  getResume,
  getResumeProjects,
  getResumeSeo,
  getResumeSkillGroupsByCategory,
  getSkillGroups,
} from "./resume";

export {
  getProject,
  getProjects,
  getProjectSlugs,
  getProjectsSeo,
  getRelatedProjects,
} from "./projects";
