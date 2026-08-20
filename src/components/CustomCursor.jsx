import { useEffect, useRef, useState } from "react";
import { isFinePointer, prefersReducedMotion } from "../lib/motion";

export function CustomCursor() {
  const ref = useRef(null);
  const [mode, setMode] = useState("default");
  const [enabled, setEnabled] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const sync = () => {
      const on = isFinePointer() && !prefersReducedMotion();
      setEnabled(on);
      document.documentElement.classList.toggle("has-custom-cursor", on);
    };
    sync();
    const fine = window.matchMedia("(pointer: fine)");
    const hover = window.matchMedia("(hover: hover)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    fine.addEventListener("change", sync);
    hover.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      hover.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;
    let frame = 0;

    const onMove = (event) => {
      pos.current.x = event.clientX;
      pos.current.y = event.clientY;
      const hit = event.target.closest("[data-cursor]");
      setMode(hit?.getAttribute("data-cursor") || "default");
    };

    const tick = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.22;
      current.current.y += (pos.current.y - current.current.y) * 0.22;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      className={`custom-cursor is-${mode}`}
      aria-hidden="true"
    >
      <div className="custom-cursor__dot" />
      <div className="custom-cursor__ring" />
      <span className="custom-cursor__label">View</span>
    </div>
  );
}
