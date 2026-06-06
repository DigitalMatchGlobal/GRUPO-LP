"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowRight, Check, Stamp } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { AnimatedBackdrop } from "@/components/landing/animated-backdrop";
import { MotionItem, MotionSection } from "@/components/landing/motion";
import { useLanguage } from "@/components/i18n/language-context";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";

const PROCESS_IMAGES = ["/proceso 1.png", "/proceso 2.png", "/proceso 3.png", "/proceso 4.png"] as const;

const labels = {
  es: {
    kicker: "Expediente operativo",
    title: "Un despacho serio se gestiona como expediente, no como trámite suelto.",
    intro:
      "Ordenamos datos, documentos, criterio aduanero, costos, permisos, presentación y liberación para que cada operación tenga trazabilidad de principio a fin.",
    file: "Archivo de operación",
    status: "Estado",
    active: "En control",
    cta: "Abrir consulta",
  },
  en: {
    kicker: "Operational file",
    title: "Serious clearance is managed as a file, not as an isolated filing.",
    intro:
      "We organize data, documents, customs criteria, costs, permits, filing and release so every operation has traceability from start to finish.",
    file: "Operation file",
    status: "Status",
    active: "Under control",
    cta: "Open inquiry",
  },
};

export function ProcessSection() {
  const { t, locale } = useLanguage();
  const copy = labels[locale];
  const reduced = usePrefersReducedMotion();
  const items = t.process.items;
  const total = String(items.length).padStart(2, "0");

  // Progreso ligado al scroll: el "lomo del expediente" se llena al recorrer la sección.
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const [activeStep, setActiveStep] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveStep(Math.min(items.length - 1, Math.max(0, Math.floor(v * items.length))));
  });

  return (
    <MotionSection id="proceso" className="relative scroll-mt-24 py-(--section-py)">
      <AnimatedBackdrop variant="light" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <MotionItem className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">{copy.kicker}</p>
            <h2 className="section-title mt-6">{copy.title}</h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base">{copy.intro}</p>
            <a href="#contacto" className="btn-ghost mt-8 max-sm:w-full sm:mt-10">
              {copy.cta}
              <ArrowRight className="size-4" />
            </a>
          </MotionItem>

          <MotionItem className="facet-card p-4 sm:p-7 lg:p-8">
            {/* Cabecera del expediente con avance en vivo */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-primary/15 pb-4 sm:mb-8 sm:gap-4 sm:pb-5">
              <div>
                <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.2em] text-accent">{copy.file}</p>
                <p className="mt-1 text-sm text-muted-foreground">LP / DNA / UY</p>
              </div>
              <div className="flex items-center gap-3 bg-primary px-3 py-2 text-white sm:gap-4 sm:px-4 sm:py-3">
                <Stamp className="size-4 text-accent-bright" />
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em]">{copy.active}</span>
                <span className="flex items-center gap-1" aria-hidden>
                  {items.map((item, i) => (
                    <span key={item.step} className={`size-1.5 rounded-full transition-colors ${i <= activeStep ? "bg-accent-bright" : "bg-white/25"}`} />
                  ))}
                </span>
                <span className="font-mono text-[0.58rem] font-bold tracking-[0.12em] text-accent-bright">
                  {String(activeStep + 1).padStart(2, "0")}/{total}
                </span>
              </div>
            </div>

            {/* Timeline vertical: el lomo se llena con el scroll */}
            <ol ref={listRef} className="relative">
              <div aria-hidden className="absolute left-5 top-2 h-[calc(100%-1rem)] w-0.5 -translate-x-1/2 bg-primary/15" />
              <motion.div
                aria-hidden
                style={{ scaleY: scrollYProgress }}
                className="absolute left-5 top-2 h-[calc(100%-1rem)] w-0.5 -translate-x-1/2 origin-top bg-accent"
              />

              {items.map((item, index) => {
                const done = index < activeStep;
                const active = index === activeStep;
                const lit = done || active;
                return (
                  <li key={item.step} className="relative grid grid-cols-[2.5rem_1fr] gap-4 pb-9 last:pb-0 sm:gap-6">
                    {/* Nodo / folio sobre el lomo */}
                    <div className="relative z-10 flex justify-center">
                      <span
                        className={`relative flex size-10 items-center justify-center rounded-full border-2 font-mono text-xs font-bold transition-colors duration-300 ${
                          lit ? "border-accent bg-accent text-white" : "border-primary/25 bg-card text-muted-foreground"
                        }`}
                      >
                        {done ? <Check className="size-4" /> : item.step}
                        {active && !reduced && (
                          <motion.span
                            aria-hidden
                            className="absolute inset-0 rounded-full ring-2 ring-accent"
                            animate={{ scale: [1, 1.55], opacity: [0.5, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                          />
                        )}
                      </span>
                    </div>

                    {/* Contenido del folio */}
                    <div className={`pb-1 transition-opacity duration-300 ${lit ? "opacity-100" : "opacity-55"}`}>
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                        <div className="min-w-0 flex-1">
                          <p className={`font-mono text-[0.56rem] font-bold uppercase tracking-[0.18em] transition-colors ${lit ? "text-accent" : "text-muted-foreground"}`}>
                            FOLIO {item.step}
                          </p>
                          <h3 className="font-display mt-2 text-xl leading-tight tracking-tight sm:text-2xl">{item.title}</h3>
                          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                        </div>
                        <div className="relative order-first h-40 w-full shrink-0 overflow-hidden border border-primary/10 sm:order-none sm:h-28 sm:w-40">
                          <Image
                            src={PROCESS_IMAGES[index]}
                            alt={item.title}
                            fill
                            sizes="(min-width: 640px) 10rem, 90vw"
                            loading="lazy"
                            className={`object-cover transition-all duration-500 ${lit ? "saturate-100" : "saturate-[0.4] opacity-80"}`}
                          />
                          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                          <span className={`absolute left-0 top-0 bg-accent px-3 py-1 font-mono text-[0.56rem] font-bold tracking-[0.16em] text-white transition-opacity duration-300 sm:hidden ${lit ? "opacity-100" : "opacity-0"}`}>
                            FOLIO {item.step}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </MotionItem>
        </div>
      </div>
    </MotionSection>
  );
}
