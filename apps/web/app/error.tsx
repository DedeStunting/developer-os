"use client";

import { useEffect } from "react";

import { Container, Page, Section, Stack } from "@developer-os/ui";

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
      <Section>
        <Container size="narrow">
          <Stack gap={4}>
            <h1 className="text-foreground text-3xl font-bold tracking-tight">
              Something went wrong
            </h1>
            <p className="text-foreground-secondary">
              An unexpected error occurred. Please try again.
            </p>
            <button
              type="button"
              onClick={reset}
              className="bg-accent text-accent-foreground focus-visible:ring-accent inline-flex h-10 w-fit items-center justify-center rounded-lg px-4 text-sm font-medium transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              Try again
            </button>
          </Stack>
        </Container>
      </Section>
    </Page>
  );
}
