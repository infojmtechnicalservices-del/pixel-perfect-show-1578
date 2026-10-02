import { SERVICES, type ServiceKey } from "./services";
import { SITE, pageHead, jsonLd, businessSchema } from "./site";
import { faqSchema } from "@/components/site/Faq";

export function serviceHead(key: ServiceKey) {
  const s = SERVICES[key];
  const path = `${s.path}/`;
  return {
    ...pageHead({ title: s.title, description: s.description, path }),
    scripts: [
      jsonLd({
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${s.name} services in Cape Town`,
        serviceType: s.name,
        url: `${SITE.url}${path}`,
        provider: businessSchema,
        areaServed: { "@type": "City", name: "Cape Town" },
      }),
      jsonLd(faqSchema(s.faqs)),
      jsonLd({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
          { "@type": "ListItem", position: 2, name: s.name, item: `${SITE.url}${path}` },
        ],
      }),
    ],
  };
}
