import type { ExperienceEntry } from "@developer-os/types";

function sortKey(entry: ExperienceEntry): string {
  return entry.end ?? "9999-12";
}

export function sortExperience(entries: ExperienceEntry[]): ExperienceEntry[] {
  return [...entries].sort((a, b) => sortKey(b).localeCompare(sortKey(a)));
}

export function formatExperienceDate(date: string | null): string {
  if (!date) {
    return "Present";
  }

  const [year, month] = date.split("-");

  if (!year || !month) {
    return date;
  }

  const formatter = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" });
  return formatter.format(new Date(Number(year), Number(month) - 1));
}

export function formatExperienceRange(start: string, end: string | null): string {
  return `${formatExperienceDate(start)} — ${formatExperienceDate(end)}`;
}

export function flattenSkillGroups(
  groups: Array<{ category: string; items: readonly string[] | string[] }>,
): string[] {
  return groups.flatMap((group) => group.items);
}

export function groupSkillsByCategory(
  groups: Array<{ category: string; items: readonly string[] | string[] }>,
): Record<string, string[]> {
  return Object.fromEntries(groups.map((group) => [group.category, [...group.items]]));
}
