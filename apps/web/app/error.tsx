"use client";

import { useEffect } from "react";

import { Container, Page, Section, TextLink } from "@developer-os/ui";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Page>
      <Section spacing="hero">
        <Container size="content">
          <div className="page-stack text-center sm:text-left">
            <h1 className="font-display text-foreground text-2xl font-normal tracking-tight sm:text-3xl">
              Something went wrong
            </h1>
            <p className="text-foreground-secondary text-[15px] leading-relaxed sm:text-base">
              An unexpected error occurred. Please try again.
            </p>
            <div className="flex justify-center sm:justify-start">
              <button
                type="button"
                onClick={reset}
                className="text-foreground-secondary hover:text-foreground focus-visible:ring-accent inline-flex min-h-11 items-center text-[15px] underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-none focus-visible:ring-2 sm:text-base"
              >
                Try again
              </button>
            </div>
            <div className="flex justify-center sm:justify-start">
              <TextLink href="/">Back to home</TextLink>
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
