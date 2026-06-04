"use client";

import { ArrowUpRight, Lock, Mail, MapPin, MessageCircle, Phone, Zap } from "lucide-react";

import { BrandLogo } from "@/components/brand/logo";
import { useLanguage } from "@/components/i18n/language-context";
import { CONTACT, getWhatsAppUrl, GOOGLE_MAPS_PROFILE_URL } from "@/lib/site";

export function Footer() {
  const { t, locale } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="technical-grid-dark relative overflow-hidden bg-primary px-4 pb-10 pt-20 text-white sm:px-6 lg:px-8">
      <div aria-hidden className="absolute -right-20 top-0 h-full w-[38%] bg-accent/10 [clip-path:polygon(32%_0,100%_0,100%_100%,0_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 border-b border-white/15 pb-16 lg:grid-cols-[1.3fr_0.7fr_0.8fr]">
          <div>
            <BrandLogo variant="light" />
            <p className="font-display mt-10 max-w-[15ch] text-3xl leading-[1.05] text-white sm:text-4xl">{t.footer.tagline}</p>
            <a href={getWhatsAppUrl(locale)} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
              <MessageCircle className="size-4" />
              {t.nav.whatsapp}
            </a>
          </div>

          <div>
            <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.2em] text-accent-bright">{t.nav.sections}</p>
            <nav className="mt-7 border-t border-white/15">
              {[
                ["#nosotros", t.nav.about],
                ["#servicios", t.nav.services],
                ["#proceso", t.nav.process],
                ["#paraquien", t.nav.forWhom],
                ["#contacto", t.nav.contact],
              ].map(([href, label], index) => (
                <a key={href} href={href} className="group flex items-center justify-between border-b border-white/15 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white/55 hover:text-white">
                  {label}
                  <span className="font-mono text-[0.52rem] text-accent-bright">{String(index + 1).padStart(2, "0")}</span>
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.2em] text-accent-bright">{t.nav.contact}</p>
            <ul className="mt-7 space-y-5 text-sm text-white/58">
              <li className="flex gap-3"><MapPin className="mt-1 size-4 shrink-0 text-accent-bright" /><a href={GOOGLE_MAPS_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">{CONTACT.address.line1}, {CONTACT.address.line2}</a></li>
              <li className="flex gap-3"><Phone className="mt-1 size-4 shrink-0 text-accent-bright" /><a href={CONTACT.phoneHref} className="hover:text-white">{CONTACT.phoneDisplay}</a></li>
              <li className="flex gap-3"><Mail className="mt-1 size-4 shrink-0 text-accent-bright" /><a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a></li>
            </ul>
            <p className="mt-8 font-mono text-[0.56rem] uppercase tracking-[0.16em] text-white/35">{t.footer.hoursLabel}</p>
            <p className="mt-2 text-xs text-white/55">{t.footer.hoursValue}</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-8 text-[0.62rem] text-white/38 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-5">
            <p>{t.footer.rights(year)}</p>
            <a href="/politica-de-privacidad" className="hover:text-white">{t.footer.privacyPolicy}</a>
            <a href="/terminos-y-condiciones" className="hover:text-white">{t.footer.terms}</a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.digitalmatchglobal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border border-white/10 px-3 py-2 text-white/42 hover:border-[#2563EB]/50 hover:text-white"
            >
              Made by <span className="font-bold text-[#6D5DFE]">DigitalMatchGlobal</span><Zap className="size-3" />
            </a>
            <a href="https://www.spacemail.com/login/" target="_blank" rel="noopener noreferrer" aria-label="Webmail Login" className="text-white/20 hover:text-white/60">
              <Lock className="size-4" />
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label={t.footer.backToTop}
              className="flex size-9 items-center justify-center bg-accent text-white hover:bg-accent-bright"
            >
              <ArrowUpRight className="size-4 -rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
