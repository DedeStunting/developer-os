import type { ReactNode } from "react";

import { cn } from "../lib/cn";

export interface SectionLabelProps {
  children: ReactNode;
  className?: string;
  as?: "h2" | "p";
}

export function SectionLabel({ children, className, as: Tag = "p" }: SectionLabelProps) {
  return (
    <Tag
      className={cn(
        "text-foreground-muted mb-4 text-[10px] font-medium uppercase tracking-[0.24em] sm:text-[11px]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
