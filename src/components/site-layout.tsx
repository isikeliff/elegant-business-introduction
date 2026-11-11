import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { company } from "@/lib/company";

const nav = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/hakkimizda", label: "Biz Kimiz" },
  { to: "/faaliyet-alanlari", label: "Faaliyet Alanları" },
  { to: "/iletisim", label: "İletişim" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-3xl font-semibold tracking-wide text-primary">SURBEY</span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">Ltd. Şti.</span>
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="text-foreground/75 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-semibold border-b border-gold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-3xl text-gold-soft">SURBEY</p>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{company.legalName}</p>
        </div>
        <div className="text-sm text-primary-foreground/80">
          <p className="eyebrow mb-3">Kurumsal Bilgiler</p>
          <p>MERSİS No: {company.mersis}</p>
          <p>Ticaret Sicil No: {company.sicilNo}</p>
          <p>{company.registry}</p>
        </div>
        <div className="text-sm text-primary-foreground/80">
          <p className="eyebrow mb-3">Adres</p>
          <p>{company.address}</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Surbey Ltd. Şti. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 text-5xl font-medium md:text-6xl">{title}</h1>
        <span className="gold-rule mt-6" />
        {children && <div className="mt-6 max-w-2xl text-primary-foreground/80">{children}</div>}
      </div>
    </section>
  );
}
