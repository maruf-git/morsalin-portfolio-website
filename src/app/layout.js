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

// SEO Metadata
export const metadata = {
  title: "Md. Morsalin — EEE Researcher & Engineer",
  description:
    "Portfolio of Md. Morsalin, B.Sc. EEE student at HSTU, passionate researcher in renewable energy, hybrid electric vehicles, perovskite solar cells, and power electronics.",
  keywords: [
    "Md. Morsalin",
    "EEE",
    "Renewable Energy",
    "Perovskite Solar Cell",
    "HSTU",
    "IEEE",
    "HEV",
    "SCAPS-1D",
    "Portfolio",
  ],
  authors: [{ name: "Md. Morsalin" }],
  creator: "Md. Morsalin",
  openGraph: {
    title: "Md. Morsalin — EEE Researcher & Engineer",
    description:
      "Academic portfolio featuring publications, conferences, awards, and research in renewable energy and power electronics.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Md. Morsalin Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Morsalin — EEE Researcher",
    description: "Researcher in renewable energy, HEV, and power electronics.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${firaCode.variable}`}
    >
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
