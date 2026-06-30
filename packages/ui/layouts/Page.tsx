import type { ReactNode } from "react";

import { cn } from "../lib/cn";

export interface PageProps {
  children: ReactNode;
  className?: string;
}

export function Page({ children, className }: PageProps) {
  return <div className={cn("flex flex-1 flex-col", className)}>{children}</div>;
}
