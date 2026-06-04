"use client";

import { motion } from "framer-motion";

import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";

const routes = [
  "M78 182 C162 75 274 67 358 156",
  "M101 251 C190 326 308 318 388 219",
  "M129 108 C205 170 290 192 382 139",
];

export function FacetedGlobe() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]" aria-hidden>
      <div className="absolute inset-[7%] rotate-6 bg-accent/15 [clip-path:polygon(12%_0,88%_0,100%_30%,88%_100%,18%_94%,0_64%)]" />
      <div className="absolute inset-[15%] -rotate-3 border border-white/20 [clip-path:polygon(20%_0,80%_0,100%_24%,92%_82%,58%_100%,7%_78%,0_31%)]" />
      <svg viewBox="0 0 480 480" className="absolute inset-0 h-full w-full">
        <path
          d="M80 154 L137 84 L223 59 L322 86 L397 155 L414 242 L369 333 L286 401 L181 394 L91 324 L55 235 Z"
          fill="var(--primary-navy)"
          stroke="rgba(255,255,255,0.24)"
          strokeWidth="1"
        />
        <path d="M80 154 L223 59 L206 190 Z" fill="var(--accent)" opacity="0.72" />
        <path d="M223 59 L322 86 L303 192 L206 190 Z" fill="var(--navy-surface)" />
        <path d="M322 86 L397 155 L303 192 Z" fill="var(--accent-bright)" opacity="0.5" />
        <path d="M80 154 L206 190 L55 235 Z" fill="var(--navy-surface)" />
        <path d="M206 190 L303 192 L239 264 Z" fill="var(--accent)" opacity="0.35" />
        <path d="M303 192 L414 242 L239 264 Z" fill="var(--navy-surface)" />
        <path d="M55 235 L239 264 L91 324 Z" fill="var(--accent)" opacity="0.22" />
        <path d="M239 264 L369 333 L286 401 Z" fill="var(--accent)" opacity="0.45" />
        <path d="M91 324 L239 264 L181 394 Z" fill="var(--navy-surface)" />

        {routes.map((route, index) => (
          <motion.path
            key={route}
            d={route}
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="5 9"
            opacity="0.72"
            initial={reduced ? undefined : { pathLength: 0, opacity: 0 }}
            animate={reduced ? undefined : { pathLength: 1, opacity: 0.72 }}
            transition={{ duration: 1.6, delay: 0.3 + index * 0.2 }}
          />
        ))}

        {[[78,182], [358,156], [101,251], [388,219], [129,108], [382,139]].map(([cx, cy], index) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="5"
            fill="var(--accent-bright)"
            stroke="white"
            strokeWidth="2"
            animate={reduced ? undefined : { r: [4, 7, 4], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.18 }}
          />
        ))}
      </svg>
      <div className="absolute bottom-[9%] left-[4%] border-l-2 border-accent bg-white px-4 py-3 text-primary shadow-xl">
        <p className="font-display text-[0.58rem] uppercase tracking-[0.22em] text-muted-foreground">
          Base operativa
        </p>
        <p className="mt-1 font-display text-sm uppercase tracking-wide">Montevideo · UY</p>
      </div>
    </div>
  );
}
