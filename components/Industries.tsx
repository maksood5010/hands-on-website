import { industries } from "@/lib/content";

export default function Industries() {
  return (
    <section className="border-b border-brand-100 bg-brand-50">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wide text-brand-600">
          Built for every kind of customer-facing space
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {industries.map((industry) => (
            <div key={industry.label} className="flex items-center gap-2 text-brand-900">
              <span className="text-xl" aria-hidden>
                {industry.emoji}
              </span>
              <span className="text-sm font-medium sm:text-base">{industry.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
