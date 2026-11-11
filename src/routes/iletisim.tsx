import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Building, Clock } from "lucide-react";
import { PageHero } from "@/components/site-layout";
import { company } from "@/lib/company";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim — Surbey Ltd. Şti." },
      { name: "description", content: "Surbey ofis adresi: Çınarlı Mah., Sapmaz İş Merkezi, Seyhan / Adana." },
      { property: "og:title", content: "İletişim — Surbey Ltd. Şti." },
      { property: "og:description", content: "Surbey ile iletişime geçin; Seyhan / Adana ofisimizde sizi bekliyoruz." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const q = encodeURIComponent("Sapmaz İş Merkezi, Çınarlı, Seyhan, Adana");
  return (
    <>
      <PageHero eyebrow="İletişim" title="Sizi ofisimizde ağırlamaktan memnuniyet duyarız" />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-5">
        <div className="space-y-8 md:col-span-2">
          {[
            { icon: MapPin, t: "Adres", d: company.address },
            { icon: Building, t: "Unvan", d: "Surbey Ltd. Şti. — MERSİS " + company.mersis },
            { icon: Clock, t: "Çalışma Saatleri", d: "Pazartesi – Cumartesi, 09:00 – 18:00" },
          ].map(({ icon: I, t, d }) => (
            <div key={t} className="flex gap-4 border-l-2 border-gold pl-5">
              <I className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <div>
                <p className="eyebrow">{t}</p>
                <p className="mt-1 text-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-hidden border border-border shadow-elegant md:col-span-3">
          <iframe title="Surbey ofis konumu" src={`https://www.google.com/maps?q=${q}&output=embed`} className="h-[420px] w-full" loading="lazy" />
        </div>
      </section>
    </>
  );
}
