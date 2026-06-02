import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A1628",
};

export const metadata: Metadata = {
  title: "INVERTECH CLIMA | Ar-Condicionado Inverter em Palmas-TO — Instalação e Manutenção",
  description:
    "Climatização inteligente em Palmas. Instalação, manutenção e higienização de ar-condicionado com tecnologia inverter. Economia de até 60% na conta de luz. Orçamento gratuito!",
  keywords: [
    "ar condicionado Palmas",
    "instalação ar condicionado Palmas",
    "manutenção ar condicionado Palmas",
    "ar condicionado inverter Palmas",
    "higienização ar condicionado Palmas",
    "climatização Palmas TO",
    "INVERTECH CLIMA",
  ],
  authors: [{ name: "INVERTECH CLIMA" }],
  openGraph: {
    title: "INVERTECH CLIMA | Climatização Inteligente em Palmas-TO",
    description:
      "Instalação, manutenção e soluções em ar-condicionado com tecnologia inverter. Atendimento rápido e máxima eficiência energética.",
    type: "website",
    locale: "pt_BR",
    siteName: "INVERTECH CLIMA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "INVERTECH CLIMA",
              description:
                "Empresa especializada em instalação, manutenção e higienização de ar-condicionado com tecnologia inverter em Palmas-TO.",
              telephone: "+5563991129517",
              url: "https://invertechclima.vercel.app",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Palmas",
                addressRegion: "TO",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -10.1689,
                longitude: -48.3317,
              },
              areaServed: {
                "@type": "City",
                name: "Palmas",
              },
              serviceType: [
                "Instalação de Ar-Condicionado",
                "Manutenção de Ar-Condicionado",
                "Higienização de Ar-Condicionado",
                "Climatização Comercial",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "400",
              },
            }),
          }}
        />

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18203758951"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-18203758951');
            `,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MSG4F4BD');`
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MSG4F4BD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}
