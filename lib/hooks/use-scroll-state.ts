"use client";

import { useCallback, useSyncExternalStore } from "react";

function getServerSnapshot(): boolean {
  return false;
}

export function useScrollState(threshold: number = 16): boolean {
  const subscribe = useCallback((callback: () => void) => {
    if (typeof window === "undefined") {
      return () => {};
    }

    let frameId = 0;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;

      ticking = true;
      frameId = window.requestAnimationFrame(() => {
        ticking = false;
        callback();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const getSnapshot = useCallback(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.scrollY > threshold;
  }, [threshold]);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
