import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const title = "Smart Digital Signage Displays in UAE | Hands-On Innovations";
const description =
  "Hands-On Innovations supplies smart digital signage displays and an optional Cloud CMS platform for restaurants, retail, hotels, offices and salons across the UAE — Dubai, Abu Dhabi, Sharjah and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "digital signage UAE",
    "digital signage displays Dubai",
    "digital menu board UAE",
    "smart displays for restaurants",
    "cloud CMS digital signage",
    "digital signage Abu Dhabi",
    "retail digital displays UAE",
  ],
  authors: [{ name: site.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: site.url,
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: "/images/banner.jpeg",
        width: 1376,
        height: 774,
        alt: "Hands-On Innovations smart digital signage display",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/banner.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/logo_purple.png`,
  image: `${site.url}/images/banner.jpeg`,
  email: site.email,
  telephone: site.phoneHref,
  description,
  areaServed: {
    "@type": "Country",
    name: "United Arab Emirates",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "AE",
  },
  sameAs: [],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-full flex flex-col bg-brand-950 text-white">
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
