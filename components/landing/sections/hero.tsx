"use client";

import { useEffect, useRef } from "react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "@/components/i18n/language-context";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";
import { getWhatsAppUrl } from "@/lib/site";

export function HeroSection() {
  const { t, locale } = useLanguage();

  return (
    <section className="technical-grid-dark relative min-h-screen overflow-hidden bg-primary text-white">
      <div aria-hidden className="absolute inset-y-0 right-0 w-[44%] bg-accent [clip-path:polygon(42%_0,100%_0,100%_100%,0_100%)] opacity-10" />
      <div aria-hidden className="absolute -bottom-24 -left-24 size-72 border-[3rem] border-white/[0.035] rotate-45" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-9 px-4 pb-20 pt-32 sm:gap-12 sm:px-6 sm:pt-40 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-20 lg:pt-32">
        <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <p className="eyebrow eyebrow-light">{t.hero.eyebrow}</p>
          <h1 className="font-display mt-6 max-w-[12ch] text-[clamp(3rem,13vw,7.8rem)] leading-[0.9] text-white sm:mt-7 sm:max-w-[11ch] sm:leading-[0.86]">
            {t.hero.title}{" "}
            <span className="mt-2 block text-accent-bright">{t.hero.titleHighlight}</span>
          </h1>

          <div className="mt-7 grid max-w-2xl gap-6 border-l border-white/20 pl-4 sm:mt-10 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-7 sm:pl-6">
            <p className="max-w-xl text-sm leading-relaxed text-white/68 sm:text-lg">{t.hero.subtitle}</p>
            <span className="hidden font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/35 sm:block [writing-mode:vertical-rl]">
              UY · DNA · COMEX
            </span>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a href={getWhatsAppUrl(locale)} target="_blank" rel="noopener noreferrer" className="btn-primary max-sm:w-full">
              {t.hero.ctaWhatsApp}
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a href="#servicios" className="btn-ghost border-white/35 text-white hover:bg-white hover:text-primary max-sm:w-full">
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
          <HeroVideoPanel />
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

function HeroVideoPanel() {
  const reduced = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (reduced) return;
    videoRef.current?.play().catch(() => undefined);
  }, [reduced]);

  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-[36rem] overflow-hidden border border-white/14 bg-primary shadow-2xl max-sm:max-w-[22rem]">
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover opacity-78 saturate-[0.9]"
        poster="/landing/hero-customs-poster.png"
        autoPlay={!reduced}
        muted
        loop
        playsInline
        preload="metadata"
        onCanPlay={(event) => {
          if (!reduced) event.currentTarget.play().catch(() => undefined);
        }}
        aria-hidden
      >
        <source src="/landing/hero-customs-loop.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-primary/28 mix-blend-multiply" />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,18,45,0.72)_0%,rgba(5,18,45,0.08)_46%,rgba(8,81,220,0.18)_100%)]" />
      <div aria-hidden className="absolute -right-16 -top-16 hidden size-56 border-[2.4rem] border-accent-bright/20 rotate-12 sm:block" />
      <div aria-hidden className="absolute bottom-0 left-0 h-20 w-2/3 bg-accent/24 [clip-path:polygon(0_44%,72%_0,100%_100%,0_100%)] sm:h-28" />

      <div className="absolute left-3 top-3 border-l-2 border-accent-bright bg-primary/70 px-3 py-2 backdrop-blur sm:left-5 sm:top-5 sm:px-4 sm:py-3">
        <p className="font-mono text-[0.56rem] uppercase tracking-[0.2em] text-white/55">Expediente</p>
        <p className="font-display mt-1 text-sm uppercase tracking-wide text-white">Aduana Uruguay</p>
      </div>

      <div className="absolute bottom-3 right-3 max-w-42 bg-white px-3 py-2 text-primary shadow-xl sm:bottom-5 sm:right-5 sm:max-w-48 sm:px-4 sm:py-3">
        <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.18em] text-accent">Control previo</p>
        <p className="mt-1 text-[0.68rem] leading-snug text-muted-foreground sm:text-xs">Clasificación, documentación y liberación.</p>
      </div>
    </div>
  );
}
