import type { Metadata } from "next";
import { Manrope, Work_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "../config/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
  weight: ["200", "400", "600", "800"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} Dubai | Premium Interior Wrapping & Architectural Resurfacing`,
    template: `%s | ${siteConfig.shortName} Dubai`,
  },
  description: siteConfig.description,
  keywords: [
    "interior wrapping Dubai",
    "kitchen wrapping Dubai",
    "furniture wrapping UAE",
    "architectural resurfacing",
    "vinyl wrap interior",
    "cabinet wrapping Dubai",
    "bathroom wrapping",
    "smart wrapping",
    "smart advertising and wrapping",
    "luxury interior finish Dubai",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteConfig.url,
    siteName: `${siteConfig.shortName} Dubai`,
    title: `${siteConfig.shortName} Dubai | Premium Interior Wrapping & Architectural Resurfacing`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.shortName} Dubai — Luxury Interior Resurfacing`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Wrapping Dubai | Premium Interior Wrapping",
    description:
      "Transform your space in 24 hours with 500+ premium textures. Zero mess, 70% savings.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://smartwrapping.ae",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${workSans.variable} scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body antialiased">
        {children}
      </body>
    </html>
  );
}
