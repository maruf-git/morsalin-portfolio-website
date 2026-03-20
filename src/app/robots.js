/**
 * Robots.txt — Controls Google and other crawler access
 * Next.js App Router robots convention
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mdmorsalin.vercel.app";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
