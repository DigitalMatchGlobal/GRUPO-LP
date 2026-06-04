# Grupo LP — Brand spec derivada (v0)

> Fuente: mockup de presentación (único insumo disponible del cliente).
> Los **colores están muestreados de los píxeles reales** del mockup (hecho).
> La **tipografía es inferencia visual** a confirmar si aparece el archivo original.

---

## Paleta (muestreada del mockup — HECHO)

| Token propuesto      | Hex        | Rol                                                        |
|----------------------|------------|------------------------------------------------------------|
| `--primary-navy`     | `#05122D`  | tinta: titulares, texto fuerte, base profunda              |
| `--navy-surface`     | `#01143F`  | fondos oscuros (banner / hero dark)                        |
| `--accent`           | `#0851DC`  | azul eléctrico, acento de marca (el "LP", líneas, CTAs)    |
| `--accent-bright`    | `#085AF9`  | variante más saturada para highlights puntuales            |
| `--steel`            | `#354665`  | texto secundario / muted sobre claro                       |
| `--border`           | `#B3BCC9`  | bordes y divisores sobre fondo claro                       |
| `--paper`            | `#F8F8F8`  | fondo claro (off-white frío, NO blanco puro)               |
| `--paper-muted`      | `#EDEDEF`  | superficies claras secundarias                             |

**Nota de fidelidad:** los tokens actuales del sitio (`--primary #0e2a52`,
`--accent #2563eb`) están *cerca pero no son fieles*. El azul de marca es más
eléctrico (`#0851DC`) y el navy más profundo (`#05122D`). Corregir en la fase
de tokenización.

---

## Tipografía (INFERENCIA — confirmar si aparece el archivo original)

El wordmark usa una **grotesca geométrica pesada**, en mayúsculas, en una sola
familia a distintos pesos (no hay serif). Candidata más probable: **Montserrat**
(alternativa: Poppins).

Sustitutos web (Google Fonts, vía `next/font/google`):
- **Display / titulares:** Montserrat (700/800), uppercase, tracking ajustado — matchea el wordmark.
- **Body:** Inter (ya está en el proyecto), neutra y legible.

**Acción:** reemplazar Sora (display actual) por Montserrat para alinear con la marca.

---

## Sistema visual / motif (HECHO — del mockup)

- **Construcción facetada tipo origami / papel plegado** (el monograma LP). Es el rasgo más distintivo de la marca.
- **Cortes diagonales / planos en ángulo** (banners, tarjetas). Lenguaje de "facetas".
- **Jerarquía cromática:** navy profundo como base + azul eléctrico como único acento + off-white. El acento se usa con mesura.
- **Iconografía de línea fina** (oficial de aduana, camión, globo) en navy/azul.
- **Mapa mundi low-poly facetado** con nodos brillantes sobre navy — buen asset para hero/fondo.

---

## Identidad verbal / estructura

- **Bilingüe:** GRUPO LP (ES) / LP GROUP (EN). Razón social: Lavoriero & Perez SRL.
- **Tres pilares:** Aduanas / Logística / Comercio Exterior (Customs / Logistics / Global Trade).
- **Datos:** info@grupolp.com.uy · www.grupolp.com.uy · Montevideo, Uruguay.

---

## Diferenciación (cómo ser distintivo SIN salir de marca)

Palanca = **ejecución** del motif facetado/diagonal + azul eléctrico sobre navy
profundo + el mapa low-poly. No se cambia la paleta; se trabaja composición,
profundidad, ángulos, jerarquía y tipografía.

---

*v0 — colores verificados por muestreo; tipografía y nombres de token a validar.*
