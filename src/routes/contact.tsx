import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { AREAS, SITE, mailHref, pageHead, telHref, waHref } from "@/lib/site";
import { btn } from "@/components/site/Cta";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact JM Technical Services – WhatsApp or Call 083 241 2126",
      description:
        "Contact JM Technical Services and Projects in Cape Town. WhatsApp or call 083 241 2126, or email info.jmtechnicalservices@gmail.com. 24/7 call-outs.",
      path: "/contact/",
    }),
  component: Contact,
});

function Contact() {
  const cards = [
    { icon: MessageCircle, t: "WhatsApp", v: SITE.phoneDisplay, href: waHref(), cls: btn.whatsapp, cta: "WhatsApp Us", ext: true },
    { icon: Phone, t: "Phone", v: SITE.phoneDisplay, href: telHref, cls: btn.primary, cta: "Call Now" },
    { icon: Mail, t: "Email", v: SITE.email, href: mailHref, cls: btn.outline, cta: "Send Email" },
  ];
  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow text-primary">Contact</p>
          <h1 className="mt-4 text-4xl md:text-6xl">Contact JM Technical</h1>
          <p className="mt-4 max-w-xl text-lg text-steel-light">WhatsApp is the fastest way to reach us. Include your suburb and a photo of the problem.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: I, ...c }) => (
            <div key={c.t} className="flex flex-col rounded-md border bg-card p-6 shadow-card">
              <I className="size-7 text-accent" />
              <h2 className="mt-4 text-2xl">{c.t}</h2>
              <p className="mt-1 break-all font-mono text-sm">{c.v}</p>
              <a href={c.href} {...(c.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={c.cls + " mt-6"}>{c.cta}</a>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-md bg-secondary p-6">
            <h2 className="flex items-center gap-2 text-xl"><Clock className="size-5 text-accent" /> Hours</h2>
            <p className="mt-2 text-muted-foreground">24/7 call-outs, 7 days a week.</p>
          </div>
          <div className="rounded-md bg-secondary p-6">
            <h2 className="flex items-center gap-2 text-xl"><MapPin className="size-5 text-accent" /> Areas</h2>
            <p className="mt-2 text-muted-foreground">Cape Town, Western Cape — including {AREAS.join(", ")}.</p>
          </div>
        </div>
        <p className="mt-10 text-center">
          Prefer a form? <Link to="/quote/" className="font-bold text-accent hover:underline">Request a quote</Link>
        </p>
      </section>
    </>
  );
}
