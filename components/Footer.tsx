import Image from "next/image";
import { navLinks, site } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/6 bg-brand-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Image
            src="/images/logo_white.png"
            alt="Hands-On Innovations"
            width={520}
            height={122}
            className="h-8 w-auto opacity-90"
          />

          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-white/62 transition-colors hover:text-accent-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/8 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent-300">
              {site.email}
            </a>
            <a href={`tel:${site.phoneHref}`} className="transition-colors hover:text-accent-300">
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
