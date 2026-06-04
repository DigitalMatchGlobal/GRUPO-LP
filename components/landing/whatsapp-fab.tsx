"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "@/components/i18n/language-context";
import { getWhatsAppUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

type WhatsAppFabProps = {
  className?: string;
};

export function WhatsAppFab({ className }: WhatsAppFabProps) {
  const { locale, t } = useLanguage();

  return (
    <motion.div
      className={cn("fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8", className)}
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 380, damping: 28, delay: 0.35 }}
    >
      <a
        href={getWhatsAppUrl(locale)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-stone-900/15",
          "ring-2 ring-white/30 transition-transform hover:scale-[1.02] active:scale-[0.98]",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40",
        )}
      >
        <MessageCircle className="size-5 shrink-0" aria-hidden />
        <span className="hidden sm:inline">{t.fab.label}</span>
      </a>
    </motion.div>
  );
}
