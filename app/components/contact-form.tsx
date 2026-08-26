"use client"

import { useEffect, useState, type FormEvent } from "react"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

type Status = "idle" | "sending" | "success" | "error"

const RECIPIENT_OPTIONS = [
  { value: "general", label: "General Inquiry" },
  { value: "garrett", label: "Garrett — Sales & Orders" },
  { value: "donna", label: "Donna — General Inquiries" },
]

export default function ContactForm() {
  const [to, setTo] = useState("general")
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const preselect = params.get("to")
    if (preselect && RECIPIENT_OPTIONS.some((opt) => opt.value === preselect)) {
      setTo(preselect)
    }
  }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus("sending")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          to: formData.get("to"),
          message: formData.get("message"),
          company: formData.get("company"),
        }),
      })

      const data = await response.json().catch(() => ({ ok: false }))

      if (!response.ok || !data.ok) {
        setStatus("error")
        setErrorMessage(data.error || "Something went wrong. Please try again or call us.")
        return
      }

      setStatus("success")
      form.reset()
      setTo("general")
    } catch {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again or call us.")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-surface border border-border rounded-2xl p-8 flex flex-col items-center text-center gap-3">
        <CheckCircle2 size={32} className="text-green-600" />
        <p className="text-lg font-bold text-foreground">Message sent!</p>
        <p className="text-sm text-muted">
          Thanks for reaching out — we&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-green-700 hover:text-green-800 font-medium mt-2"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="bg-surface border border-border rounded-2xl p-6 md:p-8 flex flex-col gap-4"
    >
      <h2 className="text-xl font-bold text-foreground">Send Us a Message</h2>

      {/* Honeypot field — hidden from real users, catches basic bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] w-px h-px opacity-0"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="to" className="text-sm font-medium text-foreground">
            Send To
          </label>
          <select
            id="to"
            name="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            {RECIPIENT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle size={16} />
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors mt-2"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  )
}
