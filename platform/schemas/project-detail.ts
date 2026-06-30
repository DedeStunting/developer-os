import { z } from "zod";

import { ProjectSchema } from "./project";

export const TechnologyDecisionSchema = z.object({
  name: z.string(),
  reason: z.string(),
});

export const EngineeringCalloutSchema = z.object({
  title: z.string(),
  decision: z.string(),
  rationale: z.string(),
});

export const ApiEndpointSchema = z.object({
  method: z.enum(["GET", "POST", "PUT", "PATCH", "DELETE"]),
  path: z.string(),
  description: z.string(),
});

export const SecurityTopicSchema = z.object({
  topic: z.string(),
  approach: z.string(),
});

export const ProjectSeoSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
});

export const ProjectMetadataSchema = ProjectSchema.extend({
  order: z.number().int().positive(),
  caseStudyHref: z.string(),
  imageAlt: z.string(),
  repositoryAccess: z.enum(["public", "private"]).optional(),
  duration: z.string().optional(),
  role: z.string().optional(),
  teamSize: z.string().optional(),
  architectureSummary: z.string().optional(),
  challengesSolved: z.array(z.string()).optional(),
  technologyDecisions: z.array(TechnologyDecisionSchema).optional(),
  engineeringCallouts: z.array(EngineeringCalloutSchema).optional(),
  apiEndpoints: z.array(ApiEndpointSchema).optional(),
  securityTopics: z.array(SecurityTopicSchema).optional(),
  seo: ProjectSeoSchema.optional(),
});

export const ProjectCaseStudySectionsSchema = z.object({
  overview: z.string(),
  businessProblem: z.string(),
  technicalChallenges: z.string(),
  architecture: z.string(),
  databaseDesign: z.string(),
  apiDesign: z.string(),
  security: z.string(),
  performance: z.string(),
  lessons: z.string(),
  future: z.string(),
});

export const ProjectCaseStudySchema = z.object({
  metadata: ProjectMetadataSchema,
  sections: ProjectCaseStudySectionsSchema,
});

export type ProjectMetadata = z.infer<typeof ProjectMetadataSchema>;
export type ProjectCaseStudy = z.infer<typeof ProjectCaseStudySchema>;
