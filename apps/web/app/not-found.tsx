import { Container, Page, Section, SectionLabel, TextLink } from "@developer-os/ui";

export default function NotFoundPage() {
  return (
    <Page>
      <Section spacing="hero">
        <Container size="content">
          <div className="page-stack text-center sm:text-left">
            <SectionLabel className="mb-0">404</SectionLabel>
            <h1 className="font-display text-foreground text-2xl font-normal tracking-tight sm:text-3xl">
              Page not found
            </h1>
            <p className="text-foreground-secondary text-[15px] leading-relaxed sm:text-base">
              The page you are looking for does not exist or has been moved.
            </p>
            <div className="flex justify-center sm:justify-start">
              <TextLink href="/">Back to home</TextLink>
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
