import { z } from "zod";

export const ExperienceEntrySchema = z.object({
  company: z.string(),
  role: z.string(),
  startDate: z.string(),
  endDate: z.string().nullable(),
  description: z.string(),
});

export const ExperienceSchema = z.array(ExperienceEntrySchema);

export type ExperienceEntry = z.infer<typeof ExperienceEntrySchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
