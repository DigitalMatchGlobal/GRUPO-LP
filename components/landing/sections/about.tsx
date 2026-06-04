"use client";

import { CheckCircle2 } from "lucide-react";

import { useLanguage } from "@/components/i18n/language-context";
import { MotionItem, MotionSection } from "@/components/landing/motion";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <MotionSection
      id="nosotros"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-(--section-py) sm:px-6 lg:px-8"
    >
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Left: copy */}
        <MotionItem>
          <p className="eyebrow">{t.about.kicker}</p>
          <h2 className="font-display mt-5 text-3xl tracking-tight text-foreground sm:text-4xl">
            {t.about.title}
          </h2>
          <div className="section-divider" />
          <p className="mt-7 max-w-prose text-pretty leading-relaxed text-muted-foreground">
            {t.about.lineBeforeHighlight}
            <span className="font-semibold text-foreground">
              {t.about.highlight}
            </span>
            {t.about.lineAfterHighlight}
          </p>
          <ul className="mt-8 space-y-4">
            {[t.about.bullet1, t.about.bullet2].map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden
                />
                {b}
              </li>
            ))}
          </ul>
        </MotionItem>

        {/* Right: stat card */}
        <MotionItem>
          <div
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 shadow-sm"
            style={{
              background:
                "linear-gradient(135deg, rgba(22, 50, 79,0.04) 0%, rgba(255,255,255,1) 50%, rgba(47, 143, 131,0.04) 100%)",
            }}
          >
            {/* Decorative arc */}
            <div
              className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full opacity-10"
              aria-hidden
              style={{
                background:
                  "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
              }}
            />
            <div
              className="pointer-events-none absolute -bottom-8 -left-8 size-36 rounded-full opacity-8"
              aria-hidden
              style={{
                background:
                  "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
              }}
            />

            <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
              <div className="text-center sm:text-left">
                <p
                  className="font-display text-7xl font-bold tabular-nums text-gradient sm:text-8xl"
                  aria-label={t.about.statValue + " " + t.about.statLabel}
                >
                  {t.about.statValue}
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {t.about.statLabel}
                </p>
              </div>
              <div className="h-px w-full bg-border sm:h-16 sm:w-px" aria-hidden />
              <div className="text-center sm:text-left">
                <p className="font-display text-5xl font-bold text-foreground sm:text-6xl">
                  {t.about.statValue2}
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {t.about.statLabel2}
                </p>
              </div>
            </div>
          </div>
        </MotionItem>
      </div>
    </MotionSection>
  );
}
