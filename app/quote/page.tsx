"use client"

import { useState } from "react"
import { Send, RotateCcw, Leaf, Plus, X } from "lucide-react"
import { CATEGORIES, type Product } from "../products/[slug]/data"

type LineItem = { product: string; species: string }

const productLabel = (c: { name: string }, p: Product) => `${c.name} — ${p.name} (${p.size})`

const PRODUCTS = new Map(
  CATEGORIES.flatMap((c) => c.products.map((p) => [productLabel(c, p), p] as const))
)

const empty = {
  name: "",
  company: "",
  phone: "",
  fax: "",
  email: "",
  jobsite: "",
  shipTo: "",
  products: [] as LineItem[],
  quantity: "",
  dateRequired: "",
  notes: "",
}

export default function QuotePage() {
  const [form, setForm] = useState(empty)
  const [pick, setPick] = useState<LineItem>({ product: "", species: "" })

  const [submitted, setSubmitted] = useState(false)

  const set = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }))

  const pickSpecies = PRODUCTS.get(pick.product)?.species ?? []

  const selectProduct = (product: string) => {
    const species = PRODUCTS.get(product)?.species ?? []
    setPick({ product, species: species.length === 1 ? species[0] : "" })
  }

  const canAdd =
    pick.product !== "" &&
    (pickSpecies.length === 0 || pick.species !== "") &&
    !form.products.some((x) => x.product === pick.product && x.species === pick.species)

  const addProduct = () => {
    if (!canAdd) return
    setForm((f) => ({ ...f, products: [...f.products, pick] }))
    setPick({ product: "", species: "" })
  }

  const removeProduct = (i: number) =>
    setForm((f) => ({ ...f, products: f.products.filter((_, j) => j !== i) }))

  const clear = () => {
    setForm(empty)
    setPick({ product: "", species: "" })
  }

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
            onClick={() => { clear(); setSubmitted(false) }}
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
            <p className="text-sm text-muted mb-5">Choose a product and species, then add it. Repeat for each product you need.</p>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_12rem_auto] gap-4 items-end">
              <Field label="Product">
                <select value={pick.product} onChange={e => selectProduct(e.target.value)} className={input}>
                  <option value="">Select a product…</option>
                  {CATEGORIES.map((c) => (
                    <optgroup key={c.slug} label={c.name}>
                      {c.products.map((p) => {
                        const label = productLabel(c, p)
                        return <option key={label} value={label}>{p.name} ({p.size})</option>
                      })}
                    </optgroup>
                  ))}
                </select>
              </Field>
              <Field label="Species">
                <select
                  value={pick.species}
                  onChange={e => setPick((p) => ({ ...p, species: e.target.value }))}
                  disabled={pickSpecies.length <= 1}
                  className={input + " disabled:opacity-60"}
                >
                  {pickSpecies.length === 0 ? (
                    <option value="">{pick.product ? "Mixed / N/A" : "—"}</option>
                  ) : (
                    <>
                      {pickSpecies.length > 1 && <option value="">Select species…</option>}
                      {pickSpecies.map((s) => <option key={s} value={s}>{s}</option>)}
                    </>
                  )}
                </select>
              </Field>
              <button
                type="button"
                onClick={addProduct}
                disabled={!canAdd}
                className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
              >
                <Plus size={16} /> Add
              </button>
            </div>

            {form.products.length > 0 && (
              <ul className="mt-5 space-y-2">
                {form.products.map((item, i) => (
                  <li
                    key={`${item.product}|${item.species}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-green-700 bg-green-700 text-white text-sm font-medium"
                  >
                    <Leaf size={13} className="text-green-300 shrink-0" />
                    <span className="flex-1">
                      {item.product}
                      {item.species && <span className="text-green-200"> — {item.species}</span>}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeProduct(i)}
                      aria-label={`Remove ${item.product}`}
                      className="text-green-200 hover:text-white"
                    >
                      <X size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
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
              onClick={clear}
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
