import { z } from "zod";

export const EducationEntrySchema = z.object({
  institution: z.string(),
  degree: z.string(),
  field: z.string(),
  graduationDate: z.string(),
});

export const EducationSchema = z.array(EducationEntrySchema);

export type EducationEntry = z.infer<typeof EducationEntrySchema>;
export type Education = z.infer<typeof EducationSchema>;
