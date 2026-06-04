"use client";

import Link from "next/link";

import { useLanguage } from "@/components/i18n/language-context";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { BrandLogo } from "@/components/brand/logo";
import { useScrollState } from "@/lib/hooks/use-scroll-state";
import { getWhatsAppUrl } from "@/lib/site";

export function Header() {
  const { t, locale } = useLanguage();
  const scrolled = useScrollState(16);

  return (
    <header
      className={
        scrolled
          ? "fixed inset-x-0 top-0 z-40 border-b border-primary/15 bg-background/95 backdrop-blur-xl shadow-[0_8px_24px_-4px_rgba(15,23,42,0.10),0_4px_8px_-2px_rgba(15,23,42,0.04)] transition-[background-color,backdrop-filter,border-color,box-shadow] duration-200 ease-out"
          : "fixed inset-x-0 top-0 z-40 border-b border-transparent bg-black/10 backdrop-blur-sm transition-[background-color,backdrop-filter,border-color,box-shadow] duration-200 ease-out"
      }
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={
            scrolled
              ? "flex items-center justify-between gap-4 py-2 transition-[padding] duration-200 ease-out"
              : "flex items-center justify-between gap-4 py-3.5 transition-[padding] duration-200 ease-out"
          }
        >
          <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={t.logoAlt}>
            <BrandLogo variant={scrolled ? "dark" : "light"} />
          </Link>

          <div className="flex flex-1 items-center justify-end gap-3 md:gap-5">
            <nav
              className={
                scrolled
                  ? "hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex"
                  : "hidden items-center gap-7 text-sm font-medium text-white/85 drop-shadow-sm md:flex"
              }
              aria-label={t.nav.primary}
            >
              {[
                ["#nosotros", t.nav.about],
                ["#servicios", t.nav.services],
                ["#proceso", t.nav.process],
                ["#paraquien", t.nav.forWhom],
                ["#resenas", t.nav.reviews],
                ["#contacto", t.nav.contact],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className={
                    scrolled
                      ? "relative transition-colors hover:text-foreground after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
                      : "relative transition-colors hover:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full"
                  }
                >
                  {label}
                </a>
              ))}
            </nav>

            <LanguageSwitcher
              className={
                scrolled
                  ? "shrink-0"
                  : "shrink-0 [&>button]:border-white/25 [&>button]:bg-white/10 [&>button]:text-white [&>button]:shadow-none [&>button>svg]:text-white/80 [&>button:hover]:bg-white/20"
              }
            />

            <a
              href={getWhatsAppUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden shrink-0 text-xs sm:inline-flex"
              style={{ padding: "0.5rem 1.125rem" }}
            >
              {t.nav.whatsapp}
            </a>
          </div>
        </div>

        {/* Mobile nav pills */}
        <nav
          className="-mx-1 flex gap-1.5 overflow-x-auto pb-3 md:hidden scrollbar-none"
          aria-label={t.nav.sections}
        >
          {[
            ["#nosotros", t.nav.about],
            ["#servicios", t.nav.services],
            ["#proceso", t.nav.process],
            ["#paraquien", t.nav.forWhom],
            ["#resenas", t.nav.reviews],
            ["#contacto", t.nav.contact],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className={
                scrolled
                  ? "shrink-0 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:bg-muted hover:text-foreground"
                  : "shrink-0 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/20 hover:text-white"
              }
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
