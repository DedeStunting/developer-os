"use client";

import type { ReactNode } from "react";

import { Footer } from "../composites/Footer";
import { ThemeProvider } from "../providers/ThemeProvider";

export interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <ThemeProvider>
      <main id="main-content" className="flex flex-1 flex-col pt-[env(safe-area-inset-top)]">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
}
