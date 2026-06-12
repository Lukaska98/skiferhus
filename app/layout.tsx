import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skiferhus",
  description:
    "Eksklusive skifer- og natursteinløsninger for hele Norge. Skifertak, fasader og uteområder.",

  openGraph: {
    title: "Skiferhus",
    description:
      "Eksklusive skifer- og natursteinløsninger for hele Norge.",
    images: ["/images/terrace.jpg"],
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
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}