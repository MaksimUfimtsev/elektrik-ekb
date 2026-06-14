import type { Metadata, Viewport } from "next";
import { Russo_One, Exo_2, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Scene from "@/components/Scene";
import Effects from "@/components/Effects";

const display = Russo_One({ weight: "400", subsets: ["latin", "cyrillic"], variable: "--font-display", display: "swap" });
const sans = Exo_2({ subsets: ["latin", "cyrillic"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin", "cyrillic"], variable: "--font-mono", display: "swap" });

const SITE_URL = "https://box-electric.ru";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Электромонтаж в Екатеринбурге — Чернышев Александр Витальевич",
  description:
    "Электромонтаж под ключ в Екатеринбурге и области: замена проводки, сборка щита, розетки, освещение. Фиксированная цена в договоре, гарантия 3 года, бесплатный выезд. Тел. +7 965 515-15-01.",
  keywords: [
    "электромонтаж екатеринбург",
    "электрик на дом",
    "замена проводки",
    "сборка щита",
    "монтаж розеток",
    "электромонтаж под ключ",
    "электрик екатеринбург",
  ],
  authors: [{ name: "Чернышев Александр Витальевич" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Электромонтаж · Чернышев А. В.",
    title: "Электромонтаж в Екатеринбурге — под ключ, гарантия 3 года",
    description:
      "Замена проводки, сборка щита, розетки и освещение. Фиксированная цена в договоре, бесплатный выезд по Екатеринбургу и области.",
    images: ["/assets/photos/gallery/shchit-1.jpg"],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#07060D" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Электромонтаж — Чернышев Александр Витальевич",
  description:
    "Электромонтаж под ключ для квартир и домов в Екатеринбурге и Свердловской области: замена проводки, сборка щита, розетки, освещение.",
  telephone: "+79655151501",
  email: "ylexandr@yandex.ru",
  priceRange: "₽₽",
  currenciesAccepted: "RUB",
  areaServed: [
    { "@type": "City", name: "Екатеринбург" },
    { "@type": "AdministrativeArea", name: "Свердловская область" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Екатеринбург",
    addressRegion: "Свердловская область",
    addressCountry: "RU",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "22:00",
    },
  ],
  founder: { "@type": "Person", name: "Чернышев Александр Витальевич" },
  sameAs: ["https://t.me/fazanulo"],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Замена проводки" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Сборка электрощита" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Монтаж розеток и выключателей" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Монтаж освещения" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Электромонтаж под ключ" } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="overflow-x-hidden font-sans">
        <Scene />
        <div className="scanlines" aria-hidden />
        <div className="vignette" aria-hidden />
        {children}
        <Effects />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
