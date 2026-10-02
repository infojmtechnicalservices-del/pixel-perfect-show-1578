import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, Droplets, Flame, Hammer, Clock, Wrench, MapPin, MessageCircle, ArrowRight, Phone } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { AREAS, SITE, businessSchema, jsonLd, pageHead, telHref, waHref } from "@/lib/site";
import { SERVICE_LIST, type ServiceKey } from "@/lib/services";
import { CtaGroup, FinalCta, btn } from "@/components/site/Cta";
import { Faq, faqSchema } from "@/components/site/Faq";

const FAQS = [
  { q: "Are you available 24/7?", a: "Yes, we offer 24/7 call-outs. WhatsApp or call 083 241 2126 at any time." },
  { q: "What services do you offer?", a: "Electrical, plumbing, welding & fabrication, and building & renovations — one team for all four trades." },
  { q: "Which areas do you serve?", a: "We're based in Cape Town and work in areas including Goodwood, Thornton, the Northern and Southern Suburbs and surrounds. Send your suburb to confirm." },
  { q: "How do I get a quote?", a: "WhatsApp us a description and photos, or fill in our quote form. Larger jobs may need a site visit first." },
];

const ICONS: Record<ServiceKey, typeof Zap> = { electrical: Zap, plumbing: Droplets, welding: Flame, building: Hammer };

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead({
      title: "JM Technical Services – Electrician, Plumber, Welder & Builder in Cape Town",
      description:
        "24/7 electrical, plumbing, welding & building call-outs in Goodwood, Thornton & Cape Town. One team, all trades. WhatsApp or call 083 241 2126 now.",
      path: "/",
    }),
    scripts: [jsonLd(businessSchema), jsonLd(faqSchema(FAQS))],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img src={hero} alt="JM Technical electrician working on a DB board in a Cape Town home" width={1600} height={1008} fetchPriority="high" className="absolute inset-0 size-full object-cover object-right" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-32">
          <p className="eyebrow text-primary">24/7 Call-Outs · Cape Town</p>
          <h1 className="mt-5 max-w-3xl text-4xl md:text-6xl">Electrical, Plumbing, Welding &amp; Building Services in Cape Town</h1>
          <p className="mt-6 max-w-xl text-lg text-steel-light">
            One reliable team for technical repairs, maintenance, installations and building work across Cape Town.
          </p>
          <CtaGroup className="mt-9" />
          <p className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-steel-light">
            <MapPin className="size-4 text-primary" /> Goodwood · Thornton · Greater Cape Town
          </p>
        </div>
      </section>

      <div className="hazard h-2" />
      <section className="bg-card">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            { icon: Clock, t: "24/7 Call-Outs" },
            { icon: Wrench, t: "4 Core Trades" },
            { icon: MapPin, t: "Cape Town Based" },
            { icon: MessageCircle, t: "WhatsApp Friendly" },
          ].map(({ icon: I, t }) => (
            <li key={t} className="flex items-center gap-3 bg-card px-5 py-6">
              <I className="size-6 text-accent" />
              <span className="font-display text-sm uppercase tracking-wide md:text-base">{t}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">Our services</p>
        <h2 className="mt-3 text-3xl md:text-5xl">One team. All trades.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SERVICE_LIST.map((s) => {
            const I = ICONS[s.key];
            return (
              <article key={s.key} className="group overflow-hidden rounded-md border bg-card shadow-card">
                <div className="relative h-52 overflow-hidden">
                  <img src={s.image} alt={`${s.name} services in Cape Town`} width={1200} height={800} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 grid size-11 place-items-center rounded-sm bg-primary text-primary-foreground"><I className="size-5" /></span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl">{s.name}</h3>
                  <p className="mt-2 text-muted-foreground">{s.short}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.items.slice(0, 4).map((i) => (
                      <li key={i.name} className="rounded-sm bg-secondary px-2.5 py-1 text-xs font-medium">{i.name}</li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link to={s.path} className="inline-flex items-center gap-1 font-bold uppercase tracking-wide text-accent hover:underline">
                      Learn more <span className="sr-only">about {s.name}</span><ArrowRight className="size-4" />
                    </Link>
                    <a href={waHref(s.waMessage)} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline-offset-4 hover:underline">Get a quote on WhatsApp</a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-2">
          <div>
            <p className="eyebrow text-primary">Why JM Technical</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Fewer contractors. Less hassle.</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {["One company for multiple trades", "Quick, convenient WhatsApp contact", "24/7 call-out service", "Clear quotation process", "Local Cape Town service", "Emergency assistance"].map((t) => (
                <li key={t} className="border-l-2 border-primary pl-4 text-steel-light">{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-primary">How it works</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Three simple steps</h2>
            <ol className="mt-8 space-y-6">
              {[
                ["Contact us", "WhatsApp, call or send a quote request with your problem and suburb."],
                ["Assess & quote", "We review photos or visit the site, then give you a clear quote."],
                ["Job done", "We complete the work and make sure you're happy with it."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-5">
                  <span className="font-display text-4xl text-primary">0{i + 1}</span>
                  <div>
                    <h3 className="text-xl">{t}</h3>
                    <p className="mt-1 text-steel-light">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">Service areas</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Serving Cape Town</h2>
            <p className="mt-4 text-muted-foreground">
              Based in Cape Town, we regularly help homes and businesses in Goodwood, Thornton and the wider metro. Send us your suburb and we'll confirm availability.
            </p>
            <a href={telHref} className={btn.outline + " mt-6"}><Phone className="size-4" /> {SITE.phoneDisplay}</a>
          </div>
          <ul className="grid grid-cols-2 gap-3 self-center">
            {AREAS.map((a) => (
              <li key={a} className="flex items-center gap-2 rounded-sm border bg-card px-4 py-3 text-sm font-medium">
                <MapPin className="size-4 text-accent" />{a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <p className="eyebrow">FAQ</p>
          <h2 className="mb-8 mt-3 text-3xl md:text-4xl">Common questions</h2>
          <Faq faqs={FAQS} />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
