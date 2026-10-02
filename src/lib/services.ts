import electricalImg from "@/assets/electrical.jpg";
import plumbingImg from "@/assets/plumbing.jpg";
import weldingImg from "@/assets/welding.jpg";
import buildingImg from "@/assets/building.jpg";

export type ServiceKey = "electrical" | "plumbing" | "welding" | "building";

export interface Service {
  key: ServiceKey;
  path: "/electrical" | "/plumbing" | "/welding" | "/building";
  name: string;
  short: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  image: string;
  waMessage: string;
  items: { name: string; text: string }[];
  problems: string[];
  faqs: { q: string; a: string }[];
  related: ServiceKey[];
}

export const SERVICES: Record<ServiceKey, Service> = {
  electrical: {
    key: "electrical",
    path: "/electrical",
    name: "Electrical",
    short: "Fault finding, DB boards, wiring, lights and plugs — plus emergency call-outs when the power goes.",
    title: "Electrician in Cape Town – 24/7 Electrical Repairs | JM Technical",
    description:
      "Electrician in Goodwood, Thornton & Cape Town. Fault finding, DB board repairs, rewiring, lights and plugs. 24/7 call-outs. WhatsApp or call 083 241 2126.",
    h1: "Electrician in Cape Town",
    intro:
      "Tripping breakers, no power, faulty plugs or a new installation — we find the fault, explain it clearly and fix it safely.",
    image: electricalImg,
    waMessage: "Hi JM Technical Services, I need help with an electrical issue. My area is [AREA].",
    items: [
      { name: "Emergency call-outs", text: "No power, burning smells or tripping that won't reset — WhatsApp or call us any time." },
      { name: "Fault finding", text: "Methodical testing to trace earth leakage, short circuits and intermittent faults." },
      { name: "DB board repairs & upgrades", text: "Replacing breakers, earth leakage units and outdated distribution boards." },
      { name: "Rewiring", text: "Partial or full rewiring of older homes and units." },
      { name: "Lights & plugs", text: "New light fittings, plug points, switches and outdoor lighting." },
      { name: "Compliance inspections", text: "Ask us about electrical compliance inspections and what your property needs." },
    ],
    problems: ["Breaker keeps tripping", "Power out in part of the house", "Plug points not working", "Lights flickering", "Burning smell from DB board", "Need extra plug points"],
    faqs: [
      { q: "Do you do emergency electrical call-outs?", a: "Yes. We offer 24/7 call-outs. WhatsApp or call 083 241 2126 and tell us what's happening and where you are." },
      { q: "Which areas do you cover?", a: "We're based in Cape Town and regularly work in Goodwood, Thornton and surrounding areas. Send us your suburb and we'll confirm availability." },
      { q: "How do I get a quote?", a: "Send a WhatsApp with a short description and photos if possible, or use our quote form. Some jobs need a site visit before we can quote." },
    ],
    related: ["plumbing", "building"],
  },
  plumbing: {
    key: "plumbing",
    path: "/plumbing",
    name: "Plumbing",
    short: "Burst pipes, leaks, geysers, blocked drains, taps and toilets — sorted quickly and neatly.",
    title: "Plumber in Cape Town – Leaks, Geysers & Blocked Drains | JM Technical",
    description:
      "Plumber in Goodwood, Thornton & Cape Town. Burst pipes, leaks, geyser repairs, blocked drains, taps and toilets. 24/7 call-outs. WhatsApp 083 241 2126.",
    h1: "Plumber in Cape Town",
    intro:
      "From a dripping tap to a burst geyser, we respond quickly, stop the damage and leave the job tidy.",
    image: plumbingImg,
    waMessage: "Hi JM Technical Services, I need a plumber. My issue is [PROBLEM] and I am located in [AREA].",
    items: [
      { name: "Emergency plumbing", text: "Burst pipes and major leaks — shut off your main valve and WhatsApp us." },
      { name: "Geyser repairs & replacement", text: "Elements, thermostats, valves, leaking or burst geysers." },
      { name: "Leak detection & repair", text: "Tracing hidden leaks behind walls, under floors and in roof spaces." },
      { name: "Blocked drains", text: "Clearing blocked sinks, toilets, showers and outside drains." },
      { name: "Taps, toilets & fittings", text: "Repairs and replacement of taps, mixers, cisterns and toilets." },
      { name: "Pipe installation", text: "New pipework for renovations, kitchens and bathrooms." },
    ],
    problems: ["Burst pipe", "Geyser leaking or no hot water", "Blocked drain or toilet", "High water bill / hidden leak", "Dripping taps", "Running toilet"],
    faqs: [
      { q: "What should I do if a pipe bursts?", a: "Turn off your main water supply, switch off the geyser if it's affected, then WhatsApp or call us on 083 241 2126." },
      { q: "Do you repair and replace geysers?", a: "Yes, we handle geyser repairs and replacements. Send us a photo of the geyser and its label to speed things up." },
      { q: "Can you help with blocked drains?", a: "Yes — sinks, toilets, showers and outside drains." },
    ],
    related: ["building", "electrical"],
  },
  welding: {
    key: "welding",
    path: "/welding",
    name: "Welding & Fabrication",
    short: "Gates, burglar bars, palisade fencing, repairs and custom steel fabrication.",
    title: "Welding & Fabrication in Cape Town – Gates, Burglar Bars | JM Technical",
    description:
      "Welding and steel fabrication in Goodwood, Thornton & Cape Town. Gates, burglar bars, palisade fencing, repairs and custom work. WhatsApp 083 241 2126.",
    h1: "Welding & Fabrication in Cape Town",
    intro:
      "Strong, neat steelwork for security and everyday use — new builds, custom pieces and on-site repairs.",
    image: weldingImg,
    waMessage: "Hi JM Technical Services, I need welding/fabrication work. Please contact me regarding my project.",
    items: [
      { name: "Gates", text: "Driveway, pedestrian and sliding gates — new or repaired." },
      { name: "Burglar bars & security gates", text: "Made to measure for windows and doors." },
      { name: "Palisade fencing", text: "Supply, installation and repairs of palisade fencing." },
      { name: "Custom fabrication", text: "Brackets, frames, railings, carports and one-off pieces." },
      { name: "Welding repairs", text: "On-site repairs to broken gates, hinges, frames and railings." },
      { name: "Balustrades & railings", text: "Steel balustrades and handrails for stairs and balconies." },
    ],
    problems: ["Broken gate hinge or track", "Need burglar bars", "Damaged palisade fence", "Custom steel bracket or frame", "Rusted railings", "New carport frame"],
    faqs: [
      { q: "Do you do on-site welding repairs?", a: "Yes, many repairs can be done on site. Send photos via WhatsApp so we can advise." },
      { q: "Can you make custom steel items?", a: "Yes. Share a sketch, photo or measurements and we'll discuss options and quote." },
      { q: "How do I get a quote for gates or burglar bars?", a: "Send rough measurements and photos on WhatsApp, or request a site visit through our quote form." },
    ],
    related: ["building", "electrical"],
  },
  building: {
    key: "building",
    path: "/building",
    name: "Building & Renovations",
    short: "Renovations, maintenance, plastering, painting and tiling — managed by one team.",
    title: "Builder in Cape Town – Renovations & Maintenance | JM Technical",
    description:
      "Building, renovations and property maintenance in Goodwood, Thornton & Cape Town. Plastering, painting, tiling and repairs. WhatsApp 083 241 2126.",
    h1: "Building & Renovations in Cape Town",
    intro:
      "Because we also handle electrical, plumbing and welding, your renovation needs fewer contractors and less coordination.",
    image: buildingImg,
    waMessage: "Hi JM Technical Services, I need building/renovation work. Please contact me regarding my project.",
    items: [
      { name: "Renovations", text: "Kitchens, bathrooms and room alterations." },
      { name: "Property maintenance", text: "Ongoing repairs for homes, landlords and businesses." },
      { name: "Plastering & painting", text: "Crack repairs, re-plastering and interior/exterior painting." },
      { name: "Tiling", text: "Floor and wall tiling for bathrooms, kitchens and patios." },
      { name: "Brickwork & small builds", text: "Walls, boundary walls and small structural work." },
      { name: "Damp & waterproofing", text: "Treating damp walls and leaking roofs." },
    ],
    problems: ["Cracked walls", "Bathroom renovation", "Tired paintwork", "Broken tiles", "Damp walls", "Rental property repairs"],
    faqs: [
      { q: "Can you manage a full renovation?", a: "Yes. We combine building with electrical and plumbing, so one team can handle most of the project." },
      { q: "Do you do maintenance for landlords and businesses?", a: "Yes. Contact us to discuss your property and the type of work needed." },
      { q: "Do you need to visit before quoting?", a: "For most building work, yes. Send photos first and we'll arrange a site visit." },
    ],
    related: ["plumbing", "electrical"],
  },
};

export const SERVICE_LIST = Object.values(SERVICES);
