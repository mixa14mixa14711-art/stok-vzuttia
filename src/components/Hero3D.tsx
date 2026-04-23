"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, Html } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function OrbitCluster() {
  const group = useRef<THREE.Group>(null!);
  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.25;
  });

  const items = useMemo(() => {
    const colors = ["#ff2d2d", "#ff6a1a", "#d4ff00", "#00e5ff", "#ffffff"];
    return Array.from({ length: 14 }).map((_, i) => {
      const r = 2.6 + Math.random() * 0.6;
      const a = (i / 14) * Math.PI * 2;
      return {
        position: [Math.cos(a) * r, (Math.random() - 0.5) * 1.2, Math.sin(a) * r] as [number, number, number],
        scale: 0.2 + Math.random() * 0.35,
        color: colors[i % colors.length],
        kind: i % 3,
      };
    });
  }, []);

  return (
    <group ref={group}>
      {items.map((it, idx) => (
        <Float key={idx} speed={1.2} rotationIntensity={1.1} floatIntensity={1.6}>
          <mesh position={it.position} scale={it.scale} castShadow>
            {it.kind === 0 ? (
              <boxGeometry args={[1.1, 1.1, 1.1]} />
            ) : it.kind === 1 ? (
              <icosahedronGeometry args={[0.8, 0]} />
            ) : (
              <torusGeometry args={[0.6, 0.22, 16, 32]} />
            )}
            <meshStandardMaterial
              color={it.color}
              metalness={0.35}
              roughness={0.25}
              emissive={it.color}
              emissiveIntensity={it.color === "#ffffff" ? 0 : 0.25}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function CoreShape() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.2;
      ref.current.rotation.y += dt * 0.35;
    }
  });
  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={ref} castShadow receiveShadow>
        <torusKnotGeometry args={[0.9, 0.32, 180, 28]} />
        <meshPhysicalMaterial
          color="#ff2d2d"
          metalness={0.85}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive="#ff2d2d"
          emissiveIntensity={0.25}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      className="!absolute !inset-0"
      shadows
      dpr={[1, 1.6]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0.4, 6], fov: 50 }}
    >
      <color attach="background" args={["#0a0a0b"]} />
      <fog attach="fog" args={["#0a0a0b", 6, 14]} />

      <Suspense
        fallback={
          <Html center>
            <div className="text-xs text-neutral-400">Завантаження 3D…</div>
          </Html>
        }
      >
        <ambientLight intensity={0.45} />
        <directionalLight position={[5, 6, 5]} intensity={1.4} castShadow />
        <pointLight position={[-4, -2, -2]} intensity={0.8} color="#d4ff00" />
        <pointLight position={[4, 2, -2]} intensity={0.8} color="#ff2d2d" />

        <CoreShape />
        <OrbitCluster />

        <ContactShadows
          position={[0, -1.7, 0]}
          opacity={0.55}
          scale={12}
          blur={2.4}
          far={4}
          color="#000"
        />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
