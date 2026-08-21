import { howItWorks } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-brand-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            How It Works
          </h2>
          <p className="mt-2 text-3xl font-bold text-brand-950 sm:text-4xl">
            From Unboxing to Live in Four Steps
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item, index) => (
            <div key={item.step} className="relative">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-brand-200">{item.step}</span>
                {index < howItWorks.length - 1 && (
                  <span className="hidden h-px flex-1 bg-brand-200 lg:block" aria-hidden />
                )}
              </div>
              <h3 className="mt-4 text-base font-semibold text-brand-950">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-900/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
