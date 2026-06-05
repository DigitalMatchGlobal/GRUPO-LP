"use client";

import { ArrowRight, BadgeCheck, Clock3, FileWarning, Landmark, Route } from "lucide-react";

import { MotionItem, MotionSection } from "@/components/landing/motion";
import { useLanguage } from "@/components/i18n/language-context";

const es = {
  kicker: "Mapa de riesgos",
  title: "Lo que traba un despacho casi nunca es el barco.",
  intro:
    "El problema suele estar antes: una partida mal interpretada, una factura incompleta, un permiso no previsto, una diferencia de criterio o un costo que nadie calculó. Ahí entra el trabajo del despachante.",
  cta: "Ver alcance aduanero",
  risks: [
    ["Documentación", "Factura, packing, BL/AWB, seguro, certificados y autorización al despachante.", FileWarning],
    ["Normativa", "Clasificación NCM, regímenes, intervenciones y criterios de Aduana.", Landmark],
    ["Costos", "Arancel, IVA, anticipos, tasas, gastos portuarios y organismos.", Clock3],
    ["Representación", "DUA, observaciones, verificaciones y comunicación ante la DNA.", BadgeCheck],
    ["Cierre operativo", "Depósito, retiro, entrega y archivo del expediente.", Route],
  ],
};

const en = {
  kicker: "Risk map",
  title: "What blocks clearance is rarely the vessel.",
  intro:
    "The problem usually appears earlier: a misread tariff line, an incomplete invoice, a missing permit, a criterion difference or a cost nobody calculated. That is where customs brokerage matters.",
  cta: "View customs scope",
  risks: [
    ["Documentation", "Invoice, packing list, BL/AWB, insurance, certificates and broker authorization.", FileWarning],
    ["Regulations", "HS/NCM classification, regimes, interventions and customs criteria.", Landmark],
    ["Costs", "Duties, VAT, advances, fees, port expenses and agencies.", Clock3],
    ["Representation", "Declaration, observations, verifications and communication before Customs.", BadgeCheck],
    ["Operational closure", "Warehouse, pickup, delivery and file archive.", Route],
  ],
};

export function RiskMapSection() {
  const { locale } = useLanguage();
  const copy = locale === "es" ? es : en;

  return (
    <MotionSection id="riesgos" className="scroll-mt-24 overflow-hidden bg-primary py-(--section-py) text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="mt-10 grid gap-px bg-white/15 sm:mt-16 sm:grid-cols-2 lg:grid-cols-5">
          {copy.risks.map(([title, body, Icon], index) => {
            const RiskIcon = Icon as typeof FileWarning;
            return (
              <MotionItem key={title as string} className="bg-primary p-5 ring-1 ring-white/5 sm:min-h-72 sm:p-6">
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-accent-bright">
                  RISK / {String(index + 1).padStart(2, "0")}
                </span>
                <RiskIcon className="mt-6 size-6 text-white/80 sm:mt-10 sm:size-7" strokeWidth={1.5} />
                <h3 className="font-display mt-5 text-lg leading-tight text-white sm:mt-8 sm:text-xl">{title as string}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/52">{body as string}</p>
              </MotionItem>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
