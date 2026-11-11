import { Paintbrush, Building2, Mountain, Wheat, Shirt, FlaskConical, Megaphone, PartyPopper, Car, Gem, Fuel, type LucideIcon } from "lucide-react";

export const company = {
  name: "Surbey",
  legalName:
    "Surbey Dekorasyon İnşaat Maden Tarım Tekstil Kimya Reklam Organizasyon Otomotiv Kuyumculuk Petrol Sanayi ve Ticaret Limited Şirketi",
  mersis: "0784063051300001",
  sicilNo: "84298",
  registry: "Adana Ticaret Sicili Müdürlüğü",
  founded: "26.11.2020",
  type: "Tek Ortaklı Limited Şirket",
  capital: "150.000 TL",
  address: "Çınarlı Mah. 61022 Sk. Sapmaz İş Merkezi Apt. No: 2/502, Seyhan / Adana",
  manager: "Mehmet Yıldırım",
};

export const sectors: { title: string; icon: LucideIcon; text: string }[] = [
  { title: "Dekorasyon", icon: Paintbrush, text: "Konut ve ticari alanlarda iç mekân tasarımı ve uygulama hizmetleri." },
  { title: "İnşaat", icon: Building2, text: "Yapı, tadilat ve proje uygulamalarında güvenilir çözüm ortaklığı." },
  { title: "Maden", icon: Mountain, text: "Maden ve doğal kaynak alanında ticari faaliyetler." },
  { title: "Tarım", icon: Wheat, text: "Tarımsal ürünlerin üretim ve ticaretine yönelik hizmetler." },
  { title: "Tekstil", icon: Shirt, text: "Tekstil ürünlerinin tedarik ve ticareti." },
  { title: "Kimya", icon: FlaskConical, text: "Kimyasal ürünlerin mevzuata uygun tedarik ve ticareti." },
  { title: "Reklam", icon: Megaphone, text: "Marka tanıtımı ve reklam uygulamaları." },
  { title: "Organizasyon", icon: PartyPopper, text: "Kurumsal ve özel etkinliklerin planlanması ve yönetimi." },
  { title: "Otomotiv", icon: Car, text: "Otomotiv sektöründe alım, satım ve ticari hizmetler." },
  { title: "Kuyumculuk", icon: Gem, text: "Kıymetli maden ve mücevher ticareti." },
  { title: "Petrol", icon: Fuel, text: "Petrol ve akaryakıt ürünlerinin ticareti." },
];
