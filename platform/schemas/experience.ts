import { z } from "zod";

export const ExperienceLinkSchema = z.object({
  label: z.string(),
  href: z.string().url(),
});

export const ExperienceEntrySchema = z.object({
  company: z.string(),
  title: z.string(),
  location: z.string().optional(),
  start: z.string(),
  end: z.string().nullable(),
  highlights: z.array(z.string()).min(1),
  technologies: z.array(z.string()).optional(),
  links: z.array(ExperienceLinkSchema).optional(),
});

export const ExperienceSchema = z.array(ExperienceEntrySchema);

export type ExperienceEntry = z.infer<typeof ExperienceEntrySchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
