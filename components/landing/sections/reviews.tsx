"use client";

import { ArrowUpRight, Star } from "lucide-react";

import { MotionItem, MotionSection } from "@/components/landing/motion";
import { useLanguage } from "@/components/i18n/language-context";
import { GOOGLE_MAPS_PROFILE_URL } from "@/lib/site";

export function ReviewsSection() {
  const { t } = useLanguage();

  return (
    <MotionSection id="resenas" className="technical-grid scroll-mt-24 py-(--section-py)">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionItem className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="eyebrow">{t.reviews.kicker}</p>
            <h2 className="section-title mt-6">{t.reviews.title}</h2>
          </div>
          <div className="border-l border-accent pl-6">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{t.reviews.subtitle}</p>
            <a
              href={GOOGLE_MAPS_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary hover:text-accent"
            >
              {t.reviews.viewMaps}
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </MotionItem>

        <div className="mt-14 grid gap-px bg-primary/15 lg:grid-cols-2">
          {t.reviews.items.map((review, index) => (
            <MotionItem key={review.quote} className="relative bg-card p-7 sm:p-10">
              <div className="flex items-start justify-between gap-6">
                <span className="review-quote-mark">&quot;</span>
                <span className="font-mono text-[0.58rem] tracking-[0.2em] text-muted-foreground">
                  TESTIMONIO / {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <blockquote className="mt-8 max-w-xl font-display text-xl leading-snug tracking-tight text-primary sm:text-2xl">
                {review.quote}
              </blockquote>
              <div className="mt-10 flex flex-wrap items-end justify-between gap-5 border-t border-primary/15 pt-5">
                <div>
                  <p className="text-sm font-bold text-primary">{review.name}</p>
                  {review.role && <p className="mt-1 text-xs text-muted-foreground">{review.role}</p>}
                </div>
                <div className="flex gap-1" aria-label={t.reviews.starsAria(review.rating)}>
                  {Array.from({ length: review.rating }).map((_, star) => (
                    <Star key={star} className="size-3.5 fill-accent text-accent" aria-hidden />
                  ))}
                </div>
              </div>
            </MotionItem>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
