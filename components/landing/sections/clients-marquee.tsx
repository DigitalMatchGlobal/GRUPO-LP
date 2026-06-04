"use client";

import Image from "next/image";

import { useLanguage } from "@/components/i18n/language-context";
import { MotionItem, MotionSection } from "@/components/landing/motion";
import {
  CLIENT_LOGOS,
  getMarqueeRepeatCount,
  type ClientLogo,
} from "@/lib/site";

type DenseItem = { logo: ClientLogo; isFirstOccurrence: boolean };

function buildDenseSet(logos: readonly ClientLogo[]): DenseItem[] {
  const repeat = getMarqueeRepeatCount(logos.length);
  const out: DenseItem[] = [];
  for (let r = 0; r < repeat; r++) {
    for (const logo of logos) {
      out.push({ logo, isFirstOccurrence: r === 0 });
    }
  }
  return out;
}

export function ClientsMarquee() {
  const { t } = useLanguage();
  const denseSet = buildDenseSet(CLIENT_LOGOS);

  return (
    <MotionSection
      aria-labelledby="clients-marquee-title"
      className="border-y border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <MotionItem className="text-center">
          <p className="eyebrow justify-center">{t.clients.kicker}</p>
          <h3
            id="clients-marquee-title"
            className="font-display mt-3 text-xl text-foreground sm:text-2xl"
          >
            {t.clients.title}
          </h3>
        </MotionItem>

        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <ul className="clients-marquee-track flex w-max items-center motion-reduce:!w-full motion-reduce:!animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
            {denseSet.map(({ logo, isFirstOccurrence }, i) => (
              <li
                key={`a-${i}`}
                className="flex h-12 shrink-0 items-center justify-center opacity-60 grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0 sm:h-16"
              >
                <Image
                  src={logo.src}
                  alt={isFirstOccurrence ? logo.name : ""}
                  aria-hidden={isFirstOccurrence ? undefined : true}
                  width={192}
                  height={64}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="h-full w-auto select-none"
                />
              </li>
            ))}
            {denseSet.map(({ logo }, i) => (
              <li
                key={`b-${i}`}
                aria-hidden="true"
                className="flex h-12 shrink-0 items-center justify-center opacity-60 grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0 motion-reduce:hidden sm:h-16"
              >
                <Image
                  src={logo.src}
                  alt=""
                  width={192}
                  height={64}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="h-full w-auto select-none"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .clients-marquee-track {
          --clients-marquee-gap: 3rem;
          gap: var(--clients-marquee-gap);
          animation: clients-marquee 40s linear infinite;
        }
        .clients-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (min-width: 640px) {
          .clients-marquee-track {
            --clients-marquee-gap: 4rem;
          }
        }
        @keyframes clients-marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(calc(-50% - var(--clients-marquee-gap) / 2), 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .clients-marquee-track {
            animation: none !important;
            transform: none !important;
            gap: 2.5rem;
          }
        }
      `}</style>
    </MotionSection>
  );
}
