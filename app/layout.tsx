import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "Skiferhus | Skifertak, fasader og uteområder",
    template: "%s | Skiferhus",
  },

  description:
    "Eksklusive skifer- og natursteinløsninger for hele Norge. Skifertak, fasader og uteområder.",

  openGraph: {
    title: "Skiferhus",
    description:
      "Eksklusive skifer- og natursteinløsninger for hele Norge.",
    url: "https://skiferhus.no",
    siteName: "Skiferhus",
    locale: "no_NO",
    type: "website",

    images: [
      {
        url: "public/og-image.png",
        width: 1200,
        height: 630,
        alt: "Skiferhus",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
          >
            <FacebookPixel />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}