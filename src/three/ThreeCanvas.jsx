import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export function ThreeCanvas({
  children,
  className = "absolute inset-0",
  cameraPosition = [0, 0, 6],
  frameloop = "always",
}) {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 1.25]}
        frameloop={frameloop}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: cameraPosition, fov: 45 }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
}
