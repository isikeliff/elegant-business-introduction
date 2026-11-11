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
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="z-10 flex items-baseline -ml-2 md:-ml-4">
          <span className="font-serif text-4xl md:text-[40px] font-semibold tracking-[0.06em] text-primary">
            SURBEY
          </span>
        </Link>
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-x-8 text-[15px]">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="py-1 border-b-2 border-transparent text-foreground/75 transition-all duration-150 hover:text-primary hover:border-gold"
              activeProps={{
                className: "text-primary font-semibold border-gold",
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        {/* Mobile nav */}
        <nav className="flex md:hidden flex-wrap items-center gap-x-4 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="py-1 border-b-2 border-transparent text-foreground/75 transition-colors hover:text-primary hover:border-gold"
              activeProps={{
                className: "text-primary font-semibold border-gold",
              }}
            >
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
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
            Çok sektörlü ticaret, inşaat ve kurumsal çözüm ortaklığı.
          </p>
        </div>
        <div className="text-sm text-primary-foreground/80">
          <p className="eyebrow mb-3">Faaliyetlerimiz</p>
          <p className="mb-1">İnşaat & Dekorasyon</p>
          <p className="mb-1">Sanayi & Ticari Tedarik</p>
          <p>Kurumsal Çözüm Ortaklığı</p>
        </div>
        <div className="text-sm text-primary-foreground/80">
          <p className="eyebrow mb-3">Adres</p>
          <p>{company.address}</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Surbey. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
  image,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground min-h-screen flex items-center">
      {image && (
        <img
          src={image}
          alt={title}
          width={1600}
          height={912}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 w-full">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-5xl font-medium leading-[1.05] md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <span className="gold-rule mt-8" />
        {children && (
          <div className="mt-8 max-w-2xl text-xl md:text-[22px] leading-relaxed text-primary-foreground/90 font-times">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
