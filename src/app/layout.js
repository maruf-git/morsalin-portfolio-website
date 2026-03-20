/**
 * Root Layout
 * Wraps the entire application with ThemeProvider, fonts, and global metadata.
 * ThemeProvider enables light/dark mode via next-themes.
 */

import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "sonner";

// Load Inter font for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Load Fira Code for technical/code elements
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mdmorsalin.vercel.app";

// ─── Professional SEO Metadata ────────────────────────────────────────────────
export const metadata = {
  // Core Title & Description
  title: {
    default:
      "Md. Morsalin | EEE Researcher — Renewable Energy, Power Systems, and Hybrid Electric Vehicles",
    template: "%s | Md. Morsalin",
  },
  description:
    "Official academic portfolio of Md. Morsalin — Final-year EEE student at HSTU, Bangladesh. Researcher specializing in Renewable Energy, Power Systems, Power System Stability, Perovskite Solar Cells, and Hybrid Electric Vehicles. IEEE Student Member. Google Scholar, ORCID, Scopus, and Web of Science indexed publications.",

  // Keywords (long-tail, academic-specific)
  keywords: [
    "Md. Morsalin",
    "Morsalin HSTU",
    "EEE researcher Bangladesh",
    "Renewable Energy researcher",
    "Perovskite Solar Cell SCAPS-1D",
    "Hybrid Electric Vehicle researcher",
    "Power Electronics Bangladesh",
    "Power System Stability",
    "HSTU EEE",
    "Hajee Mohammad Danesh Science and Technology University",
    "IEEE Student Member Bangladesh",
    "Google Scholar Md Morsalin",
    "ORCID 0009-0007-1398-5418",
    "Scopus author 60128929700",
    "MATLAB Simulink researcher",
    "Tin-based Perovskite solar cell",
    "HEV energy management system",
    "EEE portfolio website",
    "academic portfolio Bangladesh",
    "mdmorsalin hstu gmail",
  ],

  // Author & Creator
  authors: [{ name: "Md. Morsalin", url: siteUrl }],
  creator: "Md. Morsalin",
  publisher: "Md. Morsalin",

  // Canonical URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title:
      "Md. Morsalin | EEE Researcher — Renewable Energy & Power Electronics",
    description:
      "Academic portfolio of Md. Morsalin — Researcher at HSTU specializing in Renewable Energy, Power Systems, Power System Stability, Perovskite Solar Cells, and HEV. IEEE Member with multiple indexed publications.",
    url: siteUrl,
    siteName: "Md. Morsalin — Academic Portfolio",
    locale: "en_US",
    type: "profile",
    firstName: "Md.",
    lastName: "Morsalin",
    username: "mdmorsalinhstu",
    gender: "male",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Md. Morsalin — EEE Researcher at HSTU Bangladesh",
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: "Md. Morsalin | EEE Researcher — HSTU Bangladesh",
    description:
      "Researcher in Renewable Energy, Power Systems, Power System Stability, and Perovskite Solar Cells. IEEE Member. ORCID: 0009-0007-1398-5418.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@mdmorsalinhstu",
  },

  // Verification (add your actual codes when available)
  verification: {
    google: "your-google-site-verification-code",
    // yandex: "your-yandex-code",
    // bing: "your-bing-code",
  },

  // Category
  category: "Academic Portfolio",

  // Other
  applicationName: "Md. Morsalin Portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" },
  ],
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md. Morsalin",
  givenName: "Md.",
  familyName: "Morsalin",
  jobTitle: "EEE Researcher & Engineer",
  description:
    "Final-year EEE student at Hajee Mohammad Danesh Science and Technology University, Bangladesh. Researcher specializing in Renewable Energy, Power Electronics, Power System Stability, Perovskite Solar Cells, and Hybrid Electric Vehicles.",
  url: siteUrl,
  email: "mdmorsalin.hstu@gmail.com",
  telephone: "+8801732056765",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dinajpur",
    postalCode: "5200",
    addressCountry: "BD",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Hajee Mohammad Danesh Science and Technology University",
    alternateName: "HSTU",
    url: "https://hstu.ac.bd",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dinajpur",
      addressCountry: "BD",
    },
  },
  knowsAbout: [
    "Renewable Energy",
    "Power Electronics",
    "Power System Stability",
    "Hybrid Electric Vehicles",
    "Perovskite Solar Cells",
    "SCAPS-1D Simulation",
    "MATLAB",
    "Simulink",
  ],
  sameAs: [
    "https://www.linkedin.com/in/mdmorsalinhstu/",
    "https://www.researchgate.net/profile/Md-Morsalin-7",
    "https://scholar.google.com/citations?user=a-vhwUwAAAAJ&hl=en",
    "https://orcid.org/0009-0007-1398-5418",
    "https://www.scopus.com/authid/detail.uri?authorId=60128929700",
    "https://www.webofscience.com/wos/author/record/NDS-9522-2025",
  ],
  identifier: [
    {
      "@type": "PropertyValue",
      name: "ORCID",
      value: "0009-0007-1398-5418",
      url: "https://orcid.org/0009-0007-1398-5418",
    },
    {
      "@type": "PropertyValue",
      name: "Scopus Author ID",
      value: "60128929700",
      url: "https://www.scopus.com/authid/detail.uri?authorId=60128929700",
    },
    {
      "@type": "PropertyValue",
      name: "Web of Science ResearcherID",
      value: "NDS-9522-2025",
      url: "https://www.webofscience.com/wos/author/record/NDS-9522-2025",
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Md. Morsalin — Academic Portfolio",
  url: siteUrl,
  description:
    "Academic portfolio of Md. Morsalin, EEE researcher at HSTU, Bangladesh.",
  author: {
    "@type": "Person",
    name: "Md. Morsalin",
  },
  inLanguage: "en-US",
  copyrightYear: new Date().getFullYear(),
  potentialAction: {
    "@type": "ReadAction",
    target: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${firaCode.variable}`}
    >
      <head>
        {/* JSON-LD Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased">
        {/* ThemeProvider wraps entire app for dark/light mode */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          {/* Global toast notifications */}
          <Toaster
            position="bottom-right"
            richColors
            toastOptions={{
              style: {
                background: "var(--bg-card)",
                color: "var(--text-primary)",
                border: "1px solid var(--border)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
