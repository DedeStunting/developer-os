import type { ReactNode } from "react";

import { cn } from "../lib/cn";

type SectionSpacing = "default" | "compact" | "loose";

const spacingClasses: Record<SectionSpacing, string> = {
  compact: "py-12 md:py-16",
  default: "py-16 md:py-24",
  loose: "py-24 md:py-32",
};

export interface SectionProps {
  children: ReactNode;
  id?: string;
  spacing?: SectionSpacing;
  className?: string;
}

export function Section({ children, id, spacing = "default", className }: SectionProps) {
  return (
    <section id={id} className={cn(spacingClasses[spacing], className)}>
      {children}
    </section>
  );
}
