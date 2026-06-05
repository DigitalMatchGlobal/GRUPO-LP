"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";

/** Coincide con `scroll-mt-24` (6rem) que usan las secciones bajo el header fijo. */
const HEADER_OFFSET = -96;

/**
 * Interceptor global de anclas internas. Convierte los clicks en `#id` / `/#id`
 * en scroll suave (Lenis) y mantiene la URL limpia, sin el `#` adelante.
 * Montar dentro de <ReactLenis> para que `useLenis` tenga contexto.
 */
export function SmoothAnchors() {
  const lenis = useLenis();

  // Clicks en anclas → scroll suave + URL sin hash.
  useEffect(() => {
    function resolveHash(href: string | null): string | null {
      if (!href) return null;
      if (href.startsWith("#")) return href;
      if (href.startsWith("/#")) return href.slice(1);
      return null;
    }

    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      const hash = resolveHash(anchor.getAttribute("href"));
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return; // ancla a otra página: dejar el comportamiento por defecto.

      event.preventDefault();
      if (lenis) lenis.scrollTo(target as HTMLElement, { offset: HEADER_OFFSET });
      else (target as HTMLElement).scrollIntoView({ behavior: "smooth" });

      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);

  // Deep-link entrante (/#seccion): scrollear una vez y limpiar la URL.
  useEffect(() => {
    if (!lenis) return;
    const hash = window.location.hash;
    if (!hash || hash === "#") return;
    const target = document.querySelector(hash);
    if (!target) return;

    const id = window.setTimeout(() => {
      lenis.scrollTo(target as HTMLElement, { offset: HEADER_OFFSET });
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }, 350);
    return () => window.clearTimeout(id);
  }, [lenis]);

  return null;
}
