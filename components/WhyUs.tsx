import Image from "next/image";
import { whyUs } from "@/lib/content";
import { PinIcon, PlugIcon, SizesIcon, ToggleIcon } from "@/components/icons";

const ICONS = {
  plug: PlugIcon,
  sizes: SizesIcon,
  pin: PinIcon,
  toggle: ToggleIcon,
} as const;

export default function WhyUs() {
  return (
    <section className="bg-brand-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8">
        <div
          className="relative order-2 overflow-hidden rounded-3xl lg:order-1"
          style={{ animation: "fadeLeft .6s cubic-bezier(.16,1,.3,1) both, floatY 6s ease-in-out .9s infinite" }}
        >
          <Image
            src="/images/display_in_restaurant.png"
            alt="Hands-On Innovations display showing a digital menu at a restaurant bar"
            width={1920}
            height={1005}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="w-full rounded-3xl object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/55 to-transparent" />
          <div className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-2xl border border-white/14 bg-brand-950/60 px-4.5 py-3.5 backdrop-blur-md">
            <span className="animate-pulse-ring h-2.5 w-2.5 flex-none rounded-full bg-accent-500 shadow-[0_0_0_5px_rgba(224,164,41,.18)]" />
            <span className="font-sans text-xs font-semibold text-white">
              Live menu, updated from the Cloud CMS
            </span>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="animate-fade-up font-sans text-sm font-semibold uppercase tracking-wide text-accent-400">
            Why Hands-On Innovations
          </h2>
          <p className="animate-fade-up mt-2.5 font-display text-3xl font-bold text-white sm:text-4xl" style={{ animationDelay: "80ms" }}>
            One Partner, From Hardware to Software
          </p>

          <div className="mt-8.5 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whyUs.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <div
                  key={item.title}
                  className="animate-fade-up rounded-2xl border border-white/9 bg-white/3 p-6.5"
                  style={{ animationDelay: `${220 + i * 70}ms` }}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-brand-400/40 bg-brand-400/22 text-brand-300">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="mt-4 font-sans text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-white/62">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
