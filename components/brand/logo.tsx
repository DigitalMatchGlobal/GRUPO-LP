import Image from "next/image";

type Variant = "dark" | "light";

/** Marca completa: monograma oficial + wordmark web legible. */
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
      <span
        className={`relative flex size-11 shrink-0 items-center justify-center overflow-hidden ${
          isLight ? "bg-primary/60" : "bg-primary"
        }`}
      >
        <Image
          src="/logo-grupo-lp-mark.png"
          alt=""
          fill
          sizes="44px"
          className="object-contain"
          priority
        />
      </span>
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
