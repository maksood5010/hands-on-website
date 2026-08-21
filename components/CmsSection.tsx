import Image from "next/image";
import { cmsFeatures } from "@/lib/content";

export default function CmsSection() {
  return (
    <section id="cms" className="bg-brand-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-400">
            Optional Cloud CMS Platform
          </h2>
          <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Manage, Schedule &amp; Control Multiple Displays Anytime, Anywhere.
          </p>
          <p className="mt-4 text-white/70">
            Every Hands-On display works standalone — but when you&apos;re running more
            than one screen, our Cloud CMS gives you a single dashboard to manage them
            all, from any device, from anywhere.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {cmsFeatures.map((feature) => (
              <div key={feature.title}>
                <dt className="text-sm font-semibold text-white">{feature.title}</dt>
                <dd className="mt-1.5 text-sm text-white/60">{feature.description}</dd>
              </div>
            ))}
          </dl>

          <a
            href="#contact"
            className="mt-10 inline-block rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-brand-950 transition-colors hover:bg-accent-400"
          >
            See the CMS in Action
          </a>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-brand-700/30 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
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
