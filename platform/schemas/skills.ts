import { z } from "zod";

export const SkillsSchema = z.object({
  languages: z.array(z.string()),
  frameworks: z.array(z.string()),
  tools: z.array(z.string()),
});

export type Skills = z.infer<typeof SkillsSchema>;
