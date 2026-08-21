import Image from "next/image";
import { screenSizes, site } from "@/lib/content";

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

      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/85 via-brand-950/40 to-brand-950/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-24 sm:py-32 lg:px-8">
        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-300">
          Digital Signage · UAE
        </span>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
          {site.tagline}
        </h1>

        <p className="max-w-xl text-lg text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
          Hands-On Innovations supplies smart digital signage displays — from countertop
          panels to full floor stands — with an optional Cloud CMS to manage, schedule
          and control every screen, anytime, anywhere.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-accent-500 px-7 py-3.5 text-center text-sm font-semibold text-brand-950 shadow-lg shadow-accent-500/20 transition-colors hover:bg-accent-400"
          >
            Request a Demo
          </a>
          <a
            href="#cms"
            className="rounded-full border border-white/30 px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Explore the Cloud CMS
          </a>
        </div>

        {/* <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/80">
          <span className="font-semibold text-white">Available in {screenSizes.length} sizes:</span>
          {screenSizes.map((size) => (
            <span key={size} className="rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
              {size}
            </span>
          ))}
        </div> */}
      </div>
    </section>
  );
}
