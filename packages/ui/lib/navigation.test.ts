import { describe, expect, it } from "vitest";

import { isNavItemActive } from "./navigation";

describe("isNavItemActive", () => {
  it("marks home only on exact path", () => {
    expect(isNavItemActive("/", "/")).toBe(true);
    expect(isNavItemActive("/projects", "/")).toBe(false);
  });

  it("marks nested project routes as projects active", () => {
    expect(isNavItemActive("/projects", "/projects")).toBe(true);
    expect(isNavItemActive("/projects/bundo", "/projects")).toBe(true);
    expect(isNavItemActive("/project", "/projects")).toBe(false);
  });

  it("marks exact routes", () => {
    expect(isNavItemActive("/resume", "/resume")).toBe(true);
    expect(isNavItemActive("/about", "/resume")).toBe(false);
  });
});
