"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  X,
  Package,
  Globe2,
  Ship,
  FileCheck,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "@/components/i18n/language-context";
import { MotionItem, MotionSection } from "@/components/landing/motion";
import { getWhatsAppUrl } from "@/lib/site";
import { stagger } from "@/components/landing/sections/animations";

const ICON_MAP: Record<string, any> = {
  Globe2,
  Ship,
  FileCheck,
  Briefcase
};

export function ServicesSection() {
  const { t, locale } = useLanguage();
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setFlippedCard(prev => prev === id ? null : id);
  };

  return (
    <MotionSection
      id="servicios"
      className="relative py-24 border-y border-border/80 overflow-hidden"
      style={{ background: "var(--muted)" }}
    >
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
          -webkit-perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
          -webkit-transform: rotateY(180deg);
        }
        .rotate-y-0 {
          transform: rotateY(0deg);
          -webkit-transform: rotateY(0deg);
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 4px; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionItem className="text-center mb-16 space-y-4">
          <p className="eyebrow justify-center">{t.services.kicker}</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-5xl text-foreground">
            {t.services.title}
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </MotionItem>

        {/* CONTENEDOR DE PLANES - 2 COLUMNAS */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={stagger.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {t.services.items.map((plan, i) => {
            const isFlipped = flippedCard === plan.id;
            const IconComp = ICON_MAP[plan.icon] || Package;
            const indexFormatted = String(i + 1).padStart(2, "0");

            return (
              <motion.div
                variants={stagger.item}
                key={`${locale}-svc-${i}`}
                className="perspective-1000 w-full h-[600px] cursor-pointer group"
                onClick={() => handleCardClick(plan.id)}
              >
                {/* Inner Container que gira */}
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d shadow-card hover:shadow-card-hover rounded-3xl ${isFlipped ? 'rotate-y-180' : ''}`}
                >

                  {/* === FRENTE DE LA TARJETA (FRONT) === */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-0 z-20 bg-card border border-border rounded-3xl p-8 flex flex-col overflow-hidden transition-colors group-hover:border-primary/20">
                     {/* Fondo decorativo sutil */}
                     <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                     {/* Numeric Watermark */}
                     <div className="absolute -top-4 -right-2 font-display text-8xl text-primary/5 pointer-events-none select-none transition-all duration-500 group-hover:scale-110 group-hover:text-primary/10">
                       {indexFormatted}
                     </div>

                     <div className="relative z-10 flex flex-col h-full">
                       {/* Icono */}
                       <div className="icon-box shrink-0">
                          <IconComp className="size-6 stroke-[1.5]" aria-hidden />
                       </div>

                       {/* Títulos */}
                       <h3 className="font-display font-bold text-2xl text-foreground mb-2">{plan.title}</h3>
                       <p className="font-semibold text-xs text-primary uppercase tracking-widest mb-6">{plan.subtitle}</p>

                       {/* Descripción Corta */}
                       <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                         {plan.description}
                       </p>

                       {/* Features Principales */}
                       <ul className="space-y-4 mb-auto">
                          {plan.mainFeatures?.map((feat, idx) => (
                            <li key={idx} className="flex items-center space-x-3">
                               <CheckCircle2 size={18} className="text-primary shrink-0" />
                               <span className="text-sm font-medium text-foreground">{feat}</span>
                            </li>
                          ))}
                       </ul>

                       {/* Call to Action Visual (Indicador de giro) */}
                       <div className="mt-8 flex justify-center items-center text-primary text-sm font-semibold uppercase border border-primary/20 rounded-full py-2.5 px-4 bg-primary/5 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                          <span className="mr-2">Ver Detalles Operativos</span>
                          <ArrowRight size={16} />
                       </div>
                     </div>
                  </div>

                  {/* === DORSO DE LA TARJETA (BACK) === */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 z-10 bg-foreground border border-primary/30 rounded-3xl p-8 flex flex-col overflow-hidden shadow-2xl`}>
                      {/* Título Dorso + Botón Cerrar Superior */}
                      <div className="flex items-center justify-between mb-4 border-b border-white/15 pb-4">
                         <h3 className="font-display font-bold text-lg text-white">FICHA OPERATIVA</h3>
                         <button className="text-white/60 hover:text-white p-1 transition-colors">
                            <span className="sr-only">Cerrar</span>
                            <X size={22} />
                         </button>
                      </div>

                      {/* Contenido Detallado Scrollable */}
                      <div className="space-y-6 flex-1 overflow-y-auto custom-scrollbar pr-3">

                         {/* Para Quién */}
                         <div>
                            <h4 className="font-semibold text-white text-xs uppercase mb-2 bg-white/10 inline-block px-2.5 py-1 rounded">Perfil Objetivo</h4>
                            <p className="text-sm text-white/85 leading-relaxed">
                                {plan.targetAudience}
                            </p>
                         </div>

                         {plan.details?.map((detail, idx) => (
                           <div key={idx}>
                              <h4 className="font-bold text-accent text-sm uppercase mb-2 tracking-wide">{detail.title}</h4>
                              <ul className="list-disc list-inside space-y-1.5">
                                 {detail.items.map((item, j) => (
                                   <li key={j} className="text-sm text-white/80 leading-relaxed pl-1">
                                     {item}
                                   </li>
                                 ))}
                              </ul>
                           </div>
                         ))}

                         {plan.importantNote && (
                           <div className="bg-accent/10 border border-accent/25 p-3.5 rounded-xl mt-4">
                             <p className="text-xs text-white/90 leading-relaxed">
                               <span className="font-bold text-accent">NOTA:</span> {plan.importantNote}
                             </p>
                           </div>
                         )}
                      </div>

                      {/* --- ZONA DE BOTONES INFERIOR --- */}
                      <div className="mt-6 pt-5 border-t border-white/15 z-20 flex flex-col sm:flex-row gap-3">

                          {/* 1. Botón Volver (Secundario) */}
                          <button
                              className="w-full sm:w-auto px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold uppercase tracking-wide transition-all text-sm flex items-center justify-center"
                          >
                              <ArrowLeft size={16} className="mr-2" />
                              Volver
                          </button>

                          {/* 2. Botón Inscribirme (Principal) */}
                          <a
                              href={getWhatsAppUrl(locale, t.whatsappServicePrefill(plan.title))}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex-1 flex justify-center items-center py-3 sm:py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold uppercase tracking-wide transition-all hover:-translate-y-0.5 shadow-xl shadow-primary/20 text-sm"
                          >
                              Cotizar Servicio
                          </a>
                      </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </MotionSection>
  );
}
