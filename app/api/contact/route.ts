import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  businessType?: string;
  message?: string;
  // Honeypot field — real users never fill this in.
  website?: string;
};

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "sales@hands-on.ae";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Hands-On Innovations <onboarding@resend.dev>";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, company, phone, email, businessType, message, website } = body;

  // Honeypot: bots fill every field, real visitors never see this one.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Please fill in your name, email, phone and message." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error(
      "RESEND_API_KEY is not set. Add it to your environment variables to enable the contact form."
    );
    return NextResponse.json(
      {
        error:
          "The contact form isn't fully configured yet. Please email sales@hands-on.ae directly, or try again shortly.",
      },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New demo request from ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name: ${name}`,
        `Company: ${company || "-"}`,
        `Business type: ${businessType || "-"}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your message right now. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
