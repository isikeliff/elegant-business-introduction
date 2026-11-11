import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Landmark, Handshake } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { company, sectors } from "@/lib/company";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Surbey — Güvenilir Ticaretin Adresi" },
      { name: "description", content: "Adana merkezli Surbey; inşaat, dekorasyon, tarım, petrol ve daha birçok alanda güvenilir hizmet sunar." },
      { property: "og:title", content: "Surbey — Güvenilir Ticaretin Adresi" },
      { property: "og:url", content: "https://surbeylimited.com" },
      { property: "og:description", content: "Adana merkezli, 11 farklı sektörde faaliyet gösteren kurumsal ticaret şirketi." },
    ],
    links: [
      { rel: "canonical", href: "https://surbeylimited.com" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <img src={hero} alt="Surbey kurumsal ofis binası" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-6xl px-6 py-32 text-primary-foreground md:py-44 w-full">
          <p className="eyebrow">Adana · 2020'den bu yana</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-medium leading-[1.05] md:text-7xl">
            Güvenle kurulan, <em className="text-gold-soft">özenle</em> sürdürülen ticaret.
          </h1>
          <span className="gold-rule mt-8" />
          <p className="mt-8 max-w-2xl text-xl md:text-[22px] leading-relaxed text-primary-foreground/90 font-times">
            Surbey; inşaattan kuyumculuğa, tarımdan petrole uzanan geniş faaliyet alanında, şeffaf ve sorumlu iş anlayışıyla hizmet verir.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-none bg-gold px-9 py-6 text-base font-medium font-times text-accent-foreground hover:bg-gold-soft">
              <Link to="/faaliyet-alanlari">Faaliyet Alanlarımız</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none border-gold-soft bg-transparent px-9 py-6 text-base font-medium font-times text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/iletisim">Bize Ulaşın</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 text-center md:grid-cols-4">
          {[
            ["Faaliyet Alanı", "11 Sektör"],
            ["Hizmet Anlayışı", "%100 Güven"],
            ["İş Modeli", "Entegre"],
            ["Hizmet Ağı", "Geniş Ağ"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-serif text-3xl text-primary">{v}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{k}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { icon: ShieldCheck, t: "Kurumsal Güvence", d: "Tüm iş süreçlerimizde şeffaflık, güvenilirlik ve yüksek kalite standartlarını esas alıyoruz." },
            { icon: Landmark, t: "Köklü Değerler", d: "Dürüstlük, şeffaflık ve sözüne sadakat iş yapış biçimimizin temelidir." },
            { icon: Handshake, t: "Uzun Vadeli Ortaklık", d: "Müşterilerimizle tek seferlik değil, kalıcı ilişkiler kurarız." },
          ].map(({ icon: I, t, d }) => (
            <div key={t} className="border-t border-gold pt-6">
              <I className="h-7 w-7 text-gold" strokeWidth={1.3} />
              <h3 className="mt-4 text-2xl text-primary">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow">Neler Yapıyoruz</p>
          <h2 className="mt-3 text-4xl text-primary md:text-5xl">Faaliyet Alanlarımız</h2>
          <div className="mt-12 grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-4">
            {sectors.map(({ title, icon: I }) => (
              <div key={title} className="flex items-center gap-4 bg-card p-6">
                <I className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.3} />
                <span className="font-serif text-xl text-primary">{title}</span>
              </div>
            ))}
            <Link
              to="/faaliyet-alanlari"
              className="flex items-center gap-2 bg-card p-6 text-sm uppercase tracking-[0.2em] text-gold border-t border-gold hover:bg-gold/5 transition-colors"
            >
              Tümünü incele <span className="text-gold">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
