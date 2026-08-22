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

  const fieldClass =
    "mt-1.5 w-full rounded-xl border border-white/14 bg-white/5 px-3.5 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-accent-400 focus:ring-1 focus:ring-accent-400";
  const labelClass = "font-sans text-sm font-semibold text-white/75";

  if (status === "success") {
    return (
      <div className="animate-fade-right rounded-3xl border border-white/12 bg-gradient-to-b from-white/5.5 to-white/2 p-8 text-center">
        <p className="font-display text-lg font-semibold text-white">Thank you — request received!</p>
        <p className="mt-2 text-sm text-white/65">
          Our team will get back to you shortly. In the meantime, feel free to call or WhatsApp us.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-sans text-sm font-semibold text-accent-300 underline underline-offset-4"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="animate-fade-right rounded-3xl border border-white/12 bg-gradient-to-b from-white/5.5 to-white/2 p-6 sm:p-8"
      style={{ animationDelay: "120ms" }}
    >
      {/* Honeypot field, hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name
          </label>
          <input id="name" name="name" type="text" required className={fieldClass} />
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input id="company" name="company" type="text" className={fieldClass} />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={fieldClass} />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className={fieldClass} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="businessType" className={labelClass}>
            Business Type
          </label>
          <select id="businessType" name="businessType" defaultValue="" className={fieldClass}>
            <option value="" disabled className="bg-brand-900 text-white">
              Select one
            </option>
            {businessTypes.map((type) => (
              <option key={type} value={type} className="bg-brand-900 text-white">
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Tell us about your space and what you'd like to display..."
            className={fieldClass}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-shine mt-6 w-full rounded-full bg-accent-500 px-6 py-3.5 font-sans text-sm font-bold text-brand-950 transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span>{status === "submitting" ? "Sending..." : "Request a Demo"}</span>
      </button>
    </form>
  );
}
