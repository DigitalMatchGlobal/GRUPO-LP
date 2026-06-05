@AGENTS.md

# Grupo LP — Landing (despacho de aduana)

> **Next.js 16**: tiene breaking changes respecto de versiones previas. Ver `@AGENTS.md`
> y leer `node_modules/next/dist/docs/` antes de escribir APIs nuevas de Next.

## Qué es
Landing institucional de **Grupo LP — Lavoriero & Perez SRL**, estudio de
**despachantes de aduana** en Montevideo, Uruguay. Foco: **despacho de aduana /
comercio exterior** (importación, exportación, tránsito), NO freight forwarder.
Cliente: **Javier** (mismo cliente del proyecto BPORT). El sitio se originó
clonando `BPORT/opcion-a` y luego se rebrandeó y rediseñó por completo.

Tono: sobrio, corporativo, técnico. El gancho de marketing es el **criterio
aduanero** (diagnóstico previo, mapa de riesgos), no el flete.

## Repo y forma de trabajo
- Remoto: `git@github.com:DigitalMatchGlobal/GRUPO-LP.git`. Rama principal: `main`.
- **Trabajar SIEMPRE en branch, nunca commitear directo a `main`.**
- Correr `npm run build` después de cambios y **no pushear sin avisar/confirmar**.
- Mensajes de commit terminan con la línea `Co-Authored-By` correspondiente.

## Stack
- **Next.js 16.2.3** (App Router) · **React 19** · **TypeScript** (`strict`).
- **Tailwind CSS v4** (config vía CSS: `@import "tailwindcss"` + `@theme inline`
  en `app/globals.css`; NO hay `tailwind.config.js`). PostCSS en `postcss.config.mjs`.
- **framer-motion** (animación) · **lenis** (smooth scroll) · **lucide-react** (íconos).
- **resend** (envío del formulario de contacto).
- Gestor: **npm** (`package-lock.json`). Alias TS: `@/*` → raíz.

### Scripts
```bash
npm run dev      # next dev --webpack → http://localhost:3000
npm run build    # build de producción (usado para validar cambios)
npm run start    # server de producción
npm run lint     # eslint
```

## Estructura
- `app/` — rutas: `/` (landing), `/politica-de-privacidad`, `/terminos-y-condiciones`,
  `/api/contact` (POST → Resend), `sitemap.ts`, `robots.ts`, `layout.tsx` (SEO + JSON-LD).
- `app/globals.css` — **design tokens de marca en `:root`** + utilidades + bridge `@theme`.
- `components/landing/landing-view.tsx` — **orquestador delgado** (~57 líneas): solo
  imports + orden de render. NO debe volver a engordar con JSX de secciones.
- `components/landing/sections/` — una sección por archivo (convención del proyecto).
- `components/landing/motion.tsx` — `MotionSection` / `MotionItem` (wrappers de scroll-reveal).
- `components/brand/logo.tsx` — `BrandLogo` (usa el logo real `public/logo-grupo-lp-mark.png`).
- `components/ui/` — primitivas estilo shadcn (button, input, label, textarea, card).
- `components/i18n/` — `LanguageProvider` / `useLanguage` / `LanguageSwitcher`.
- `lib/translations.ts` — diccionario de contenido (ES/EN).
- `lib/site.ts` — contacto, WhatsApp, URLs de mapa, redes, logos de clientes.
- `lib/hooks/` — `use-scroll-state`, `use-prefers-reduced-motion`.

## Orden de render actual (`LandingBody`)
`Header` (fijo) · **Hero → OperationDiagnosis (`#diagnostico`) → RiskMap (`#riesgos`)
→ Services (`#servicios`) → Process (`#proceso`) → Contact (`#contacto`, incluye
ContactMapBand)** · `Footer` · `WhatsAppFab`.
Nav del header numerada `01–05`. Todas las anclas internas apuntan a secciones que existen.

### ⚠️ Secciones HUÉRFANAS (definidas pero NO renderizadas)
Quedaron del diseño anterior; el rediseño las dejó fuera. No se importan en
`landing-view.tsx` (build las descarta por tree-shaking, pero ensucian el repo):
`about.tsx` (`#nosotros`), `trust.tsx` (`#confianza`) + `counter.tsx`,
`reviews.tsx` (`#resenas`), `for-whom.tsx` (`#paraquien`), `clients-marquee.tsx`.
**Decisión pendiente del cliente:** borrarlas o reincorporar alguna.

## Sistema de diseño
Lenguaje visual **“facetado / técnico”**: nav numerada, cortes diagonales (`clip-path`),
grilla técnica (`.technical-grid`), etiquetas monoespaciadas (`DIAG / 01`, `RISK / 02`),
utilidades `.section-title`, `.eyebrow`, `.eyebrow-light`.

### Paleta (fuente de verdad: `BRAND.md`, muestreada del mockup)
Todos los colores de marca viven en `:root` de `app/globals.css`:

| Token | Hex | Rol |
|---|---|---|
| `--primary-navy` | `#05122D` | tinta / base profunda (`--primary`, `--foreground`) |
| `--navy-surface` | `#01143F` | fondos oscuros (hero, footer) |
| `--accent` | `#0851DC` | azul eléctrico de marca (CTAs, líneas, acentos) |
| `--accent-bright` | `#085AF9` | highlight saturado |
| `--steel` | `#354665` | texto secundario (`--muted-foreground`) |
| `--brand-border` | `#B3BCC9` | bordes (`--border`, `--input`) |
| `--paper` | `#F8F8F8` | fondo claro (`--background`) |
| `--paper-muted` | `#EDEDEF` | superficies claras (`--muted`) |

**Regla:** ningún hex de marca fuera de `:root`. Los componentes referencian tokens
(`var(--…)` o, en `style`/arbitrary values, rgba con valores fieles: navy `5,18,45`,
accent `8,81,220`, bright `8,90,249`).
**Excepciones acordadas (no tokenizar):** email en `app/api/contact/route.ts` (literal,
los clientes de correo no resuelven CSS vars); firma DigitalMatchGlobal `#2563EB`/`#6D5DFE`
en el footer; verde WhatsApp `#25D366`; neutros (blancos/negros/grises de sombra).
**Prohibido:** el teal/verde fantasma `#2F8F83` heredado de BPORT (ya eliminado).

### Tipografía
- Display: **Montserrat** (`--font-montserrat`, vía `next/font/google`).
- Body: **Inter** (`--font-inter`). Mono: **Geist Mono** (`--font-geist-mono`).

## i18n
- Idiomas: **ES (default) + EN** (`lib/translations.ts`, tipado con `Messages`).
  Se quitó PT respecto de BPORT.
- ⚠️ **Inconsistencia conocida:** las secciones nuevas `operation-diagnosis.tsx` y
  `risk-map.tsx` definen su copy con objetos `es`/`en` **locales** en vez de usar
  `translations.ts`. Pendiente consolidar en el diccionario central.

## Datos / configuración
- `lib/site.ts`: `WHATSAPP_PHONE`, `CONTACT`, URLs de Google Maps, `SOCIAL_LINKS`, `CLIENT_LOGOS`.
- `app/layout.tsx`: metadata, OpenGraph, JSON-LD `ProfessionalService`, dominio.
- `app/api/contact/route.ts`: envía el formulario vía Resend (`RESEND_API_KEY` en `.env.local`).

## Pendientes antes de publicar (placeholder)
1. **Datos de contacto reales**: `WHATSAPP_PHONE`, `CONTACT`, mapa (embed/perfil/cómo llegar)
   en `lib/site.ts`; teléfono/dirección/mails en `lib/translations.ts`; dominio + JSON-LD en `layout.tsx`.
2. **Favicon / OG**: `public/og-image.png`, `icon-*.png`, `apple-touch-icon.png` siguen
   siendo los heredados de BPORT — reemplazar. (El logo del header/footer ya es real.)
3. **Resend**: API key propia en `.env.local` + dominio remitente verificado en `route.ts`.
4. **Redes sociales**: completar `SOCIAL_LINKS` (hoy vacío) en `lib/site.ts`.
5. Definir qué hacer con las **secciones huérfanas** (ver arriba).
6. Si se reincorporan Trust/Reviews: cifras y testimonios reales (hoy placeholder en `translations.ts`).
