import Image from "next/image";
import { cmsFeatures } from "@/lib/content";
import AuroraGlow from "@/components/AuroraGlow";
import { GroupsIcon, MultiDeviceIcon, RemoteIcon, ScheduleIcon } from "@/components/icons";

const ICONS = {
  multidevice: MultiDeviceIcon,
  schedule: ScheduleIcon,
  remote: RemoteIcon,
  groups: GroupsIcon,
} as const;

export default function CmsSection() {
  return (
    <section id="cms" className="relative overflow-hidden bg-gradient-to-br from-brand-900 to-brand-800">
      <div className="grid-pattern pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <h2 className="animate-fade-up font-sans text-sm font-semibold uppercase tracking-wide text-accent-400">
            Optional Cloud CMS Platform
          </h2>
          <p className="animate-fade-up mt-2.5 font-display text-3xl font-bold text-white sm:text-4xl" style={{ animationDelay: "80ms" }}>
            Manage, Schedule &amp; Control Multiple Displays Anytime, Anywhere.
          </p>
          <p className="animate-fade-up mt-4 max-w-lg text-white/68" style={{ animationDelay: "140ms" }}>
            Every Hands-On display works standalone — but when you&apos;re running more
            than one screen, our Cloud CMS gives you a single dashboard to manage them
            all, from any device, from anywhere.
          </p>

          <dl className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {cmsFeatures.map((feature, i) => {
              const Icon = ICONS[feature.icon];
              return (
                <div
                  key={feature.title}
                  className="animate-fade-up flex gap-3.5"
                  style={{ animationDelay: `${180 + i * 70}ms` }}
                >
                  <span className="flex h-9.5 w-9.5 flex-none items-center justify-center rounded-xl border border-accent-400/30 bg-accent-500/14 text-accent-400">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <dt className="font-sans text-sm font-bold text-white">{feature.title}</dt>
                    <dd className="mt-1 text-sm text-white/62">{feature.description}</dd>
                  </div>
                </div>
              );
            })}
          </dl>

          <a
            href="#contact"
            className="btn-shine animate-fade-in mt-11 inline-flex rounded-full bg-accent-500 px-7 py-3.5 font-sans text-sm font-bold text-brand-950"
            style={{ animationDelay: "420ms" }}
          >
            <span>See the CMS in Action</span>
          </a>
        </div>

        <div
          className="relative"
          style={{ animation: "fadeRight .6s cubic-bezier(.16,1,.3,1) 120ms both, floatY 5s ease-in-out 1s infinite" }}
        >
          <AuroraGlow className="-right-10 -top-10" color="rgba(126,63,209,.5)" size={380} blur={110} duration={13} delay={0.5} />
          <div className="relative overflow-hidden rounded-3xl border border-white/14 shadow-2xl shadow-black/60">
            <Image
              src="/images/cms_screenshot.png"
              alt="Hands-On Innovations Cloud CMS dashboard showing playlists, devices and schedules"
              width={1999}
              height={1004}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
