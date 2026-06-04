"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "@/components/i18n/language-context";
import { MotionItem, MotionSection } from "@/components/landing/motion";
import { GOOGLE_MAPS_PROFILE_URL } from "@/lib/site";
import { stagger } from "@/components/landing/sections/animations";

export function ReviewsSection() {
  const { t, locale } = useLanguage();

  return (
    <MotionSection id="resenas" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-(--section-py) sm:px-6 lg:px-8">
        <MotionItem className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">{t.reviews.kicker}</p>
          <h2 className="font-display mt-5 text-3xl tracking-tight text-foreground sm:text-4xl">
            {t.reviews.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.reviews.subtitle}</p>
        </MotionItem>

        <motion.div
          className="mx-auto mt-12 grid max-w-2xl gap-5"
          variants={stagger.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {t.reviews.items.map((r, i) => {
            const rating = r.rating;
            return (
              <motion.div
                key={`${locale}-rev-${i}`}
                variants={stagger.item}
                className="card-elevated flex flex-col gap-0 overflow-hidden p-6"
              >
                {/* Quote mark */}
                <div className="review-quote-mark leading-none">&quot;</div>

                {/* Stars + badge */}
                <div className="mt-1 flex items-center justify-between gap-2">
                  <div
                    className="flex gap-0.5"
                    aria-label={t.reviews.starsAria(rating)}
                  >
                    {Array.from({ length: rating }).map((_, si) => (
                      <Star
                        key={si}
                        className="size-3.5 fill-amber-400 text-amber-400"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <span
                    className="rounded-full border border-border bg-muted/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {t.reviews.googleBadge}
                  </span>
                </div>

                {/* Quote text */}
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  {r.quote}
                </blockquote>

                {/* Author */}
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-sm font-semibold text-foreground">
                    {r.name}
                  </p>
                  {r.role ? (
                    <p className="text-xs text-muted-foreground">{r.role}</p>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <MotionItem className="mt-10 text-center">
          <a
            href={GOOGLE_MAPS_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            {t.reviews.viewMaps}
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </MotionItem>
      </div>
    </MotionSection>
  );
}
