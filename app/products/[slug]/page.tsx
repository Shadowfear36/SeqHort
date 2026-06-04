import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Leaf, Phone, Mail } from "lucide-react"
import { getCategoryBySlug, CATEGORIES } from "./data"

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return {}
  const url = `https://www.seqhort.com/products/${category.slug}`
  return {
    title: category.name,
    description: `${category.tagline} ${category.description} Available in bulk. Serving the Western United States since 1982.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${category.name} | Sequoia Horticultural Products`,
      description: category.tagline,
      url,
      images: [{ url: category.image, width: 1200, height: 630, alt: `${category.name} from Sequoia Horticultural Products` }],
    },
  }
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) notFound()

  return (
    <div className="min-h-screen bg-background pt-24 ">
      {/* Hero banner */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-6 pb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-4 transition-colors w-fit"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <p className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-1">
            Product Line
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white">{category.name}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Intro */}
        <div className="max-w-2xl mb-12">
          <p className="text-lg font-medium text-foreground mb-2">{category.tagline}</p>
          <p className="text-muted">{category.description}</p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {category.products.map((product) => (
            <div
              key={product.name}
              className="bg-surface border border-border rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-foreground text-base leading-snug">{product.name}</h3>
                  <span className="text-xs font-mono bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                    {product.size}
                  </span>
                </div>

                <p className="text-sm text-muted flex-1">{product.description}</p>

                {product.options && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {product.options.map((opt) => (
                      <span
                        key={opt}
                        className="inline-flex items-center gap-1 text-xs border border-border text-muted px-2 py-0.5 rounded-full"
                      >
                        <Leaf size={10} className="text-green-600" />
                        {opt}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-green-800 rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Ready to place an order?</h2>
            <p className="text-green-200 text-sm">
              Contact us for pricing, availability, and bulk delivery across the Western United States.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+15595911177"
              className="inline-flex items-center gap-2 bg-white text-green-800 font-semibold px-5 py-2.5 rounded-xl hover:bg-green-50 transition-colors text-sm"
            >
              <Phone size={15} /> (559) 591-1177
            </a>
            <a
              href="mailto:info@sequoiahort.com"
              className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-sm"
            >
              <Mail size={15} /> Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
