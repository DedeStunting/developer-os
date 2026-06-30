import { z } from "zod";

export const ProfileSchema = z.object({
  name: z.string(),
  title: z.string(),
  email: z.string().email().or(z.literal("")),
  location: z.string(),
  summary: z.string(),
  github: z.string().url().optional(),
  portfolio: z.string().url().optional(),
});

export type Profile = z.infer<typeof ProfileSchema>;
