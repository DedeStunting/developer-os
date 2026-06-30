import { describe, expect, it } from "vitest";

import type { ExperienceEntry } from "@developer-os/types";

import { formatExperienceRange, sortExperience } from "./index";

const entries: ExperienceEntry[] = [
  {
    company: "Older Co",
    role: "Engineer",
    startDate: "2020-01",
    endDate: "2022-01",
    description: "Earlier role",
  },
  {
    company: "Current Co",
    role: "Senior Engineer",
    startDate: "2024-01",
    endDate: null,
    description: "Current role",
  },
  {
    company: "Middle Co",
    role: "Engineer",
    startDate: "2022-02",
    endDate: "2023-12",
    description: "Middle role",
  },
];

describe("sortExperience", () => {
  it("sorts entries with current roles first", () => {
    const sorted = sortExperience(entries);
    expect(sorted.map((entry) => entry.company)).toEqual(["Current Co", "Middle Co", "Older Co"]);
  });
});

describe("formatExperienceRange", () => {
  it("formats a date range with present end date", () => {
    expect(formatExperienceRange("2024-03", null)).toBe("Mar 2024 — Present");
  });
});
