"use client";

import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";

import { primaryNavigation } from "@developer-os/config/navigation";

import { NavLink } from "./NavLink";

export interface MobileMenuProps {
  open: boolean;
  activePath: string;
  onClose: () => void;
}

export function MobileMenu({ open, activePath, onClose }: MobileMenuProps) {
  const menuId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="presentation">
      <button
        type="button"
        aria-label="Close navigation menu"
        className="bg-foreground/20 absolute inset-0"
        onClick={onClose}
      />
      <nav
        ref={panelRef}
        id={menuId}
        aria-label="Mobile"
        className="border-border bg-background absolute right-0 top-0 flex h-full w-[min(280px,80vw)] flex-col border-l p-6 shadow-lg"
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="text-foreground text-sm font-semibold">Menu</span>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close menu"
            className="text-foreground-secondary hover:bg-background-muted hover:text-foreground focus-visible:ring-accent inline-flex h-11 w-11 items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            onClick={onClose}
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {primaryNavigation.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              activePath={activePath}
              onNavigate={onClose}
            />
          ))}
        </div>
      </nav>
    </div>
  );
}
