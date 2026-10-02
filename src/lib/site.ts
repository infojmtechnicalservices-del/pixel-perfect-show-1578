export const SITE = {
  name: "JM Technical Services and Projects",
  url: "https://jmtechnicalservices.co.za",
  email: "info.jmtechnicalservices@gmail.com",
  phoneDisplay: "083 241 2126",
  phoneIntl: "+27832412126",
  waNumber: "27832412126",
};

export const telHref = `tel:${SITE.phoneIntl}`;
export const mailHref = `mailto:${SITE.email}`;
export const waHref = (msg = "Hi JM Technical Services, I'd like some help. My area is [AREA].") =>
  `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(msg)}`;

export const AREAS = [
  "Goodwood",
  "Thornton",
  "Cape Town CBD",
  "Northern Suburbs",
  "Southern Suburbs",
  "Cape Flats",
  "Atlantic Seaboard",
  "Helderberg and surrounds",
];

export function pageHead(opts: { title: string; description: string; path: string; type?: string }) {
  const url = `${SITE.url}${opts.path}`;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:type", content: opts.type ?? "website" },
      { property: "og:locale", content: "en_ZA" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE.name,
  url: `${SITE.url}/`,
  telephone: SITE.phoneIntl,
  email: SITE.email,
  description: "24/7 electrician, plumber, welder and builder call-outs in Goodwood, Thornton and across Cape Town.",
  address: { "@type": "PostalAddress", addressLocality: "Cape Town", addressRegion: "Western Cape", addressCountry: "ZA" },
  areaServed: AREAS.map((name) => ({ "@type": "Place", name })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
};

export const jsonLd = (data: unknown) => ({ type: "application/ld+json", children: JSON.stringify(data) });
