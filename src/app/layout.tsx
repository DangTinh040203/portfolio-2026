import { DM_Mono, DM_Sans, Fraunces } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { MotionProvider } from "@/components/motion";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "700"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cao Dang Tinh",
  url: SITE_URL,
  jobTitle: "Fullstack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ho Chi Minh City",
    addressCountry: "VN",
  },
  sameAs: ["https://github.com/DangTinh040203"],
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "AWS",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`
          ${dmSans.variable}
          ${fraunces.variable}
          ${dmMono.variable}
          scrollbar-none antialiased
        `}
      >
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
