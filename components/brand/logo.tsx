/**
 * Marca Grupo LP — PLACEHOLDER tipográfico.
 * TODO: reemplazar <LpMonogram /> por el logo oficial (SVG/PNG en /public)
 * cuando el cliente entregue los archivos. La estructura (monograma + wordmark,
 * variante clara/oscura) queda lista para soltar el asset real.
 */

type Variant = "dark" | "light";

/** Monograma LP angular (eco del logo origami): L navy + P azul brillante. */
export function LpMonogram({
  variant = "dark",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const lColor = variant === "light" ? "#ffffff" : "var(--primary)";
  const pColor = variant === "light" ? "var(--accent-bright)" : "var(--accent)";
  const foldColor = variant === "light" ? "var(--accent)" : "var(--accent-bright)";

  return (
    <svg
      viewBox="0 0 72 64"
      className={className}
      role="img"
      aria-label="Grupo LP"
      fill="none"
    >
      {/* L */}
      <path d="M10 6 L23 6 L23 45 L44 45 L44 58 L10 58 Z" fill={lColor} />
      {/* P — stem */}
      <path d="M40 6 L53 6 L53 58 L40 58 Z" fill={pColor} />
      {/* P — bowl (bloque angular) */}
      <path d="M53 6 L62 6 L62 30 L53 30 Z" fill={pColor} />
      {/* Pliegue origami (highlight) */}
      <path d="M53 6 L62 6 L53 19 Z" fill={foldColor} fillOpacity="0.9" />
    </svg>
  );
}

/** Marca completa: monograma + "GRUPO LP" + bajada "Lavoriero & Perez SRL". */
export function BrandLogo({
  variant = "dark",
  withTagline = true,
  className = "",
}: {
  variant?: Variant;
  withTagline?: boolean;
  className?: string;
}) {
  const isLight = variant === "light";
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LpMonogram variant={variant} className="h-9 w-auto shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`lp-mark text-[1.35rem] ${isLight ? "lp-mark--light" : ""}`}>
          <span className="lp-l">GRUPO</span>
          <span className="lp-p ml-1.5">LP</span>
        </span>
        {withTagline && (
          <span
            className={`mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.22em] ${
              isLight ? "text-white/60" : "text-muted-foreground"
            }`}
          >
            Lavoriero &amp; Perez SRL
          </span>
        )}
      </span>
    </span>
  );
}
