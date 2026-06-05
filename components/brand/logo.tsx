import Image from "next/image";

type Variant = "dark" | "light";

/**
 * Marca Grupo LP: monograma oficial + wordmark web.
 * - variant "light"  → monograma BLANCO (header sobre el hero oscuro, footer).
 * - variant "dark"   → monograma de COLOR (header scrolleado, páginas claras).
 * - compact          → versión achicada (header al hacer scroll).
 * Las dos imágenes son el mismo monograma recortado al ras, así el cambio de
 * tamaño/color al scrollear queda prolijo (ver Header).
 */
const MARKS = {
  dark: { src: "/logo-grupo-lp-mark.png", width: 640, height: 552 },
  light: { src: "/logo-grupo-lp-mark-white.png", width: 525, height: 438 },
} as const;

export function BrandLogo({
  variant = "dark",
  withTagline = true,
  compact = false,
  className = "",
}: {
  variant?: Variant;
  withTagline?: boolean;
  compact?: boolean;
  className?: string;
}) {
  const isLight = variant === "light";
  const mark = MARKS[variant];

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src={mark.src}
        alt=""
        width={mark.width}
        height={mark.height}
        priority
        className={`w-auto object-contain transition-[height] duration-300 ease-out ${
          compact ? "h-8 sm:h-9" : "h-11 sm:h-14"
        }`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`lp-mark transition-[font-size] duration-300 ease-out ${
            isLight ? "lp-mark--light" : ""
          } ${compact ? "text-[1.15rem]" : "text-[1.45rem]"}`}
        >
          <span className="lp-l">GRUPO</span>
          <span className="lp-p ml-1.5">LP</span>
        </span>
        {withTagline && (
          <span
            className={`mt-1 font-semibold uppercase tracking-[0.22em] transition-[font-size] duration-300 ease-out ${
              isLight ? "text-white/60" : "text-muted-foreground"
            } ${compact ? "text-[0.46rem]" : "text-[0.5rem]"}`}
          >
            Lavoriero &amp; Perez SRL
          </span>
        )}
      </span>
    </span>
  );
}
