"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Rocket, Ship, ShoppingCart } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { useLanguage } from "@/components/i18n/language-context";
import { MotionItem, MotionSection } from "@/components/landing/motion";

export function ForWhomSection() {
  const { t, locale } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const tabIcons = [Ship, ShoppingCart, Rocket];
  const tabAccents = [
    "from-primary to-accent",
    "from-accent to-accent-bright",
    "from-primary to-accent-bright",
  ];

  // Reset tab when locale changes
  useEffect(() => {
    setActiveTab(0);
  }, [locale]);

  return (
    <MotionSection id="paraquien" className="py-24 bg-card border-b border-border/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

          {/* Left: Interactive Tabs */}
          <div className="flex flex-col justify-center space-y-8 py-8">
            <MotionItem>
              <span className="eyebrow mb-4">{t.forWhom.kickerTarget}</span>
              <h2 className="text-3xl md:text-4xl font-display tracking-tight text-foreground max-w-lg">
                {t.forWhom.targetTitle}
              </h2>
            </MotionItem>

            {/* Tab Buttons */}
            <MotionItem>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                {t.forWhom.targetItems.map((item, i) => {
                  const Icon = tabIcons[i];
                  const isActive = activeTab === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveTab(i)}
                      className={`
                        group relative flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer w-full sm:w-auto
                        ${isActive
                          ? "bg-primary text-white shadow-lg shadow-primary/25"
                          : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/60"
                        }
                      `}
                    >
                      <Icon className={`size-4 shrink-0 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
                      <span>{item.title.replace(".", "")}</span>
                    </button>
                  );
                })}
              </div>
            </MotionItem>

            {/* Tab Content with Animation */}
            <div className="relative min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${locale}-${activeTab}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="space-y-6"
                >
                  {/* Large icon + content card */}
                  <div className="rounded-2xl border border-border/60 bg-background p-6 sm:p-8 shadow-sm">
                    <div className="flex items-start gap-5">
                      <div className={`shrink-0 rounded-xl bg-linear-to-br ${tabAccents[activeTab]} p-4 text-white shadow-lg`}>
                        {(() => {
                          const Icon = tabIcons[activeTab];
                          return <Icon className="size-7" strokeWidth={1.8} />;
                        })()}
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-foreground">
                          {t.forWhom.targetItems[activeTab].title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed text-[15px]">
                          {t.forWhom.targetItems[activeTab].description}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 pt-5 border-t border-border/50">
                      <a
                        href="#contacto"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/cta"
                      >
                        {t.contact.formTitle}
                        <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
                      </a>
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <div className="flex gap-2">
                    {t.forWhom.targetItems.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTab(i)}
                        className="group/dot flex-1 cursor-pointer"
                        aria-label={`Tab ${i + 1}`}
                      >
                        <div className="h-1 rounded-full overflow-hidden bg-border">
                          <motion.div
                            className="h-full rounded-full bg-primary"
                            initial={{ width: "0%" }}
                            animate={{ width: activeTab === i ? "100%" : "0%" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Differentials with scroll-reveal stagger */}
          <div className="dark-feature flex flex-col justify-center relative overflow-hidden">
            {/* abstract glow effects */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/25 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/30 rounded-full blur-[100px]" />

            <div className="relative z-10">
              {/* Kicker badge - improved contrast */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4 }}
                className="inline-flex rounded-full border border-accent/40 bg-accent/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent mb-7"
              >
                {t.forWhom.kickerDiff}
              </motion.span>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl font-display font-medium text-white mb-12 tracking-tight leading-tight"
              >
                {t.forWhom.diffTitle}
              </motion.h2>

              {/* Staggered differential items */}
              <div className="space-y-8">
                {t.forWhom.diffItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                    whileHover={{ x: 6 }}
                    className="group/diff flex gap-5 items-start cursor-default"
                  >
                    {/* Numbered accent circle */}
                    <div className="shrink-0 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm font-bold text-accent transition-all duration-300 group-hover/diff:bg-accent/20 group-hover/diff:border-accent/40 group-hover/diff:scale-110">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-1.5 transition-colors duration-300 group-hover/diff:text-accent">
                        {item.title}
                      </h4>
                      <p className="text-white/65 leading-relaxed text-[15px] transition-colors duration-300 group-hover/diff:text-white/85">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Persuasive CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-12 pt-8 border-t border-white/10"
              >
                <p className="text-white/50 text-sm mb-5 italic">
                  {t.hero.trustBadge}
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 hover:scale-[1.03] active:scale-[0.98]"
                >
                  {t.contact.ctaDiff}
                  <ArrowRight className="size-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
