"use client";

import Link from "next/link";

import { cn, isNavItemActive } from "../lib";

export interface NavLinkProps {
  href: string;
  label: string;
  activePath: string;
  onNavigate?: () => void;
  className?: string;
}

export function NavLink({ href, label, activePath, onNavigate, className }: NavLinkProps) {
  const isActive = isNavItemActive(activePath, href);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "focus-visible:ring-accent text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        isActive
          ? "text-accent decoration-accent underline underline-offset-4"
          : "text-foreground-secondary hover:text-foreground",
        className,
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
