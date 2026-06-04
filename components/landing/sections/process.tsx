"use client";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

import { MotionItem, MotionSection } from "@/components/landing/motion";
import { useLanguage } from "@/components/i18n/language-context";

const PROCESS_IMAGES = ["/proceso 1.png", "/proceso 2.png", "/proceso 3.png", "/proceso 4.png"] as const;

export function ProcessSection() {
  const { t } = useLanguage();

  return (
    <MotionSection id="proceso" className="technical-grid scroll-mt-24 py-(--section-py)">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionItem className="grid gap-8 border-b border-primary/20 pb-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="eyebrow">{t.process.kicker}</p>
            <h2 className="section-title mt-6">{t.process.title}</h2>
          </div>
          <p className="max-w-xl border-l border-accent pl-6 text-base leading-relaxed text-muted-foreground">{t.process.subtitle}</p>
        </MotionItem>

        <ol className="mt-16 space-y-6">
          {t.process.items.map((item, index) => (
            <motion.li
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="group grid overflow-hidden border border-primary/15 bg-card lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className={`relative min-h-64 overflow-hidden ${index % 2 ? "lg:order-2" : ""}`}>
                <Image
                  src={PROCESS_IMAGES[index]}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover saturate-[0.72] transition duration-700 group-hover:scale-[1.025] group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-primary/12 mix-blend-multiply" />
                <span className="absolute left-0 top-0 bg-accent px-5 py-3 font-mono text-xs font-bold tracking-[0.2em] text-white">
                  {item.step}
                </span>
              </div>
              <div className={`relative flex min-h-64 flex-col justify-center p-7 sm:p-10 lg:p-14 ${index % 2 ? "lg:order-1" : ""}`}>
                <ArrowDownRight className="absolute right-7 top-7 size-5 text-accent" />
                <h3 className="font-display max-w-[18ch] text-2xl leading-tight sm:text-3xl">{item.title}</h3>
                <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">{item.description}</p>
                <div className="mt-8 h-px w-16 bg-accent transition-all duration-500 group-hover:w-32" />
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </MotionSection>
  );
}
