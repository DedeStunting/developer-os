import { describe, expect, it } from "vitest";

import { getProject, getProjects, getRelatedProjects } from "./projects";

describe("project loaders", () => {
  it("returns projects in display order", () => {
    const projects = getProjects();

    expect(projects.map((project) => project.slug)).toEqual([
      "bundo",
      "pizza-ordering-platform",
      "real-time-chat",
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
      "pizza-ordering-platform",
      "real-time-chat",
    ]);
  });

  it("links projects to live sites or repositories", () => {
    const projects = getProjects();
    const bundo = projects.find((project) => project.slug === "bundo");
    const chat = projects.find((project) => project.slug === "real-time-chat");

    expect(bundo?.href).toBe("https://bundo.ng");
    expect(bundo?.external).toBe(true);
    expect(bundo?.logoUrl).toBe("/projects/bundo-logo.png");
    expect(chat?.href).toBe("https://github.com/DedeStunting/real-time-chat");
    expect(chat?.external).toBe(true);
  });
});
