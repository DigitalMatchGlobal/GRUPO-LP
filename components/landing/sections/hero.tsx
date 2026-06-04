"use client";

import { ArrowDownRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { FacetedGlobe } from "@/components/landing/visuals/faceted-globe";
import { useLanguage } from "@/components/i18n/language-context";
import { getWhatsAppUrl } from "@/lib/site";

export function HeroSection() {
  const { t, locale } = useLanguage();

  return (
    <section className="technical-grid-dark relative min-h-screen overflow-hidden bg-primary text-white">
      <div aria-hidden className="absolute inset-y-0 right-0 w-[44%] bg-accent [clip-path:polygon(42%_0,100%_0,100%_100%,0_100%)] opacity-10" />
      <div aria-hidden className="absolute -bottom-24 -left-24 size-72 border-[3rem] border-white/[0.035] rotate-45" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pb-16 pt-40 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-20 lg:pt-32">
        <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <p className="eyebrow eyebrow-light">{t.hero.eyebrow}</p>
          <h1 className="font-display mt-7 max-w-[11ch] text-[clamp(3.5rem,7vw,7.8rem)] leading-[0.86] text-white">
            {t.hero.title}{" "}
            <span className="mt-2 block text-accent-bright">{t.hero.titleHighlight}</span>
          </h1>

          <div className="mt-10 grid max-w-2xl gap-7 border-l border-white/20 pl-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-xl text-base leading-relaxed text-white/68 sm:text-lg">{t.hero.subtitle}</p>
            <span className="hidden font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/35 sm:block [writing-mode:vertical-rl]">
              UY · DNA · COMEX
            </span>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={getWhatsAppUrl(locale)} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {t.hero.ctaWhatsApp}
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a href="#servicios" className="btn-ghost border-white/35 text-white hover:bg-white hover:text-primary">
              {t.hero.ctaServices}
              <ArrowDownRight className="size-4" aria-hidden />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >
          <FacetedGlobe />
          <div className="absolute right-0 top-[12%] border-r-2 border-accent-bright pr-4 text-right">
            <p className="font-mono text-[0.56rem] uppercase tracking-[0.2em] text-white/45">Representación</p>
            <p className="font-display mt-1 text-sm uppercase tracking-wide text-white">Aduana Uruguay</p>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/12 bg-primary/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/45 sm:px-6 lg:px-8">
          <span>{t.hero.trustBadge}</span>
          <span className="hidden text-accent-bright sm:block">Lavoriero &amp; Perez SRL</span>
        </div>
      </div>
    </section>
  );
}
