"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth || window.innerWidth;
    let height = mount.clientHeight || 500;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.setSize(width, height);
    renderer.setClearColor(0x0a0a0b, 1);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0a0b, 6, 14);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 6);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dir = new THREE.DirectionalLight(0xffffff, 1.6);
    dir.position.set(5, 6, 5);
    scene.add(dir);
    const redP = new THREE.PointLight(0xff2d2d, 1.2, 12);
    redP.position.set(4, 2, -2);
    scene.add(redP);
    const limeP = new THREE.PointLight(0xd4ff00, 1.2, 12);
    limeP.position.set(-4, -2, -2);
    scene.add(limeP);

    // Core knot
    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.9, 0.32, 180, 28),
      new THREE.MeshStandardMaterial({
        color: 0xff2d2d,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0xff2d2d,
        emissiveIntensity: 0.35,
      })
    );
    scene.add(knot);

    // Orbit cluster
    const orbits = new THREE.Group();
    const colors = [0xff2d2d, 0xff6a1a, 0xd4ff00, 0x00e5ff, 0xffffff];
    const cluster: { mesh: THREE.Mesh; seed: number }[] = [];
    for (let i = 0; i < 14; i++) {
      const r = 2.6 + (i % 3) * 0.25;
      const a = (i / 14) * Math.PI * 2;
      const kind = i % 3;
      const geom =
        kind === 0
          ? new THREE.BoxGeometry(1.1, 1.1, 1.1)
          : kind === 1
            ? new THREE.IcosahedronGeometry(0.8, 0)
            : new THREE.TorusGeometry(0.6, 0.22, 16, 32);
      const c = colors[i % colors.length];
      const mat = new THREE.MeshStandardMaterial({
        color: c,
        metalness: 0.4,
        roughness: 0.3,
        emissive: c,
        emissiveIntensity: c === 0xffffff ? 0 : 0.3,
      });
      const mesh = new THREE.Mesh(geom, mat);
      const scale = 0.22 + ((i * 7) % 10) / 30;
      mesh.scale.setScalar(scale);
      mesh.position.set(
        Math.cos(a) * r,
        ((i * 13) % 10) / 10 - 0.5,
        Math.sin(a) * r
      );
      cluster.push({ mesh, seed: i });
      orbits.add(mesh);
    }
    scene.add(orbits);

    const clock = new THREE.Clock();
    let rafId = 0;
    let disposed = false;

    const tick = () => {
      if (disposed) return;
      const t = clock.getElapsedTime();
      const dt = clock.getDelta();

      knot.rotation.x += dt * 0.2;
      knot.rotation.y += dt * 0.35;
      orbits.rotation.y += dt * 0.25;

      for (const c of cluster) {
        c.mesh.rotation.x = t * 0.6 + c.seed;
        c.mesh.rotation.y = t * 0.9 + c.seed * 0.5;
        c.mesh.position.y += Math.sin(t * 1.5 + c.seed) * 0.002;
      }

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    };

    const onResize = () => {
      if (!mount) return;
      width = mount.clientWidth || window.innerWidth;
      height = mount.clientHeight || 500;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    rafId = requestAnimationFrame(tick);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      knot.geometry.dispose();
      (knot.material as THREE.Material).dispose();
      for (const c of cluster) {
        c.mesh.geometry.dispose();
        (c.mesh.material as THREE.Material).dispose();
      }
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0"
      aria-hidden
      style={{ pointerEvents: "none" }}
    />
  );
}
