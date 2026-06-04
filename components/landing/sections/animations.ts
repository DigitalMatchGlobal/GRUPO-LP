/**
 * Variantes de animación compartidas por secciones de la landing.
 * Extraído literal de landing-view.tsx (sin cambios de valor).
 */
export const fadeEase = [0.22, 1, 0.36, 1] as const;

export const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  },
  item: {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: fadeEase } },
  },
};
