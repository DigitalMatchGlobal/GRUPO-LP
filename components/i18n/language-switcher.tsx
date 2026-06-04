"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/translations";
import { useLanguage } from "@/components/i18n/language-context";

const options: { value: Locale; label: string; full: string }[] = [
  { value: "es", label: "ES", full: "Español" },
  { value: "en", label: "EN", full: "English" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = options.find((o) => o.value === locale) || options[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: Locale) => {
    setLocale(value);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={cn("relative inline-block text-left", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 hover:bg-muted/80 px-3 py-1.5 text-sm font-medium text-foreground shadow-sm transition-all duration-200"
        aria-expanded={isOpen}
        aria-label={locale === "es" ? "Seleccionar idioma" : "Select language"}
      >
        <Globe className="size-4 text-muted-foreground" />
        <span className="font-semibold tracking-wide">{currentOption.label}</span>
        <ChevronDown 
          className={cn("size-3.5 text-muted-foreground transition-transform duration-300", isOpen && "rotate-180")} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-36 origin-top-right rounded-2xl border border-border/50 bg-background/95 backdrop-blur-xl p-1.5 shadow-xl shadow-primary/5 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          >
            <div className="flex flex-col gap-0.5">
              {options.map(({ value, label, full }) => {
                const active = locale === value;
                return (
                  <button
                    key={value}
                    onClick={() => handleSelect(value)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors",
                      active 
                        ? "bg-primary/10 text-primary font-semibold" 
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground font-medium"
                    )}
                  >
                    <span>{full}</span>
                    <span className="text-[10px] uppercase tracking-wider opacity-60">{label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
