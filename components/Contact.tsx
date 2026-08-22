import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/content";
import AuroraGlow from "@/components/AuroraGlow";
import { EnvelopeIcon, GlobeIcon, PhoneIcon } from "@/components/icons";

const infoRows = [
  { icon: EnvelopeIcon, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: PhoneIcon, label: "Phone / WhatsApp", value: site.phone, href: `tel:${site.phoneHref}` },
  { icon: GlobeIcon, label: "Website", value: site.domain, href: site.url },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-brand-950 to-brand-900">
      <AuroraGlow className="right-[-140px] top-10" color="rgba(224,164,41,.16)" size={420} blur={150} duration={15} delay={1} />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">
        <div className="animate-fade-left">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wide text-accent-400">
            Get in Touch
          </h2>
          <p className="mt-2.5 font-display text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Upgrade Your Displays
          </p>
          <p className="mt-4 max-w-md text-white/66">
            Tell us a little about your business and we&apos;ll help you choose the
            right display, size, and whether the Cloud CMS makes sense for you.
          </p>

          <dl className="mt-9 space-y-5.5">
            {infoRows.map((row) => (
              <div key={row.label} className="flex items-center gap-3.5">
                <span className="flex h-10.5 w-10.5 flex-none items-center justify-center rounded-full border border-white/14 bg-white/7 text-accent-400">
                  <row.icon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <dt className="font-sans text-xs font-bold uppercase tracking-wide text-white/45">{row.label}</dt>
                  <dd>
                    <a href={row.href} className="font-sans font-semibold text-white hover:text-accent-300">
                      {row.value}
                    </a>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
