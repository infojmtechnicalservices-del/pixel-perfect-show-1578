import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MessageCircle, Phone, Mail } from "lucide-react";
import { AREAS, SITE, mailHref, telHref, waHref } from "@/lib/site";
import { SERVICE_LIST } from "@/lib/services";
import { btn } from "./Cta";

const NAV = [
  { to: "/electrical/", label: "Electrical" },
  { to: "/plumbing/", label: "Plumbing" },
  { to: "/welding/", label: "Welding" },
  { to: "/building/", label: "Building" },
  { to: "/about/", label: "About" },
  { to: "/contact/", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-primary bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-10 place-items-center rounded-sm border-[3px] border-primary bg-card font-display text-lg font-bold text-navy">JM</span>
          <span className="font-display text-sm uppercase leading-tight tracking-wide">
            JM Technical
            <span className="block font-mono text-[10px] tracking-[0.14em] text-steel-light">Services & Projects</span>
          </span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-semibold hover:text-primary" activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href={telHref} className="font-mono text-sm hover:text-primary">{SITE.phoneDisplay}</a>
          <Link to="/quote/" className={btn.primary + " py-2"}>Get a Quote</Link>
        </div>
        <button className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-steel px-5 pb-6 lg:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block border-b border-steel/50 py-3 font-display uppercase">
              {n.label}
            </Link>
          ))}
          <Link to="/quote/" onClick={() => setOpen(false)} className={btn.primary + " mt-4 w-full"}>Request a Quote</Link>
        </nav>
      )}
    </header>
  );
}

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t-2 border-navy md:hidden">
      <a href={waHref()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-whatsapp py-3.5 text-sm font-bold uppercase text-whatsapp-foreground">
        <MessageCircle className="size-4" /> WhatsApp
      </a>
      <a href={telHref} className="flex items-center justify-center gap-2 bg-primary py-3.5 text-sm font-bold uppercase text-primary-foreground">
        <Phone className="size-4" /> Call Now
      </a>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy-2 pb-20 text-navy-foreground md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-lg uppercase">{SITE.name}</p>
          <p className="mt-3 text-sm text-steel-light">Electrical, plumbing, welding and building services across Cape Town. 24/7 call-outs.</p>
        </div>
        <div>
          <p className="eyebrow text-primary">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICE_LIST.map((s) => (
              <li key={s.key}><Link to={s.path} className="hover:text-primary">{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-primary">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about/" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact/" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/quote/" className="hover:text-primary">Request a Quote</Link></li>
          </ul>
          <p className="mt-6 text-xs text-steel-light">Areas: {AREAS.join(", ")}.</p>
        </div>
        <div>
          <p className="eyebrow text-primary">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a href={telHref} className="flex items-center gap-2 hover:text-primary"><Phone className="size-4" />{SITE.phoneDisplay}</a></li>
            <li><a href={waHref()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><MessageCircle className="size-4" />WhatsApp {SITE.phoneDisplay}</a></li>
            <li><a href={mailHref} className="flex items-center gap-2 break-all hover:text-primary"><Mail className="size-4 shrink-0" />{SITE.email}</a></li>
          </ul>
          <p className="mt-4 text-sm text-steel-light">Cape Town, Western Cape · Open 24/7 for call-outs</p>
        </div>
      </div>
      <div className="border-t border-steel/50 px-5 py-5 text-center text-xs text-steel-light">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
