import { Document, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

import type { Resume } from "@developer-os/types";

import { formatExperienceRange } from "../lib/formatting";

const styles = StyleSheet.create({
  page: {
    padding: 48,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.45,
    color: "#111827",
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
  },
  title: {
    fontSize: 12,
    color: "#4B5563",
    marginBottom: 8,
  },
  contact: {
    fontSize: 9,
    color: "#6B7280",
    marginBottom: 10,
  },
  summary: {
    fontSize: 10,
    color: "#374151",
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.2,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    paddingBottom: 4,
    marginBottom: 10,
  },
  experienceItem: {
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  roleTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
  },
  company: {
    color: "#4B5563",
    marginBottom: 4,
  },
  date: {
    color: "#6B7280",
    fontSize: 9,
  },
  bullet: {
    marginBottom: 3,
    paddingLeft: 8,
  },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginTop: 4,
  },
  tag: {
    backgroundColor: "#F3F4F6",
    color: "#374151",
    fontSize: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
  },
  projectTitle: {
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
  },
  projectSummary: {
    color: "#4B5563",
    marginBottom: 8,
  },
  skillGroup: {
    marginBottom: 8,
  },
  skillCategory: {
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
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
                <View style={styles.tagRow}>
                  {entry.technologies.map((technology) => (
                    <Text key={technology} style={styles.tag}>
                      {technology}
                    </Text>
                  ))}
                </View>
              ) : null}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {projects.map((project) => (
            <View key={project.slug}>
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
          {skillGroups.map((group) => (
            <View key={group.category} style={styles.skillGroup}>
              <Text style={styles.skillCategory}>{group.category}</Text>
              <View style={styles.tagRow}>
                {group.items.map((item) => (
                  <Text key={item} style={styles.tag}>
                    {item}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
