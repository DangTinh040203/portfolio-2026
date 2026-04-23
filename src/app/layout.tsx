import { DM_Mono, DM_Sans, Fraunces } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://dangtinh.dev";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d1b2a",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Cao Dang Tinh — Fullstack Developer",
  description:
    "Fullstack Developer with 4.5+ years specializing in React.js, Next.js, Node.js, and NestJS. Building scalable web applications and AI-powered tools.",
  keywords: [
    "Fullstack Developer",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "Portfolio",
    "Cao Dang Tinh",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Cao Dang Tinh — Portfolio",
    title: "Cao Dang Tinh — Fullstack Developer",
    description:
      "Fullstack Developer with 4.5+ years specializing in React.js, Next.js, Node.js, and NestJS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cao Dang Tinh — Fullstack Developer",
    description:
      "Fullstack Developer with 4.5+ years specializing in React.js, Next.js, Node.js, and NestJS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${dmSans.variable}
          ${fraunces.variable}
          ${dmMono.variable}
          scrollbar-none antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
