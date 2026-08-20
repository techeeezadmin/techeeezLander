export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isFinePointer() {
  return window.matchMedia("(pointer: fine)").matches && window.matchMedia("(hover: hover)").matches;
}

export function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}
