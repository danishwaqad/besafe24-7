export type Service = {
  slug: string;
  href: string;
  title: string;
  shortTitle: string;
  navLabel: string;
  summary: string;
  hero: string;
  intro: string;
  emergency?: boolean;
  problems: string[];
  includes: string[];
  process: { title: string; body: string }[];
  extras: string[];
  times: string[];
  pricing?: string[];
  cases?: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string }[];
};

export const services: Service[] = [
  {
    slug: "boiler-repair",
    href: "/boiler-repair",
    title: "Boiler Repair Glasgow",
    shortTitle: "Boiler Repair",
    navLabel: "Boiler Repair",
    summary:
      "No heat, no hot water, leaks, low pressure or ignition faults fixed the same day where possible. We repair modern condensing boilers — combi, system and regular — from Worcester Bosch, Vaillant, Ideal, Baxi, Glow-worm and more.",
    hero: "Expert boiler repair in Glasgow by Gas Safe engineers",
    intro:
      "Besafe 247 Boiler Repair Glasgow Ltd. provides professional and reliable boiler repair across Glasgow and surrounding areas. When your heating fails, certified Gas Safe engineers deliver prompt diagnostics and first-visit fixes wherever possible.",
    emergency: true,
    problems: [
      "Boiler won’t ignite / lockout (e.g. E01, F28, A20)",
      "No hot water or heating (diverter valve, sensor, ignition)",
      "Low pressure and frequent cut-outs",
      "Leaks from valves, seals, joints or condensate",
      "Frozen condensate pipe in cold weather",
      "Kettling, banging or gurgling noises",
      "Faulty pumps, fans, NTC sensors, PRVs, PCBs and plate heat exchangers",
    ],
    includes: [
      "Gas Safe Registered engineer (Reg 930395)",
      "Prompt call-outs for no heat or hot water",
      "Transparent, itemised quote before any work",
      "Common parts carried for first-visit fixes",
      "Gas tightness, flue and combustion checks",
      "Work summary, test readings and aftercare tips",
    ],
    process: [
      {
        title: "Book",
        body: "Call, WhatsApp or book online. Share symptoms, photos and your postcode.",
      },
      {
        title: "Diagnose & fix",
        body: "The engineer arrives with common parts, confirms the fault and price, then completes the repair where possible on the first visit.",
      },
      {
        title: "Safety & handover",
        body: "We run gas tightness, flue and combustion checks, reset/commission the appliance and demonstrate the controls.",
      },
    ],
    extras: [
      "Same-day emergency coverage across Glasgow and nearby towns",
      "No hot water? Combi specialists stock diverter valves, sensors and plate heat exchangers",
      "Leak and low-pressure repairs include PRV, expansion vessel and repressurise/bleed",
      "Frozen condensate: thaw safely, check fall, insulate or re-route internally",
      "Landlords: CP12 and annual servicing can be combined to save visits",
    ],
    times: [
      "Urgent no-heat/no-hot-water: same day where possible, often within hours",
      "Call-out & diagnostics: £60–£90 (includes safety checks)",
      "Labour: £80–£110 per hour",
      "Typical small parts: £20–£250+ depending on make/model",
    ],
    pricing: [
      "Call-out & diagnostics: £60–£90 (includes safety checks)",
      "Labour (per hour): £80–£110",
      "Typical small parts: £20–£250+ (valves, sensors, electrodes, seals)",
      "You’ll always get an itemised quote on-site before work proceeds",
    ],
    faqs: [
      {
        q: "How quickly can you attend a boiler breakdown?",
        a: "Urgent no-heat or no-hot-water calls are prioritised for same-day attendance, often within hours depending on traffic and parts availability.",
      },
      {
        q: "Do you work 24/7?",
        a: "Yes. We handle genuine emergencies day and night across Greater Glasgow.",
      },
      {
        q: "How much does a boiler repair cost?",
        a: "Call-out & diagnostics £60–£90; labour £80–£110 per hour; parts priced by make/model. You approve a fixed, itemised quote before work begins.",
      },
      {
        q: "Do you carry parts?",
        a: "We carry common parts for Worcester Bosch, Vaillant, Ideal, Baxi and Glow-worm to maximise first-visit fixes. If a special part is needed, we source it quickly.",
      },
      {
        q: "Are you Gas Safe registered?",
        a: "Yes — all gas work is completed by Gas Safe Registered engineers (930395). We provide documentation to keep warranties and insurance valid.",
      },
      {
        q: "Which boiler types do you repair?",
        a: "Modern condensing combi, system and regular boilers, plus pumps, fans, PCBs, sensors, PRVs and plate heat exchangers.",
      },
      {
        q: "Do you help landlords?",
        a: "Absolutely. Annual servicing, CP12 certification, emergency call-outs and portfolio scheduling with digital certificates.",
      },
      {
        q: "How do I pay?",
        a: "Card payments are accepted on completion. Your invoice shows the work completed, test results and guarantee details.",
      },
    ],
    related: [
      { href: "/boiler-service", label: "Boiler servicing & CP12" },
      { href: "/boiler-installation", label: "New boiler / installation" },
    ],
  },
  {
    slug: "boiler-service",
    href: "/boiler-service",
    title: "Boiler Servicing & CP12",
    shortTitle: "Servicing & CP12",
    navLabel: "Servicing & CP12",
    summary:
      "Annual servicing for efficiency and safety, plus landlord gas safety certificates (CP12). We check combustion, flue integrity, gas tightness and controls, then provide documentation.",
    hero: "Professional boiler service in Glasgow",
    intro:
      "Our Gas Safe engineers provide expert boiler servicing for homeowners and landlords across Glasgow. An annual service keeps warranties valid, prevents costly breakdowns, and helps your system run safely and efficiently.",
    problems: [
      "Annual service due or warranty at risk",
      "Landlord needs a CP12 / Landlord Gas Safety Certificate",
      "Pre-winter safety check before the heating season",
      "Unusual noises, pressure drops or higher bills",
      "Portfolio of rental properties needing reminders",
    ],
    includes: [
      "Visual inspection and ventilation checks",
      "Flue integrity & terminal checks",
      "Gas rate / burner pressure & combustion analysis",
      "Safety devices test (ignition, flame, thermostats)",
      "Condensate trap clean & seals/gaskets inspected",
      "System pressure/top-up advice",
      "Service stickers updated & digital service report issued",
    ],
    process: [
      {
        title: "Book your slot (AM/PM)",
        body: "We’ll confirm access, parking and brand/model.",
      },
      {
        title: "Engineer visit",
        body: "A Gas Safe engineer completes checks and cleans where needed.",
      },
      {
        title: "Results & advice",
        body: "We share your digital report and note any advisories.",
      },
      {
        title: "Reminders",
        body: "We set a reminder for next year so you stay compliant and covered.",
      },
    ],
    extras: [
      "Maintains manufacturer warranty",
      "Detects issues before they become breakdowns",
      "Improves efficiency and can lower energy bills",
      "Reduces risk of leaks or unsafe combustion",
      "CP12 available at the same visit for landlords — digital certificates the same day",
    ],
    times: [
      "Annual service: 45–60 minutes",
      "Service + advisories (minor): up to 75 minutes",
      "Fixed-price servicing confirmed when you book",
    ],
    faqs: [
      {
        q: "How long does a boiler service take?",
        a: "Typically 45–75 minutes depending on make, model and access.",
      },
      {
        q: "Do I need a boiler service every year?",
        a: "Yes. Annual servicing is recommended for safety, efficiency and to help keep warranties valid.",
      },
      {
        q: "Do you provide CP12 certificates?",
        a: "Yes. Gas Safe engineers carry out the checks and issue CP12 certificates for landlords.",
      },
      {
        q: "Will servicing fix a fault?",
        a: "A service is preventative. If we uncover a fault, we’ll explain the issue and provide a clear repair quote before proceeding.",
      },
      {
        q: "Which boilers do you service?",
        a: "Most domestic gas combi, system and regular condensing boilers from leading brands.",
      },
    ],
    related: [
      { href: "/boiler-repair", label: "Emergency boiler repair" },
      { href: "/boiler-installation", label: "New boiler installation" },
    ],
  },
  {
    slug: "boiler-installation",
    href: "/boiler-installation",
    title: "New Boiler / Installation",
    shortTitle: "New Boiler",
    navLabel: "New Boiler",
    summary:
      "A-rated combi and system boilers, honest sizing advice, neat installs and clear warranties. We remove the old unit, fit the new boiler, commission, balance and demonstrate controls.",
    hero: "Boiler installation Glasgow — A-rated combi & system boilers",
    intro:
      "If your boiler is beyond economical repair, we guide you through A-rated replacements sized for your home and budget. From free survey to commissioning, the install is tidy, compliant and warranty-registered.",
    problems: [
      "Frequent breakdowns on an ageing boiler",
      "Rising energy bills from an inefficient unit",
      "Obsolete parts that are hard or costly to source",
      "Inconsistent heating and hot water",
      "Boiler over ten years old",
    ],
    includes: [
      "Gas Safe Registered engineer (Reg 930395)",
      "Removal of old boiler & tidy pipework",
      "Commissioning, safety checks & Benchmark",
      "Smart controls setup (where supplied)",
      "Manufacturer warranty registration",
      "Digital documentation and reminders",
    ],
    process: [
      {
        title: "Free survey (AM/PM)",
        body: "We check property size, hot-water demand, flue/pipe routes, controls and ventilation.",
      },
      {
        title: "Options & fixed quote",
        body: "Clear good / better / best choices — no surprises.",
      },
      {
        title: "Installation day",
        body: "Old boiler removed; new boiler fitted and commissioned.",
      },
      {
        title: "Handover & paperwork",
        body: "Benchmark completed, controls shown, digital docs issued, warranty registered.",
      },
    ],
    extras: [
      "Combi boilers for instant hot water without tanks",
      "System boilers for higher hot-water demand with a cylinder",
      "Regular boilers for traditional heating layouts",
      "Popular add-ons: magnetic filter, system flush, CO alarm, scale reducer",
    ],
    times: [
      "Like-for-like combi swap: ~1 day",
      "Conversion/system upgrade: 1–2 days",
      "Paperwork & warranty registration: same day",
    ],
    faqs: [
      {
        q: "How long does a boiler installation take?",
        a: "Like-for-like swaps usually 1 day; conversions or upgrades 1–2 days.",
      },
      {
        q: "Do you remove my old boiler?",
        a: "Yes — removal, tidy pipework, commissioning and handover are all included.",
      },
      {
        q: "Do you register the warranty and Building Control?",
        a: "Yes — we register the manufacturer warranty and handle Gas Safe notification so you get the right certification.",
      },
      {
        q: "Can you fit smart controls?",
        a: "Yes — we install and set up compatible smart thermostats during handover.",
      },
      {
        q: "Do you offer finance?",
        a: "Ask when booking your survey; we’ll confirm current options and eligibility.",
      },
      {
        q: "Do you service the boiler after installation?",
        a: "Yes — we schedule your annual boiler service and can manage reminders.",
      },
    ],
    related: [
      { href: "/boiler-service", label: "Boiler servicing & CP12" },
      { href: "/radiator-installation-balancing", label: "Radiators & balancing" },
    ],
  },
  {
    slug: "radiator-installation-balancing",
    href: "/radiator-installation-balancing",
    title: "Radiator Installation & Balancing",
    shortTitle: "Radiators",
    navLabel: "Radiators",
    summary:
      "New radiators and relocations with proper sizing and valve selection. We balance the system so every room heats evenly and efficiently.",
    hero: "Radiator installation & balancing Glasgow — even heat in every room",
    intro:
      "Cold rooms or noisy rads? We size, supply and install new radiators (or relocate/replace existing), then balance the system so every room heats evenly. We can add TRVs, advise on styles/output (BTU), and leave everything neat and efficient.",
    problems: [
      "One room stays cold while others overheat",
      "Radiators heat unevenly (hot at top / cold at bottom)",
      "Recent boiler upgrade or system changes",
      "Refurb: moving radiators or pipework",
      "Radiators corroded, leaking or outdated",
    ],
    includes: [
      "Qualified heating engineer",
      "Protective coverings & tidy workmanship",
      "Correct BTU sizing & TRV setup",
      "System balancing & bleed",
      "Waste removal of old radiators (on request)",
    ],
    process: [
      {
        title: "Survey & options (AM/PM)",
        body: "Measure spaces, confirm BTU outputs, discuss styles/finishes and TRVs.",
      },
      {
        title: "Fixed quote",
        body: "Clear scope and pricing — no surprises.",
      },
      {
        title: "Installation",
        body: "Protect floors, fit/relocate, pressure test.",
      },
      {
        title: "Balancing & handover",
        body: "Even flow/return for consistent heat, plus TRV/thermostat guidance.",
      },
    ],
    extras: [
      "Panel, column, designer radiators and towel rails",
      "Relocations and height adjustments",
      "TRV + lockshield valve upgrades",
      "Magnetic filter & inhibitor to protect the system",
    ],
    times: [
      "Single radiator swap: 1–3 hours",
      "Multiple rads / relocations: half–full day (scope dependent)",
    ],
    cases: [
      {
        title: "G41 Shawlands — cold box room",
        body: "Replaced a single panel with a higher-BTU column rad and re-balanced. Room now matches the rest of the house.",
      },
      {
        title: "G12 Hillhead — loft conversion",
        body: "Added two new rads on an extended circuit, TRVs throughout, balanced flows. Even temperatures on all floors.",
      },
    ],
    faqs: [
      {
        q: "Do I need bigger radiators or just balancing?",
        a: "We calculate BTU needs and check system balance. Sometimes a balance fixes it; other times a higher-output rad is best.",
      },
      {
        q: "What are TRVs and do I need them?",
        a: "Thermostatic Radiator Valves give room-by-room control and help efficiency. We recommend TRVs in most rooms (not the room with the main wall thermostat).",
      },
      {
        q: "Will you flush the system?",
        a: "Only where helpful. We’ll assess water quality and advise if a powerflush/cleanse is worthwhile.",
      },
      {
        q: "Can you move a radiator to a new wall?",
        a: "Yes — we can reroute surface or concealed pipework and set the correct height/centres.",
      },
      {
        q: "Do you install towel rails?",
        a: "Yes — straight or curved rails with appropriate outputs for bathrooms and ensuites.",
      },
    ],
    related: [
      { href: "/boiler-installation", label: "New boiler installation" },
      { href: "/boiler-service", label: "Boiler servicing & CP12" },
    ],
  },
  {
    slug: "gas-leak-detection-pipe-repairs",
    href: "/gas-leak-detection-pipe-repairs",
    title: "Gas Leak Detection & Pipe Work",
    shortTitle: "Gas Leak / Pipework",
    navLabel: "Gas Leak",
    summary:
      "Rapid leak response, tightness testing and compliant repairs or re-runs. We handle meter-to-appliance pipe work and pressure/ventilation checks.",
    hero: "Gas leak detection & pipe repairs Glasgow — 24/7 Gas Safe engineers",
    intro:
      "Smell gas or think you have a leak? We provide rapid gas leak detection, tightness testing, and compliant gas pipe repairs. We locate the fault, make it safe, repair or re-route pipework neatly, and restore supply with full documentation.",
    emergency: true,
    problems: [
      "Sulphur/egg gas smell around meter, boiler, hob or pipe runs",
      "Hissing near joints, pipework, meter or regulator",
      "CO alarm activation",
      "Meter still spinning with all appliances turned off",
      "Recent DIY or renovation work near gas pipes",
    ],
    includes: [
      "Gas Safe Registered engineer (Reg 930395)",
      "Professional test equipment and written results",
      "Tidy workmanship with gas-rated materials",
      "Clear pricing before any work proceeds",
      "Emergency capping & isolation; safe reinstatement once passed",
    ],
    process: [
      {
        title: "Make safe & assess",
        body: "Confirm isolation/capping if required; visual inspection and risk assessment.",
      },
      {
        title: "Trace & diagnose",
        body: "Tightness test, pressure-drop checks, sniffer and leak-detection fluid.",
      },
      {
        title: "Repair or replace",
        body: "Renew joints/sections; re-route pipework if needed; tidy clips/cover.",
      },
      {
        title: "Test & certify",
        body: "Pass tightness test, purge and relight; supply records.",
      },
    ],
    extras: [
      "If you smell gas, leave the property and call 0800 111 999 first",
      "We attend for repairs after the property is made safe",
      "Documentation of tightness test results and advisories",
    ],
    times: [
      "Trace & minor repair: 1–2 hours",
      "Pipe section replacement/re-route: 2–4 hours (scope dependent)",
      "Call-out & diagnostics: £60–£90 (includes tightness test)",
      "Labour: £80–£110 per hour",
    ],
    pricing: [
      "Call-out & diagnostics: £60–£90 (includes safety checks/tightness test)",
      "Labour (per hour): £80–£110",
      "Typical consumables/parts: £10–£120+ (fittings, valves, flexi, clips)",
      "Pipe section re-route: scope-based, quoted on site",
    ],
    cases: [
      {
        title: "G41 Shawlands — leak at cooker bayonet",
        body: "Failed seal identified with sniffer; bayonet & hose replaced, tightness test passed, hob and boiler relit.",
      },
      {
        title: "G12 Hillhead — pipe nicked during refurb",
        body: "Isolated and capped, renewed copper section via accessible route, test passed and supply reinstated.",
      },
    ],
    faqs: [
      {
        q: "I can smell gas — what should I do?",
        a: "Leave the property and call 0800 111 999 (National Gas Emergency). Once safe, we can repair and reinstate your supply.",
      },
      {
        q: "Can you find very small (micro) leaks?",
        a: "Yes — we use tightness testing, gas sniffer and leak-detection fluid to pinpoint issues.",
      },
      {
        q: "Will you cap my supply if needed?",
        a: "Yes — we can safely isolate/cap, then repair or re-route and reinstate once tests pass.",
      },
      {
        q: "Do you repair appliance leaks (hob/cooker/boiler)?",
        a: "We can test connections and renew faulty hoses/valves. For appliance internals we’ll advise if manufacturer service is required.",
      },
      {
        q: "Do you provide documentation after the repair?",
        a: "Yes — we record tightness test results and any findings/advisories.",
      },
    ],
    related: [
      { href: "/boiler-repair", label: "Boiler repair" },
      { href: "/boiler-service", label: "Boiler servicing & CP12" },
    ],
  },
  {
    slug: "kitchen-and-bathroom-plumbing",
    href: "/kitchen-and-bathroom-plumbing",
    title: "Kitchen & Bathroom Plumbing",
    shortTitle: "Kitchen & Bathroom",
    navLabel: "Kitchen & Bathroom",
    summary:
      "Sinks, taps, showers, wastes and toilets — repairs and new installs with quality parts and a tidy finish.",
    hero: "Kitchen & bathroom plumbing Glasgow — fast, tidy repairs & installs",
    intro:
      "Drips, leaks or a tired bathroom/kitchen? We repair and replace taps, wastes, traps, toilets, showers and pipework — then test everything for a clean, reliable finish. We can also install dishwashers/washing machines and reseal baths/showers.",
    problems: [
      "Dripping taps and failed cartridges",
      "Leaking sinks, wastes, traps or overflows",
      "Running toilets, fill/flush valve faults",
      "Shower valves, heads, hoses and screens",
      "Appliance connections and reseal silicone",
    ],
    includes: [
      "Qualified plumber / Gas Safe engineer if a gas task is required (Reg 930395)",
      "Protective coverings and clean workspace",
      "Quality fittings & compliant connections",
      "Clear pricing before work begins",
      "Disposal of old parts/packaging on request",
    ],
    process: [
      {
        title: "Book a slot (AM/PM)",
        body: "Tell us the issue and share photos if you can.",
      },
      {
        title: "Assessment & quote",
        body: "We confirm the best repair vs replace option and price.",
      },
      {
        title: "Repair/installation",
        body: "Tidy work, correct fittings, tested and wiped down.",
      },
      {
        title: "Handover",
        body: "We show what was done and share simple care tips.",
      },
    ],
    extras: [
      "Gas hob connection available by a Gas Safe engineer on request",
      "Minor making-good included; plaster/tiling/decoration by others if required",
    ],
    times: [
      "Tap cartridge/replace: 30–60 mins",
      "Toilet valve/syphon: 45–90 mins",
      "Sink/basin swap: 1–2 hours",
      "Appliance hook-up: 30–60 mins",
    ],
    faqs: [
      {
        q: "Do you supply parts or can I provide my own?",
        a: "We can supply quality, warranty-backed parts, or fit customer-supplied items that meet UK standards.",
      },
      {
        q: "Can you reseal a bath/shower that’s leaking?",
        a: "Yes — we remove failed silicone, clean/prep properly and reseal with premium sanitary silicone.",
      },
      {
        q: "My toilet keeps filling/running — can you fix it?",
        a: "Yes — we replace fill/flush valves or syphons and check seals, traps and isolation.",
      },
      {
        q: "Do you handle tiling or cabinetry?",
        a: "We focus on plumbing. If tiling/cabinetry is needed, we’ll coordinate edges and advise on sequencing.",
      },
      {
        q: "Can you move a sink or appliance?",
        a: "Yes — we can re-run hot/cold and waste pipework to the new position, then test and tidy.",
      },
      {
        q: "Do you install gas hobs?",
        a: "Yes — by a Gas Safe engineer. Ask when booking so we schedule the right specialist.",
      },
    ],
    related: [
      { href: "/hot-cold-water-pipes", label: "Hot & cold water pipes" },
      { href: "/drain-unblocking", label: "Drainage" },
    ],
  },
  {
    slug: "hot-cold-water-pipes",
    href: "/hot-cold-water-pipes",
    title: "Hot & Cold Water Pipes",
    shortTitle: "Water Pipes",
    navLabel: "Hot & Cold Pipes",
    summary:
      "New runs, replacements and leak repairs. We recommend inhibitors and filtration where appropriate to protect your system.",
    hero: "Hot & cold water pipes Glasgow — installation & leak repairs",
    intro:
      "Low pressure, leaks or a refurb coming up? We install and replace hot & cold water pipework for kitchens, bathrooms and loft conversions, trace and fix leaks, and re-route untidy runs. We also upgrade stopcocks/PRVs and add isolation valves — everything pressure-tested and left tidy.",
    problems: [
      "Persistent leaks or green/white crust on joints",
      "Poor flow/pressure at taps or shower",
      "Refurb: moving sinks, appliances or bathrooms",
      "Old/mixed pipework causing noise or temperature swings",
      "Exposed, untidy or badly clipped runs",
    ],
    includes: [
      "Qualified plumber (Gas Safe engineer available if gas work is involved; Reg 930395)",
      "WRAS-compliant fittings & materials",
      "Protective coverings and clean workspace",
      "Pressure/flow test results",
      "Clear pricing before work begins",
    ],
    process: [
      {
        title: "Survey & options (AM/PM)",
        body: "Photos/measurements, pressure/flow checks, routing plan.",
      },
      {
        title: "Fixed quote",
        body: "Clear scope, fittings and labour — no surprises.",
      },
      {
        title: "Install/repair",
        body: "Isolate, protect, fit/re-route, clip and lag.",
      },
      {
        title: "Testing & handover",
        body: "Pressure/flow test, leak checks, and we show stopcock/isolation points.",
      },
    ],
    extras: [
      "Copper or WRAS-compliant PEX",
      "Stopcock replacement/relocation and PRV installs",
      "Isolation valves at each outlet; manifold setups where useful",
      "Outside taps with double check valves on request",
    ],
    times: [
      "Stopcock/valve swap: 30–60 mins",
      "Small re-run/repair: 1–3 hours",
      "Full kitchen/bath re-pipe: half–full day (scope dependent)",
    ],
    cases: [
      {
        title: "G41 Shawlands — low shower pressure",
        body: "Found a partially closed stopcock and undersized flexis. Fitted a full-bore stopcock and new flexis. Pressure restored.",
      },
      {
        title: "G12 Hillhead — kitchen refurb",
        body: "Re-routed hot/cold in multilayer PEX, added isolation at each outlet, clipped and lagged.",
      },
    ],
    faqs: [
      {
        q: "Why is my flow/pressure poor at one tap?",
        a: "Common causes include partially closed valves, limescale, kinked flexis or undersized runs. We test and correct the restriction.",
      },
      {
        q: "Do you use copper or plastic?",
        a: "Both — we pick the WRAS-compliant option that suits your property, access and future maintenance.",
      },
      {
        q: "Can you re-route pipes to hide them?",
        a: "Yes — we can conceal or surface-run with tidy clips. If chasing is needed, we’ll advise on making-good.",
      },
      {
        q: "What is a PRV and do I need one?",
        a: "A pressure reducing valve stabilises high/variable mains pressure, protecting fittings and improving comfort.",
      },
      {
        q: "Can you add an outside tap?",
        a: "Yes — with a double check valve and insulated pipework to suit external conditions.",
      },
    ],
    related: [
      { href: "/kitchen-and-bathroom-plumbing", label: "Kitchen & bathroom plumbing" },
      { href: "/drain-unblocking", label: "Drainage" },
    ],
  },
  {
    slug: "drain-unblocking",
    href: "/drain-unblocking",
    title: "Drainage (Unblocking & Repairs)",
    shortTitle: "Drainage",
    navLabel: "Drainage",
    summary:
      "Fast unblocking, odour fixes and durable repairs for indoor and outdoor drains. We also diagnose recurring blockages and recommend long-term prevention.",
    hero: "Drain unblocking Glasgow — fast clearing, odour removal & lasting repairs",
    intro:
      "Slow drains, bad smells or an overflowing gully? We clear blockages, jet clean pipework, trace odours and recurring faults, and provide CCTV drain surveys when needed. If there’s damage or root ingress, we patch line (CIPP) or replace sections for a long-term fix.",
    emergency: true,
    problems: [
      "Slow draining sinks, baths or showers",
      "Toilet backing up or gurgling",
      "Bad odours from wastes or stacks",
      "Surface water not clearing / standing water",
      "Overflowing gullies or manholes",
      "Repeated blockages in the same spot",
    ],
    includes: [
      "Qualified drainage/plumbing engineer",
      "Professional jetting & CCTV equipment",
      "Tidy work area, PPE and safe methods",
      "Before/after photos or video on request",
      "Clear, fixed pricing before remedial work",
    ],
    process: [
      {
        title: "Book your slot (AM/PM)",
        body: "Tell us the symptoms; share photos if possible.",
      },
      {
        title: "Initial clear",
        body: "Rodding/jetting to restore flow.",
      },
      {
        title: "Diagnose",
        body: "CCTV/trace if the issue is recurring or structural.",
      },
      {
        title: "Repair plan & quote",
        body: "Patch line, replace or rebuild as needed, plus preventative advice.",
      },
    ],
    extras: [
      "Mechanical rodding & high-pressure water jetting (HPWJ)",
      "CCTV drain inspection with video/report",
      "Odour tracing (smoke testing / vent checks)",
      "Patch lining / CIPP and small excavations",
      "Trap, gully & manhole repairs/rebuilds",
    ],
    times: [
      "Simple unblock: 30–60 minutes",
      "CCTV + remedials: 1–3 hours (scope dependent)",
      "Repairs/lining: same day or scheduled",
    ],
    cases: [
      {
        title: "G41 Shawlands — toilet backing up",
        body: "Cleared with rodding + HPWJ; CCTV found fat build-up. Degreased and added accessible cleanout. No recurrence.",
      },
      {
        title: "G12 Hillhead — odour in kitchen",
        body: "Smoke test revealed a dry trap and undersized vent. Replaced trap, improved venting. Odour resolved.",
      },
    ],
    faqs: [
      {
        q: "Why do my drains keep blocking?",
        a: "Common causes: grease scale, wipes, collapsed sections, root ingress, poor falls, or venting issues. We clear and find the reason so it doesn’t come back.",
      },
      {
        q: "Do you offer CCTV drain surveys?",
        a: "Yes — with video and a written report, plus recommendations for repair or lining if needed.",
      },
      {
        q: "Will jetting damage my pipes?",
        a: "We use controlled pressure and appropriate nozzles for each material and condition.",
      },
      {
        q: "Can you fix cracked or root-damaged pipes without digging?",
        a: "Often yes — patch lining (CIPP) can seal local defects. If excavation is better value, we’ll explain and quote.",
      },
      {
        q: "Do you offer preventative maintenance?",
        a: "Yes — periodic jet clean, access caps, and usage advice to reduce build-up.",
      },
    ],
    related: [
      { href: "/kitchen-and-bathroom-plumbing", label: "Kitchen & bathroom plumbing" },
      { href: "/hot-cold-water-pipes", label: "Hot & cold water pipes" },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
