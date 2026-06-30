import Link from "next/link";

import { Container, Page, Section, Stack } from "@developer-os/ui";

export default function NotFoundPage() {
  return (
    <Page>
      <Section>
        <Container size="narrow">
          <Stack gap={4}>
            <p className="text-foreground-muted text-sm font-medium">404</p>
            <h1 className="text-foreground text-3xl font-bold tracking-tight">Page not found</h1>
            <p className="text-foreground-secondary">
              The page you are looking for does not exist or has been moved.
            </p>
            <Link
              href="/"
              className="bg-accent text-accent-foreground focus-visible:ring-accent inline-flex h-10 w-fit items-center justify-center rounded-lg px-4 text-sm font-medium transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              Back to home
            </Link>
          </Stack>
        </Container>
      </Section>
    </Page>
  );
}
