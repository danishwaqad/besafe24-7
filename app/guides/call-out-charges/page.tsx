import Link from "next/link";
import { site } from "@/lib/site";

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember-500">Guide</p>
      <h1 className="mt-3 font-display text-4xl">What is a reasonable call-out charge for a plumber?</h1>
      <p className="mt-6 text-ink-700">
        A few factors influence a call-out charge: time of day, travel distance, how urgent the work is, and the type of job. An emergency boiler breakdown typically costs more than a slow dripping tap that isn’t causing immediate damage.
      </p>
      <p className="mt-4 text-ink-700">
        It is common — and fair — for a call-out charge to apply even if no repair is completed during the visit. Sometimes a part needs ordering, or nothing major is wrong. You are paying for professional assessment and the time spent getting to you.
      </p>
      <p className="mt-4 text-ink-700">
        At BeSafe 24-7, call-out and diagnostics are typically £60–£90 (including safety checks). Labour is £80–£110 per hour. You approve a clear, itemised price before any work starts.
      </p>
      <p className="mt-8">
        <Link href="/contact-us" className="btn-ember">
          Get a quote · {site.phone}
        </Link>
      </p>
    </article>
  );
}
