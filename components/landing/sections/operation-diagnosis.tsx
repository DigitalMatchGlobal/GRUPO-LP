"use client";

import { useState } from "react";
import { Check, ChevronDown, FileSearch, Scale, ShieldCheck, TriangleAlert } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { AnimatedBackdrop } from "@/components/landing/animated-backdrop";
import { MotionItem, MotionSection } from "@/components/landing/motion";
import { useLanguage } from "@/components/i18n/language-context";

const es = {
  kicker: "Diagnóstico inicial",
  title: "Antes de cotizar flete, hay que entender la aduana.",
  intro:
    "El valor de Grupo LP está en leer la operación antes de que se vuelva urgente: mercadería, partida, régimen, documentos, permisos y costo de nacionalización. Después se coordina la carga; primero se evita el error.",
  strip: "Una operación clara empieza con criterio aduanero.",
  reviewLabel: "Qué revisamos",
  cards: [
    {
      icon: FileSearch,
      title: "Mercadería, origen y uso",
      body: "Revisamos descripción, composición, procedencia, destino y finalidad comercial para detectar requisitos antes de comprar o embarcar.",
      points: ["Descripción técnica y composición", "Origen, procedencia y destino", "Uso y finalidad comercial"],
    },
    {
      icon: Scale,
      title: "Partida y costo real",
      body: "Trabajamos NCM, arancel, IVA, tasas, anticipos y gastos asociados para que la operación no sorprenda al llegar.",
      points: ["Clasificación NCM y arancel", "IVA, anticipos y tasas", "Gastos asociados a la operación"],
    },
    {
      icon: ShieldCheck,
      title: "Documentos y permisos",
      body: "Controlamos factura, packing, transporte, seguro, certificados e intervenciones ante organismos cuando correspondan.",
      points: ["Factura, packing y transporte", "Seguro y certificados de origen", "Intervenciones de organismos"],
    },
    {
      icon: TriangleAlert,
      title: "Riesgo de observación",
      body: "Marcamos dónde puede trabarse el despacho y qué corregir antes de presentar el expediente ante Aduana.",
      points: ["Puntos donde puede observarse", "Correcciones antes de presentar", "Canales y verificaciones probables"],
    },
  ],
};

const en = {
  kicker: "Initial diagnosis",
  title: "Before quoting freight, customs must be understood.",
  intro:
    "Grupo LP's value lies in reading the operation before it becomes urgent: goods, tariff line, regime, documents, permits and nationalization cost. Cargo is coordinated afterwards; errors are prevented first.",
  strip: "A clear operation starts with customs criteria.",
  reviewLabel: "What we review",
  cards: [
    {
      icon: FileSearch,
      title: "Goods, origin and use",
      body: "We review description, composition, origin, destination and commercial purpose to detect requirements before purchase or shipment.",
      points: ["Technical description and composition", "Origin, source and destination", "Use and commercial purpose"],
    },
    {
      icon: Scale,
      title: "Tariff line and real cost",
      body: "We work on HS/NCM, duties, VAT, fees, advances and associated expenses so the operation does not surprise you on arrival.",
      points: ["HS/NCM classification and duties", "VAT, advances and fees", "Operation-related expenses"],
    },
    {
      icon: ShieldCheck,
      title: "Documents and permits",
      body: "We control invoice, packing list, transport document, insurance, certificates and agency interventions when applicable.",
      points: ["Invoice, packing and transport", "Insurance and origin certificates", "Agency interventions"],
    },
    {
      icon: TriangleAlert,
      title: "Observation risk",
      body: "We mark where clearance may get stuck and what should be corrected before filing the customs file.",
      points: ["Where it may be flagged", "Fixes before filing", "Likely channels and checks"],
    },
  ],
};

export function OperationDiagnosisSection() {
  const { locale } = useLanguage();
  const copy = locale === "es" ? es : en;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const total = String(copy.cards.length).padStart(2, "0");

  return (
    <MotionSection id="diagnostico" className="relative scroll-mt-24 border-b border-primary/15 py-(--section-py)">
      <AnimatedBackdrop variant="light" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <MotionItem className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">{copy.kicker}</p>
            <h2 className="section-title mt-6">{copy.title}</h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base">{copy.intro}</p>
            <div className="mt-7 border-l-2 border-accent bg-card p-4 shadow-sm sm:mt-10 sm:p-5">
              <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.2em] text-accent">
                {copy.strip}
              </p>
            </div>
          </MotionItem>

          <div className="grid gap-px bg-primary/15 sm:grid-cols-2">
            {copy.cards.map((card, index) => {
              const Icon = card.icon;
              const open = index === openIndex;
              return (
                <MotionItem
                  key={card.title}
                  role="button"
                  tabIndex={0}
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setOpenIndex(open ? null : index);
                    }
                  }}
                  className={`group relative cursor-pointer overflow-hidden bg-card p-6 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent sm:min-h-72 sm:p-9 ${
                    open ? "bg-card" : "hover:bg-muted/60"
                  }`}
                >
                  {/* Barra de acento que crece al hover / activo */}
                  <span
                    aria-hidden
                    className={`absolute left-0 top-0 h-full w-[3px] origin-top bg-accent transition-transform duration-300 ${
                      open ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                    }`}
                  />

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.62rem] font-bold tracking-[0.22em] text-accent">
                      {String(index + 1).padStart(2, "0")} <span className="text-muted-foreground/60">/ {total}</span>
                    </span>
                    <span
                      className={`flex size-7 items-center justify-center border transition-colors ${
                        open ? "border-accent bg-accent text-white" : "border-primary/20 text-accent group-hover:border-accent"
                      }`}
                    >
                      <ChevronDown className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                    </span>
                  </div>

                  <Icon className={`mt-6 size-7 text-accent transition-transform duration-300 sm:mt-9 sm:size-8 ${open ? "scale-110" : "group-hover:scale-110"}`} strokeWidth={1.6} />
                  <h3 className="font-display mt-5 text-xl leading-tight tracking-tight sm:mt-7 sm:text-2xl">{card.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{card.body}</p>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 border-t border-primary/15 pt-5">
                          <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.2em] text-accent">{copy.reviewLabel}</p>
                          <ul className="mt-3 space-y-2">
                            {card.points.map((point) => (
                              <li key={point} className="flex items-start gap-2 text-sm leading-snug text-primary">
                                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </MotionItem>
              );
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
