import Image from "next/image";
import { whyUs } from "@/lib/content";

export default function WhyUs() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <div className="relative order-2 overflow-hidden rounded-2xl lg:order-1">
          <Image
            src="/images/display_in_restaurant.png"
            alt="Hands-On Innovations display showing a digital menu at a restaurant bar"
            width={1920}
            height={1005}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="w-full rounded-2xl object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Why Hands-On Innovations
          </h2>
          <p className="mt-2 text-3xl font-bold text-brand-950 sm:text-4xl">
            One Partner, From Hardware to Software
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whyUs.map((item) => (
              <div key={item.title} className="rounded-xl border border-brand-100 bg-brand-50/60 p-5">
                <h3 className="text-base font-semibold text-brand-950">{item.title}</h3>
                <p className="mt-1.5 text-sm text-brand-900/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
