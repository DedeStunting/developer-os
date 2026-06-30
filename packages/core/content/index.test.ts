import { describe, expect, it } from "vitest";

import { getHomePageData } from "./index";

describe("getHomePageData", () => {
  it("loads validated homepage content", () => {
    const data = getHomePageData();

    expect(data.hero.name).toBe("Chiedu David");
    expect(data.trustMetrics).toHaveLength(4);
    expect(data.featuredProject.slug).toBe("bundo");
    expect(data.selectedProjects).toHaveLength(3);
    expect(data.experience[0]?.company).toBe("Bundo Tech Inc.");
  });
});
