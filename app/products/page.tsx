import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { CATEGORIES } from "./[slug]/data"

export const metadata = {
  title: "Products",
  description:
    "Browse our full line of wholesale horticultural products — decorative bark, orchid bark, Gorilla Hair redwood mulch, wood chips, shavings, sawdust, and soil amendments. Serving the Western United States since 1982.",
  alternates: { canonical: "https://www.seqhort.com/products" },
  openGraph: {
    title: "Products | Sequoia Horticultural Products",
    description: "Wholesale bark, mulch, wood chips, and soil amendments for landscapers, nurseries, and growers.",
    url: "https://www.seqhort.com/products",
    images: [{ url: "/DecorativeBark.jpg", width: 1200, height: 630, alt: "Decorative bark products from Sequoia Horticultural" }],
  },
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background pt-24">

      {/* Hero */}
      <div className="bg-green-900 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] font-bold tracking-widest text-green-400 uppercase mb-4">What We Offer</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Product Lines</h1>
          <p className="text-green-200 text-base md:text-lg max-w-xl mx-auto">
            Premium bark, wood, and soil products — carefully processed and graded for
            professionals across the Western United States.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-green-600 transition-colors flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={`${cat.name} — Sequoia Horticultural Products`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-lg font-bold text-foreground mb-1">{cat.name}</h2>
                <p className="text-sm text-muted flex-1 mb-4">{cat.tagline}</p>
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 group-hover:text-green-800 transition-colors">
                  View Products <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Not sure CTA */}
        <div className="bg-green-800 rounded-3xl px-8 md:px-14 py-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Not sure what you're looking for?
            </h2>
            <p className="text-green-200 text-sm md:text-base max-w-lg">
              With over 40 years of experience, our team can help you find exactly the right
              product for your project — whether you're a first-time buyer or a seasoned pro.
              Give us a call or send us a message and we'll point you in the right direction.
            </p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <a
              href="tel:+15595911177"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-800 font-semibold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors text-sm"
            >
              <Phone size={15} /> (559) 591-1177
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm"
            >
              Request a Quote
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
