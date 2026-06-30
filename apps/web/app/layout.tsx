import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { metadata as siteMetadata, site } from "@developer-os/config";
import { Footer, Navbar, ThemeProvider } from "@developer-os/ui";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteMetadata.defaultTitle,
    template: siteMetadata.titleTemplate,
  },
  description: siteMetadata.defaultDescription,
  metadataBase: site.url ? new URL(site.url) : undefined,
  openGraph: {
    title: siteMetadata.defaultTitle,
    description: siteMetadata.defaultDescription,
    type: "website",
    locale: site.locale,
    ...(siteMetadata.ogImage ? { images: [siteMetadata.ogImage] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.defaultTitle,
    description: siteMetadata.defaultDescription,
    ...(siteMetadata.twitterHandle ? { creator: siteMetadata.twitterHandle } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={site.locale}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground flex min-h-screen flex-col font-sans antialiased">
        <ThemeProvider>
          <a
            href="#main-content"
            className="focus:bg-background focus:ring-accent sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:px-4 focus:py-2 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="flex flex-1 flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
