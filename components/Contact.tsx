import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Get in Touch
          </h2>
          <p className="mt-2 text-3xl font-bold text-brand-950 sm:text-4xl">
            Let&apos;s Upgrade Your Displays
          </p>
          <p className="mt-4 max-w-md text-brand-900/70">
            Tell us a little about your business and we&apos;ll help you choose the
            right display, size, and whether the Cloud CMS makes sense for you.
          </p>

          <dl className="mt-10 space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-700">
                ✉️
              </span>
              <div>
                <dt className="text-xs uppercase tracking-wide text-brand-900/50">Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="font-medium text-brand-950 hover:text-brand-700">
                    {site.email}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-700">
                📞
              </span>
              <div>
                <dt className="text-xs uppercase tracking-wide text-brand-900/50">Phone / WhatsApp</dt>
                <dd>
                  <a href={`tel:${site.phoneHref}`} className="font-medium text-brand-950 hover:text-brand-700">
                    {site.phone}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-700">
                🌐
              </span>
              <div>
                <dt className="text-xs uppercase tracking-wide text-brand-900/50">Website</dt>
                <dd>
                  <a href={site.url} className="font-medium text-brand-950 hover:text-brand-700">
                    {site.domain}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
