import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { DM_Serif_Display } from "next/font/google";

import { metadata as siteMetadata, site } from "@developer-os/config";
import { AppShell } from "@developer-os/ui";

import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
});

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
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
      className={`${GeistSans.variable} ${GeistMono.variable} ${dmSerif.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-background text-foreground flex min-h-screen flex-col overflow-x-clip font-sans antialiased"
        suppressHydrationWarning
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
