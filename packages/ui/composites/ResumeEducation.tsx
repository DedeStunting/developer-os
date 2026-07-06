import type { EducationEntry } from "@developer-os/types";

export interface ResumeEducationProps {
  entries: EducationEntry[];
}

export function ResumeEducation({ entries }: ResumeEducationProps) {
  if (entries.length === 0) {
    return null;
  }

  return (
    <ul className="flex flex-col gap-8 sm:gap-9">
      {entries.map((entry) => (
        <li key={`${entry.institution}-${entry.graduationDate}`}>
          <h3 className="text-foreground text-base font-semibold sm:text-[17px]">
            {entry.institution}
          </h3>
          <p className="text-foreground-secondary mt-1.5 text-sm sm:text-[15px]">
            {entry.degree}
            {entry.field ? `, ${entry.field}` : ""}
          </p>
          <p className="text-foreground-muted mt-1.5 text-sm sm:text-[15px]">
            {entry.graduationDate}
          </p>
        </li>
      ))}
    </ul>
  );
}
