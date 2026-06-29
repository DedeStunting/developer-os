import { z } from "zod";

export const NavigationItemSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export const NavigationSchema = z.array(NavigationItemSchema);

export type NavigationItem = z.infer<typeof NavigationItemSchema>;
export type Navigation = z.infer<typeof NavigationSchema>;
