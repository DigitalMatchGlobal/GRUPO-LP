"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "@/components/i18n/language-context";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";
import { getWhatsAppUrl } from "@/lib/site";

const fadeEase = [0.22, 1, 0.36, 1] as const;

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  },
  item: {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: fadeEase } },
  },
};

const staggerReduced = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0, delayChildren: 0 } },
  },
  item: {
    hidden: { opacity: 1, y: 0 },
    show: { opacity: 1, y: 0, transition: { duration: 0 } },
  },
};

export function HeroSection() {
  const { t, locale } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();
  const variants = prefersReducedMotion ? staggerReduced : stagger;

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center border-b border-border/60">
      {/* Corporate navy background */}
      <div className="absolute inset-0 w-full h-full" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--navy-surface)_0%,var(--primary-navy)_50%,var(--navy-surface)_100%)]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:64px_64px]"
        />

        {/* Diagonal accent sheen (eco del pliegue origami del logo) */}
        <div className="absolute -right-32 -top-32 h-[60vh] w-[60vh] rotate-12 bg-[radial-gradient(circle,rgba(8,81,220,0.35)_0%,transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[50vh] w-[50vh] bg-[radial-gradient(circle,rgba(8,90,249,0.22)_0%,transparent_65%)] blur-3xl" />

        {/* Cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,18,45,0.6)_100%)]" />

        {/* Top fade (merge with header) */}
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/45 to-transparent" />
      </div>

      {/* Atmospheric glow behind headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-[15] h-[55vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(8,81,220,0.26)_0%,transparent_60%)] opacity-80 blur-3xl"
      />

      <div className="relative z-20 mx-auto w-full max-w-4xl px-4 pt-36 pb-24 sm:px-6 sm:py-24 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          variants={variants.container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Trust badge */}
          <motion.div variants={variants.item} className="mb-6 inline-flex">
            <span className="stat-chip text-white! bg-white/10! border-white/20! backdrop-blur-md">
              {t.hero.trustBadge}
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            variants={variants.item}
            className="eyebrow mb-5 text-white/90! drop-shadow-md justify-center"
          >
            {t.hero.eyebrow}
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={variants.item}
            className="font-display text-balance text-4xl tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.05] drop-shadow-xl"
          >
            {t.hero.title}{" "}
            <span
              className="block bg-gradient-to-br from-white via-[var(--accent-bright)] to-[var(--accent)] bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(8,81,220,0.45)]"
            >
              {t.hero.titleHighlight}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={variants.item}
            className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-white font-medium drop-shadow-md sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={variants.item}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <motion.a
              href={getWhatsAppUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm shadow-xl shadow-primary/20"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
              transition={prefersReducedMotion ? undefined : { type: "spring", stiffness: 400, damping: 20 }}
            >
              {!prefersReducedMotion && (
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-linear-to-r from-transparent via-white/25 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "500%" }}
                  transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut" }}
                />
              )}
              <span className="relative">{t.hero.ctaWhatsApp}</span>
              <ArrowRight className="relative size-4 ml-2" aria-hidden />
            </motion.a>

            <a
              href="#servicios"
              className="btn-ghost text-white! border-white/40! hover:bg-white/10! hover:text-white! text-sm backdrop-blur-sm"
            >
              {t.hero.ctaServices}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-black/60 via-black/30 to-background"
        aria-hidden
      />
    </section>
  );
}
