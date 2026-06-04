import Image from "next/image"
import Link from "next/link"
import { Phone, Clock, MapPin } from "lucide-react"

const PRODUCT_LINKS = [
  { label: "Decorative Bark", href: "/products/decorative-bark" },
  { label: "Orchid Bark", href: "/products/orchid-bark" },
  { label: "Redwood Products", href: "/products/redwood-products" },
  { label: "Wood Chips", href: "/products/wood-chips" },
  { label: "Shavings & Sawdust", href: "/products/shavings-sawdust" },
  { label: "Fines & Humus", href: "/products/fines-humus" },
]

const COMPANY_LINKS = [
  { label: "Our Heritage", href: "/heritage" },
  { label: "Calculators", href: "/calculators" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Request Quote", href: "/quote" },
]

const MEMBERS = [
  { name: "CLCA", sub: "Member", title: "California Landscape Contractors Association", href: "https://www.clca.org/" },
  { name: "CANGC", sub: "Member", title: "California Association of Nurseries and Garden Centers", href: "https://www.cangc.org/" },
]

export default function Footer() {
  return (
    <footer>
      {/* Industry memberships bar */}
      <div className="bg-background border-t border-border py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[10px] font-bold tracking-widest text-green-700 uppercase mb-8">
            Industry Memberships
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            {MEMBERS.map((m) => (
              <a
                key={m.name}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                title={m.title}
                className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity"
              >
                <span className="text-xl font-black text-foreground tracking-tight">{m.name}</span>
                <span className="text-[10px] font-semibold tracking-widest text-muted uppercase">{m.sub}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="w-28 h-28 rounded-2xl bg-white/10 ring-1 ring-white/20 flex items-center justify-center p-2 backdrop-blur-sm"
              style={{ filter: "drop-shadow(0 0 12px rgba(255,255,255,0.25))" }}
            >
              <Image
                src="/Sequoia-Horticulture-Logo.png"
                width={96}
                height={96}
                alt="Sequoia Horticultural Products logo"
                className="object-contain brightness-0 invert"
                style={{ width: "auto" }}
              />
            </div>
            <p className="text-green-200 text-sm leading-relaxed max-w-xs">
              Premium horticultural solutions for professionals and garden enthusiasts since 1982.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://www.instagram.com"
                aria-label="Sequoia Horticultural Products on Instagram"
                className="w-9 h-9 rounded-full border border-green-700 flex items-center justify-center text-green-300 hover:bg-green-800 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                aria-label="Sequoia Horticultural Products on Facebook"
                className="w-9 h-9 rounded-full border border-green-700 flex items-center justify-center text-green-300 hover:bg-green-800 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products column */}
          <div>
            <h3 className="text-[11px] font-bold tracking-widest text-green-400 uppercase mb-5">Products</h3>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-100 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-[11px] font-bold tracking-widest text-green-400 uppercase mb-5">Company</h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-100 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-[11px] font-bold tracking-widest text-green-400 uppercase mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5 text-sm text-green-100">
                <MapPin size={15} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span>14555 Avenue 408<br />Dinuba, CA 93618</span>
              </li>
              <li>
                <a
                  href="tel:+15595911177"
                  className="flex items-center gap-2.5 text-white font-bold text-lg hover:text-green-300 transition-colors"
                >
                  <Phone size={16} className="text-green-400 flex-shrink-0" />
                  (559) 591-1177
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-green-300">
                <Clock size={14} className="text-green-400 flex-shrink-0" />
                Mon–Fri: 8:00 AM – 4:30 PM
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-green-800">
          <div className="max-w-7xl mx-auto px-4 py-5 flex justify-center">
            <p className="text-green-400 text-xs">
              © 1982–{new Date().getFullYear()} Sequoia Horticultural Products. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
