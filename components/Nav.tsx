"use client";

import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/lib/content";
import { BurgerIcon, CloseIcon } from "@/components/icons";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-brand-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/images/logo_white.png"
            alt="Hands-On Innovations"
            width={520}
            height={122}
            className="h-8 w-auto"
            priority
          />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="btn-shine inline-flex rounded-full bg-accent-500 px-6 py-2.5 font-sans text-sm font-bold text-brand-950"
          >
            <span>Request a Demo</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-4.5 w-4.5" /> : <BurgerIcon className="h-4.5 w-4.5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/8 bg-brand-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-sans text-base font-medium text-white/90"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-shine mt-2 inline-flex justify-center rounded-full bg-accent-500 px-5 py-3 text-center font-sans text-sm font-bold text-brand-950"
            >
              <span>Request a Demo</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
