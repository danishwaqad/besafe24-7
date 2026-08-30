import { site } from "@/lib/site";

export function EmergencyBar() {
  return (
    <div className="bg-ember-400 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs font-semibold lg:px-6">
        <p className="tracking-wide">24/7 emergency boiler repair · Gas Safe {site.gasSafe}</p>
        <p>
          Gas smell? Leave the property and call{" "}
          <a className="underline" href={`tel:${site.gasEmergency.replace(/\s/g, "")}`}>
            {site.gasEmergency}
          </a>
        </p>
      </div>
    </div>
  );
}
