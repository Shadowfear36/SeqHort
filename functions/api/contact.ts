interface Env {
  RESEND_API_KEY: string
}

interface ContactContext {
  request: Request
  env: Env
}

const RECIPIENTS: Record<string, string[]> = {
  garrett: ["garrett@seqhort.com"],
  meliza: ["meliza@seqhort.com"],
  general: ["garrett@seqhort.com", "meliza@seqhort.com"],
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  })
}

export async function onRequestPost({ request, env }: ContactContext): Promise<Response> {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return json({ ok: false, error: "Invalid request body." }, 400)
  }

  const name = String(body.name ?? "").trim()
  const email = String(body.email ?? "").trim()
  const phone = String(body.phone ?? "").trim()
  const message = String(body.message ?? "").trim()
  const to = String(body.to ?? "general").trim()
  const honeypot = String(body.company ?? "").trim()

  // Silently accept spam-bot submissions that fill the hidden honeypot field.
  if (honeypot) return json({ ok: true })

  if (!name || !email || !message) {
    return json({ ok: false, error: "Name, email, and message are required." }, 400)
  }
  if (!isValidEmail(email)) {
    return json({ ok: false, error: "Please enter a valid email address." }, 400)
  }

  const recipients = RECIPIENTS[to] ?? RECIPIENTS.general

  const textLines = [
    `New message from the seqhort.com contact form`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    ``,
    message,
  ].filter((line): line is string => line !== null)

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Sequoia Horticultural Products <website@seqhort.com>",
      to: recipients,
      reply_to: email,
      subject: `Website inquiry from ${name}`,
      text: textLines.join("\n"),
    }),
  })

  if (!resendResponse.ok) {
    return json({ ok: false, error: "Failed to send message. Please try again or call us." }, 502)
  }

  return json({ ok: true })
}
