"use client";

import { Counter } from "@/components/landing/sections/counter";
import { MotionItem, MotionSection } from "@/components/landing/motion";
import { useLanguage } from "@/components/i18n/language-context";

export function TrustSection() {
  const { t } = useLanguage();

  return (
    <MotionSection id="confianza" className="border-b border-primary/15 bg-card">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.9fr_1.1fr]">
        <MotionItem className="bg-accent px-4 py-16 text-white sm:px-8 lg:px-12 lg:py-20 [clip-path:polygon(0_0,100%_0,calc(100%-3rem)_100%,0_100%)]">
          <p className="eyebrow eyebrow-light">{t.trust.kicker}</p>
          <h2 className="font-display mt-6 max-w-[12ch] text-3xl leading-[1.02] sm:text-4xl">{t.trust.title}</h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/72">{t.trust.subtitle}</p>
        </MotionItem>

        <div className="grid grid-cols-2 lg:grid-cols-4">
          {t.trust.stats.map((stat, index) => (
            <MotionItem
              key={stat.label}
              className="group relative flex min-h-44 flex-col justify-between border-b border-r border-primary/15 p-5 sm:p-7 lg:min-h-full"
            >
              <span className="font-mono text-[0.58rem] tracking-[0.2em] text-muted-foreground">
                /{String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <Counter target={stat.target} suffix={stat.suffix} />
                <p className="mt-3 max-w-[11rem] text-xs font-medium leading-snug text-muted-foreground">{stat.label}</p>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition-transform group-hover:scale-x-100" />
            </MotionItem>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
