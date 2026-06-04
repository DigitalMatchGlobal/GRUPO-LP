"use client";

import { ArrowDownRight, Check } from "lucide-react";

import { MotionItem, MotionSection } from "@/components/landing/motion";
import { useLanguage } from "@/components/i18n/language-context";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <MotionSection id="nosotros" className="technical-grid relative scroll-mt-24 overflow-hidden py-(--section-py)">
      <div aria-hidden className="absolute -right-20 top-0 h-full w-[36%] bg-primary/[0.025] [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-8">
        <MotionItem>
          <p className="eyebrow">{t.about.kicker}</p>
          <p className="mt-8 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">Estudio aduanero · Montevideo</p>
          <div className="mt-10 grid grid-cols-2 border-l border-t border-primary/20">
            {[
              [t.about.statValue, t.about.statLabel],
              [t.about.statValue2, t.about.statLabel2],
            ].map(([value, label]) => (
              <div key={label} className="border-b border-r border-primary/20 p-6">
                <p className="font-display text-5xl text-accent sm:text-6xl">{value}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </MotionItem>

        <MotionItem>
          <h2 className="section-title">{t.about.title}</h2>
          <div className="section-kicker-line" />
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t.about.lineBeforeHighlight}
            <span className="font-semibold text-primary">{t.about.highlight}</span>
            {t.about.lineAfterHighlight}
          </p>
          <ul className="mt-10 grid gap-px bg-primary/15 sm:grid-cols-2">
            {[t.about.bullet1, t.about.bullet2].map((item) => (
              <li key={item} className="group relative bg-background p-6">
                <span className="flex size-9 items-center justify-center bg-primary text-white [clip-path:polygon(0_0,100%_0,100%_72%,72%_100%,0_100%)]">
                  <Check className="size-4" aria-hidden />
                </span>
                <p className="mt-6 text-sm font-medium leading-relaxed text-foreground">{item}</p>
                <ArrowDownRight className="absolute bottom-5 right-5 size-4 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </li>
            ))}
          </ul>
        </MotionItem>
      </div>
    </MotionSection>
  );
}
