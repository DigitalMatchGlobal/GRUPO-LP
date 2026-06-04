"use client";

import { useLanguage } from "@/components/i18n/language-context";
import { MotionSection } from "@/components/landing/motion";
import { Counter } from "@/components/landing/sections/counter";

export function TrustSection() {
  const { t } = useLanguage();
  return (
    <MotionSection id="confianza" className="py-24 bg-card border-b border-border/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="eyebrow mb-4 justify-center">{t.trust.kicker}</span>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight text-foreground mb-4">
            {t.trust.title}
          </h2>
          <p className="text-muted-foreground text-lg">{t.trust.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {t.trust.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-6 rounded-2xl border border-border/60 bg-background/50 hover:bg-muted/30 transition-colors shadow-sm relative overflow-hidden group">
              <Counter target={stat.target} suffix={stat.suffix} />
              <span className="text-sm text-muted-foreground max-w-[140px] leading-snug">{stat.label}</span>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
