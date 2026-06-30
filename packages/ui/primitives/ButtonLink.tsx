import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "../lib/cn";

type ButtonLinkVariant = "primary" | "secondary" | "ghost";
type ButtonLinkSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonLinkVariant, string> = {
  primary: "bg-accent text-accent-foreground hover:opacity-90",
  secondary: "border border-border bg-background text-foreground hover:bg-background-subtle",
  ghost: "text-foreground-secondary hover:bg-background-muted hover:text-foreground",
};

const sizeClasses: Record<ButtonLinkSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: ButtonLinkVariant;
  size?: ButtonLinkSize;
  className?: string;
  external?: boolean;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external = false,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-lg font-medium transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
