"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { useLanguage } from "@/components/i18n/language-context";
import { MotionItem, MotionSection } from "@/components/landing/motion";
import { LogisticsRoutesBackground } from "@/components/landing/visuals/logistics-routes-background";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";

const PROCESS_IMAGES = [
  "/proceso 1.png",
  "/proceso 2.png",
  "/proceso 3.png",
  "/proceso 4.png",
] as const;

export function ProcessSection() {
  const { t } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();
  const items = t.process.items;

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <MotionSection
      id="proceso"
      className="relative overflow-hidden border-b border-border/50 bg-background py-24 lg:py-32"
    >
      <LogisticsRoutesBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionItem className="mb-20 max-w-3xl lg:mb-28">
          <span className="eyebrow mb-4">{t.process.kicker}</span>
          <h2 className="mb-6 font-display text-3xl tracking-tight text-foreground md:text-5xl">
            {t.process.title}
          </h2>
          <p className="max-w-2xl text-lg text-foreground/80 sm:text-xl">
            {t.process.subtitle}
          </p>
        </MotionItem>

        <ol className="space-y-24 lg:space-y-36">
          {items.map((item, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <li
                key={i}
                className="grid items-center gap-10 lg:grid-cols-5 lg:gap-14 xl:gap-20"
              >
                {/* Image — smaller, tonal, breathing */}
                <motion.figure
                  className={`relative mx-auto w-4/5 sm:w-3/5 lg:col-span-2 lg:mx-0 lg:w-auto ${
                    imageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                  initial={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : 24,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { duration: 1, ease }
                  }
                >
                  <div className="relative aspect-[1672/941] overflow-hidden rounded-2xl bg-card">
                    <motion.div
                      className="relative h-full w-full"
                      initial={{
                        filter: prefersReducedMotion
                          ? "saturate(1) contrast(1)"
                          : "saturate(0.55) contrast(0.95)",
                      }}
                      whileInView={{
                        filter: "saturate(1) contrast(1)",
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { duration: 1.6, ease, delay: 0.25 }
                      }
                    >
                      <Image
                        src={PROCESS_IMAGES[i]}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 38vw, (min-width: 640px) 60vw, 80vw"
                        className="object-cover"
                      />
                    </motion.div>
                    {/* Whisper-thin inner hairline — barely there */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/[0.04]"
                    />
                  </div>
                </motion.figure>

                {/* Narrative — text dominates, no decoration */}
                <motion.div
                  className={`lg:col-span-3 ${
                    imageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                  initial={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : 24,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { duration: 1, ease, delay: 0.1 }
                  }
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display text-sm font-semibold tracking-[0.24em] text-primary">
                      {item.step}
                    </span>
                    <span
                      aria-hidden
                      className="block h-px w-12 bg-primary/60 sm:w-16"
                    />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-medium leading-snug text-foreground sm:text-3xl xl:text-[34px]">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/70 lg:text-lg">
                    {item.description}
                  </p>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Bottom atmospheric fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent to-background"
      />
    </MotionSection>
  );
}
