"use client";

import { useEffect, useState, type ComponentType } from "react";
import { ArrowRight, BadgeCheck, Clock3, FileWarning, Landmark, Route, type LucideProps } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { AnimatedBackdrop } from "@/components/landing/animated-backdrop";
import { MotionItem, MotionSection } from "@/components/landing/motion";
import { useLanguage } from "@/components/i18n/language-context";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";

type Risk = { title: string; body: string; icon: ComponentType<LucideProps> };

const es = {
  kicker: "Mapa de riesgos",
  title: "Lo que traba un despacho casi nunca es el barco.",
  intro:
    "El problema suele estar antes: una partida mal interpretada, una factura incompleta, un permiso no previsto, una diferencia de criterio o un costo que nadie calculó. Ahí entra el trabajo del despachante.",
  cta: "Ver alcance aduanero",
  riskLabel: "Riesgo",
  risks: [
    { title: "Documentación", body: "Factura, packing, BL/AWB, seguro, certificados y autorización al despachante.", icon: FileWarning },
    { title: "Normativa", body: "Clasificación NCM, regímenes, intervenciones y criterios de Aduana.", icon: Landmark },
    { title: "Costos", body: "Arancel, IVA, anticipos, tasas, gastos portuarios y organismos.", icon: Clock3 },
    { title: "Representación", body: "DUA, observaciones, verificaciones y comunicación ante la DNA.", icon: BadgeCheck },
    { title: "Cierre operativo", body: "Depósito, retiro, entrega y archivo del expediente.", icon: Route },
  ] as Risk[],
};

const en = {
  kicker: "Risk map",
  title: "What blocks clearance is rarely the vessel.",
  intro:
    "The problem usually appears earlier: a misread tariff line, an incomplete invoice, a missing permit, a criterion difference or a cost nobody calculated. That is where customs brokerage matters.",
  cta: "View customs scope",
  riskLabel: "Risk",
  risks: [
    { title: "Documentation", body: "Invoice, packing list, BL/AWB, insurance, certificates and broker authorization.", icon: FileWarning },
    { title: "Regulations", body: "HS/NCM classification, regimes, interventions and customs criteria.", icon: Landmark },
    { title: "Costs", body: "Duties, VAT, advances, fees, port expenses and agencies.", icon: Clock3 },
    { title: "Representation", body: "Declaration, observations, verifications and communication before Customs.", icon: BadgeCheck },
    { title: "Operational closure", body: "Warehouse, pickup, delivery and file archive.", icon: Route },
  ] as Risk[],
};

export function RiskMapSection() {
  const { locale } = useLanguage();
  const copy = locale === "es" ? es : en;
  const reduced = usePrefersReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = copy.risks.length;
  const active = copy.risks[activeIndex];
  const ActiveIcon = active.icon;
  const total = String(count).padStart(2, "0");

  // Auto-avance (se pausa al interactuar; respeta reduced-motion).
  useEffect(() => {
    if (reduced || paused) return;
    const id = setInterval(() => setActiveIndex((i) => (i + 1) % count), 4500);
    return () => clearInterval(id);
  }, [reduced, paused, count]);

  return (
    <MotionSection id="riesgos" className="relative scroll-mt-24 overflow-hidden bg-primary py-(--section-py) text-white">
      <AnimatedBackdrop variant="dark" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <MotionItem>
            <p className="eyebrow eyebrow-light">{copy.kicker}</p>
            <h2 className="section-title mt-6 text-white">{copy.title}</h2>
          </MotionItem>
          <MotionItem className="border-l border-white/18 pl-4 sm:pl-6">
            <p className="max-w-2xl text-sm leading-relaxed text-white/62 sm:text-base">{copy.intro}</p>
            <a href="#servicios" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-accent-bright hover:text-white sm:mt-7">
              {copy.cta}
              <ArrowRight className="size-4" />
            </a>
          </MotionItem>
        </div>

        <MotionItem
          className="mt-10 sm:mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Ruta de riesgo: nodos seleccionables conectados por una línea */}
          <div className="relative">
            <div aria-hidden className="absolute left-[10%] right-[10%] top-5 hidden h-px bg-white/15 lg:block" />
            <motion.div
              aria-hidden
              className="absolute left-[10%] top-5 hidden h-px bg-accent-bright lg:block"
              animate={{ width: `${(activeIndex / (count - 1)) * 80}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            <div className="flex justify-between gap-2 py-2 lg:grid lg:grid-cols-5 lg:gap-2 lg:py-0">
              {copy.risks.map((risk, index) => {
                const selected = index === activeIndex;
                return (
                  <button
                    key={risk.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={selected}
                    className="group relative flex shrink-0 flex-col items-center gap-3 px-1 py-1 text-center outline-none"
                  >
                    <span
                      className={`relative z-10 flex size-10 items-center justify-center rounded-full border font-mono text-[0.7rem] font-bold text-white transition-colors ${
                        selected ? "border-accent-bright bg-accent" : "border-white/30 bg-primary group-hover:border-white/70"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                      {selected && !reduced && (
                        <motion.span
                          aria-hidden
                          className="absolute inset-0 rounded-full ring-2 ring-accent-bright"
                          animate={{ scale: [1, 1.55], opacity: [0.55, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                        />
                      )}
                    </span>
                    <span className={`hidden whitespace-nowrap text-xs font-semibold leading-tight transition-colors lg:block ${selected ? "text-white" : "text-white/55 group-hover:text-white/85"}`}>
                      {risk.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Panel de detalle del riesgo activo */}
          <div className="relative mt-8 overflow-hidden border border-white/12 bg-white/[0.03] sm:mt-10">
            <span aria-hidden className="absolute left-0 top-0 h-full w-[3px] bg-accent" />
            <AnimatePresence mode="wait">
              <motion.div
                key={`${locale}-${activeIndex}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-6 p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-10 sm:p-10"
              >
                <div className="flex items-center gap-5 sm:flex-col sm:items-start sm:gap-6">
                  <div className="icon-box size-12 bg-accent sm:size-16">
                    <ActiveIcon className="size-6 sm:size-7" strokeWidth={1.6} />
                  </div>
                  <span className="font-display text-6xl leading-none text-white/30 sm:text-8xl">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.2em] text-accent-bright">
                    {copy.riskLabel} / {String(activeIndex + 1).padStart(2, "0")} / {total}
                  </p>
                  <h3 className="font-display mt-3 text-2xl leading-tight text-white sm:text-4xl">{active.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:mt-5 sm:text-base">{active.body}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </MotionItem>
      </div>
    </MotionSection>
  );
}
