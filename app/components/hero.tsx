import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[560px] overflow-hidden rounded-2xl mx-auto max-w-7xl">
      {/* Background image */}
      <Image
        src="/SplashImage.png"
        alt="Sequoia forest"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 max-w-2xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/40 rounded-full px-3 py-1 mb-6 w-fit backdrop-blur-sm bg-white/10">
          <Leaf size={13} className="text-green-400" />
          <span className="text-white text-xs font-semibold tracking-widest uppercase">Established 1982</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          Masterful Cultivation,<br />Rooted in Heritage.
        </h1>

        {/* Subtext */}
        <p className="text-white/80 text-base md:text-lg mb-8 max-w-lg">
          Top-quality horticultural products since 1982. We provide professional-grade
          supplies for the most demanding landscape architects and commercial growers
          across the Western United States.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/products"
            className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Explore Products <ArrowRight size={16} />
          </Link>
          <Link
            href="/heritage"
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-xl transition-colors border border-white/30"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Since 1982 badge */}
      <div className="absolute bottom-8 right-8 z-10 w-20 h-20 rounded-full bg-green-700/90 backdrop-blur-sm flex flex-col items-center justify-center shadow-lg">
        <span className="text-white/80 text-[9px] font-semibold tracking-widest uppercase">Since</span>
        <span className="text-white text-xl font-bold leading-tight">1982</span>
        <Leaf size={12} className="text-white/70 mt-0.5" />
      </div>
    </section>
  )
}
