"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { primaryNavigation } from "@developer-os/config/navigation";
import { site } from "@developer-os/config/site";

import { cn } from "../lib";
import { Container } from "../layouts/Container";
import { MobileMenu } from "./MobileMenu";
import { NavLink } from "./NavLink";

export interface NavbarProps {
  activePath?: string;
}

export function Navbar({ activePath }: NavbarProps) {
  const pathname = usePathname();
  const currentPath = activePath ?? pathname;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
    <>
      <header
        className={cn(
          "sticky top-0 z-40 transition-colors duration-200",
          scrolled ? "border-border bg-background/95 border-b backdrop-blur" : "bg-transparent",
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between gap-6">
            <Link
              href="/"
              className="text-foreground focus-visible:ring-accent text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              {site.title}
            </Link>

            <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
              {primaryNavigation.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  activePath={currentPath}
                />
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="bg-accent text-accent-foreground focus-visible:ring-accent hidden h-10 items-center justify-center rounded-lg px-4 text-sm font-medium transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:inline-flex"
              >
                Contact
              </Link>
              <button
                type="button"
                className="text-foreground-secondary hover:bg-background-muted hover:text-foreground focus-visible:ring-accent inline-flex h-11 w-11 items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 lg:hidden"
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                onClick={() => {
                  setMobileOpen(true);
                }}
              >
                <Menu className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <div id="mobile-navigation">
        <MobileMenu
          open={mobileOpen}
          activePath={currentPath}
          onClose={() => {
            setMobileOpen(false);
          }}
        />
      </div>
    </>
  );
}
