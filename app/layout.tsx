import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FacebookPixel from "@/components/FacebookPixel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.skiferhus.no"),
  title: {
    default: "Skiferhus | Skifer til tak og fasade",
    template: "%s | Skiferhus",
  },
  description:
    "Skiferhus selger utvalgt skifer fra STOUNLINE, RIO GRANDE og CUPA PIZARRAS.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Skiferhus | Skifer til tak og fasade",
    description:
      "Utvalgt skifer fra STOUNLINE, RIO GRANDE og CUPA PIZARRAS.",
    url: "https://www.skiferhus.no",
    siteName: "Skiferhus",
    locale: "no_NO",
    type: "website",
    images: [
      {
        url: "https://www.skiferhus.no/og-image.png",
        width: 1200,
        height: 630,
        alt: "Skiferhus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skiferhus | Skifer til tak og fasade",
    description:
      "Utvalgt skifer fra STOUNLINE, RIO GRANDE og CUPA PIZARRAS.",
    images: ["https://www.skiferhus.no/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K6HHSY29DN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K6HHSY29DN');
          `}
        </Script>

        <FacebookPixel />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
