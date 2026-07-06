import type { ReactNode } from "react";

import { cn } from "../lib/cn";

type SectionSpacing = "default" | "compact" | "loose" | "hero";

const spacingClasses: Record<SectionSpacing, string> = {
  compact: "py-8 md:py-12 lg:py-16",
  default: "py-10 md:py-16 lg:py-24",
  loose: "py-12 md:py-20 lg:py-32",
  hero: "page-hero-offset",
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
