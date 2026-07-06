import type { ReactNode } from "react";

import { cn } from "../lib/cn";

export interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "font-display text-foreground mb-8 text-2xl font-normal tracking-tight sm:mb-10 sm:text-3xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
