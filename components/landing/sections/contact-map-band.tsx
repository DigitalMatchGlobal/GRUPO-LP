"use client";

import { ArrowUpRight, MapPin } from "lucide-react";

import { MotionItem } from "@/components/landing/motion";
import { useLanguage } from "@/components/i18n/language-context";
import { GOOGLE_MAPS_DIRECTIONS_URL, GOOGLE_MAPS_EMBED_URL } from "@/lib/site";

export function ContactMapBand() {
  const { t } = useLanguage();

  return (
    <MotionItem className="mt-14 border-t border-primary/15 sm:mt-20">
      <div className="relative min-h-[22rem] overflow-hidden bg-primary sm:min-h-[28rem]">
        <iframe
          src={GOOGLE_MAPS_EMBED_URL}
          title={t.contact.mapAriaLabel}
          aria-label={t.contact.mapAriaLabel}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0 grayscale contrast-[1.08] opacity-60"
        />
        <div className="pointer-events-none absolute inset-0 bg-primary/45 mix-blend-multiply" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[70%] bg-primary/90 [clip-path:polygon(0_0,72%_0,100%_100%,0_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[22rem] max-w-7xl items-center px-4 py-12 sm:min-h-[28rem] sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-lg text-white">
            <p className="eyebrow eyebrow-light">{t.contact.mapKicker}</p>
            <h3 className="font-display mt-5 text-3xl leading-[1.02] sm:mt-6 sm:text-5xl">{t.contact.mapTitle}</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 sm:mt-5">{t.contact.mapSubtitle}</p>
            <p className="mt-6 flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/70 sm:mt-8">
              <MapPin className="size-4 text-accent-bright" />
              {t.contact.officeAddress}
            </p>
            <a href={GOOGLE_MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 max-sm:w-full sm:mt-8">
              {t.contact.mapCta}
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </MotionItem>
  );
}
