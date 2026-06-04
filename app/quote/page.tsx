"use client"

import { useState } from "react"
import { Send, RotateCcw, Leaf } from "lucide-react"

const PRODUCTS = [
  "Decorative Bark — Mini (1/8\" – 3/8\")",
  "Decorative Bark — Small (1/4\" – 3/4\")",
  "Decorative Bark — Medium (3/4\" – 1.5\")",
  "Decorative Bark — Large (2\" – 5\")",
  "Decorative Bark — Walk On (1\" – 3\")",
  "Orchid Bark — Small (1/8\" – 1/4\")",
  "Orchid Bark — Medium (1/4\" – 3/8\")",
  "Redwood — Gorilla Hair (Single Grind)",
  "Redwood — Double Grind",
  "Redwood — Triple Grind (Ligna Peat)",
  "Wood Chips — Redwood",
  "Wood Chips — White",
  "Wood Chips — Certified Playground",
  "Wood Chips — 1/4\" Nursery",
  "Wood Chips — 1/4\"–3/4\"",
  "Wood Chips — Colored",
  "Shavings & Sawdust — Sawdust",
  "Shavings & Sawdust — Shavings",
  "Shavings & Sawdust — Shadust",
  "Fines & Humus — 0-1/8\" Bark Fines",
  "Fines & Humus — 0-1/4\" Bark Fines",
  "Fines & Humus — Turf-n-Tee",
  "Fines & Humus — Treated Forest Humus",
  "Fines & Humus — Black Humus",
  "Fines & Humus — Sequoia Planting Mix",
]

const empty = {
  name: "",
  company: "",
  phone: "",
  fax: "",
  email: "",
  jobsite: "",
  shipTo: "",
  products: [] as string[],
  quantity: "",
  dateRequired: "",
  notes: "",
}

export default function QuotePage() {
  const [form, setForm] = useState(empty)

  const [submitted, setSubmitted] = useState(false)

  const set = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }))

  const toggleProduct = (p: string) =>
    setForm((f) => ({
      ...f,
      products: f.products.includes(p)
        ? f.products.filter((x) => x !== p)
        : [...f.products, p],
    }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire up form submission (email service / API)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mx-auto mb-6">
            <Leaf size={28} className="text-green-700" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-3">Quote Request Sent</h2>
          <p className="text-muted mb-8">
            Thank you! We'll review your request and get back to you with pricing as soon as possible.
          </p>
          <button
            onClick={() => { setForm(empty); setSubmitted(false) }}
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-24">

      {/* Hero */}
      <div className="bg-green-900 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] font-bold tracking-widest text-green-400 uppercase mb-4">Pricing</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Request a Quote</h1>
          <p className="text-green-200 text-base md:text-lg max-w-xl mx-auto">
            Our prices depend on quantity required, delivery location, date required, and other factors.
            Fill out the form below and we'll get back to you promptly.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <form onSubmit={handleSubmit} className="space-y-10">

          {/* Contact info */}
          <div>
            <h2 className="text-lg font-bold text-foreground mb-5">Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Your Name" required>
                <input type="text" value={form.name} onChange={e => set("name", e.target.value)}
                  required placeholder="Jane Smith" className={input} />
              </Field>
              <Field label="Company Name" required>
                <input type="text" value={form.company} onChange={e => set("company", e.target.value)}
                  required placeholder="Acme Nursery" className={input} />
              </Field>
              <Field label="Phone Number" required>
                <input type="tel" value={form.phone} onChange={e => set("phone", e.target.value)}
                  required placeholder="(559) 000-0000" className={input} />
              </Field>
              <Field label="Fax Number">
                <input type="tel" value={form.fax} onChange={e => set("fax", e.target.value)}
                  placeholder="(559) 000-0000" className={input} />
              </Field>
              <Field label="Email Address">
                <input type="email" value={form.email} onChange={e => set("email", e.target.value)}
                  placeholder="jane@example.com" className={input} />
              </Field>
              <Field label="Jobsite Name (if applicable)">
                <input type="text" value={form.jobsite} onChange={e => set("jobsite", e.target.value)}
                  placeholder="Riverside Park Project" className={input} />
              </Field>
              <Field label="Ship To City & State" required className="md:col-span-2">
                <input type="text" value={form.shipTo} onChange={e => set("shipTo", e.target.value)}
                  required placeholder="Fresno, CA" className={input} />
              </Field>
            </div>
          </div>

          {/* Products */}
          <div>
            <h2 className="text-lg font-bold text-foreground mb-1">Product(s) of Interest <span className="text-green-700">*</span></h2>
            <p className="text-sm text-muted mb-5">Select all that apply.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PRODUCTS.map((p) => {
                const checked = form.products.includes(p)
                return (
                  <button
                    type="button"
                    key={p}
                    onClick={() => toggleProduct(p)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left text-sm font-medium transition-colors ${
                      checked
                        ? "bg-green-700 border-green-700 text-white"
                        : "bg-surface border-border text-foreground hover:border-green-600"
                    }`}
                  >
                    <Leaf size={13} className={checked ? "text-green-300" : "text-green-600"} />
                    {p}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Order details */}
          <div>
            <h2 className="text-lg font-bold text-foreground mb-5">Order Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Quantity Required (cubic yards or bags)" required>
                <input type="text" value={form.quantity} onChange={e => set("quantity", e.target.value)}
                  required placeholder="e.g. 20 cubic yards" className={input} />
              </Field>
              <Field label="Estimated Date Required" required>
                <input type="date" value={form.dateRequired} onChange={e => set("dateRequired", e.target.value)}
                  required className={input} />
              </Field>
              <Field label="Additional Information" className="md:col-span-2">
                <textarea value={form.notes} onChange={e => set("notes", e.target.value)}
                  rows={4} placeholder="Any special requirements, delivery instructions, or questions..."
                  className={input + " resize-none"} />
              </Field>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={form.products.length === 0}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-xl transition-colors"
            >
              <Send size={16} /> Submit Quote Request
            </button>
            <button
              type="button"
              onClick={() => setForm(empty)}
              className="inline-flex items-center gap-2 border border-border text-muted hover:text-foreground px-4 py-3.5 rounded-xl transition-colors text-sm"
            >
              <RotateCcw size={15} /> Clear
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

function Field({ label, required, children, className }: {
  label: string
  required?: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-foreground mb-1.5">
        {label}{required && <span className="text-green-700 ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}

const input = "w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition"
