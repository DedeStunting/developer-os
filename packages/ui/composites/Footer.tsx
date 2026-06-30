import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { footerNavigation, futureNavigation } from "@developer-os/config/navigation";
import { isFeatureEnabled } from "@developer-os/config/features";
import { site } from "@developer-os/config/site";
import { social } from "@developer-os/config/social";

import { Container } from "../layouts/Container";
import { Stack } from "../layouts/Stack";

export function Footer() {
  const futureLinks = futureNavigation.filter((item) => isFeatureEnabled(item.feature));

  return (
    <footer className="border-border bg-background-subtle mt-auto border-t">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
          <Stack gap={2}>
            <Link
              href="/"
              className="text-foreground focus-visible:ring-accent text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              {site.title}
            </Link>
            <p className="text-foreground-secondary text-sm">{site.description}</p>
          </Stack>

          <nav aria-label="Footer navigation">
            <h2 className="text-foreground mb-3 text-sm font-semibold">Navigation</h2>
            <ul className="flex flex-col gap-2">
              {footerNavigation
                .filter((item) => !item.external)
                .map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-foreground-secondary hover:text-foreground focus-visible:ring-accent text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              {futureLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground-secondary hover:text-foreground focus-visible:ring-accent text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-foreground mb-3 text-sm font-semibold">GitHub</h2>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-secondary hover:text-foreground focus-visible:ring-accent inline-flex items-center gap-1 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              View profile
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>

          <div>
            <h2 className="text-foreground mb-3 text-sm font-semibold">Email</h2>
            <a
              href={social.email}
              className="text-foreground-secondary hover:text-foreground focus-visible:ring-accent text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
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
