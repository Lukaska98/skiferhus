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
    default: "Skiferhus | Skifertak, fasader og uteområder",
    template: "%s | Skiferhus",
  },

  description:
    "Eksklusive skifer- og natursteinløsninger for hele Norge. Skifertak, fasader og uteområder.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Skiferhus",
    description:
      "Eksklusive skifer- og natursteinløsninger for hele Norge.",
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
    title: "Skiferhus",
    description:
      "Eksklusive skifer- og natursteinløsninger for hele Norge.",
    images: ["https://www.skiferhus.no/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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