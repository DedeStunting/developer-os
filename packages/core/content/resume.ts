import {
  education,
  experience,
  profile,
  resumeProjectSummaries,
  resumeSeo,
  skillGroups,
} from "@developer-os/platform/content";
import {
  EducationSchema,
  ExperienceSchema,
  ProfileSchema,
  ResumeSchema,
  ResumeSeoSchema,
  TechStackGroupSchema,
} from "@developer-os/platform/schemas";
import type {
  Education,
  ExperienceEntry,
  Profile,
  Resume,
  ResumeProject,
  ResumeSeo,
  TechStackGroup,
} from "@developer-os/types";

import { groupSkillsByCategory, sortExperience } from "../formatting";
import { validateContent } from "../validation";
import { getProjects } from "./projects";

export function getProfile(): Profile {
  return validateContent(ProfileSchema, profile, "profile");
}

export function getExperience(): ExperienceEntry[] {
  const validated = validateContent(ExperienceSchema, experience, "experience");
  return sortExperience(validated);
}

export function getEducation(): Education {
  return validateContent(EducationSchema, education, "education");
}

export function getSkillGroups(): TechStackGroup[] {
  return validateContent(TechStackGroupSchema.array(), skillGroups, "skill groups");
}

export function getResumeProjects(): ResumeProject[] {
  return getProjects()
    .map((project) => ({
      slug: project.slug,
      title: project.title,
      summary:
        resumeProjectSummaries[project.slug as keyof typeof resumeProjectSummaries] ??
        project.summary,
      href: project.href,
      external: project.external,
      logoUrl: project.logoUrl,
      featured: project.featured,
    }))
    .sort((a, b) => {
      if (a.featured !== b.featured) {
        return a.featured ? -1 : 1;
      }

      return a.slug.localeCompare(b.slug);
    });
}

export function getResume(): Resume {
  return validateContent(
    ResumeSchema,
    {
      profile: getProfile(),
      experience: getExperience(),
      education: getEducation(),
      skillGroups: getSkillGroups(),
      projects: getResumeProjects(),
    },
    "resume",
  );
}

export function getResumeSeo(): ResumeSeo {
  return validateContent(ResumeSeoSchema, resumeSeo, "resume seo");
}

export function getResumeSkillGroupsByCategory(): Record<string, string[]> {
  return groupSkillsByCategory(getSkillGroups());
}
