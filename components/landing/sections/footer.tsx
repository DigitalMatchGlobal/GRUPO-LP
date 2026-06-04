"use client";

import {
  ArrowUp,
  Clock,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/i18n/language-context";
import { BrandLogo } from "@/components/brand/logo";
import { getWhatsAppUrl, GOOGLE_MAPS_PROFILE_URL, CONTACT, SOCIAL_LINKS } from "@/lib/site";

export function Footer() {
  const { t, locale } = useLanguage();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-[var(--navy-surface)] via-[var(--primary-navy)] to-[var(--primary-navy)] text-white pt-20 pb-24 md:pb-28 px-4 relative overflow-hidden">

      {/* Hairline superior con gradiente corporativo */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />

      {/* Glow primary top-right */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Glow accent bottom-left (eco teal corporativo) */}
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="mx-auto max-w-6xl relative z-10">

        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Columna 1: Marca y Descripción */}
          <div className="space-y-6 md:col-span-2">
            <BrandLogo variant="light" />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm font-body">
              {t.footer.tagline}
            </p>

            {/* Redes Sociales — se renderizan solo si hay perfiles confirmados (ver SOCIAL_LINKS) */}
            <div className="flex items-center space-x-3 pt-2 empty:hidden">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white text-white/70 transition-all duration-300"
                  aria-label={social.ariaLabel}
                >
                  {social.name === "Instagram" && (
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white mb-4">{t.nav.sections}</h3>
            <nav className="flex flex-col gap-3">
              {[
                ["#nosotros", t.nav.about],
                ["#servicios", t.nav.services],
                ["#resenas", t.nav.reviews],
                ["#contacto", t.nav.contact],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="text-white/65 hover:text-white text-sm transition-colors group flex items-center gap-2"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 rounded-full"></span>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Columna 3: Contacto Directo */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg mb-4">{t.nav.contact}</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <a
                  href={GOOGLE_MAPS_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.address.line1}<br />
                  {CONTACT.address.line2}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary shrink-0" aria-hidden="true" />
                <a href={CONTACT.phoneHref} className="hover:text-white transition-colors">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle size={18} className="text-primary shrink-0" aria-hidden="true" />
                <a
                  href={getWhatsAppUrl(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary shrink-0" aria-hidden="true" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  <span className="block text-primary/80 text-xs uppercase tracking-wider">
                    {t.footer.hoursLabel}
                  </span>
                  {t.footer.hoursValue}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-white/60 text-xs">
              {t.footer.rights(year)}
            </p>

            <nav
              aria-label="Legal"
              className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/50"
            >
              <a
                href="/politica-de-privacidad"
                className="transition-colors hover:text-white"
              >
                {t.footer.privacyPolicy}
              </a>
              <a
                href="/terminos-y-condiciones"
                className="transition-colors hover:text-white"
              >
                {t.footer.terms}
              </a>
            </nav>

            {/* --- FIRMA DIGITAL MATCH GLOBAL --- */}
            <a
              href="https://www.digitalmatchglobal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#2563EB]/50 transition-all duration-500 overflow-hidden"
            >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#2563EB]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <span className="text-[10px] text-white/40 uppercase tracking-wider font-medium group-hover:text-white/70 transition-colors">Made by</span>

                <span className="text-xs font-bold bg-linear-to-r from-[#2563EB] to-[#6D5DFE] bg-clip-text text-transparent transition-all duration-300 group-hover:brightness-125">
                    DigitalMatchGlobal
                </span>

                <Zap size={10} className="text-white/30 group-hover:text-[#6D5DFE] transition-all duration-300" />
            </a>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
              {/* Admin Login - Camuflado */}
              <a
                href="https://www.spacemail.com/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/0 hover:bg-white/5 text-white/20 hover:text-white/60 transition-all duration-300"
                aria-label="Webmail Login"
                title="Webmail"
              >
                <Lock size={15} strokeWidth={1.5} />
              </a>

              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="icon"
                aria-label={t.footer.backToTop}
                title={t.footer.backToTop}
                className="rounded-full bg-primary/10 border border-primary/20 text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
              >
                <ArrowUp size={18} aria-hidden="true" />
              </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
