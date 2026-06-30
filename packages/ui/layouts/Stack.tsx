import type { ReactNode } from "react";

import { cn } from "../lib/cn";

type StackGap = 2 | 4 | 6 | 8 | 12;

const gapClasses: Record<StackGap, string> = {
  2: "gap-2",
  4: "gap-4",
  6: "gap-6",
  8: "gap-8",
  12: "gap-12",
};

export interface StackProps {
  children: ReactNode;
  gap?: StackGap;
  className?: string;
}

export function Stack({ children, gap = 4, className }: StackProps) {
  return <div className={cn("flex flex-col", gapClasses[gap], className)}>{children}</div>;
}
