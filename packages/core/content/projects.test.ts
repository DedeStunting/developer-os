import { describe, expect, it } from "vitest";

import { getProject, getProjects, getRelatedProjects } from "./projects";

describe("project loaders", () => {
  it("returns projects in display order", () => {
    const projects = getProjects();

    expect(projects.map((project) => project.slug)).toEqual([
      "bundo",
      "real-time-chat",
      "pizza-ordering-platform",
    ]);
  });

  it("loads a validated case study by slug", () => {
    const project = getProject("bundo");

    expect(project?.metadata.title).toBe("Bundo");
    expect(project?.sections.overview).toContain("marketplace platform");
    expect(project?.metadata.engineeringCallouts?.length).toBeGreaterThan(0);
  });

  it("returns null for unknown slugs", () => {
    expect(getProject("missing-project")).toBeNull();
  });

  it("returns related projects excluding traversal order", () => {
    const related = getRelatedProjects("bundo", 2);

    expect(related.map((project) => project.slug)).toEqual([
      "real-time-chat",
      "pizza-ordering-platform",
    ]);
  });
});
