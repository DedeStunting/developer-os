import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { site } from "@developer-os/config/site";
import { social } from "@developer-os/config/social";

import { Container } from "../layouts/Container";
import { Stack } from "../layouts/Stack";

export function Footer() {
  return (
    <footer className="border-border bg-background-subtle mt-auto border-t">
      <Container>
        <div className="grid gap-10 py-10 md:grid-cols-3 md:py-12">
          <Stack gap={2}>
            <Link
              href="/"
              className="text-foreground focus-visible:ring-accent text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              {site.title}
            </Link>
            <p className="text-foreground-secondary text-sm">{site.description}</p>
          </Stack>

          <div>
            <h2 className="text-foreground mb-3 text-sm font-semibold">GitHub</h2>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-secondary hover:text-foreground focus-visible:ring-accent inline-flex min-h-11 items-center gap-1 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              View profile
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>

          <div>
            <h2 className="text-foreground mb-3 text-sm font-semibold">Email</h2>
            <a
              href={social.email}
              className="text-foreground-secondary hover:text-foreground focus-visible:ring-accent inline-flex min-h-11 items-center break-all text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              {social.email.replace("mailto:", "")}
            </a>
          </div>
        </div>

        <p className="border-border text-foreground-muted border-t py-6 text-sm">
          &copy; {new Date().getFullYear()} {site.author}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
