import type { ProjectMetadata } from "@developer-os/types";

export interface ProjectMetadataProps {
  metadata: ProjectMetadata;
}

export function ProjectMetadataPanel({ metadata }: ProjectMetadataProps) {
  const facts = [
    metadata.duration ? { label: "Duration", value: metadata.duration } : null,
    metadata.role ? { label: "Role", value: metadata.role } : null,
    metadata.teamSize ? { label: "Team size", value: metadata.teamSize } : null,
    metadata.liveUrl ? { label: "Live URL", value: metadata.liveUrl } : null,
    metadata.repositoryAccess
      ? {
          label: "Repository",
          value: metadata.repositoryUrl ?? metadata.repositoryAccess,
        }
      : null,
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact));

  if (facts.length === 0) {
    return null;
  }

  return (
    <dl className="border-border bg-background-subtle grid gap-4 rounded-xl border p-6 sm:grid-cols-2">
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt className="text-foreground-muted text-sm font-medium">{fact.label}</dt>
          <dd className="text-foreground mt-1 break-all text-sm">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
