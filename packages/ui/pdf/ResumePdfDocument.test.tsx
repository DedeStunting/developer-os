import { describe, expect, it } from "vitest";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";

import type { Resume } from "@developer-os/types";

import { ResumePdfDocument } from "./ResumePdfDocument";

const resumeFixture: Resume = {
  profile: {
    name: "Chiedu David",
    title: "Backend Software Engineer",
    email: "hello@chiedudavid.com",
    location: "Remote",
    summary: "Backend engineer focused on shipping reliable production systems.",
    github: "https://github.com/chiedudavid",
    portfolio: "https://chiedudavid.com",
  },
  experience: [
    {
      company: "Bundo Tech Inc.",
      title: "Backend Software Engineer",
      location: "Remote",
      start: "2024-03",
      end: null,
      highlights: ["Designed and shipped production APIs and deployment pipelines."],
      technologies: ["TypeScript", "Node.js", "PostgreSQL"],
    },
  ],
  education: [],
  skillGroups: [
    { category: "Backend", items: ["Node.js"] },
    { category: "Databases", items: ["PostgreSQL"] },
  ],
  projects: [
    {
      slug: "bundo",
      title: "Bundo",
      summary: "Production-grade platform for managing workflows and customer operations.",
      href: "/projects/bundo",
      featured: true,
    },
  ],
};

describe("ResumePdfDocument", () => {
  it("generates a PDF buffer from resume data", async () => {
    const buffer = await renderToBuffer(<ResumePdfDocument resume={resumeFixture} />);

    expect(buffer.byteLength).toBeGreaterThan(0);
    expect(buffer.subarray(0, 4).toString()).toBe("%PDF");
  });
});
