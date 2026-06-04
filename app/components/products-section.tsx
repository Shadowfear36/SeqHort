import Image from "next/image"
import Link from "next/link"
import { Leaf, ExternalLink } from "lucide-react"


const PRODUCTS = [
  {
    name: "Decorative Bark",
    slug: "decorative-bark",
    description:
      "Premium fir and pine bark, double-ground for a uniform texture that retains moisture and suppresses weed growth beautifully.",
    features: ["Superior Moisture Retention", "Organic Nutrient Cycling", "Professional Aesthetic Finish"],
    image: "/DecorativeBark.jpg",
  },
  {
    name: "Orchid Bark",
    slug: "orchid-bark",
    description:
      "Pure, clean-graded Douglas Fir bark designed specifically for commercial epiphytic cultivation and premium potting mixes.",
    features: ["Airlift Cleaned & Sized", "pH Balanced for Orchids", "Longevity in Potting Media"],
    image: "/OrchidBark.jpg",
  },
  {
    name: "Redwood Products",
    slug: "redwood-products",
    description:
      "Sustainable Redwood chips and fines, prized for their natural resistance to decay and vibrant, enduring color palette. Gorilla Hair is our most popular offering.",
    features: ["Natural Decay Resistance", "Iconic California Palette", "Sustainable Local Sourcing"],
    image: "/redwoodbark.jpg",
  },
  {
    name: "Wood Chips",
    slug: "wood-chips",
    description:
      "Long-lasting, durable, and very economical. A versatile ground cover used in everything from freeway projects to commercial landscapes.",
    features: ["Highly Economical", "Long-Lasting Coverage", "Bulk Availability"],
    image: "/WoodChips.jpg",
  },
  {
    name: "Shavings & Sawdust",
    slug: "shavings-sawdust",
    description:
      "Ideal for animal bedding and bare root tree storage. Available in a wide range of species to suit your specific needs.",
    features: ["Multiple Species Available", "Animal Bedding Grade", "Bare Root Storage"],
    image: "/ShavingsAndSawDust.jpg",
  },
  {
    name: "Fines & Humus",
    slug: "fines-humus",
    description:
      "Bark fines and humus serve as powerful soil amendments for nursery mixes and soil preparation. Available plain and treated.",
    features: ["Enriches Soil Structure", "Nursery Mix Ready", "Plain & Treated Options"],
    image: "/FinesAndHummus.jpg",
  },
]

export default function ProductsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-green-800 rounded-2xl px-8 py-12 text-center mb-10">
          <p className="text-[11px] font-bold tracking-widest text-green-400 uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Master-Crafted Bulk Products
          </h2>
          <p className="text-green-200 max-w-xl mx-auto text-sm md:text-base">
            Our bulk materials are processed with precision to ensure consistency, nutrient retention, and
            aesthetic perfection for high-end landscape projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.slug}
              className="bg-surface rounded-2xl overflow-hidden border border-border flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 384px"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-sm text-muted mb-4 flex-1">{product.description}</p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted">
                      <Leaf size={12} className="text-green-700 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center gap-1.5 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors w-full justify-center"
                >
                  View Products <ExternalLink size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
