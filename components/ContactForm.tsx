"use client";

import { useState, type FormEvent } from "react";
import { businessTypes } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("We couldn't reach the server. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-200 bg-white p-8 text-center">
        <p className="text-lg font-semibold text-brand-950">Thank you — request received!</p>
        <p className="mt-2 text-sm text-brand-900/70">
          Our team will get back to you shortly. In the meantime, feel free to call or WhatsApp us.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-700 underline underline-offset-4"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-brand-200 bg-white p-6 sm:p-8">
      {/* Honeypot field, hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-brand-900">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-brand-200 px-3.5 py-2.5 text-sm text-brand-950 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
          />
        </div>

        <div>
          <label htmlFor="company" className="text-sm font-medium text-brand-900">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-1.5 w-full rounded-lg border border-brand-200 px-3.5 py-2.5 text-sm text-brand-950 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-brand-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-brand-200 px-3.5 py-2.5 text-sm text-brand-950 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-brand-900">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1.5 w-full rounded-lg border border-brand-200 px-3.5 py-2.5 text-sm text-brand-950 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="businessType" className="text-sm font-medium text-brand-900">
            Business Type
          </label>
          <select
            id="businessType"
            name="businessType"
            defaultValue=""
            className="mt-1.5 w-full rounded-lg border border-brand-200 px-3.5 py-2.5 text-sm text-brand-950 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
          >
            <option value="" disabled>
              Select one
            </option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-brand-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Tell us about your space and what you'd like to display..."
            className="mt-1.5 w-full rounded-lg border border-brand-200 px-3.5 py-2.5 text-sm text-brand-950 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-brand-800 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Request a Demo"}
      </button>
    </form>
  );
}
