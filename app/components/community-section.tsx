import Image from "next/image"
import { Star } from "lucide-react"

const STATS = [
  { value: "40+", label: "Years of Expertise" },
  { value: "1k+", label: "Partners Served" },
]

export default function CommunitySection() {
  return (
    <section className="py-6 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#e8e2d4] dark:bg-surface rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-0">

            {/* Image side */}
            <div className="relative md:w-1/2 w-full">
              <div className="absolute top-6 left-6 w-40 h-28 rounded-2xl bg-green-200/50 dark:bg-green-900/30 z-0" />
              <div className="relative z-10 m-8 rounded-2xl overflow-hidden h-64 md:h-80 shadow-lg">
                <Image
                  src="/CentralValley.png"
                  alt="Aerial view of California's Central Valley at sunset — home of Sequoia Horticultural Products"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text side */}
            <div className="md:w-1/2 w-full px-8 md:px-12 py-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Rooted in Community
              </h2>
              <p className="text-muted text-sm md:text-base mb-8 leading-relaxed">
                Operating from the heart of California, our legacy is built on the relationships
                we've nurtured within the Central Valley. We believe that masterful cultivation
                starts with a deep respect for the local ecosystem and the professionals who care for it.
              </p>

              {/* Stats */}
              <div className="flex items-center gap-8 mb-8">
                {STATS.map((stat, i) => (
                  <div key={stat.label} className="flex items-start gap-8">
                    <div>
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted mt-0.5">{stat.label}</p>
                    </div>
                    {i < STATS.length - 1 && (
                      <div className="w-px h-10 bg-border self-center" />
                    )}
                  </div>
                ))}
              </div>

              <a
                href="https://share.google/TZsoOz4UpaKhXWaug"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                <Star size={15} className="fill-yellow-400 text-yellow-400" />
                See What Our Customers Say
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
