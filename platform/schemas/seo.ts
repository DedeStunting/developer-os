import { z } from "zod";

export const SeoSchema = z.object({
  title: z.string(),
  description: z.string(),
  url: z.string().url().or(z.literal("")),
});

export type Seo = z.infer<typeof SeoSchema>;
