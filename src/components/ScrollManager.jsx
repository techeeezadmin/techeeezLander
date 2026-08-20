import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { prefersReducedMotion } from "../lib/motion";

export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const frame = window.requestAnimationFrame(() => {
        const node = document.getElementById(id);
        if (!node) return;
        const lenis = window.__lenis;
        if (lenis) {
          lenis.scrollTo(node, { offset: 0, duration: prefersReducedMotion() ? 0 : 1.05 });
        } else {
          node.scrollIntoView({
            behavior: prefersReducedMotion() ? "auto" : "smooth",
            block: "start",
          });
        }
      });
      return () => window.cancelAnimationFrame(frame);
    }

    const lenis = window.__lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);

  return null;
}
