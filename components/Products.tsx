import Image from "next/image";
import { products, screenSizes } from "@/lib/content";

export default function Products() {
  return (
    <section id="products" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Displays
          </h2>
          <p className="mt-2 text-3xl font-bold text-brand-950 sm:text-4xl">
            A Display for Every Space
          </p>
          <p className="mt-4 text-brand-900/70">
            We supply every display format your business needs — each available across
            our full range of screen sizes.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {screenSizes.map((size) => (
            <span
              key={size}
              className="rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1 text-sm font-medium text-brand-700"
            >
              {size}
            </span>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-brand-50/40 transition-shadow hover:shadow-lg"
            >
              <div className="relative h-64 w-full overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-brand-950">{product.name}</h3>
                <p className="mt-2 text-sm text-brand-900/70">{product.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {product.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-brand-900/80">
                      <svg
                        className="mt-0.5 h-4 w-4 flex-none text-accent-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.415l-7.004 7a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 111.414-1.414l2.793 2.793 6.297-6.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-brand-300 bg-brand-50 p-6 text-center">
            <p className="text-lg font-semibold text-brand-950">Not sure which display fits your space?</p>
            <p className="mt-2 text-sm text-brand-900/70">
              Tell us about your venue and we&apos;ll recommend the right type and size.
            </p>
            <a
              href="#contact"
              className="mx-auto mt-5 rounded-full bg-brand-800 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
