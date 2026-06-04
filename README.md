# Grupo LP — Lavoriero & Perez SRL

Landing de **despacho de aduana y comercio exterior** (Montevideo, Uruguay).
Construida sobre la misma base que BPORT (`opcion-a`): Next.js 16 + Tailwind 4 +
framer-motion + lenis + Resend. i18n ES/EN.

## Desarrollo

```bash
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Estructura

- `app/` — rutas (landing, legales, API de contacto, sitemap, robots).
- `components/landing/` — secciones de la landing.
- `components/brand/logo.tsx` — **marca tipográfica placeholder** (LP).
- `lib/translations.ts` — **todo el contenido** (ES/EN).
- `lib/site.ts` — contacto, WhatsApp, mapa, redes, logos.
- `app/globals.css` — design tokens (paleta azul navy + azul brillante).

## ⚠️ Pendientes antes de publicar (TODO)

1. **Logo real**: reemplazar `components/brand/logo.tsx` por los archivos
   oficiales (SVG/PNG, versión clara y oscura).
2. **Favicon / OG / íconos**: `public/og-image.png`, `icon-*.png` y
   `apple-touch-icon.png` siguen con la marca de BPORT — reemplazar.
3. **Datos de contacto reales** (hoy placeholder de la tarjeta):
   - `lib/site.ts`: `WHATSAPP_PHONE`, `CONTACT`, mapas (embed/perfil/direcciones).
   - `lib/translations.ts`: teléfono, dirección exacta, mails.
   - `app/layout.tsx`: dominio y JSON-LD.
4. **Cifras** de la sección Confianza/Nosotros (`translations.ts`) — ajustar a reales.
5. **Testimonios**: reemplazar placeholders por reseñas reales de Google.
6. **Resend**: generar API key propia (`.env.local`) y verificar dominio remitente
   en `app/api/contact/route.ts`.
7. **Redes sociales**: completar `SOCIAL_LINKS` en `lib/site.ts` (hoy vacío).

## Notas

- El hero usa fondo navy corporativo (sin video, a diferencia de BPORT).
- Idiomas: ES (default) + EN. Se quitó PT respecto de BPORT.
- Sección "Clientes" removida hasta tener logos reales.
