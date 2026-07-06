import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "../lib/cn";

export interface TextLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function TextLink({ href, children, className, external = false }: TextLinkProps) {
  const classes = cn(
    "text-foreground-secondary hover:text-foreground focus-visible:ring-accent inline-flex min-h-11 items-center text-[15px] underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current focus-visible:ring-2 focus-visible:outline-none sm:text-base",
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
