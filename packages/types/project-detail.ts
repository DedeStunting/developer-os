import type { ProjectPreview } from "./home";

export interface TechnologyDecision {
  name: string;
  reason: string;
}

export interface EngineeringCallout {
  title: string;
  decision: string;
  rationale: string;
}

export interface ApiEndpoint {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  description: string;
}

export interface SecurityTopic {
  topic: string;
  approach: string;
}

export interface ProjectSeo {
  title?: string;
  description?: string;
}

export interface ProjectMetadata {
  slug: string;
  title: string;
  summary: string;
  technologies: string[];
  featured: boolean;
  order: number;
  caseStudyHref: string;
  imageAlt: string;
  liveUrl?: string;
  repositoryUrl?: string;
  repositoryAccess?: "public" | "private";
  duration?: string;
  role?: string;
  teamSize?: string;
  architectureSummary?: string;
  challengesSolved?: string[];
  technologyDecisions?: TechnologyDecision[];
  engineeringCallouts?: EngineeringCallout[];
  apiEndpoints?: ApiEndpoint[];
  securityTopics?: SecurityTopic[];
  seo?: ProjectSeo;
}

export interface ProjectCaseStudySections {
  overview: string;
  businessProblem: string;
  technicalChallenges: string;
  architecture: string;
  databaseDesign: string;
  apiDesign: string;
  security: string;
  performance: string;
  lessons: string;
  future: string;
}

export interface ProjectCaseStudy {
  metadata: ProjectMetadata;
  sections: ProjectCaseStudySections;
}

export interface ProjectListPageData {
  projects: ProjectPreview[];
  seo: ProjectSeo;
}

export interface ProjectDetailPageData {
  project: ProjectCaseStudy;
  relatedProjects: ProjectPreview[];
}
