"use client";

import { motion } from "framer-motion";

import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";

export function LogisticsRoutesBackground() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const routes = [
    { id: 1, d: "M-100,150 L300,150 Q350,150 350,200 L350,600 Q350,650 400,650 L1540,650", duration: 15, delay: 0, color: "var(--accent)" },
    { id: 2, d: "M1540,250 L1100,250 Q1050,250 1050,300 L1050,550 Q1050,600 1000,600 L-100,600", duration: 18, delay: 2, color: "var(--accent-bright)" },
    { id: 3, d: "M200,900 L200,500 Q200,450 250,450 L800,450 Q850,450 850,400 L850,-100", duration: 12, delay: 1, color: "var(--accent)" },
    { id: 4, d: "M1200,-100 L1200,350 Q1200,400 1250,400 L1540,400", duration: 8, delay: 3, color: "var(--primary-navy)" },
    { id: 5, d: "M-100,750 L600,750 Q650,750 650,700 L650,-100", duration: 14, delay: 0.5, color: "var(--accent-bright)" }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg className="w-full h-full opacity-40" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
        {routes.map((r) => (
          <g key={r.id}>
            {/* Base Track */}
            <path
              d={r.d}
              stroke="currentColor"
              className="text-muted-foreground/20"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Moving Cargo (Pulse) */}
            <motion.path
              d={r.d}
              style={{ stroke: r.color }}
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={100}
              strokeDasharray="6 100"
              initial={{ strokeDashoffset: 106 }}
              animate={prefersReducedMotion ? undefined : { strokeDashoffset: -6 }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      duration: r.duration,
                      repeat: Infinity,
                      ease: "linear",
                      delay: r.delay,
                    }
              }
            />
          </g>
        ))}
      </svg>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/50" />
    </div>
  );
}
