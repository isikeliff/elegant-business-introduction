import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site-layout";
import { company } from "@/lib/company";
import aboutHero from "@/assets/about-hero.jpg";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Biz Kimiz — Surbey Sanayi ve Ticaret" },
      { name: "description", content: "Surbey'in hikâyesi, değerleri ve kurumsal ilkeleri. 2020'de Adana'da kurulan, 11 sektörde faaliyet gösteren şeffaf ticaret şirketi." },
      { property: "og:title", content: "Biz Kimiz — Surbey Sanayi ve Ticaret" },
      { property: "og:url", content: "https://surbeylimited.com/hakkimizda" },
      { property: "og:description", content: "2020'de Adana'da kurulan Surbey'i yakından tanıyın." },
    ],
    links: [
      { rel: "canonical", href: "https://surbeylimited.com/hakkimizda" },
    ],
  }),
  component: About,
});

function About() {
  const rows = [
    ["Faaliyet Kapsamı", "11 Farklı Ticari Sektör"],
    ["Hizmet Modeli", "Entegre Tedarik ve Uygulama"],
    ["Çalışma Prensibi", "Şeffaflık, Güvenilirlik ve Süreklilik"],
    ["Hizmet Ağı", "Bölgesel ve Ulusal Çözüm Ortaklığı"],
    ["Müşteri İlişkileri", "Uzun Vadeli ve Güvenilir İş Birliği"],
    ["Kalite Standartları", "Yüksek Nitelikli Hizmet ve Malzeme"],
    ["Merkez", "Seyhan / Adana"],
    ["İş Yaklaşımı", "Zamanında ve Kusursuz Teslimat"],
  ];
  return (
    <>
      <PageHero image={aboutHero} eyebrow="Biz Kimiz" title="Güvene dayalı bir iş anlayışı">
        2020 yılında Adana'da kurulan Surbey, farklı sektörlerdeki deneyimini tek çatı altında buluşturan bir ticaret şirketidir.
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-2">
        <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
          <h2 className="text-4xl text-primary">Hikâyemiz</h2>
          <p>Surbey, sağlam temeller üzerine kurulmuş bir işletme olma hedefiyle yola çıktı. Dekorasyondan inşaata, tarımdan petrole kadar geniş bir yelpazede faaliyet gösteriyoruz.</p>
          <p>Her projede aynı ilkeyle hareket ediyoruz: verilen söz tutulur, yapılan iş özenle teslim edilir. Müşterilerimizin bize duyduğu güven en değerli sermayemizdir.</p>
          <p className="font-serif text-2xl italic text-primary">“Dürüstlük, şeffaflık, süreklilik.”</p>
        </div>
        <div className="border border-border bg-card p-8 shadow-elegant">
          <p className="eyebrow">Kurumsal Prensiplerimiz</p>
          <dl className="mt-6 divide-y divide-border">
            {rows.map(([k, v]) => (
              <div key={k} className="grid grid-cols-3 gap-4 py-3 text-sm">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="col-span-2 font-medium text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-xs text-muted-foreground">Surbey, tüm faaliyet alanlarında dürüst ve ilkeli ticaret anlayışını temsil eder.</p>
        </div>
      </section>
    </>
  );
}
