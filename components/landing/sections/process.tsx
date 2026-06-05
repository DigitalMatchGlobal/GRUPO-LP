"use client";

import Image from "next/image";
import { ArrowRight, Stamp } from "lucide-react";
import { motion } from "framer-motion";

import { MotionItem, MotionSection } from "@/components/landing/motion";
import { useLanguage } from "@/components/i18n/language-context";

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

  return (
    <MotionSection id="proceso" className="technical-grid scroll-mt-24 py-(--section-py)">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-primary/15 pb-4 sm:mb-6 sm:gap-4 sm:pb-5">
              <div>
                <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.2em] text-accent">{copy.file}</p>
                <p className="mt-1 text-sm text-muted-foreground">LP / DNA / UY</p>
              </div>
              <div className="flex items-center gap-2 bg-primary px-3 py-2 text-white sm:gap-3 sm:px-4 sm:py-3">
                <Stamp className="size-4 text-accent-bright" />
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em]">{copy.active}</span>
              </div>
            </div>

            <ol className="space-y-px bg-primary/15">
              {t.process.items.map((item, index) => (
                <motion.li
                  key={item.step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="grid gap-0 bg-card md:grid-cols-[13rem_1fr]"
                >
                  <div className="relative hidden min-h-32 overflow-hidden sm:block sm:min-h-44 md:min-h-full">
                    <Image
                      src={PROCESS_IMAGES[index]}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 13rem, 100vw"
                      className="object-cover saturate-[0.68]"
                    />
                    <div className="absolute inset-0 bg-primary/24 mix-blend-multiply" />
                    <span className="absolute left-0 top-0 bg-accent px-4 py-2 font-mono text-[0.62rem] font-bold tracking-[0.18em] text-white">
                      FOLIO {item.step}
                    </span>
                  </div>
                  <div className="grid gap-5 p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
                    <div>
                      <p className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {copy.status} / {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-display mt-3 max-w-[18ch] text-xl leading-tight sm:text-2xl">{item.title}</h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-4">{item.description}</p>
                    </div>
                    <ArrowRight className="hidden size-5 text-accent sm:block" />
                  </div>
                </motion.li>
              ))}
            </ol>
          </MotionItem>
        </div>
      </div>
    </MotionSection>
  );
}
