"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";

import { useLanguage } from "@/components/i18n/language-context";
import { MotionItem } from "@/components/landing/motion";
import { GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_DIRECTIONS_URL } from "@/lib/site";

export function ContactMapBand() {
  const { t } = useLanguage();
  const [pinOpen, setPinOpen] = useState(false);
  const pinWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pinOpen) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (pinWrapRef.current && !pinWrapRef.current.contains(e.target as Node)) {
        setPinOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPinOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [pinOpen]);

  return (
    <MotionItem className="mt-16 pb-(--section-py) sm:mt-20">
      <div className="mx-auto mb-8 max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <p className="eyebrow justify-center">{t.contact.mapKicker}</p>
        <h3 className="font-display mt-4 text-2xl tracking-tight text-foreground sm:text-3xl">
          {t.contact.mapTitle}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground">
          {t.contact.mapSubtitle}
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:max-w-none lg:px-0">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:rounded-none lg:border-x-0">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              title={t.contact.mapAriaLabel}
              aria-label={t.contact.mapAriaLabel}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="pointer-events-none absolute inset-0 h-full w-full border-0 grayscale-[15%] contrast-[1.02]"
            />

            {/* Interactive pin — anchored at map's visual center; hover (desktop) or tap (any) reveals address */}
            <div
              ref={pinWrapRef}
              className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-full"
            >
              <div className="group relative flex flex-col items-center">
                {/* Address tooltip (above pin) */}
                <div
                  role="tooltip"
                  className={`
                    absolute bottom-full left-1/2 mb-4 w-max max-w-[min(280px,72vw)] -translate-x-1/2
                    rounded-xl bg-foreground px-4 py-3 text-left text-white shadow-2xl ring-1 ring-white/10
                    transition-all duration-200 ease-out
                    ${pinOpen
                      ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none translate-y-1 scale-95 opacity-0"
                    }
                    group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100
                  `}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                    Grupo LP
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug">
                    {t.contact.officeAddress}
                  </p>
                  {/* Pointer triangle */}
                  <span
                    className="absolute left-1/2 top-full size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-foreground ring-1 ring-white/10"
                    aria-hidden
                  />
                </div>

                {/* Pin button */}
                <button
                  type="button"
                  onClick={() => setPinOpen((prev) => !prev)}
                  aria-label={t.contact.pinSrLabel}
                  aria-expanded={pinOpen}
                  className="relative flex flex-col items-center outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-full"
                >
                  <span
                    className="pointer-events-none absolute bottom-0 left-1/2 size-12 -translate-x-1/2 translate-y-1/2 animate-ping rounded-full bg-primary/40"
                    aria-hidden
                  />
                  <div className="relative flex size-12 items-center justify-center rounded-full bg-primary text-white shadow-2xl ring-[3px] ring-white transition-transform duration-300 hover:scale-110">
                    <MapPin className="size-5" strokeWidth={2.5} fill="currentColor" />
                  </div>
                  <span
                    className="-mt-1.5 size-3 rotate-45 bg-primary ring-[3px] ring-white"
                    aria-hidden
                  />
                </button>
              </div>
            </div>

            {/* Bottom gradient for CTA legibility */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/55 via-black/15 to-transparent"
              aria-hidden
            />
          </div>

          {/* Floating "Cómo llegar" CTA */}
          <a
            href={GOOGLE_MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8"
          >
            {t.contact.mapCta}
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </MotionItem>
  );
}
