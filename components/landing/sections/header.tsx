"use client";

import Link from "next/link";

import { BrandLogo } from "@/components/brand/logo";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { useLanguage } from "@/components/i18n/language-context";
import { useScrollState } from "@/lib/hooks/use-scroll-state";
import { getWhatsAppUrl } from "@/lib/site";

export function Header() {
  const { t, locale } = useLanguage();
  const scrolled = useScrollState(24);
  const diagnosisLabel = locale === "es" ? "Diagnóstico" : "Diagnosis";
  const riskLabel = locale === "es" ? "Riesgos" : "Risk map";
  const fileLabel = locale === "es" ? "Expediente" : "File";
  const links = [
    ["#diagnostico", diagnosisLabel],
    ["#riesgos", riskLabel],
    ["#servicios", t.nav.services],
    ["#proceso", fileLabel],
    ["#contacto", t.nav.contact],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-primary/15 bg-background/95 shadow-[0_10px_30px_rgba(5,18,45,0.08)] backdrop-blur-xl"
          : "border-b border-white/12 bg-primary/35 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between gap-4 transition-all ${scrolled ? "py-2.5" : "py-4"}`}>
          <Link href="/" aria-label={t.logoAlt}>
            <BrandLogo variant={scrolled ? "dark" : "light"} />
          </Link>

          <nav
            aria-label={t.nav.primary}
            className={`hidden items-center gap-6 text-[0.68rem] font-bold uppercase tracking-[0.13em] lg:flex ${
              scrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            {links.map(([href, label], index) => (
              <a key={href} href={href} className="group flex items-center gap-2 transition-colors hover:text-accent">
                <span className="font-mono text-[0.55rem] text-accent">{String(index + 1).padStart(2, "0")}</span>
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher
              className={scrolled ? "" : "[&>button]:border-white/25 [&>button]:bg-white/10 [&>button]:text-white [&>button>svg]:text-white/70"}
            />
            <a
              href={getWhatsAppUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary max-sm:!hidden min-h-9 px-4 text-[0.62rem] sm:!inline-flex"
            >
              {t.nav.whatsapp}
            </a>
          </div>
        </div>

        <nav className="-mx-1 flex gap-5 overflow-x-auto pb-3 lg:hidden scrollbar-none" aria-label={t.nav.sections}>
          {links.map(([href, label], index) => (
            <a
              key={href}
              href={href}
              className={`shrink-0 text-[0.6rem] font-bold uppercase tracking-[0.13em] ${
                scrolled ? "text-muted-foreground" : "text-white/65"
              }`}
            >
              <span className="mr-1 font-mono text-accent">{String(index + 1).padStart(2, "0")}</span>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
