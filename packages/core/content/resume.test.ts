import { describe, expect, it } from "vitest";

import { getResume, getResumeSeo, getResumeSkillGroupsByCategory } from "./resume";

describe("getResume", () => {
  it("loads validated resume content from a single source", () => {
    const resume = getResume();

    expect(resume.profile.name).toBe("Chiedu David");
    expect(resume.experience[0]?.company).toBe("Bundo Tech Inc.");
    expect(resume.experience[0]?.highlights.length).toBeGreaterThan(0);
    expect(resume.skillGroups).toHaveLength(4);
    expect(resume.projects[0]?.slug).toBe("bundo");
    expect(resume.projects).toHaveLength(3);
  });
});

describe("getResumeSeo", () => {
  it("includes person schema fields", () => {
    const seo = getResumeSeo();

    expect(seo.jobTitle).toBe("Backend Software Engineer");
    expect(seo.sameAs).toContain("https://github.com/chiedudavid");
    expect(seo.knowsAbout.length).toBeGreaterThan(0);
  });
});

describe("getResumeSkillGroupsByCategory", () => {
  it("groups resume skills by category", () => {
    const grouped = getResumeSkillGroupsByCategory();

    expect(grouped.Backend).toContain("Node.js");
    expect(grouped.Databases).toContain("PostgreSQL");
  });
});
