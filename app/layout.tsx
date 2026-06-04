import type { Metadata } from "next";
import { Geist_Mono, Montserrat, Inter } from "next/font/google";
import "./globals.css";

import { defaultLocale, translations } from "@/lib/translations";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// TODO: confirmar dominio definitivo con el cliente.
const siteUrl = "https://grupolp.com.uy";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: translations[defaultLocale].meta.title,
  description: translations[defaultLocale].meta.description,

  keywords: [
    "Grupo LP",
    "Lavoriero y Perez",
    "despachante de aduana Uruguay",
    "despacho de aduana Montevideo",
    "agente de aduana Uruguay",
    "comercio exterior Uruguay",
    "importación y exportación Uruguay",
    "asesoramiento aduanero",
  ],

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: translations[defaultLocale].meta.title,
    description: translations[defaultLocale].meta.description,
    url: siteUrl,
    siteName: "Grupo LP",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Grupo LP — Despacho de aduana y comercio exterior en Uruguay",
      },
    ],
    locale: "es_UY",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: translations[defaultLocale].meta.title,
    description: translations[defaultLocale].meta.description,
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

// TODO: actualizar datos de contacto/dirección reales antes de publicar.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Grupo LP — Lavoriero & Perez SRL",
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  email: "info@grupolp.com.uy",
  telephone: "+59899123456",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montevideo",
    addressCountry: "UY",
  },
  areaServed: {
    "@type": "Country",
    name: "Uruguay",
  },
  knowsAbout: [
    "Despacho de aduana",
    "Comercio exterior",
    "Importación",
    "Exportación",
    "Clasificación arancelaria",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-UY"
      className={`${montserrat.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
