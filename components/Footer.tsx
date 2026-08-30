import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { areaGroups } from "@/lib/areas";

export function Footer() {
  return (
    <footer className="bg-ink-950 text-cream-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div>
          <p className="font-display text-2xl">BeSafe 24-7</p>
          <p className="mt-3 text-sm leading-relaxed text-cream-200/80">
            {site.legalName} provides boiler repair, servicing/CP12, installs and plumbing across Greater Glasgow. Gas Safe Registered ({site.gasSafe}).
          </p>
          <p className="mt-4 text-sm">Owner: {site.owner}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-ember-400">Quick links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about-us" className="hover:text-ember-300">About us</Link></li>
            <li><Link href="/services" className="hover:text-ember-300">All services</Link></li>
            <li><Link href="/glasgow" className="hover:text-ember-300">Glasgow coverage</Link></li>
            <li><Link href="/contact-us" className="hover:text-ember-300">Contact / quote</Link></li>
            <li><Link href="/guides/call-out-charges" className="hover:text-ember-300">Call-out charges guide</Link></li>
            <li><Link href="/privacy" className="hover:text-ember-300">Privacy policy</Link></li>
            <li><Link href="/terms" className="hover:text-ember-300">Terms of service</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-ember-400">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-ember-300">{s.navLabel}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-ember-400">Contact now</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={`tel:${site.phoneHref}`}>{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.address}</li>
          </ul>
          <p className="mt-4 rounded-xl bg-white/5 p-3 text-xs leading-relaxed text-ember-300">
            If you smell gas or suspect CO, call {site.gasEmergency}.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-cream-200/60">
        <p className="mb-2">
          Areas we cover include {areaGroups[0].areas.slice(0, 6).join(", ")} and Greater Glasgow.
        </p>
        <p>© {new Date().getFullYear()} {site.legalName} — All Rights Reserved.</p>
      </div>
    </footer>
  );
}
