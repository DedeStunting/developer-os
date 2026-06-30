import { existsSync, readFileSync } from "node:fs";

import { getPlatformContentPath } from "../lib/platform-root";

export function readMdxFile(...segments: string[]): string {
  const filePath = getPlatformContentPath(...segments);

  if (!existsSync(filePath)) {
    return "";
  }

  return readFileSync(filePath, "utf8").trim();
}

export function readMdxSections<T extends Record<string, string>>(
  baseDir: string,
  sectionFiles: T,
): Record<keyof T, string> {
  const sections = {} as Record<keyof T, string>;

  for (const [key, filename] of Object.entries(sectionFiles)) {
    sections[key as keyof T] = readMdxFile(baseDir, filename);
  }

  return sections;
}

export function estimateReadingTime(content: string, wordsPerMinute = 200): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
