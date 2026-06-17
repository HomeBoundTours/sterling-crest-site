import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const SITE_URL = "https://sterlingcrestholdings.com";
const SITE_NAME = "Sterling Crest Holdings LLC";
const DEFAULT_TITLE = "Sterling Crest Holdings LLC — A Privately Held Family of Premium Brands";
const DEFAULT_DESCRIPTION =
  "Sterling Crest Holdings LLC is a privately held Arizona holding company and the parent of three premium service brands: Vellmont Consulting, Voyelle, and Courtwell.";

export const viewport: Viewport = {
  themeColor: "#36281F",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "Sterling Crest Holdings",
    "Vellmont Consulting",
    "Voyelle",
    "Courtwell",
    "holding company",
    "premium brands",
    "Arizona holding company",
    "privately held company",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Corporation",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description: DEFAULT_DESCRIPTION,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Phoenix",
        addressRegion: "AZ",
        addressCountry: "US",
      },
      subOrganization: [
        { "@type": "Organization", name: "Vellmont Consulting LLC", url: "https://vellmontconsulting.com" },
        { "@type": "Organization", name: "Voyelle" },
        { "@type": "Organization", name: "Courtwell" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="absolute top-[-100px] left-4 z-[9999] inline-flex items-center gap-2 rounded-full text-sm font-semibold px-5 py-2.5 transition-[top] duration-200 focus:top-4"
          style={{ background: "var(--color-espresso)", color: "#FCFBF7" }}
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
