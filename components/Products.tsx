import Image from "next/image";
import { products, screenSizes } from "@/lib/content";
import AuroraGlow from "@/components/AuroraGlow";
import SpotlightCard from "@/components/SpotlightCard";
import { CheckIcon } from "@/components/icons";

export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-brand-950">
      <AuroraGlow className="left-[-160px] top-15" color="rgba(126,63,209,.28)" size={480} blur={150} duration={17} delay={1} />
      <AuroraGlow className="bottom-[-100px] right-[-140px]" color="rgba(224,164,41,.18)" size={440} blur={150} duration={20} delay={3} />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="animate-fade-up font-sans text-sm font-semibold uppercase tracking-wide text-accent-400">
            Displays
          </h2>
          <p className="animate-fade-up mt-2.5 font-display text-3xl font-bold text-white sm:text-4xl" style={{ animationDelay: "80ms" }}>
            A Display for Every Space
          </p>
          <p className="animate-fade-up mt-4 text-white/65" style={{ animationDelay: "140ms" }}>
            We supply every display format your business needs — each available across
            our full range of screen sizes.
          </p>
        </div>

        <div className="animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-2.5" style={{ animationDelay: "200ms" }}>
          {screenSizes.map((size) => (
            <span
              key={size}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85"
            >
              {size}
            </span>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <SpotlightCard
              key={product.id}
              className="animate-fade-in flex flex-col overflow-hidden rounded-[28px] border border-white/9 bg-gradient-to-b from-white/5 to-white/2"
              style={{ animationDelay: `${220 + i * 70}ms` }}
            >
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_42%,rgba(126,63,209,.35),rgba(15,3,29,0)_68%)]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-8 [filter:drop-shadow(0_18px_30px_rgba(0,0,0,.45))]"
                  style={{ animation: `floatY ${4.5 + i * 0.3}s ease-in-out ${0.3 + i * 0.15}s infinite` }}
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-display text-lg font-semibold text-white">{product.name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/62">{product.description}</p>
                <ul className="mt-4 space-y-2">
                  {product.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-white/72">
                      <CheckIcon className="mt-0.5 h-3.5 w-3.5 flex-none text-accent-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          ))}

          <SpotlightCard
            className="animate-fade-in flex flex-col items-center justify-center gap-3.5 rounded-[28px] border-[1.5px] border-dashed border-accent-400/40 bg-accent-500/6 p-8 text-center"
            style={{ animationDelay: `${220 + products.length * 70}ms` }}
          >
            <p className="font-display text-lg font-semibold text-white">
              Not sure which display fits your space?
            </p>
            <p className="max-w-70 text-sm text-white/62">
              Tell us about your venue and we&apos;ll recommend the right type and size.
            </p>
            <a
              href="#contact"
              className="btn-shine mt-1.5 inline-flex rounded-full bg-accent-500 px-6 py-2.5 font-sans text-sm font-bold text-brand-950"
            >
              <span>Talk to Us</span>
            </a>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
