import { describe, expect, it } from "vitest";

import type { ExperienceEntry } from "@developer-os/types";

import { formatExperienceRange, groupSkillsByCategory, sortExperience } from "./index";

const entries: ExperienceEntry[] = [
  {
    company: "Older Co",
    title: "Engineer",
    start: "2020-01",
    end: "2022-01",
    highlights: ["Earlier role"],
  },
  {
    company: "Current Co",
    title: "Senior Engineer",
    start: "2024-01",
    end: null,
    highlights: ["Current role"],
  },
  {
    company: "Middle Co",
    title: "Engineer",
    start: "2022-02",
    end: "2023-12",
    highlights: ["Middle role"],
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

describe("groupSkillsByCategory", () => {
  it("groups skills by category name", () => {
    const grouped = groupSkillsByCategory([
      { category: "Backend", items: ["Node.js"] },
      { category: "Databases", items: ["PostgreSQL"] },
    ]);

    expect(grouped).toEqual({
      Backend: ["Node.js"],
      Databases: ["PostgreSQL"],
    });
  });
});
