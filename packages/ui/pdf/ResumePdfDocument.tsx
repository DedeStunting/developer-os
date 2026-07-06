import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

import type { Resume } from "@developer-os/types";

import { formatExperienceRange } from "../lib/formatting";

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 44,
    paddingTop: 48,
    paddingBottom: 52,
    fontFamily: "Helvetica",
    fontSize: 10.5,
    lineHeight: 1.5,
    color: "#111827",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    gap: 6,
  },
  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
  },
  title: {
    fontSize: 12,
    color: "#374151",
  },
  contact: {
    fontSize: 9.5,
    color: "#4B5563",
    lineHeight: 1.45,
  },
  summary: {
    fontSize: 10.5,
    color: "#374151",
    lineHeight: 1.55,
    marginTop: 2,
  },
  section: {
    gap: 9,
  },
  sectionTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.1,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#D1D5DB",
    paddingBottom: 5,
    marginBottom: 4,
  },
  experienceItem: {
    gap: 4,
    marginBottom: 13,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
  },
  roleTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    flex: 1,
  },
  company: {
    color: "#374151",
    fontSize: 10.5,
    lineHeight: 1.45,
  },
  date: {
    color: "#6B7280",
    fontSize: 9.5,
    flexShrink: 0,
  },
  bullet: {
    paddingLeft: 10,
    fontSize: 10.5,
    lineHeight: 1.52,
    marginBottom: 3,
  },
  techLine: {
    color: "#6B7280",
    fontSize: 9.5,
    marginTop: 3,
    lineHeight: 1.45,
  },
  projectItem: {
    marginBottom: 10,
  },
  projectLine: {
    fontSize: 10.5,
    lineHeight: 1.5,
  },
  projectTitle: {
    fontFamily: "Helvetica-Bold",
  },
  projectSummary: {
    color: "#374151",
  },
  skillsList: {
    gap: 8,
  },
  skillLine: {
    fontSize: 10.5,
    lineHeight: 1.5,
  },
  skillCategory: {
    fontFamily: "Helvetica-Bold",
  },
  skillItems: {
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
      <Page size="LETTER" style={styles.page}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.title}>{profile.title}</Text>
            <Text style={styles.contact}>{contactParts.join(" · ")}</Text>
            <Text style={styles.summary}>{profile.summary}</Text>
          </View>

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
                <Text style={styles.projectLine}>
                  <Text style={styles.projectTitle}>{project.title}</Text>
                  <Text style={styles.projectSummary}>
                    {" — "}
                    {project.summary} ({formatDisplayUrl(project.href)})
                  </Text>
                </Text>
              </View>
            ))}
          </View>

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
              {skillGroups.map((group) => (
                <Text key={group.category} style={styles.skillLine}>
                  <Text style={styles.skillCategory}>{group.category}: </Text>
                  <Text style={styles.skillItems}>{group.items.join(", ")}</Text>
                </Text>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
