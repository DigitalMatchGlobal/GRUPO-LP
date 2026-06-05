"use client";

import Image from "next/image";
import { useState, type ComponentType } from "react";
import {
  ArrowRight,
  Briefcase,
  Check,
  FileCheck,
  Globe2,
  Package,
  Ship,
  type LucideProps,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { MotionItem, MotionSection } from "@/components/landing/motion";
import { useLanguage } from "@/components/i18n/language-context";
import { getWhatsAppUrl } from "@/lib/site";

const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
  Globe2,
  Ship,
  FileCheck,
  Briefcase,
};

const SERVICE_IMAGES: Record<string, string> = {
  despacho: "/landing/service-customs-clearance.webp",
  "clasificacion-costos": "/landing/service-classification-costs.webp",
  "organismos-regimenes": "/landing/service-agencies-permits.webp",
  tramites: "/landing/service-document-management.webp",
  "coordinacion-logistica": "/landing/service-logistics-support.webp",
};

export function ServicesSection() {
  const { t, locale } = useLanguage();
  const [activeId, setActiveId] = useState(t.services.items[0].id);
  const activeIndex = Math.max(0, t.services.items.findIndex((item) => item.id === activeId));
  const active = t.services.items[activeIndex];
  const ActiveIcon = ICON_MAP[active.icon] || Package;
  const activeImage = SERVICE_IMAGES[active.id];

  return (
    <MotionSection id="servicios" className="scroll-mt-24 overflow-hidden bg-primary py-(--section-py) text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.74fr_1.26fr] lg:gap-20">
          <MotionItem>
            <p className="eyebrow eyebrow-light">{t.services.kicker}</p>
            <h2 className="section-title mt-6 text-white">{t.services.title}</h2>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-white/60">{t.services.subtitle}</p>

            <div className="mt-12 border-t border-white/15">
              {t.services.items.map((service, index) => {
                const Icon = ICON_MAP[service.icon] || Package;
                const selected = index === activeIndex;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveId(service.id)}
                    aria-pressed={selected}
                    className={`group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-white/15 py-5 text-left transition-colors ${
                      selected ? "text-white" : "text-white/48 hover:text-white"
                    }`}
                  >
                    <span className={`font-mono text-[0.6rem] tracking-[0.18em] ${selected ? "text-accent-bright" : ""}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-base tracking-tight sm:text-lg">{service.title}</span>
                    <Icon className={`size-4 transition-transform ${selected ? "translate-x-0 text-accent-bright" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
                  </button>
                );
              })}
            </div>
          </MotionItem>

          <MotionItem className="relative">
            <div aria-hidden className="absolute -right-10 -top-10 size-56 border-[2rem] border-accent/15 rotate-12" />
            <AnimatePresence mode="wait">
              <motion.article
                key={`${locale}-${active.id}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.28 }}
                className="facet-card relative z-10 min-h-[38rem] p-7 text-primary sm:p-10 lg:p-12"
              >
                {activeImage && (
                  <div className="relative -mx-7 -mt-7 mb-9 h-64 overflow-hidden bg-primary sm:-mx-10 sm:-mt-10 lg:-mx-12 lg:-mt-12">
                    <Image
                      src={activeImage}
                      alt={active.title}
                      fill
                      sizes="(min-width: 1024px) 48vw, 100vw"
                      className="object-cover saturate-[0.85]"
                      priority={activeIndex === 0}
                    />
                    <div className="absolute inset-0 bg-primary/24 mix-blend-multiply" />
                    <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,18,45,0)_32%,rgba(5,18,45,0.68)_100%)]" />
                    <div className="absolute bottom-5 left-5 bg-white px-4 py-3 shadow-xl">
                      <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.18em] text-accent">
                        Servicio / {String(activeIndex + 1).padStart(2, "0")}
                      </p>
                      <p className="font-display mt-1 text-sm uppercase tracking-wide text-primary">{active.subtitle}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start justify-between gap-8">
                  <div className="icon-box size-14 bg-accent">
                    <ActiveIcon className="size-6" strokeWidth={1.7} />
                  </div>
                  <span className="font-display text-7xl leading-none text-primary/[0.06] sm:text-8xl">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-10 font-mono text-[0.62rem] font-bold uppercase tracking-[0.2em] text-accent">{active.subtitle}</p>
                <h3 className="font-display mt-3 max-w-[14ch] text-3xl leading-[1.02] sm:text-4xl">{active.title}</h3>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{active.description}</p>

                <div className="mt-9 grid gap-px bg-primary/15 sm:grid-cols-3">
                  {active.mainFeatures.map((feature) => (
                    <div key={feature} className="bg-card p-4">
                      <Check className="size-4 text-accent" />
                      <p className="mt-3 text-xs font-semibold leading-snug text-primary">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-9 grid gap-8 border-t border-primary/15 pt-8 sm:grid-cols-2">
                  {active.details.map((detail) => (
                    <div key={detail.title}>
                      <h4 className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.18em] text-accent">{detail.title}</h4>
                      <ul className="mt-4 space-y-2">
                        {detail.items.map((item) => (
                          <li key={item} className="border-l border-primary/20 pl-3 text-xs leading-relaxed text-muted-foreground">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-5 border-t border-primary/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">{active.importantNote}</p>
                  <a
                    href={getWhatsAppUrl(locale, t.whatsappServicePrefill(active.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary shrink-0"
                  >
                    Cotizar
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </motion.article>
            </AnimatePresence>
          </MotionItem>
        </div>
      </div>
    </MotionSection>
  );
}
