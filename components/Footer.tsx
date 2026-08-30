import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { areaGroups } from "@/lib/areas";

export function Footer() {
  return (
    <footer className="bg-sea-50 text-ink-900">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div>
          <p className="font-display text-2xl text-sea-900">BeSafe 24-7</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-700">
            {site.legalName} provides boiler repair, servicing/CP12, installs and plumbing across Greater Glasgow. Gas Safe Registered ({site.gasSafe}).
          </p>
          <p className="mt-4 text-sm">Owner: {site.owner}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-sea-700">Quick links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about-us" className="hover:text-ember-500">About us</Link></li>
            <li><Link href="/services" className="hover:text-ember-500">All services</Link></li>
            <li><Link href="/glasgow" className="hover:text-ember-500">Glasgow coverage</Link></li>
            <li><Link href="/contact-us" className="hover:text-ember-500">Contact / quote</Link></li>
            <li><Link href="/guides/call-out-charges" className="hover:text-ember-500">Call-out charges guide</Link></li>
            <li><Link href="/privacy" className="hover:text-ember-500">Privacy policy</Link></li>
            <li><Link href="/terms" className="hover:text-ember-500">Terms of service</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-sea-700">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-ember-500">{s.navLabel}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-sea-700">Contact now</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={`tel:${site.phoneHref}`}>{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.address}</li>
          </ul>
          <p className="mt-4 rounded-xl bg-white p-3 text-xs leading-relaxed text-ember-500">
            If you smell gas or suspect CO, call {site.gasEmergency}.
          </p>
        </div>
      </div>
      <div className="border-t border-sea-800/10 px-4 py-6 text-center text-xs text-ink-700">
        <p className="mb-2">
          Areas we cover include {areaGroups[0].areas.slice(0, 6).join(", ")} and Greater Glasgow.
        </p>
        <p>© {new Date().getFullYear()} {site.legalName} — All Rights Reserved.</p>
      </div>
    </footer>
  );
}
