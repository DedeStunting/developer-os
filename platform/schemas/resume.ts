import { z } from "zod";

import { EducationSchema } from "./education";
import { ExperienceSchema } from "./experience";
import { TechStackGroupSchema } from "./home";
import { ProfileSchema } from "./profile";

export const ResumeProjectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  href: z.string(),
  featured: z.boolean(),
});

export const ResumeSchema = z.object({
  profile: ProfileSchema,
  experience: ExperienceSchema,
  education: EducationSchema,
  skillGroups: z.array(TechStackGroupSchema),
  projects: z.array(ResumeProjectSchema),
});

export const ResumeSeoSchema = z.object({
  title: z.string(),
  description: z.string(),
  jobTitle: z.string(),
  organization: z.string(),
  sameAs: z.array(z.string().url()),
  worksFor: z
    .object({
      name: z.string(),
      url: z.string().url().optional(),
    })
    .optional(),
  knowsAbout: z.array(z.string()),
});

export type ResumeProject = z.infer<typeof ResumeProjectSchema>;
export type Resume = z.infer<typeof ResumeSchema>;
export type ResumeSeo = z.infer<typeof ResumeSeoSchema>;
