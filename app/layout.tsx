import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://www.seqhort.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Sequoia Horticultural Products | Bulk Bark & Mulch — Dinuba, CA",
    template: "%s | Sequoia Horticultural Products",
  },
  description:
    "Wholesale supplier of decorative bark, orchid bark, redwood mulch, wood chips, and soil amendments since 1982. Serving nurseries, landscapers, growers, and golf courses across the Western United States.",
  keywords: [
    "decorative bark", "orchid bark", "redwood mulch", "gorilla hair mulch",
    "wood chips", "bark fines", "humus", "soil amendments", "bulk bark",
    "horticultural products", "wholesale bark", "landscape materials",
    "Dinuba CA", "Central Valley", "Western United States", "nursery supplies",
    "landscape bark", "planting mix", "fines and humus", "shavings sawdust",
  ],
  authors: [{ name: "Sequoia Horticultural Products" }],
  creator: "Sequoia Horticultural Products",
  publisher: "Sequoia Horticultural Products",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Sequoia Horticultural Products",
    title: "Sequoia Horticultural Products | Bulk Bark & Mulch — Dinuba, CA",
    description:
      "Wholesale supplier of decorative bark, orchid bark, redwood mulch, wood chips, and soil amendments since 1982. Serving the Western United States.",
    images: [
      {
        url: "/SplashImage.png",
        width: 1200,
        height: 630,
        alt: "Sequoia forest — Sequoia Horticultural Products, Dinuba CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sequoia Horticultural Products | Bulk Bark & Mulch",
    description:
      "Wholesale horticultural products since 1982. Decorative bark, redwood mulch, orchid bark, wood chips, and soil amendments for professionals.",
    images: ["/SplashImage.png"],
  },
  category: "Agriculture & Horticulture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Theme init — must run before paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');if(s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}})()`,
          }}
        />
        {/* LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.seqhort.com",
              name: "Sequoia Horticultural Products",
              description:
                "Wholesale supplier of decorative bark, orchid bark, redwood mulch, wood chips, and soil amendments since 1982. Serving nurseries, landscapers, growers, and golf courses across the Western United States.",
              url: "https://www.seqhort.com",
              telephone: "+15595911177",
              faxNumber: "+15595911205",
              email: "garrett@seqhort.com",
              foundingDate: "1982",
              address: {
                "@type": "PostalAddress",
                streetAddress: "PO Box 963",
                addressLocality: "Dinuba",
                addressRegion: "CA",
                postalCode: "93618",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.543,
                longitude: -119.387,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                  opens: "08:00",
                  closes: "16:30",
                },
              ],
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Western United States",
              },
              sameAs: ["https://share.google/TZsoOz4UpaKhXWaug"],
              memberOf: [
                { "@type": "Organization", name: "CLCA", url: "https://www.clca.org/" },
                { "@type": "Organization", name: "CANGC", url: "https://www.cangc.org/" },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </body>
    </html>
  );
}
