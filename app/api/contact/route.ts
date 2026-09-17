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
const FROM_EMAIL = formatFrom(
  process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"
);

function formatFrom(from: string) {
  const trimmed = from.trim();
  if (trimmed.includes("<")) return trimmed;
  return `Hands-On Innovations <${trimmed}>`;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmail(payload: {
  name: string;
  company: string;
  phone: string;
  email: string;
  businessType: string;
  message: string;
}) {
  const rows = [
    ["Name", payload.name],
    ["Company", payload.company || "—"],
    ["Business type", payload.businessType || "—"],
    ["Email", payload.email],
    ["Phone", payload.phone],
  ] as const;

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 0;color:#6b7280;font-size:13px;width:140px;vertical-align:top;">${label}</td>
          <td style="padding:8px 0;color:#111827;font-size:14px;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;background:#f4f4f5;padding:24px;">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;padding:28px;border:1px solid #e5e7eb;">
        <p style="margin:0 0 4px;color:#c4a15a;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">Hands-On Innovations</p>
        <h1 style="margin:0 0 20px;color:#111827;font-size:20px;">New demo request</h1>
        <table style="width:100%;border-collapse:collapse;">${htmlRows}</table>
        <div style="margin-top:20px;padding-top:16px;border-top:1px solid #e5e7eb;">
          <p style="margin:0 0 8px;color:#6b7280;font-size:13px;">Message</p>
          <p style="margin:0;color:#111827;font-size:14px;white-space:pre-wrap;">${escapeHtml(payload.message)}</p>
        </div>
      </div>
    </div>
  `;

  return { text, html };
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
        error: `The contact form isn't fully configured yet. Please email ${TO_EMAIL} directly, or try again shortly.`,
      },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);

    const { text, html } = buildEmail({
      name: name.trim(),
      company: company?.trim() || "",
      phone: phone.trim(),
      email: email.trim(),
      businessType: businessType?.trim() || "",
      message: message.trim(),
    });

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email.trim(),
      subject: `New demo request from ${name.trim()}${company?.trim() ? ` (${company.trim()})` : ""}`,
      text,
      html,
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
