import { lazy, Suspense } from "react";

const Canvas = lazy(() =>
  import("./ServiceParticlesCanvas").then((mod) => ({
    default: mod.ServiceParticlesCanvas,
  })),
);

export function LazyServiceParticlesCanvas(props) {
  return (
    <Suspense
      fallback={
        <div
          className={props.className ?? "pointer-events-none absolute inset-0"}
          style={{
            background: `radial-gradient(circle at 72% 46%, ${props.accent ?? "#c4b5fd"}22, transparent 52%)`,
          }}
        />
      }
    >
      <Canvas {...props} />
    </Suspense>
  );
}
