"use client";

import { motion } from "framer-motion";

import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";

/* Red de nodos low-poly compartida (coordenadas en el viewBox 1100×560). */
const NET_NODES = [
  { cx: 120, cy: 90 },
  { cx: 380, cy: 210 },
  { cx: 300, cy: 470 },
  { cx: 760, cy: 140 },
  { cx: 980, cy: 360 },
  { cx: 640, cy: 430 },
];
const NET_LINKS: Array<[number, number]> = [
  [0, 1], [1, 2], [1, 3], [3, 4], [2, 5], [5, 4], [3, 5],
];

type Variant = "dark" | "light";

const PALETTE: Record<Variant, {
  grid: string;
  glowA: string;
  glowB: string;
  glowOpacityA: number[];
  glowOpacityB: number[];
  line: string;
  lineAccent: string;
  node: string;
  pulse: string;
}> = {
  dark: {
    grid: "technical-grid-dark",
    glowA: "bg-accent/20",
    glowB: "bg-accent-bright/15",
    glowOpacityA: [0.45, 0.8, 0.45],
    glowOpacityB: [0.35, 0.7, 0.35],
    line: "rgba(255,255,255,0.07)",
    lineAccent: "rgba(8,90,249,0.22)",
    node: "rgba(8,90,249,0.65)",
    pulse: "rgba(8,90,249,0.95)",
  },
  light: {
    grid: "technical-grid",
    glowA: "bg-accent/10",
    glowB: "bg-accent-bright/10",
    glowOpacityA: [0.3, 0.55, 0.3],
    glowOpacityB: [0.25, 0.5, 0.25],
    line: "rgba(5,18,45,0.07)",
    lineAccent: "rgba(8,81,220,0.16)",
    node: "rgba(8,81,220,0.45)",
    pulse: "rgba(8,81,220,0.8)",
  },
};

/**
 * Fondo animado on-brand: grilla técnica que deriva + halos de azul que
 * respiran + red de nodos low-poly con pulsos de datos viajando.
 * Respeta `prefers-reduced-motion` (queda estático).
 */
export function AnimatedBackdrop({ variant = "dark" }: { variant?: Variant }) {
  const reduced = usePrefersReducedMotion();
  const c = PALETTE[variant];
  const loop = (duration: number) => ({ duration, repeat: Infinity, ease: "easeInOut" as const });

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grilla técnica que deriva lentamente */}
      <motion.div
        className={`${c.grid} absolute -inset-[20%] opacity-60`}
        animate={reduced ? undefined : { x: [0, -80], y: [0, -80] }}
        transition={reduced ? undefined : { duration: 24, repeat: Infinity, ease: "linear" }}
      />

      {/* Halos de azul eléctrico que "respiran" */}
      <motion.div
        className={`absolute -left-40 top-10 size-[34rem] rounded-full ${c.glowA} blur-[130px]`}
        animate={reduced ? undefined : { x: [0, 60, 0], y: [0, -40, 0], opacity: c.glowOpacityA }}
        transition={reduced ? undefined : loop(17)}
      />
      <motion.div
        className={`absolute -right-32 bottom-0 size-[30rem] rounded-full ${c.glowB} blur-[130px]`}
        animate={reduced ? undefined : { x: [0, -55, 0], y: [0, 35, 0], opacity: c.glowOpacityB }}
        transition={reduced ? undefined : loop(21)}
      />

      {/* Red de nodos / rutas con pulsos de datos viajando */}
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 1100 560"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {NET_LINKS.map(([a, b], i) => (
          <line
            key={i}
            x1={NET_NODES[a].cx}
            y1={NET_NODES[a].cy}
            x2={NET_NODES[b].cx}
            y2={NET_NODES[b].cy}
            stroke={i % 3 === 0 ? c.lineAccent : c.line}
            strokeWidth={1}
          />
        ))}

        {NET_NODES.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.cx}
            cy={n.cy}
            r={3}
            fill={c.node}
            animate={reduced ? undefined : { opacity: [0.25, 0.9, 0.25], r: [2.5, 4.5, 2.5] }}
            transition={reduced ? undefined : loop(3 + i * 0.6)}
          />
        ))}

        {/* Pulsos viajando por la red (efecto "datos en tránsito") */}
        {!reduced && (
          <>
            <motion.circle
              r={3.5}
              fill={c.pulse}
              animate={{
                cx: [NET_NODES[0].cx, NET_NODES[1].cx, NET_NODES[3].cx, NET_NODES[4].cx],
                cy: [NET_NODES[0].cy, NET_NODES[1].cy, NET_NODES[3].cy, NET_NODES[4].cy],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear", times: [0, 0.34, 0.67, 1] }}
            />
            <motion.circle
              r={3.5}
              fill={c.pulse}
              animate={{
                cx: [NET_NODES[2].cx, NET_NODES[5].cx, NET_NODES[4].cx],
                cy: [NET_NODES[2].cy, NET_NODES[5].cy, NET_NODES[4].cy],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1.5 }}
            />
          </>
        )}
      </svg>
    </div>
  );
}
