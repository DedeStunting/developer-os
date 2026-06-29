import { z } from "zod";

export const ProjectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  technologies: z.array(z.string()),
  liveUrl: z.string().url().optional(),
  repositoryUrl: z.string().url().optional(),
  featured: z.boolean(),
});

export type Project = z.infer<typeof ProjectSchema>;
