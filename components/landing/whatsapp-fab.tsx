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
      className={cn("fixed bottom-5 right-5 z-50 md:bottom-7 md:right-7", className)}
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 380, damping: 28, delay: 0.35 }}
    >
      <a
        href={getWhatsAppUrl(locale)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center gap-2 bg-[#25D366] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-[7px_7px_0_rgba(5,18,45,0.18)] [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]",
          "transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 active:scale-[0.98]",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40",
        )}
      >
        <MessageCircle className="size-5 shrink-0" aria-hidden />
        <span className="hidden sm:inline">{t.fab.label}</span>
      </a>
    </motion.div>
  );
}
