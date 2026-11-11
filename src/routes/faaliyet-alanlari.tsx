import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site-layout";
import { sectors } from "@/lib/company";

export const Route = createFileRoute("/faaliyet-alanlari")({
  head: () => ({
    meta: [
      { title: "Faaliyet Alanları — Surbey Ltd. Şti." },
      { name: "description", content: "Dekorasyon, inşaat, maden, tarım, tekstil, kimya, reklam, organizasyon, otomotiv, kuyumculuk ve petrol." },
      { property: "og:title", content: "Faaliyet Alanları — Surbey Ltd. Şti." },
      { property: "og:description", content: "Surbey'in hizmet verdiği 11 sektörü inceleyin." },
    ],
  }),
  component: Sectors,
});

function Sectors() {
  return (
    <>
      <PageHero eyebrow="Neler Yapıyoruz" title="Faaliyet Alanlarımız">
        Ticaret unvanımızda yer alan her alanda, aynı titizlik ve sorumlulukla hizmet veriyoruz.
      </PageHero>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map(({ title, icon: I, text }, i) => (
            <article key={title} className="group bg-card p-10 transition-colors hover:bg-secondary">
              <div className="flex items-start justify-between">
                <I className="h-8 w-8 text-gold" strokeWidth={1.2} />
                <span className="font-serif text-lg text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h2 className="mt-6 text-3xl text-primary">{title}</h2>
              <span className="gold-rule mt-4 transition-all group-hover:w-24" />
              <p className="mt-4 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
