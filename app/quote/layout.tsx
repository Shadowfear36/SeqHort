import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a wholesale price quote from Sequoia Horticultural Products. Tell us your product, quantity, delivery location, and date needed — we'll get back to you promptly.",
  alternates: { canonical: "https://www.seqhort.com/quote" },
  openGraph: {
    title: "Request a Quote | Sequoia Horticultural Products",
    description: "Get wholesale pricing on bark, mulch, wood chips, and soil amendments. Serving the Western United States.",
    url: "https://www.seqhort.com/quote",
  },
}

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
