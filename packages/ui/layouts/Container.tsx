import type { ReactNode } from "react";

import { cn } from "../lib/cn";

type ContainerSize = "default" | "content" | "narrow" | "wide";

const sizeClasses: Record<ContainerSize, string> = {
  default: "max-w-[1280px]",
  content: "portfolio-column",
  narrow: "max-w-3xl",
  wide: "max-w-[1280px]",
};

export interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
}

export function Container({ children, size = "default", className }: ContainerProps) {
  return (
    <div
      className={cn(
        size === "content" ? sizeClasses.content : "mx-auto w-full px-4 md:px-6 lg:px-8",
        size !== "content" && sizeClasses[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
