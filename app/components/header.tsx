"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  Phone,
  Mail,
  Menu,
  X,
  ShoppingBasket,
  FileText,
  History,
  HelpCircle,
  Calculator,
  Sun,
  Moon,
} from "lucide-react"

const NAV_LINKS = [
  { label: "Products", href: "/products", icon: ShoppingBasket },
  { label: "Our Heritage", href: "/heritage", icon: History },
  { label: "Calculators", href: "/calculators", icon: Calculator },
  { label: "Request Quote", href: "/quote", icon: FileText },
  { label: "Contact", href: "/contact", icon: HelpCircle },
]

const DESKTOP_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Our Heritage", href: "/heritage" },
  { label: "Calculators", href: "/calculators" },
  { label: "Request Quote", href: "/quote" },
  { label: "Contact", href: "/contact" },
]

const PHONE = "tel:+15595911177"
const EMAIL = "mailto:garrett@seqhort.com"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"))
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-background transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div
              className={`transition-all duration-300 overflow-hidden ${
                scrolled ? "h-14 w-14" : "h-24 w-24"
              }`}
            >
              <Image
                src="/Sequoia-Horticulture-Logo.png"
                width={200}
                height={200}
                loading="eager"
                alt="Sequoia Horticultural Products"
                className="object-contain w-full h-full"
                style={{ width: "auto" }}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {DESKTOP_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-green-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PHONE}
              className="flex items-center gap-1.5 rounded-full bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-800 transition-colors"
            >
              <Phone size={15} />
              Call Us
            </a>
            <a
              href={EMAIL}
              className="flex items-center gap-1.5 rounded-full border border-green-700 px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-50 transition-colors"
            >
              <Mail size={15} />
              Email Us
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:text-green-700 transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-[60] flex"
          onClick={() => setMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Drawer panel */}
          <div
            className="relative w-[78vw] max-w-xs bg-background flex flex-col h-full shadow-2xl rounded-r-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 p-1 text-muted hover:text-foreground"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>

            {/* Brand */}
            <div className="px-6 pt-8 pb-6 flex items-center gap-3">
              <div className="w-20 h-20 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/Sequoia-Horticulture-Logo.png"
                  width={80}
                  height={80}
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <p className="font-bold text-foreground leading-tight">Sequoia<br />Horticultural</p>
                <p className="text-[10px] font-semibold tracking-widest text-muted uppercase mt-0.5">Established 1982</p>
              </div>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-3">
              {NAV_LINKS.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-3.5 rounded-xl text-foreground hover:bg-green-700 hover:text-white transition-colors group"
                  >
                    <Icon size={20} className="flex-shrink-0" />
                    <span className="text-base font-medium">{link.label}</span>
                  </Link>
                )
              })}

              {/* Quick contact */}
              <div className="mt-4 flex flex-col gap-2 px-3">
                <a
                  href={PHONE}
                  className="flex items-center gap-3 py-3 text-foreground hover:text-green-700 transition-colors"
                >
                  <Phone size={20} className="flex-shrink-0" />
                  <span className="text-base font-medium">Call Us</span>
                </a>
                <a
                  href={EMAIL}
                  className="flex items-center gap-3 py-3 text-foreground hover:text-green-700 transition-colors"
                >
                  <Mail size={20} className="flex-shrink-0" />
                  <span className="text-base font-medium">Email Us</span>
                </a>
              </div>
            </nav>

            {/* Footer */}
            <div className="px-6 pb-6 border-t border-border pt-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-muted">
                  {dark ? "Dark mode" : "Light mode"}
                </span>
                <button
                  onClick={toggleTheme}
                  className="relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none"
                  style={{ backgroundColor: dark ? "#15803d" : "#d1d5db" }}
                  aria-label="Toggle theme"
                >
                  <span
                    className={`inline-flex items-center justify-center h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 ${
                      dark ? "translate-x-6" : "translate-x-1"
                    }`}
                  >
                    {dark ? <Moon size={11} className="text-green-700" /> : <Sun size={11} className="text-gray-400" />}
                  </span>
                </button>
              </div>
              <p className="text-[11px] text-muted">
                © 1982–{new Date().getFullYear()} Sequoia Horticultural Products.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
