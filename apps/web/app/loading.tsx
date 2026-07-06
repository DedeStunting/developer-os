import { Container, Page, Section } from "@developer-os/ui";

export default function LoadingPage() {
  return (
    <Page>
      <Section spacing="hero">
        <Container size="content">
          <div
            className="flex flex-col gap-4"
            role="status"
            aria-live="polite"
            aria-label="Loading page"
          >
            <div className="bg-background-muted h-10 w-40 max-w-full animate-pulse rounded" />
            <div className="bg-background-muted h-6 w-full max-w-md animate-pulse rounded" />
            <div className="bg-background-muted h-20 w-full animate-pulse rounded" />
          </div>
        </Container>
      </Section>
    </Page>
  );
}
