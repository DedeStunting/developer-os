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
  sm: "min-h-9 h-9 px-3 text-sm",
  md: "min-h-11 h-11 px-4 text-sm",
  lg: "min-h-12 h-12 px-6 text-base",
};

export interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: ButtonLinkVariant;
  size?: ButtonLinkSize;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external = false,
  onClick,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-lg font-medium transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
