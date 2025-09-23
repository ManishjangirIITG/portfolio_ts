import { NextResponse } from "next/server"

type ContactPayload = {
  name: string
  email: string
  message: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>
    const name = (body.name ?? "").trim()
    const email = (body.email ?? "").trim()
    const message = (body.message ?? "").trim()

    if (!name) return NextResponse.json({ error: "Name is required" }, { status: 400 })
    if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 })
    if (!isValidEmail(email)) return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    if (!message) return NextResponse.json({ error: "Message is required" }, { status: 400 })

    const receivedAt = new Date().toISOString()
    const payload = { name, email, message, receivedAt }

    // Optional webhook forwarding for notifications (e.g., to Slack/Discord/Email service)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      } catch (err) {
        // Continue even if webhook fails; we still acknowledge receipt
        console.error("Contact webhook error", err)
      }
    } else {
      // Fallback: log on server for visibility during development
      console.log("Contact message received:", payload)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}


