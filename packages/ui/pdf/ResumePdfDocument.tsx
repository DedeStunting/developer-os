import { Document, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

import type { Resume } from "@developer-os/types";

import { formatExperienceRange } from "../lib/formatting";

const styles = StyleSheet.create({
  page: {
    padding: 36,
    fontFamily: "Helvetica",
    fontSize: 9,
    lineHeight: 1.35,
    color: "#111827",
  },
  header: {
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    marginBottom: 8,
  },
  title: {
    fontSize: 11,
    color: "#4B5563",
    marginBottom: 6,
  },
  contact: {
    fontSize: 8,
    color: "#6B7280",
    marginBottom: 6,
  },
  summary: {
    fontSize: 9,
    color: "#374151",
    lineHeight: 1.4,
  },
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.2,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    paddingBottom: 3,
    marginBottom: 6,
  },
  experienceItem: {
    marginBottom: 8,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  roleTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
  },
  company: {
    color: "#4B5563",
    fontSize: 9,
    marginBottom: 2,
  },
  date: {
    color: "#6B7280",
    fontSize: 8,
  },
  bullet: {
    marginBottom: 2,
    paddingLeft: 6,
    fontSize: 9,
  },
  techLine: {
    color: "#6B7280",
    fontSize: 8,
    marginTop: 2,
  },
  projectItem: {
    marginBottom: 5,
  },
  projectTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    marginBottom: 1,
  },
  projectSummary: {
    color: "#4B5563",
    fontSize: 8,
    lineHeight: 1.35,
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  skillGroup: {
    width: "48%",
    marginBottom: 4,
  },
  skillCategory: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8,
    marginBottom: 1,
  },
  skillItems: {
    color: "#4B5563",
    fontSize: 8,
    lineHeight: 1.35,
  },
});

export interface ResumePdfDocumentProps {
  resume: Resume;
}

function resolveProjectHref(href: string, portfolio?: string): string {
  if (href.startsWith("http") || !portfolio) {
    return href;
  }

  return `${portfolio.replace(/\/$/, "")}${href}`;
}

export function ResumePdfDocument({ resume }: ResumePdfDocumentProps) {
  const { profile, experience, education, skillGroups, projects } = resume;

  const contactParts = [profile.email, profile.location, profile.github, profile.portfolio].filter(
    Boolean,
  );

  return (
    <Document title={`${profile.name} — Resume`}>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.title}</Text>
          <Text style={styles.contact}>{contactParts.join(" · ")}</Text>
          <Text style={styles.summary}>{profile.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience.map((entry) => (
            <View key={`${entry.company}-${entry.start}`} style={styles.experienceItem}>
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
                  • {highlight}
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
          {projects.map((project) => (
            <View key={project.slug} style={styles.projectItem}>
              <Link src={resolveProjectHref(project.href, profile.portfolio)}>
                <Text style={styles.projectTitle}>{project.title}</Text>
              </Link>
              <Text style={styles.projectSummary}>{project.summary}</Text>
            </View>
          ))}
        </View>

        {education.length > 0 ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((entry) => (
              <View
                key={`${entry.institution}-${entry.graduationDate}`}
                style={styles.experienceItem}
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
          <View style={styles.skillsGrid}>
            {skillGroups.map((group) => (
              <View key={group.category} style={styles.skillGroup}>
                <Text style={styles.skillCategory}>{group.category}</Text>
                <Text style={styles.skillItems}>{group.items.join(", ")}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}
