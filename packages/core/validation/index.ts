import type { ZodSchema } from "zod";

export function validateContent<T>(schema: ZodSchema<T>, data: unknown, label: string): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    throw new Error(`Invalid ${label}: ${result.error.message}`);
  }

  return result.data;
}
