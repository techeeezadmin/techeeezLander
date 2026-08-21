import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../lib/motion";

export function useMouseTilt(active = true) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !active || prefersReducedMotion()) return undefined;

    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return undefined;

    const onMove = (event) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      node.style.setProperty("--tilt-x", `${(-y * 7).toFixed(2)}deg`);
      node.style.setProperty("--tilt-y", `${(x * 10).toFixed(2)}deg`);
      node.style.setProperty("--spot-x", `${50 + x * 28}%`);
      node.style.setProperty("--spot-y", `${42 + y * 22}%`);
    };

    const reset = () => {
      node.style.setProperty("--tilt-x", "0deg");
      node.style.setProperty("--tilt-y", "0deg");
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", reset);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", reset);
    };
  }, [active]);

  return ref;
}

export function useScrollParallax() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return undefined;
    let frame = 0;

    const update = () => {
      const rect = node.getBoundingClientRect();
      const view = window.innerHeight;
      const progress = (view - rect.top) / (view + rect.height);
      const clamped = Math.min(1, Math.max(0, progress));
      node.style.setProperty("--p", clamped.toFixed(3));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return ref;
}

export function usePinnedProgress(onFrame) {
  const ref = useRef(null);
  const onFrameRef = useRef(onFrame);
  onFrameRef.current = onFrame;

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (prefersReducedMotion()) {
      node.style.setProperty("--pin", "0");
      onFrameRef.current?.(0);
      return undefined;
    }

    let frame = 0;

    const update = () => {
      const total = Math.max(node.offsetHeight - window.innerHeight, 1);
      const scrolled = Math.min(Math.max(-node.getBoundingClientRect().top, 0), total);
      const value = scrolled / total;
      node.style.setProperty("--pin", value.toFixed(4));
      onFrameRef.current?.(value);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return ref;
}
