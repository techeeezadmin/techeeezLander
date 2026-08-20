import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import {
  getServiceParticlePairs,
  getServiceParticlePositions,
  PARTICLE_COUNT,
  randomSpherePositions,
} from "../lib/particle-shapes";
import { ParticleField } from "./ParticleField";

export function ServiceParticleCloud({
  slug,
  nextSlug,
  morph = 0,
  accent = "#c4b5fd",
  burstKey = 1,
  reducedMotion = false,
}) {
  const group = useRef(null);
  const points = useRef(null);
  const lines = useRef(null);
  const burst = useRef(1);
  const mouse = useRef({ x: 0, y: 0 });
  const slugRef = useRef(slug);
  const nextRef = useRef(nextSlug || slug);
  const morphRef = useRef(morph);
  const countRef = useRef(PARTICLE_COUNT);
  const targetColor = useRef(new THREE.Color(accent));
  const paperColor = useMemo(() => new THREE.Color("#f6f3ea"), []);
  const current = useMemo(() => randomSpherePositions(), []);
  const linePositions = useMemo(() => new Float32Array(PARTICLE_COUNT * 24), []);

  slugRef.current = slug;
  nextRef.current = nextSlug || slug;
  morphRef.current = morph;
  targetColor.current.set(accent);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    countRef.current = mobile ? 900 : PARTICLE_COUNT;
    if (points.current) {
      points.current.geometry.setDrawRange(0, countRef.current);
    }
  }, []);

  useEffect(() => {
    burst.current = reducedMotion ? 0 : 1;
  }, [slug, burstKey, reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse) return undefined;
    const onMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reducedMotion]);

  useFrame((state, delta) => {
    if (!points.current) return;
    const currentSlug = slugRef.current;
    const targetFrom = getServiceParticlePositions(currentSlug);
    const targetTo = getServiceParticlePositions(nextRef.current);
    const mix = morphRef.current;
    const pairs = getServiceParticlePairs(mix > 0.5 ? nextRef.current : currentSlug);
    const t = state.clock.elapsedTime;
    burst.current *= Math.exp(-delta * 4.2);
    const scatter = burst.current;
    const ease = reducedMotion ? 1 : 1 - Math.exp(-delta * 7.5);

    const count = countRef.current;
    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      const tx = targetFrom[i3] + (targetTo[i3] - targetFrom[i3]) * mix;
      const ty = targetFrom[i3 + 1] + (targetTo[i3 + 1] - targetFrom[i3 + 1]) * mix;
      const tz = targetFrom[i3 + 2] + (targetTo[i3 + 2] - targetFrom[i3 + 2]) * mix;
      const len = Math.hypot(tx, ty, tz) || 1;
      const explode = scatter * 0.7;
      current[i3] += (tx + (tx / len) * explode + (reducedMotion || scatter > 0.08 ? 0 : 0.006 * Math.sin(t * 0.7 + i * 0.11)) - current[i3]) * ease;
      current[i3 + 1] += (ty + (ty / len) * explode - current[i3 + 1]) * ease;
      current[i3 + 2] += (tz + (tz / len) * explode * 0.45 - current[i3 + 2]) * ease;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.material.color.lerp(targetColor.current, 0.08);
    points.current.material.color.lerp(paperColor, 0.35);

    if (lines.current) {
      const arr = linePositions;
      const pairCount = Math.min(pairs.length / 2, Math.floor(arr.length / 6));
      for (let p = 0; p < pairCount; p += 1) {
        const a = pairs[p * 2] * 3;
        const b = pairs[p * 2 + 1] * 3;
        const o = p * 6;
        arr[o] = current[a];
        arr[o + 1] = current[a + 1];
        arr[o + 2] = current[a + 2];
        arr[o + 3] = current[b];
        arr[o + 4] = current[b + 1];
        arr[o + 5] = current[b + 2];
      }
      lines.current.geometry.setDrawRange(0, pairCount * 2);
      lines.current.geometry.attributes.position.needsUpdate = true;
      lines.current.material.color.lerp(targetColor.current, 0.1);
    }

    if (!group.current || reducedMotion) return;
    const max = THREE.MathUtils.degToRad(4);
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      -0.12 + mouse.current.x * max,
      0.05,
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      0.06 + mouse.current.y * -max,
      0.05,
    );
  });

  return (
    <>
      <color attach="background" args={["#121214"]} />
      <fog attach="fog" args={["#121214", 8, 18]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[2.4, 1.8, 3]} intensity={0.55} color={accent} />
      <ParticleField
        count={40}
        color="#e8eef0"
        radius={7.5}
        speed={0.03}
        reducedMotion={reducedMotion}
      />
      <group ref={group} position={[1.45, 0.08, 0]} scale={1.28}>
        <points ref={points}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[current, 3]} />
          </bufferGeometry>
          <pointsMaterial
            color="#f7f4ea"
            size={0.048}
            sizeAttenuation
            transparent
            opacity={0.95}
            depthWrite={false}
          />
        </points>
        <lineSegments ref={lines}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
          </bufferGeometry>
          <lineBasicMaterial
            color={accent}
            transparent
            opacity={0.42}
            depthWrite={false}
          />
        </lineSegments>
      </group>
    </>
  );
}
