import { howItWorks } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-white/6 bg-brand-900">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="animate-fade-up font-sans text-sm font-semibold uppercase tracking-wide text-accent-400">
            How It Works
          </h2>
          <p className="animate-fade-up mt-2.5 font-display text-3xl font-bold text-white sm:text-4xl" style={{ animationDelay: "80ms" }}>
            From Unboxing to Live in Four Steps
          </p>
        </div>

        <div className="mt-13 grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item, index) => (
            <div
              key={item.step}
              className="animate-fade-up relative"
              style={{ animationDelay: `${140 + index * 100}ms` }}
            >
              <p className="bg-gradient-to-br from-accent-300 to-accent-500 bg-clip-text font-display text-3xl font-bold text-transparent">
                {item.step}
              </p>
              {index < howItWorks.length - 1 && (
                <span
                  className="animate-draw-line absolute top-4.5 left-[calc(50%+26px)] hidden h-px w-[calc(100%-20px)] origin-left bg-gradient-to-r from-accent-400/60 to-accent-400/0 lg:block"
                  style={{ animationDelay: `${260 + index * 120}ms` }}
                  aria-hidden="true"
                />
              )}
              <h3 className="mt-3.5 font-sans text-base font-bold text-white">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/62">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
