import Image from "next/image";
import { navLinks, site } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-brand-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Image
            src="/images/logo_white.png"
            alt="Hands-On Innovations"
            width={520}
            height={122}
            className="h-8 w-auto"
          />

          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
            <a href={`tel:${site.phoneHref}`} className="hover:text-white">
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
