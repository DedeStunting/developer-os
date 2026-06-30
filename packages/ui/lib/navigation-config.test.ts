import { describe, expect, it } from "vitest";

import { primaryNavigation } from "@developer-os/config/navigation";

describe("primaryNavigation", () => {
  it("defines the MVP navigation order", () => {
    expect(primaryNavigation.map((item) => item.label)).toEqual([
      "Home",
      "Projects",
      "Resume",
      "About",
      "Contact",
    ]);
  });

  it("uses unique hrefs", () => {
    const hrefs = primaryNavigation.map((item) => item.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});
