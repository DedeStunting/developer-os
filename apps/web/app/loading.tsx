import { Container, Page, Section } from "@developer-os/ui";

export default function LoadingPage() {
  return (
    <Page>
      <Section>
        <Container size="narrow">
          <div
            className="flex flex-col gap-4"
            role="status"
            aria-live="polite"
            aria-label="Loading page"
          >
            <div className="bg-background-muted h-8 w-48 animate-pulse rounded-md" />
            <div className="bg-background-muted h-12 w-full max-w-xl animate-pulse rounded-md" />
            <div className="bg-background-muted h-24 w-full animate-pulse rounded-md" />
          </div>
        </Container>
      </Section>
    </Page>
  );
}
