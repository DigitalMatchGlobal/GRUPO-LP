"use client";

import { useState } from "react";
import { ArrowRight, Rocket, Ship, ShoppingCart } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { MotionItem, MotionSection } from "@/components/landing/motion";
import { useLanguage } from "@/components/i18n/language-context";

const icons = [Ship, ShoppingCart, Rocket];

export function ForWhomSection() {
  const { t, locale } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const ActiveIcon = icons[activeTab];

  return (
    <MotionSection id="paraquien" className="scroll-mt-24 border-y border-primary/15 bg-card py-(--section-py)">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          <MotionItem>
            <p className="eyebrow">{t.forWhom.kickerTarget}</p>
            <h2 className="section-title mt-6">{t.forWhom.targetTitle}</h2>

            <div className="mt-12 border-t border-primary/20">
              {t.forWhom.targetItems.map((item, index) => {
                const Icon = icons[index];
                const selected = activeTab === index;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveTab(index)}
                    aria-pressed={selected}
                    className={`grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-primary/20 py-5 text-left transition-colors ${
                      selected ? "text-accent" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <span className={`flex size-10 items-center justify-center ${selected ? "bg-accent text-white" : "bg-muted text-primary"}`}>
                      <Icon className="size-4" />
                    </span>
                    <span className="font-display text-base tracking-tight sm:text-lg">{item.title.replace(".", "")}</span>
                    <ArrowRight className={`size-4 transition-transform ${selected ? "translate-x-0" : "-translate-x-3 opacity-0"}`} />
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${locale}-${activeTab}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mt-8 border-l-2 border-accent pl-6"
              >
                <ActiveIcon className="size-6 text-accent" />
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {t.forWhom.targetItems[activeTab].description}
                </p>
                <a href="#contacto" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-primary hover:text-accent">
                  {t.contact.formTitle}
                  <ArrowRight className="size-3.5" />
                </a>
              </motion.div>
            </AnimatePresence>
          </MotionItem>

          <MotionItem className="facet-dark technical-grid-dark p-8 sm:p-10 lg:p-12">
            <p className="eyebrow eyebrow-light">{t.forWhom.kickerDiff}</p>
            <h2 className="font-display mt-6 max-w-[12ch] text-3xl leading-[1.02] text-white sm:text-4xl">{t.forWhom.diffTitle}</h2>
            <div className="mt-12">
              {t.forWhom.diffItems.map((item, index) => (
                <div key={item.title} className="grid grid-cols-[auto_1fr] gap-5 border-t border-white/15 py-7">
                  <span className="font-mono text-xs font-bold tracking-[0.18em] text-accent-bright">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-lg tracking-tight text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contacto" className="btn-primary mt-6">
              {t.contact.ctaDiff}
              <ArrowRight className="size-4" />
            </a>
          </MotionItem>
        </div>
      </div>
    </MotionSection>
  );
}
