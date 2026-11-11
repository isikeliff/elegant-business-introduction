import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteHeader, SiteFooter } from "../components/site-layout";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Sayfa bulunamadı</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    console.error("Sayfa hatası:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Sayfa yüklenemedi
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Bir hata oluştu. Sayfayı yenilemeyi veya ana sayfaya dönmeyi deneyebilirsiniz.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tekrar Dene
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Ana Sayfa
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Surbey — Sanayi ve Ticaret" },
      {
        name: "description",
        content:
          "Surbey Sanayi ve Ticaret — Adana merkezli, inşaattan kuyumculuğa, tarımdan petrole uzanan geniş faaliyet alanında şeffaf ve sorumlu iş anlayışıyla hizmet veren kurumsal ticaret şirketi.",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Surbey Sanayi ve Ticaret" },
      { name: "language", content: "tr" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Surbey" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:url", content: "https://surbeylimited.com" },
      { property: "og:title", content: "Surbey — Sanayi ve Ticaret" },
      {
        property: "og:description",
        content: "Adana merkezli, çok sektörlü güvenilir ticaret şirketi.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Surbey — Sanayi ve Ticaret" },
      {
        name: "twitter:description",
        content: "Adana merkezli, çok sektörlü güvenilir ticaret şirketi.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Karla:wght@400;500;600&display=swap" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "canonical", href: "https://surbeylimited.com" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Surbey Sanayi ve Ticaret",
    url: "https://surbeylimited.com",
    description:
      "Adana merkezli, inşaattan kuyumculuğa, tarımdan petrole uzanan geniş faaliyet alanında şeffaf ve sorumlu iş anlayışıyla hizmet veren kurumsal ticaret şirketi.",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Çınarlı Mah., Sapmaz İş Merkezi",
      addressLocality: "Seyhan",
      addressRegion: "Adana",
      addressCountry: "TR",
    },
    areaServed: "TR",
    inLanguage: "tr",
  };

  return (
    <html lang="tr">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
