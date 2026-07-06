"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { primaryNavigation } from "@developer-os/config/navigation";

import { cn } from "../lib";
import { Container } from "../layouts/Container";
import { NavLink } from "./NavLink";

export interface NavbarProps {
  activePath?: string;
}

export function Navbar({ activePath }: NavbarProps) {
  const pathname = usePathname();
  const currentPath = activePath ?? pathname;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 pt-[env(safe-area-inset-top)] transition-colors duration-200",
        scrolled ? "border-border bg-background/95 border-b backdrop-blur" : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-14 items-center justify-between gap-4 sm:h-16">
          <nav
            aria-label="Primary"
            className="flex min-w-0 flex-1 items-center gap-5 sm:gap-6 md:gap-8"
          >
            {primaryNavigation.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                activePath={currentPath}
                className="shrink-0 whitespace-nowrap text-sm"
              />
            ))}
          </nav>

          <Link
            href="/contact"
            className="bg-accent text-accent-foreground focus-visible:ring-accent inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg px-4 text-sm font-medium transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            Contact
          </Link>
        </div>
      </Container>
    </header>
  );
}
