import type { TechStackGroup } from "@developer-os/types";

import { Stack } from "../layouts/Stack";

export interface TechStackGridProps {
  groups: TechStackGroup[];
}

export function TechStackGrid({ groups }: TechStackGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {groups.map((group) => (
        <div key={group.category}>
          <h3 className="text-foreground mb-3 text-sm font-semibold">{group.category}</h3>
          <Stack gap={2}>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="bg-background-muted text-foreground-secondary rounded-md px-2 py-1 text-xs font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Stack>
        </div>
      ))}
    </div>
  );
}
