import type { TechStackGroup } from "@developer-os/types";

export interface SkillsListProps {
  groups: TechStackGroup[];
}

export function SkillsList({ groups }: SkillsListProps) {
  return (
    <ul className="flex flex-col gap-5">
      {groups.map((group) => (
        <li key={group.category}>
          <p className="text-foreground-muted mb-1 text-[10px] font-medium uppercase tracking-[0.24em] sm:text-[11px]">
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
