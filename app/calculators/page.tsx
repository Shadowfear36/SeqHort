"use client"

import { useState } from "react"
import { Calculator, ArrowRight } from "lucide-react"

// ─── Conversion helpers ───────────────────────────────────────────────────────
const toSqFt = (val: number, unit: string) => {
  if (unit === "sq. yd.") return val * 9
  if (unit === "acres") return val * 43560
  return val // sq. ft.
}

const toInches = (val: number, unit: string) =>
  unit === "feet" ? val * 12 : val

const toCubicYards = (sqFt: number, inches: number) =>
  (sqFt * (inches / 12)) / 27

// ─── Quantity Calculator ──────────────────────────────────────────────────────
function QuantityCalculator() {
  const [area, setArea] = useState("")
  const [areaUnit, setAreaUnit] = useState("sq. ft.")
  const [thick, setThick] = useState("")
  const [thickUnit, setThickUnit] = useState("inches")

  const sqFt = toSqFt(parseFloat(area) || 0, areaUnit)
  const inches = toInches(parseFloat(thick) || 0, thickUnit)
  const cyd = toCubicYards(sqFt, inches)
  const bags3 = cyd / (3 / 27)
  const bags2 = cyd / (2 / 27)
  const hasResult = cyd > 0

  return (
    <div className="bg-surface border border-border rounded-3xl overflow-hidden">
      <div className="bg-green-800 px-6 py-5">
        <p className="text-[11px] font-bold tracking-widest text-green-400 uppercase mb-1">How much do I need?</p>
        <h2 className="text-2xl font-bold text-white">Quantity Calculator</h2>
        <p className="text-green-200 text-sm mt-1">Enter your coverage area and desired depth to find out how much material you need.</p>
      </div>

      <div className="p-6 space-y-5">
        {/* Coverage Area */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Coverage Area</label>
          <div className="flex gap-2">
            <input
              type="number"
              min="0"
              value={area}
              onChange={e => setArea(e.target.value)}
              placeholder="0"
              className={inputCls}
            />
            <select value={areaUnit} onChange={e => setAreaUnit(e.target.value)} className={selectCls}>
              <option>sq. ft.</option>
              <option>sq. yd.</option>
              <option>acres</option>
            </select>
          </div>
        </div>

        {/* Thickness */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Thickness / Depth</label>
          <div className="flex gap-2">
            <input
              type="number"
              min="0"
              value={thick}
              onChange={e => setThick(e.target.value)}
              placeholder="0"
              className={inputCls}
            />
            <select value={thickUnit} onChange={e => setThickUnit(e.target.value)} className={selectCls}>
              <option>inches</option>
              <option>feet</option>
            </select>
          </div>
        </div>

        {/* Result */}
        <div className={`rounded-2xl p-5 transition-colors ${hasResult ? "bg-green-700" : "bg-background border border-border"}`}>
          <p className={`text-xs font-bold tracking-widest uppercase mb-4 ${hasResult ? "text-green-300" : "text-muted"}`}>
            Your project needs…
          </p>
          <div className="space-y-3">
            <ResultRow label="Cubic Yards" value={hasResult ? fmt(cyd) : "—"} highlight={hasResult} primary />
            <ResultRow label="3 cu. ft. Bags" value={hasResult ? fmt(bags3) : "—"} highlight={hasResult} />
            <ResultRow label="2 cu. ft. Bags" value={hasResult ? fmt(bags2) : "—"} highlight={hasResult} />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Coverage Calculator ──────────────────────────────────────────────────────
function CoverageCalculator() {
  const [qty, setQty] = useState("")
  const [qtyUnit, setQtyUnit] = useState("cubic yards")
  const [thick, setThick] = useState("")
  const [thickUnit, setThickUnit] = useState("inches")

  const toCyd = () => {
    const v = parseFloat(qty) || 0
    if (qtyUnit === "3 cu. ft. bags") return v * (3 / 27)
    if (qtyUnit === "2 cu. ft. bags") return v * (2 / 27)
    return v
  }

  const inches = toInches(parseFloat(thick) || 0, thickUnit)
  const cyd = toCyd()
  const sqFt = inches > 0 ? (cyd * 27) / (inches / 12) : 0
  const hasResult = sqFt > 0

  return (
    <div className="bg-surface border border-border rounded-3xl overflow-hidden">
      <div className="bg-green-800 px-6 py-5">
        <p className="text-[11px] font-bold tracking-widest text-green-400 uppercase mb-1">How far will it go?</p>
        <h2 className="text-2xl font-bold text-white">Coverage Calculator</h2>
        <p className="text-green-200 text-sm mt-1">Enter your quantity and desired depth to find out how much area your material will cover.</p>
      </div>

      <div className="p-6 space-y-5">
        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Quantity</label>
          <div className="flex gap-2">
            <input
              type="number"
              min="0"
              value={qty}
              onChange={e => setQty(e.target.value)}
              placeholder="0"
              className={inputCls}
            />
            <select value={qtyUnit} onChange={e => setQtyUnit(e.target.value)} className={selectCls}>
              <option>cubic yards</option>
              <option>3 cu. ft. bags</option>
              <option>2 cu. ft. bags</option>
            </select>
          </div>
        </div>

        {/* Thickness */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Thickness / Depth</label>
          <div className="flex gap-2">
            <input
              type="number"
              min="0"
              value={thick}
              onChange={e => setThick(e.target.value)}
              placeholder="0"
              className={inputCls}
            />
            <select value={thickUnit} onChange={e => setThickUnit(e.target.value)} className={selectCls}>
              <option>inches</option>
              <option>feet</option>
            </select>
          </div>
        </div>

        {/* Result */}
        <div className={`rounded-2xl p-5 transition-colors ${hasResult ? "bg-green-700" : "bg-background border border-border"}`}>
          <p className={`text-xs font-bold tracking-widest uppercase mb-4 ${hasResult ? "text-green-300" : "text-muted"}`}>
            Your material will cover…
          </p>
          <div className="space-y-3">
            <ResultRow label="Square Feet" value={hasResult ? fmt(sqFt) : "—"} highlight={hasResult} primary />
            <ResultRow label="Square Yards" value={hasResult ? fmt(sqFt / 9) : "—"} highlight={hasResult} />
            <ResultRow label="Acres" value={hasResult ? fmt(sqFt / 43560, 4) : "—"} highlight={hasResult} />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Shared sub-components ────────────────────────────────────────────────────
function ResultRow({ label, value, highlight, primary }: {
  label: string
  value: string
  highlight: boolean
  primary?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className={`text-sm ${highlight ? "text-green-200" : "text-muted"}`}>{label}</span>
      <span className={`font-bold tabular-nums ${
        primary
          ? highlight ? "text-white text-2xl" : "text-foreground text-2xl"
          : highlight ? "text-green-100 text-lg" : "text-foreground text-lg"
      }`}>
        {value}
      </span>
    </div>
  )
}

function fmt(n: number, decimals = 2) {
  if (!isFinite(n) || n <= 0) return "—"
  return n.toLocaleString("en-US", { maximumFractionDigits: decimals })
}

const inputCls = "flex-1 min-w-0 bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition"
const selectCls = "bg-background border border-border rounded-xl px-3 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition"

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-background pt-24">

      {/* Hero */}
      <div className="bg-green-900 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] font-bold tracking-widest text-green-400 uppercase mb-4">Tools</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Material Calculators</h1>
          <p className="text-green-200 text-base md:text-lg max-w-xl mx-auto">
            Estimate how much material your project needs, or find out how far a quantity will go.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">

        {/* Info note */}
        <div className="flex items-start gap-3 bg-surface border border-border rounded-2xl px-5 py-4 mb-10 text-sm text-muted">
          <Calculator size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
          <p>
            Results are estimates. Material requirements may vary based on settling, compaction,
            surface irregularities, and waste. We recommend adding <strong className="text-foreground">10–15%</strong> to your estimate for coverage buffer.
          </p>
        </div>

        {/* Calculators */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <QuantityCalculator />
          <CoverageCalculator />
        </div>

        {/* CTA */}
        <div className="mt-16 bg-green-800 rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Ready to order?</h2>
            <p className="text-green-200 text-sm">Use your estimate to request a quote — we'll handle the rest.</p>
          </div>
          <a
            href="/quote"
            className="inline-flex items-center gap-2 bg-white text-green-800 font-semibold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors text-sm whitespace-nowrap"
          >
            Request a Quote <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </div>
  )
}
