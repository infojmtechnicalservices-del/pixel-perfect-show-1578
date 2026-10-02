import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { AREAS } from "@/lib/site";
import { SERVICES, type Service } from "@/lib/services";
import { CtaGroup, FinalCta } from "./Cta";
import { Faq } from "./Faq";

export function ServicePage({ s }: { s: Service }) {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img src={s.image} alt={`${s.name} work in Cape Town`} width={1200} height={800} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-steel-light">
            <Link to="/" className="hover:text-primary">Home</Link> / <span>{s.name}</span>
          </nav>
          <p className="eyebrow mt-6 text-primary">24/7 call-outs · Cape Town</p>
          <h1 className="mt-4 max-w-2xl text-4xl md:text-6xl">{s.h1}</h1>
          <p className="mt-5 max-w-xl text-lg text-steel-light">{s.intro}</p>
          <CtaGroup message={s.waMessage} className="mt-8" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-3 text-3xl md:text-4xl">{s.name} services</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((i) => (
            <div key={i.name} className="rounded-md border-t-4 border-primary bg-card p-6 shadow-card">
              <h3 className="text-xl">{i.name}</h3>
              <p className="mt-2 text-muted-foreground">{i.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="eyebrow">Common problems</p>
            <h2 className="mt-3 text-3xl">Sound familiar?</h2>
            <ul className="mt-6 grid gap-3">
              {s.problems.map((p) => (
                <li key={p} className="flex items-center gap-3"><CheckCircle2 className="size-5 shrink-0 text-accent" />{p}</li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground">Send us a WhatsApp with a photo and your suburb — it's the fastest way to get help.</p>
          </div>
          <div>
            <p className="eyebrow">Where we work</p>
            <h2 className="mt-3 text-3xl">{s.name} across Cape Town</h2>
            <p className="mt-4 text-muted-foreground">We're based in Cape Town and regularly work in these areas. Send your suburb to confirm availability.</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {AREAS.map((a) => (
                <li key={a} className="rounded-sm border bg-card px-3 py-1.5 font-mono text-xs uppercase">{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <p className="eyebrow">FAQ</p>
        <h2 className="mb-8 mt-3 text-3xl">{s.name} questions</h2>
        <Faq faqs={s.faqs} />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="text-2xl">Related services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {s.related.map((k) => {
            const r = SERVICES[k];
            return (
              <Link key={k} to={r.path} className="group flex items-center justify-between rounded-md border bg-card p-6 hover:border-primary">
                <div>
                  <h3 className="text-xl">{r.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.short}</p>
                </div>
                <ArrowRight className="size-5 shrink-0 text-accent transition-transform group-hover:translate-x-1" />
              </Link>
            );
          })}
        </div>
      </section>

      <FinalCta message={s.waMessage} heading={`Need ${s.name.toLowerCase()} help?`} />
    </>
  );
}
