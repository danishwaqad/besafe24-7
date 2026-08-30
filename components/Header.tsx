"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";
import { useQuote } from "./QuoteDrawer";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { openQuote } = useQuote();

  return (
    <header className="sticky top-0 z-40 border-b border-ink-900/10 bg-cream-50/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink-900 text-ember-400">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3c2 4 6 6.5 6 10a6 6 0 1 1-12 0c0-3.5 4-6 6-10Z" />
            </svg>
          </span>
          <span>
            <span className="block font-display text-xl font-semibold leading-none text-ink-900">
              BeSafe <span className="text-ember-500">24-7</span>
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-700/70">
              Gas Safe {site.gasSafe}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.href === "/services" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className={`rounded-full px-3 py-2 text-sm font-semibold ${
                    pathname.startsWith("/services") || services.some((s) => pathname === s.href)
                      ? "text-ember-500"
                      : "text-ink-800 hover:text-ember-500"
                  }`}
                >
                  Services
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full w-72 rounded-2xl border border-ink-900/10 bg-white p-3 shadow-xl">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block rounded-xl px-3 py-2 text-sm text-ink-800 hover:bg-cream-100"
                      >
                        {s.navLabel}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-semibold ${
                  pathname === item.href ? "text-ember-500" : "text-ink-800 hover:text-ember-500"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={`tel:${site.phoneHref}`} className="btn-dark !py-2.5">
            Call {site.phone}
          </a>
          <button type="button" onClick={() => openQuote()} className="btn-ember !py-2.5">
            Get a quote
          </button>
        </div>

        <button
          type="button"
          className="rounded-xl border border-ink-900/10 p-2 lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-ink-900" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink-900" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink-900" />
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-900/10 bg-cream-50 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 font-semibold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-xl px-3 py-1.5 text-sm text-ink-700"
                onClick={() => setOpen(false)}
              >
                {s.navLabel}
              </Link>
            ))}
            <a href={`tel:${site.phoneHref}`} className="btn-dark mt-2">
              Call {site.phone}
            </a>
            <button type="button" onClick={() => { setOpen(false); openQuote(); }} className="btn-ember">
              Get a quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
