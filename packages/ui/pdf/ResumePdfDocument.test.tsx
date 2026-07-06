import { describe, expect, it } from "vitest";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";

import type { Resume } from "@developer-os/types";

import { ResumePdfDocument } from "./ResumePdfDocument";

function countPdfPages(buffer: Buffer): number {
  const text = buffer.toString("latin1");
  const pageMatches = text.match(/\/Type\s*\/Page\b/g);
  return pageMatches ? pageMatches.length : 0;
}

const resumeFixture: Resume = {
  profile: {
    name: "Chiedu David",
    title: "Backend Software Engineer",
    email: "hello@chiedudavid.com",
    location: "Remote",
    summary: "Backend engineer focused on shipping reliable production systems.",
    github: "https://github.com/DedeStunting",
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

const fullResumeFixture: Resume = {
  profile: {
    name: "Chiedu David",
    title: "Software Engineer",
    email: "chibundochiedu@gmail.com",
    location: "Remote",
    summary:
      "Backend engineer focused on shipping reliable production systems, from API design and data modeling to cloud deployment and operational readiness.",
    github: "https://github.com/DedeStunting",
    portfolio: "https://chiedudev.vercel.app",
  },
  experience: [
    {
      company: "Bundo Tech Inc.",
      title: "Backend Software Engineer",
      location: "Remote",
      start: "2024-03",
      end: null,
      highlights: [
        "Designed and shipped production APIs, data workflows, and deployment pipelines for a customer-facing product used in live environments.",
        "Modeled relational data in PostgreSQL and implemented service boundaries that support marketplace operations at scale.",
        "Improved deployment reliability with containerized services and environment-aware configuration.",
      ],
      technologies: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "Render"],
    },
    {
      company: "NDF",
      title: "Software Engineer",
      location: "Remote",
      start: "2022-06",
      end: "2024-02",
      highlights: [
        "Built backend services and integrations supporting business operations with maintainable architecture.",
        "Delivered API integrations and data workflows with emphasis on testing and delivery discipline.",
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "MongoDB"],
    },
  ],
  education: [],
  skillGroups: [
    { category: "Backend", items: ["Java", "Spring Boot", "Node.js", "Express"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "Supabase"] },
    { category: "Cloud", items: ["Docker", "Render", "AWS S3"] },
    { category: "Frontend", items: ["React", "Tailwind CSS"] },
  ],
  projects: [
    {
      slug: "bundo",
      title: "Bundo",
      summary:
        "Marketplace for booking trusted local service providers, with production REST APIs, PostgreSQL, RBAC, Firebase auth, and Docker on Render for live bookings and orders.",
      href: "https://bundo.ng",
      featured: true,
    },
    {
      slug: "pizza-ordering-platform",
      title: "Pizza Ordering Platform",
      summary:
        "Restaurant ordering system with Spring Boot menu, cart, and checkout APIs backed by PostgreSQL and a React frontend for transactional ordering.",
      href: "https://github.com/DedeStunting/Pizza-Mern-Application",
      featured: false,
    },
    {
      slug: "real-time-chat",
      title: "Real-Time Chat",
      summary:
        "Messaging app with Socket.IO WebSockets, MongoDB-backed history, and room-based live chat with persistent threads and presence updates.",
      href: "https://github.com/DedeStunting/real-time-chat",
      featured: false,
    },
  ],
};

describe("ResumePdfDocument", () => {
  it("generates a PDF buffer from resume data", async () => {
    const buffer = await renderToBuffer(<ResumePdfDocument resume={resumeFixture} />);

    expect(buffer.byteLength).toBeGreaterThan(0);
    expect(buffer.subarray(0, 4).toString()).toBe("%PDF");
  });

  it("fits the full resume on a single page", async () => {
    const buffer = await renderToBuffer(<ResumePdfDocument resume={fullResumeFixture} />);

    expect(countPdfPages(buffer)).toBe(1);
  });
});
