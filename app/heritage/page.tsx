import Image from "next/image"
import Link from "next/link"
import { Leaf, Phone, Mail, MapPin } from "lucide-react"

const CUSTOMERS = [
  "Nurseries", "Landscape Contractors", "Landscape Suppliers",
  "Commercial Growers", "Orchid Growers", "Agricultural Operations",
  "Golf Courses", "Horseracing Tracks", "Playgrounds",
]

const STATS = [
  { value: "40+", label: "Years in Business" },
  { value: "1k+", label: "Partners Served" },
  { value: "11", label: "States Served" },
]

export const metadata = {
  title: "Our Heritage",
  description:
    "Founded by Gary Worrell on honesty and integrity, Sequoia Horticultural Products has supplied premium bark and wood products to nurseries, landscapers, and growers across the Western United States since 1982.",
  alternates: { canonical: "https://www.seqhort.com/heritage" },
  openGraph: {
    title: "Our Heritage | Sequoia Horticultural Products",
    description: "Over 40 years of wholesale horticultural supply rooted in California's Central Valley.",
    url: "https://www.seqhort.com/heritage",
    images: [{ url: "/SplashImage.png", width: 1200, height: 630, alt: "Sequoia forest — Our Heritage" }],
  },
}

export default function HeritagePage() {
  return (
    <div className="min-h-screen bg-background pt-24">

      {/* Hero */}
      <div className="bg-green-900 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] font-bold tracking-widest text-green-400 uppercase mb-4">Our Heritage</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Rooted in Honesty.<br />Built on Integrity.
          </h1>
          <p className="text-green-200 text-base md:text-lg max-w-2xl mx-auto">
            A wholesale supplier of premium horticultural products serving professionals
            across the Western United States since 1982.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-green-800 px-4 py-8">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-12">
          {STATS.map((s, i) => (
            <div key={s.label} className="flex items-center gap-12">
              <div className="text-center">
                <p className="text-4xl font-black text-white">{s.value}</p>
                <p className="text-green-300 text-xs font-semibold tracking-wide mt-1">{s.label}</p>
              </div>
              {i < STATS.length - 1 && <div className="w-px h-10 bg-green-700" />}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

        {/* Founding story */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] font-bold tracking-widest text-green-700 uppercase mb-3">Our Story</p>
            <h2 className="text-3xl font-bold text-foreground mb-5">Founded by Gary Worrell</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Sequoia Horticultural Products was founded on two principles that still guide everything
                we do today: <strong className="text-foreground">honesty and integrity</strong>. From day one,
                those values have allowed us to build lasting relationships and offer genuinely competitive
                pricing to every customer we serve.
              </p>
              <p>
                Based in California's Central Valley, we've grown from a local bark supplier into a trusted
                wholesale partner for professionals across the Western United States — without ever losing
                sight of what matters most: quality products and reliable service.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-green-100 dark:bg-green-900/30" />
            <div className="relative rounded-2xl overflow-hidden h-72 bg-gradient-to-br from-green-800 to-green-600 flex items-center justify-center shadow-lg">
              <Image
                src="/SplashImage.png"
                alt="Sequoia redwood forest — the inspiration behind Sequoia Horticultural Products"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-80"
              />
            </div>
          </div>
        </div>

        {/* What we do */}
        <div className="bg-green-800 rounded-3xl px-8 md:px-12 py-12">
          <p className="text-[11px] font-bold tracking-widest text-green-400 uppercase mb-3">What We Do</p>
          <h2 className="text-3xl font-bold text-white mb-4">Wholesale Horticultural Supply</h2>
          <p className="text-green-200 leading-relaxed max-w-2xl mb-8">
            We supply decorative bark, wood chips, sawdust, soil amendments, and planting mixes
            to a wide range of professionals. All of our bark and wood products are organic, renewable
            byproducts of trees harvested responsibly.
          </p>
          <div className="flex items-center gap-2 text-sm text-green-300 font-medium">
            <Leaf size={16} className="text-green-400" />
            Organic · Renewable · Responsibly Harvested
          </div>
        </div>

        {/* Who we serve */}
        <div>
          <p className="text-[11px] font-bold tracking-widest text-green-700 uppercase mb-3">Who We Serve</p>
          <h2 className="text-3xl font-bold text-foreground mb-8">Built for Professionals</h2>
          <div className="flex flex-wrap gap-3">
            {CUSTOMERS.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 bg-surface border border-border text-foreground text-sm font-medium px-4 py-2 rounded-full"
              >
                <Leaf size={13} className="text-green-600" />
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-green-800 rounded-3xl px-8 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
            <p className="text-green-200 text-sm mb-4">
              We'd love to work with you. Reach out for pricing, availability, and bulk delivery.
            </p>
            <div className="space-y-2 text-sm text-green-200">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-green-400" />
                PO Box 963, Dinuba, CA 93618
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-green-400" />
                (559) 591-1177 &nbsp;·&nbsp; Fax: (559) 591-1205
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 min-w-fit">
            <a
              href="tel:+15595911177"
              className="inline-flex items-center gap-2 bg-white text-green-800 font-semibold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors text-sm"
            >
              <Phone size={15} /> Call Us
            </a>
            <a
              href="mailto:garrett@seqhort.com"
              className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm"
            >
              <Mail size={15} /> Email Garrett
            </a>
            <a
              href="mailto:donna@seqhort.com"
              className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm"
            >
              <Mail size={15} /> Email Donna
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
