export const site = {
  name: "BeSafe 24-7",
  legalName: "Besafe 247 Boiler Repair Glasgow",
  tagline: "Emergency boiler repair in Glasgow — 24/7",
  description:
    "Gas Safe engineers for boiler repair, servicing/CP12, new installs, plumbing, gas and drainage across Greater Glasgow.",
  phone: "0141 374 0545",
  phoneHref: "01413740545",
  mobile: "+44 7811 122227",
  whatsapp: "447811122227",
  email: "info@besafe24-7.co.uk",
  gasSafe: "930395",
  address: "66 Kinloch Rd, Newton Mearns, Glasgow, Scotland G77 6LX",
  owner: "Kamran Butt",
  gasEmergency: "0800 111 999",
  guarantee: "12-month workmanship guarantee",
  hours: "24/7 emergency availability",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About" },
  { href: "/areas-we-cover", label: "Areas" },
  { href: "/contact-us", label: "Contact" },
];

export const jobTypes = [
  "Boiler Repair",
  "Boiler Service",
  "New Boiler Quote",
  "Radiator/Heating",
  "Gas Leak",
  "Kitchen/Bathroom Plumbing",
  "Hot/Cold Pipes",
  "Drainage",
] as const;

export const brands = [
  "Worcester Bosch",
  "Vaillant",
  "Ideal",
  "Baxi",
  "Glow-worm",
  "Vokera",
  "Viessmann",
  "Alpha",
  "Potterton",
  "Ferroli",
];

export const homeFaqs = [
  {
    q: "How fast can you attend?",
    a: "Same day where possible. We offer two options — today PM or tomorrow AM/PM — and prioritise no-heat and no-hot-water faults.",
  },
  {
    q: "Do you give a price first?",
    a: "Yes. The engineer diagnoses first, then confirms a clear, itemised price before any work starts — no hidden extras.",
  },
  {
    q: "Do you work evenings and weekends?",
    a: "Yes. We are available 24/7 for urgent issues. Out-of-hours surcharges, if they apply, are shown before work begins.",
  },
  {
    q: "Do you do CP12s for landlords?",
    a: "Yes — annual servicing plus landlord gas safety certificates (CP12), with digital certificates and renewal reminders.",
  },
  {
    q: "Which boilers do you repair?",
    a: "All major brands, including Worcester Bosch, Vaillant, Ideal, Baxi and Glow-worm — combi, system and regular condensing boilers.",
  },
  {
    q: "Is your work guaranteed?",
    a: "Yes. We provide a 12-month workmanship guarantee. Parts and details appear on your invoice.",
  },
];

export const whyChoose = [
  "Same-day attendance for no-heat / no-hot-water faults",
  "Gas Safe Registered (930395) — warranty-safe work",
  "Upfront, itemised pricing — no hidden extras",
  "Vans stocked for first-visit fixes",
  "Clean finish, shoe covers and dust sheets",
  "12-month workmanship guarantee",
];

export const pricingGuide = {
  callout: "£60–£90 (includes safety checks)",
  labour: "£80–£110 per hour",
  smallParts: "£20–£250+ (valves, sensors, electrodes, seals)",
};

export function whatsappUrl(text?: string) {
  const message =
    text ||
    "Hi BeSafe 24-7, I need help with my heating / plumbing. Please send two appointment options.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
