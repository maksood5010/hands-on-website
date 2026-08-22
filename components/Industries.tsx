import { industries } from "@/lib/content";
import { HotelIcon, OfficeIcon, RestaurantIcon, RetailIcon, SalonIcon } from "@/components/icons";

const ICONS = {
  restaurant: RestaurantIcon,
  retail: RetailIcon,
  hotel: HotelIcon,
  office: OfficeIcon,
  salon: SalonIcon,
} as const;

export default function Industries() {
  const track = [...industries, ...industries];

  return (
    <section className="relative overflow-hidden border-y border-white/6 bg-brand-900">
      <div className="grid-pattern pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 pt-11 lg:px-8">
        <p className="animate-fade-up mb-5 text-center font-sans text-xs font-bold uppercase tracking-wide text-white/45">
          Built for every kind of customer-facing space
        </p>
      </div>

      <div className="relative pb-11">
        <div
          className="marquee-track relative overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
            maskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div className="marquee-inner animate-marquee flex w-max">
            {track.map((industry, i) => {
              const Icon = ICONS[industry.icon];
              return (
                <div key={`${industry.label}-${i}`} className="flex flex-none items-center gap-2.5 px-6">
                  <Icon className="h-5.5 w-5.5 flex-none text-accent-400" aria-hidden="true" />
                  <span className="whitespace-nowrap font-sans text-sm font-semibold text-white/90">
                    {industry.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
