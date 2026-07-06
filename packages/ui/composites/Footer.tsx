import { site } from "@developer-os/config/site";

import { Container } from "../layouts/Container";
import { ThemeToggle } from "./ThemeToggle";

export function Footer() {
  return (
    <footer className="site-footer mt-auto pt-16 md:pt-20">
      <Container size="content">
        <div className="flex items-end justify-between gap-4">
          <p className="text-foreground-muted text-sm">
            &copy; {new Date().getFullYear()} &middot; {site.author}
          </p>
          <ThemeToggle />
        </div>
      </Container>
    </footer>
  );
}
