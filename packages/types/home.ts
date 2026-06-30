import type { ExperienceEntry, Project } from "./index";

export interface ActionLink {
  label: string;
  href: string;
}

export interface HeroContent {
  name: string;
  title: string;
  headline: string;
  supportingParagraph: string;
  primaryCta: ActionLink;
  secondaryCta: ActionLink;
  githubUrl: string;
}

export interface TrustMetric {
  label: string;
  value: string;
}

export interface TechStackGroup {
  category: string;
  items: string[];
}

export interface FeaturedProjectShowcase extends Project {
  architectureSummary: string;
  challengesSolved: string[];
  caseStudyHref: string;
}

export interface ProjectPreview extends Project {
  href: string;
  imageAlt?: string;
}

export interface CallToActionContent {
  heading: string;
  primaryAction: ActionLink;
  secondaryAction: ActionLink;
}

export interface HomePageData {
  hero: HeroContent;
  trustMetrics: TrustMetric[];
  featuredProject: FeaturedProjectShowcase;
  experience: ExperienceEntry[];
  techStack: TechStackGroup[];
  selectedProjects: ProjectPreview[];
  cta: CallToActionContent;
}
