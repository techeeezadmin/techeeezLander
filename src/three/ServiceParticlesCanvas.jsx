import { useEffect, useRef, useState } from "react";
import { ThreeCanvas } from "./ThreeCanvas";
import { ServiceParticleCloud } from "./ServiceParticleCloud";
import { WebGLGuard } from "./WebGLGuard";

export function ServiceParticlesCanvas({
  slug,
  nextSlug,
  morph = 0,
  accent = "#c4b5fd",
  burstKey = 1,
  reducedMotion = false,
  className = "pointer-events-none absolute inset-0",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(true);
  const [reduce, setReduce] = useState(reducedMotion);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(reducedMotion || media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [reducedMotion]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (reduce) {
    return (
      <div
        className={className}
        style={{
          background: `radial-gradient(circle at 72% 46%, ${accent}33, transparent 52%)`,
        }}
      />
    );
  }

  const fallback = (
    <div
      className={className}
      style={{
        background: `radial-gradient(circle at 72% 46%, ${accent}33, transparent 52%)`,
      }}
    />
  );

  return (
    <div ref={ref} className={className}>
      <WebGLGuard fallback={fallback}>
        <ThreeCanvas
          className="absolute inset-0"
          cameraPosition={[0.35, 0.15, 5.6]}
          frameloop={visible ? "always" : "never"}
        >
          <ServiceParticleCloud
            slug={slug}
            nextSlug={nextSlug}
            morph={morph}
            accent={accent}
            burstKey={burstKey}
            reducedMotion={reduce}
          />
        </ThreeCanvas>
      </WebGLGuard>
    </div>
  );
}
