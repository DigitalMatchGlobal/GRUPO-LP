import type { Locale } from "@/lib/translations";
import { translations } from "@/lib/translations";

/* ──────────────────────────────────────────────────────────────────
   PLACEHOLDER: datos de contacto de la tarjeta de Grupo LP.
   TODO: reemplazar por los datos reales antes de publicar
   (WhatsApp, mapa, dirección exacta, mails y redes confirmadas).
────────────────────────────────────────────────────────────────── */

/** WhatsApp corporativo (código país + número sin +). */
const WHATSAPP_PHONE = "59899123456"; // TODO: número real

export function getWhatsAppUrl(locale: Locale, customMessage?: string): string {
  const text = customMessage || translations[locale].whatsappPrefill;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

/** Embed genérico de Montevideo. TODO: reemplazar por el listing real de Grupo LP. */
export const GOOGLE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Montevideo,Uruguay&z=13&output=embed";

/** Shortlink "cómo llegar". TODO: reemplazar por el del listing real. */
export const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Montevideo,+Uruguay";

/** Shortlink al perfil/listing en Google Maps. TODO: reemplazar por el real. */
export const GOOGLE_MAPS_PROFILE_URL =
  "https://www.google.com/maps/search/?api=1&query=Montevideo,+Uruguay";

/**
 * Datos de contacto canónicos consumidos por el Footer.
 * Contact (formulario) mantiene su propia copia i18n con sufijos localizados.
 */
export const CONTACT = {
  email: "info@grupolp.com.uy",
  phoneDisplay: "+598 99 123 456",
  phoneHref: "tel:+59899123456",
  address: {
    line1: "Montevideo",
    line2: "Uruguay",
    mapsQuery: "Montevideo, Uruguay",
  },
} as const;

export type SocialLink = {
  name: string;
  href: string;
  ariaLabel: string;
};

/** Solo perfiles con URL oficial confirmada. No inventar. */
export const SOCIAL_LINKS: SocialLink[] = [
  // TODO: agregar Instagram / LinkedIn cuando estén confirmados.
];

export type ClientLogo = {
  name: string;
  src: string;
  /** Canvas original del SVG. Default 480×160 (proporción 3:1). */
  width?: number;
  height?: number;
};

/** TODO: cargar logos de clientes/partners reales. */
export const CLIENT_LOGOS: ClientLogo[] = [];

/**
 * Densidad visual del marquee: con pocos logos, repetimos la lista base
 * antes de duplicarla para el loop. Con 8+ logos, repeat = 1.
 */
export const getMarqueeRepeatCount = (n: number): number =>
  Math.max(1, Math.ceil(8 / Math.max(n, 1)));
