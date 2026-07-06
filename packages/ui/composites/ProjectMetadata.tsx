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
    <dl className="project-list">
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="project-list-item flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4"
        >
          <dt className="text-foreground-muted shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] sm:text-[11px]">
            {fact.label}
          </dt>
          <dd className="text-foreground-secondary break-all text-sm sm:text-right sm:text-[15px]">
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
