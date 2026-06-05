# Grupo LP — Lavoriero & Perez SRL

Landing institucional de **despacho de aduana y comercio exterior** (Montevideo, Uruguay).
Next.js 16 + Tailwind 4 + framer-motion + lenis + Resend. i18n ES/EN.

> Documentación completa del proyecto (arquitectura, sistema de diseño, convenciones,
> pendientes): ver **[CLAUDE.md](./CLAUDE.md)** y la paleta de marca en **[BRAND.md](./BRAND.md)**.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción (validar antes de commitear)
```

> Repo: `git@github.com:DigitalMatchGlobal/GRUPO-LP.git`. Trabajar en branch, no en `main`.

## Estructura

- `app/` — rutas (landing, legales, API de contacto, sitemap, robots, layout/SEO).
- `app/globals.css` — design tokens de marca en `:root` + utilidades + bridge Tailwind v4.
- `components/landing/landing-view.tsx` — orquestador (imports + orden de render).
- `components/landing/sections/` — una sección por archivo.
- `components/brand/logo.tsx` — `BrandLogo` (usa `public/logo-grupo-lp-mark.png`).
- `lib/translations.ts` — contenido (ES/EN). `lib/site.ts` — contacto/WhatsApp/mapa/redes.

## Secciones activas (orden de render)

Hero → Diagnóstico de operación (`#diagnostico`) → Mapa de riesgos (`#riesgos`) →
Servicios (`#servicios`) → Proceso (`#proceso`) → Contacto (`#contacto`).

> Hay **secciones huérfanas** (definidas pero fuera del render): `about`, `trust` (+`counter`),
> `reviews`, `for-whom`, `clients-marquee`. Pendiente decidir si se borran o reincorporan
> (ver CLAUDE.md).

## ⚠️ Pendientes antes de publicar

1. **Datos de contacto reales** — `lib/site.ts` (`WHATSAPP_PHONE`, `CONTACT`, mapas),
   `lib/translations.ts` (teléfono/dirección/mails), `app/layout.tsx` (dominio + JSON-LD).
2. **Favicon / OG** — `public/og-image.png`, `icon-*.png`, `apple-touch-icon.png` siguen
   con la marca de BPORT (el logo del sitio ya es el real).
3. **Resend** — API key propia en `.env.local` + dominio remitente verificado en `app/api/contact/route.ts`.
4. **Redes sociales** — completar `SOCIAL_LINKS` en `lib/site.ts` (hoy vacío).
5. **i18n** — consolidar el copy local de `operation-diagnosis.tsx` y `risk-map.tsx` en `translations.ts`.

## Notas

- Identidad visual “facetada / técnica”: nav numerada, cortes diagonales, grilla técnica,
  etiquetas monoespaciadas. Paleta navy `#05122D` + azul eléctrico `#0851DC` (ver BRAND.md).
- Tipografía: Montserrat (display) + Inter (body).
- Idiomas: ES (default) + EN.
