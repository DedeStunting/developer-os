import { z } from "zod";

import { ProjectSchema } from "./project";

export const ActionLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export const HeroContentSchema = z.object({
  name: z.string(),
  title: z.string(),
  headline: z.string(),
  supportingParagraph: z.string(),
  primaryCta: ActionLinkSchema,
  secondaryCta: ActionLinkSchema,
  githubUrl: z.string(),
});

export const TrustMetricSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const TechStackGroupSchema = z.object({
  category: z.string(),
  items: z.array(z.string()),
});

export const FeaturedProjectShowcaseSchema = ProjectSchema.extend({
  architectureSummary: z.string(),
  challengesSolved: z.array(z.string()),
  caseStudyHref: z.string(),
});

export const ProjectPreviewSchema = ProjectSchema.extend({
  href: z.string(),
  external: z.boolean().optional(),
  imageAlt: z.string().optional(),
});

export const CallToActionContentSchema = z.object({
  heading: z.string(),
  primaryAction: ActionLinkSchema,
  secondaryAction: ActionLinkSchema,
});

export type ActionLink = z.infer<typeof ActionLinkSchema>;
export type HeroContent = z.infer<typeof HeroContentSchema>;
export type TrustMetric = z.infer<typeof TrustMetricSchema>;
export type TechStackGroup = z.infer<typeof TechStackGroupSchema>;
export type FeaturedProjectShowcase = z.infer<typeof FeaturedProjectShowcaseSchema>;
export type ProjectPreview = z.infer<typeof ProjectPreviewSchema>;
export type CallToActionContent = z.infer<typeof CallToActionContentSchema>;
