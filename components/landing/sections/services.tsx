"use client";

import Image from "next/image";
import { useState, type ComponentType } from "react";
import {
  ArrowRight,
  Briefcase,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileCheck,
  Globe2,
  Package,
  Ship,
  type LucideProps,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { AnimatedBackdrop } from "@/components/landing/animated-backdrop";
import { MotionItem, MotionSection } from "@/components/landing/motion";
import { useLanguage } from "@/components/i18n/language-context";
import { getWhatsAppUrl } from "@/lib/site";
import type { Locale, ServiceCopy } from "@/lib/translations";

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

/* ─── Inner card content, shared between desktop panel and mobile accordion ── */
function ServiceDetail({
  service,
  index,
  locale,
  prefill,
  priority = false,
}: {
  service: ServiceCopy;
  index: number;
  locale: Locale;
  prefill: (serviceName: string) => string;
  priority?: boolean;
}) {
  const Icon = ICON_MAP[service.icon] || Package;
  const image = SERVICE_IMAGES[service.id];
  const num = String(index + 1).padStart(2, "0");

  return (
    <>
      {image && (
        <div className="relative -mx-5 -mt-5 mb-7 h-44 overflow-hidden bg-primary sm:-mx-8 sm:-mt-8 sm:mb-9 sm:h-64 lg:-mx-12 lg:-mt-12">
          <Image
            src={image}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover saturate-[0.85]"
            priority={priority}
          />
          <div className="absolute inset-0 bg-primary/24 mix-blend-multiply" />
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,18,45,0)_32%,rgba(5,18,45,0.68)_100%)]" />
          <div className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] bg-white px-3 py-2 shadow-xl sm:bottom-5 sm:left-5 sm:px-4 sm:py-3">
            <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.18em] text-accent">
              Servicio / {num}
            </p>
            <p className="font-display mt-1 text-[0.68rem] uppercase tracking-wide text-primary sm:text-sm">{service.subtitle}</p>
          </div>
        </div>
      )}

      <div className="flex items-start justify-between gap-5 sm:gap-8">
        <div className="icon-box size-11 bg-accent sm:size-14">
          <Icon className="size-5 sm:size-6" strokeWidth={1.7} />
        </div>
        <span className="font-display text-5xl leading-none text-primary/[0.06] sm:text-8xl">{num}</span>
      </div>
      <p className="mt-7 font-mono text-[0.58rem] font-bold uppercase tracking-[0.18em] text-accent sm:mt-10 sm:text-[0.62rem] sm:tracking-[0.2em]">{service.subtitle}</p>
      <h3 className="font-display mt-3 max-w-[15ch] text-2xl leading-[1.04] sm:max-w-[14ch] sm:text-4xl">{service.title}</h3>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">{service.description}</p>

      <div className="mt-7 grid gap-px bg-primary/15 sm:mt-9 sm:grid-cols-3">
        {service.mainFeatures.map((feature) => (
          <div key={feature} className="bg-card p-3 sm:p-4">
            <Check className="size-4 text-accent" />
            <p className="mt-3 text-xs font-semibold leading-snug text-primary">{feature}</p>
          </div>
        ))}
      </div>

      <div className="mt-7 grid gap-6 border-t border-primary/15 pt-7 sm:mt-9 sm:grid-cols-2 sm:gap-8 sm:pt-8">
        {service.details.map((detail) => (
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

      {service.importantNote && (
        <div className="mt-8 flex flex-col gap-5 border-t border-primary/15 pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-7">
          <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">{service.importantNote}</p>
          <a
            href={getWhatsAppUrl(locale, prefill(service.title))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0 max-sm:w-full"
          >
            Cotizar
            <ArrowRight className="size-4" />
          </a>
        </div>
      )}
    </>
  );
}

export function ServicesSection() {
  const { t, locale } = useLanguage();
  const items = t.services.items;
  const prefill = t.whatsappServicePrefill;

  // Desktop: tabs + panel (siempre hay uno activo).
  const [activeId, setActiveId] = useState(items[0].id);
  const activeIndex = Math.max(0, items.findIndex((item) => item.id === activeId));
  const active = items[activeIndex];

  // Mobile: acordeón (puede estar todo cerrado).
  const [openId, setOpenId] = useState<string | null>(items[0].id);

  const goTo = (index: number) => {
    const clamped = (index + items.length) % items.length;
    setActiveId(items[clamped].id);
  };

  const prevLabel = locale === "es" ? "Servicio anterior" : "Previous service";
  const nextLabel = locale === "es" ? "Servicio siguiente" : "Next service";

  return (
    <MotionSection id="servicios" className="relative scroll-mt-24 overflow-hidden bg-primary py-(--section-py) text-white">
      <AnimatedBackdrop variant="dark" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionItem className="max-w-2xl">
          <p className="eyebrow eyebrow-light">{t.services.kicker}</p>
          <h2 className="section-title mt-6 text-white">{t.services.title}</h2>
          <p className="mt-6 text-sm leading-relaxed text-white/60 sm:mt-7 sm:text-base">{t.services.subtitle}</p>
        </MotionItem>

        {/* ─── Desktop: lista de tabs + panel ─────────────────────────── */}
        <div className="mt-12 hidden gap-20 lg:grid lg:grid-cols-[0.74fr_1.26fr]">
          <MotionItem>
            <div className="border-t border-white/15">
              {items.map((service, index) => {
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
                    <span className="font-display text-lg tracking-tight">{service.title}</span>
                    <Icon className={`size-4 transition-transform ${selected ? "translate-x-0 text-accent-bright" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
                  </button>
                );
              })}
            </div>

            {/* Navegación secuencial + progreso */}
            <div className="mt-8 flex items-center gap-5">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goTo(activeIndex - 1)}
                  aria-label={prevLabel}
                  className="flex size-10 items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-accent-bright hover:text-white"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(activeIndex + 1)}
                  aria-label={nextLabel}
                  className="flex size-10 items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-accent-bright hover:text-white"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
              <span className="font-mono text-[0.7rem] tracking-[0.2em] text-white/45">
                <span className="text-accent-bright">{String(activeIndex + 1).padStart(2, "0")}</span> / {String(items.length).padStart(2, "0")}
              </span>
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
                className="facet-card relative z-10 min-h-[38rem] p-5 text-primary sm:p-8 lg:p-12"
              >
                <ServiceDetail
                  service={active}
                  index={activeIndex}
                  locale={locale}
                  prefill={prefill}
                  priority={activeIndex === 0}
                />
              </motion.article>
            </AnimatePresence>
          </MotionItem>
        </div>

        {/* ─── Mobile: acordeón ───────────────────────────────────────── */}
        <MotionItem className="mt-10 border-t border-white/15 lg:hidden">
          {items.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || Package;
            const open = service.id === openId;
            return (
              <div key={service.id} className="border-b border-white/15">
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : service.id)}
                  aria-expanded={open}
                  className={`grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 py-4 text-left transition-colors ${
                    open ? "text-white" : "text-white/55"
                  }`}
                >
                  <span className={`font-mono text-[0.6rem] tracking-[0.18em] ${open ? "text-accent-bright" : ""}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex items-center gap-2.5 font-display text-sm tracking-tight">
                    <Icon className={`size-4 shrink-0 ${open ? "text-accent-bright" : "text-white/45"}`} strokeWidth={1.8} />
                    {service.title}
                  </span>
                  <ChevronDown className={`size-4 shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-accent-bright" : "text-white/45"}`} />
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <article className="facet-card mb-6 mt-1 p-5 text-primary sm:p-8">
                        <ServiceDetail
                          service={service}
                          index={index}
                          locale={locale}
                          prefill={prefill}
                        />
                      </article>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </MotionItem>
      </div>
    </MotionSection>
  );
}
