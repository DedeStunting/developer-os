import type { TechStackGroup } from "@developer-os/types";

export interface ResumeSkillsProps {
  groups: TechStackGroup[];
}

export function ResumeSkills({ groups }: ResumeSkillsProps) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4">
      {groups.map((group) => (
        <li key={group.category}>
          <p className="text-foreground-muted mb-1 text-[10px] font-medium uppercase tracking-[0.14em] sm:text-[11px]">
            {group.category}
          </p>
          <p className="text-foreground-secondary text-sm leading-relaxed sm:text-[15px]">
            {group.items.join(", ")}
          </p>
        </li>
      ))}
    </ul>
  );
}
