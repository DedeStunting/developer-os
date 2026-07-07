import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

import type { Resume } from "@developer-os/types";

import { formatExperienceRange } from "../lib/formatting";

const A4_HEIGHT = 841.89;
const PAGE_PADDING = {
  horizontal: 46,
  top: 50,
  bottom: 54,
} as const;
const CONTENT_HEIGHT = A4_HEIGHT - PAGE_PADDING.top - PAGE_PADDING.bottom;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: PAGE_PADDING.horizontal,
    paddingTop: PAGE_PADDING.top,
    paddingBottom: PAGE_PADDING.bottom,
    fontFamily: "Helvetica",
    fontSize: 11,
    lineHeight: 1.55,
    color: "#111827",
  },
  content: {
    height: CONTENT_HEIGHT,
    flexDirection: "column",
  },
  sectionSpacer: {
    flexGrow: 1,
    minHeight: 14,
  },
  header: {
    gap: 7,
  },
  name: {
    fontSize: 26,
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
  },
  title: {
    fontSize: 13,
    color: "#374151",
  },
  contact: {
    fontSize: 10,
    color: "#4B5563",
    lineHeight: 1.5,
  },
  summary: {
    fontSize: 11,
    color: "#374151",
    lineHeight: 1.58,
    marginTop: 2,
  },
  section: {
    gap: 10,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.1,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#D1D5DB",
    paddingBottom: 6,
    marginBottom: 5,
  },
  experienceItem: {
    gap: 4,
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
  },
  roleTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11.5,
    flex: 1,
  },
  company: {
    color: "#374151",
    fontSize: 11,
    lineHeight: 1.5,
  },
  date: {
    color: "#6B7280",
    fontSize: 10,
    flexShrink: 0,
  },
  bullet: {
    paddingLeft: 10,
    fontSize: 11,
    lineHeight: 1.58,
    marginBottom: 4,
  },
  techLine: {
    color: "#6B7280",
    fontSize: 10,
    marginTop: 4,
    lineHeight: 1.5,
  },
  projectItem: {
    gap: 3,
    marginBottom: 11,
  },
  projectTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11.5,
    lineHeight: 1.45,
  },
  projectDescription: {
    fontSize: 11,
    lineHeight: 1.58,
    color: "#374151",
  },
  projectUrl: {
    fontSize: 10,
    color: "#6B7280",
    lineHeight: 1.45,
  },
  skillsList: {
    gap: 8,
  },
  skillGroup: {
    gap: 2,
    marginBottom: 6,
  },
  skillCategory: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    lineHeight: 1.45,
    marginBottom: 1,
  },
  skillItem: {
    fontSize: 10.5,
    lineHeight: 1.5,
    paddingLeft: 8,
    color: "#374151",
  },
});

export interface ResumePdfDocumentProps {
  resume: Resume;
}

function formatDisplayUrl(value: string): string {
  return value
    .replace(/^mailto:/, "")
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
}

export function ResumePdfDocument({ resume }: ResumePdfDocumentProps) {
  const { profile, experience, education, skillGroups, projects } = resume;

  const contactParts = [
    profile.email,
    profile.location,
    profile.github ? formatDisplayUrl(profile.github) : null,
    profile.portfolio ? formatDisplayUrl(profile.portfolio) : null,
  ].filter(Boolean);

  return (
    <Document title={`${profile.name} — Resume`}>
      <Page size="A4" style={styles.page}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.title}>{profile.title}</Text>
            <Text style={styles.contact}>{contactParts.join(" · ")}</Text>
            <Text style={styles.summary}>{profile.summary}</Text>
          </View>

          <View style={styles.sectionSpacer} />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {experience.map((entry, index) => (
              <View
                key={`${entry.company}-${entry.start}`}
                style={
                  index === experience.length - 1
                    ? [styles.experienceItem, { marginBottom: 0 }]
                    : styles.experienceItem
                }
              >
                <View style={styles.experienceHeader}>
                  <Text style={styles.roleTitle}>{entry.title}</Text>
                  <Text style={styles.date}>{formatExperienceRange(entry.start, entry.end)}</Text>
                </View>
                <Text style={styles.company}>
                  {entry.company}
                  {entry.location ? ` · ${entry.location}` : ""}
                </Text>
                {entry.highlights.map((highlight) => (
                  <Text key={highlight} style={styles.bullet}>
                    - {highlight}
                  </Text>
                ))}
                {entry.technologies && entry.technologies.length > 0 ? (
                  <Text style={styles.techLine}>{entry.technologies.join(" · ")}</Text>
                ) : null}
              </View>
            ))}
          </View>

          <View style={styles.sectionSpacer} />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {projects.map((project, index) => (
              <View
                key={project.slug}
                style={
                  index === projects.length - 1
                    ? [styles.projectItem, { marginBottom: 0 }]
                    : styles.projectItem
                }
              >
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDescription}>{project.summary}</Text>
                <Text style={styles.projectUrl}>{formatDisplayUrl(project.href)}</Text>
              </View>
            ))}
          </View>

          <View style={styles.sectionSpacer} />

          {education.length > 0 ? (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              {education.map((entry, index) => (
                <View
                  key={`${entry.institution}-${entry.graduationDate}`}
                  style={
                    index === education.length - 1
                      ? [styles.experienceItem, { marginBottom: 0 }]
                      : styles.experienceItem
                  }
                >
                  <Text style={styles.roleTitle}>{entry.institution}</Text>
                  <Text style={styles.company}>
                    {entry.degree}
                    {entry.field ? `, ${entry.field}` : ""}
                  </Text>
                  <Text style={styles.date}>{entry.graduationDate}</Text>
                </View>
              ))}
            </View>
          ) : null}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsList}>
              {skillGroups.map((group, groupIndex) => (
                <View
                  key={group.category}
                  style={
                    groupIndex === skillGroups.length - 1
                      ? [styles.skillGroup, { marginBottom: 0 }]
                      : styles.skillGroup
                  }
                >
                  <Text style={styles.skillCategory}>{group.category}</Text>
                  {group.items.map((item) => (
                    <Text key={item} style={styles.skillItem}>
                      - {item}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
