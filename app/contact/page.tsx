import { Phone, Mail, MapPin, Clock, Printer } from "lucide-react"

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Sequoia Horticultural Products in Dinuba, CA. Call (559) 591-1177 or email us for pricing, availability, and bulk delivery of bark, mulch, and wood products across the Western United States.",
  alternates: { canonical: "https://www.seqhort.com/contact" },
  openGraph: {
    title: "Contact Us | Sequoia Horticultural Products",
    description: "Call (559) 591-1177 or email us. Mon–Fri 8:00 AM – 4:30 PM. Located in Dinuba, CA.",
    url: "https://www.seqhort.com/contact",
  },
}

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: "Phone",
    value: "(559) 591-1177",
    href: "tel:+15595911177",
  },
  {
    icon: Printer,
    label: "Fax",
    value: "(559) 591-1205",
    href: null,
  },
  {
    icon: MapPin,
    label: "Mailing Address",
    value: "PO Box 963\nDinuba, CA 93618",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri: 8:00 AM – 4:30 PM",
    href: null,
  },
]

const CONTACTS = [
  {
    name: "Garrett",
    role: "Sales & Orders",
    email: "garrett@seqhort.com",
  },
  {
    name: "Donna",
    role: "General Inquiries",
    email: "donna@seqhort.com",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-24">

      {/* Hero */}
      <div className="bg-green-900 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] font-bold tracking-widest text-green-400 uppercase mb-4">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-green-200 text-base md:text-lg max-w-xl mx-auto">
            Ready to place an order or have a question? We'd love to hear from you.
            Reach out by phone or email and we'll get back to you promptly.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">

        {/* Contact info + team */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Contact details */}
          <div className="bg-green-800 rounded-3xl p-8 flex flex-col gap-6">
            <h2 className="text-xl font-bold text-white">Contact Information</h2>
            {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-green-700 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-green-300" />
                </div>
                <div>
                  <p className="text-green-400 text-xs font-semibold tracking-wide uppercase mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-white font-medium hover:text-green-300 transition-colors whitespace-pre-line">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white font-medium whitespace-pre-line">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Team contacts */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-foreground">Our Team</h2>
            {CONTACTS.map((c) => (
              <div key={c.email} className="bg-surface border border-border rounded-2xl p-6 flex flex-col gap-3">
                <div>
                  <p className="text-lg font-bold text-foreground">{c.name}</p>
                  <p className="text-sm text-muted">{c.role}</p>
                </div>
                <a
                  href={`mailto:${c.email}`}
                  className="inline-flex items-center gap-2 text-sm text-green-700 hover:text-green-800 font-medium transition-colors"
                >
                  <Mail size={14} />
                  {c.email}
                </a>
                <a
                  href={`mailto:${c.email}`}
                  className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
                >
                  Send Email
                </a>
              </div>
            ))}

            {/* Phone CTA */}
            <a
              href="tel:+15595911177"
              className="bg-surface border border-border rounded-2xl p-6 flex items-center gap-4 hover:border-green-600 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-700 group-hover:bg-green-800 flex items-center justify-center flex-shrink-0 transition-colors">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-muted">Prefer to call?</p>
                <p className="text-xl font-bold text-foreground">(559) 591-1177</p>
              </div>
            </a>
          </div>

        </div>

        {/* Map embed placeholder */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">Find Us</h2>
          <div className="w-full rounded-2xl overflow-hidden border border-border h-72 bg-surface flex items-center justify-center">
            <iframe
              title="Sequoia Horticultural Products location in Dinuba, CA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.0!2d-119.387!3d36.543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDMyJzM0LjgiTiAxMTnCsDIzJzEzLjIiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </div>
  )
}
