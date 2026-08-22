import Image from "next/image";
import { site } from "@/lib/content";
import AuroraGlow from "@/components/AuroraGlow";

const stats: { value: string; label: string }[] = [
  { value: "5", label: "Display formats" },
  { value: "8", label: 'Screen sizes, 32– 95"' },
  { value: "UAE", label: "Local install & support" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-950">
      {/* Animated background: slow zoom + drifting smoke, generated from banner.jpeg */}
      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/banner.jpeg"
      >
        {/* <source src="/videos/hero.webm" type="video/webm" /> */}
        <source src="/videos/banner.mp4" type="video/mp4" />
      </video>

      {/* Static fallback for reduced-motion preference / no video support */}
      <Image
        src="/images/banner.jpeg"
        alt="Hands-On Innovations smart digital signage display"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover motion-reduce:block"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/86 to-brand-950/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent" />

      <AuroraGlow
        className="-right-20 -top-30"
        color="rgba(224,164,41,.28)"
        size={520}
        blur={140}
        duration={16}
      />
      <AuroraGlow
        className="-bottom-40 -left-30"
        color="rgba(126,63,209,.35)"
        size={460}
        blur={140}
        duration={19}
        delay={2}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-0 px-6 py-24 sm:py-32 lg:px-8">
        <span
          className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-wide text-accent-300"
        >
          <span className="animate-pulse-ring h-1.5 w-1.5 rounded-full bg-accent-400" />
          Digital Signage &middot; UAE
        </span>

        <h1
          className="animate-fade-up mt-6 max-w-3xl text-4xl font-bold leading-[1.06] tracking-tight text-white [text-shadow:0_4px_40px_rgba(0,0,0,0.4)] sm:text-5xl lg:text-6xl font-display"
          style={{ animationDelay: "90ms" }}
        >
          {site.tagline}
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-white/85"
          style={{ animationDelay: "170ms" }}
        >
          Hands-On Innovations supplies smart digital signage displays — from countertop
          panels to full floor stands — with an optional Cloud CMS to manage, schedule
          and control every screen, anytime, anywhere.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
          style={{ animationDelay: "250ms" }}
        >
          <a
            href="#contact"
            className="btn-shine inline-flex justify-center rounded-full bg-accent-500 px-7 py-3.5 text-center font-sans text-sm font-bold text-brand-950 shadow-lg shadow-accent-500/20"
          >
            <span>Request a Demo</span>
          </a>
          <a
            href="#cms"
            className="inline-flex justify-center rounded-full border border-white/30 px-7 py-3.5 text-center font-sans text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Explore the Cloud CMS
          </a>
        </div>

        <div
          className="animate-fade-up mt-14 flex flex-wrap gap-10 border-t border-white/15 pt-7"
          style={{ animationDelay: "330ms" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
