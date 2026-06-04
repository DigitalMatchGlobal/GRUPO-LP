"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactLenis } from "lenis/react";

import { WhatsAppFab } from "@/components/landing/whatsapp-fab";
import { LanguageProvider, useLanguage } from "@/components/i18n/language-context";
import { Header } from "@/components/landing/sections/header";
import { HeroSection } from "@/components/landing/sections/hero";
import { TrustSection } from "@/components/landing/sections/trust";
import { AboutSection } from "@/components/landing/sections/about";
import { ServicesSection } from "@/components/landing/sections/services";
import { ProcessSection } from "@/components/landing/sections/process";
import { ForWhomSection } from "@/components/landing/sections/for-whom";
import { ReviewsSection } from "@/components/landing/sections/reviews";
import { ContactSection } from "@/components/landing/sections/contact";
import { Footer } from "@/components/landing/sections/footer";
import { fadeEase } from "@/components/landing/sections/animations";

/* ─── Body ────────────────────────────────────────────────────────── */
function LandingBody() {
  const { locale } = useLanguage();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={locale}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: fadeEase }}
        className="flex min-h-0 w-full flex-col"
      >
        <main>
          <HeroSection />
          <TrustSection />
          <AboutSection />
          <ServicesSection />
          <ProcessSection />
          <ForWhomSection />
          <ReviewsSection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppFab />
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Root ────────────────────────────────────────────────────────── */
export function LandingView() {
  return (
    <ReactLenis root options={{ lerp: 0.07, duration: 1.2 }}>
      <LanguageProvider>
        <Header />
        <LandingBody />
      </LanguageProvider>
    </ReactLenis>
  );
}
