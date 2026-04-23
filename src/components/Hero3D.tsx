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
    renderer.setClearColor(0x000000, 1);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.075);

    const camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 200);
    camera.position.set(0, 0.6, 8);

    // --- Lights: dim ambient + cyan + gold + white key lights (black-space feel)
    scene.add(new THREE.AmbientLight(0x0b1320, 0.45));
    const cyanL = new THREE.PointLight(0x22d3ee, 2.0, 40);
    cyanL.position.set(6, 3, -2);
    scene.add(cyanL);
    const goldL = new THREE.PointLight(0xfbbf24, 1.3, 40);
    goldL.position.set(-6, -2, -4);
    scene.add(goldL);
    const whiteL = new THREE.PointLight(0xffffff, 1.0, 40);
    whiteL.position.set(0, 6, 4);
    scene.add(whiteL);

    // --- STARFIELD: thousands of Points
    const starGeo = new THREE.BufferGeometry();
    const starCount = 1800;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const palette = [
      new THREE.Color(0xffffff),
      new THREE.Color(0xf1f3f8),
      new THREE.Color(0x22d3ee),
      new THREE.Color(0x67e8f9),
      new THREE.Color(0xfbbf24),
    ];
    for (let i = 0; i < starCount; i++) {
      const r = 25 + Math.random() * 40;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi) - 10;
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.18,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // --- PLANET (central) — black metal with subtle cyan atmosphere
    const planet = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.4, 4),
      new THREE.MeshStandardMaterial({
        color: 0x0a0a10,
        metalness: 0.75,
        roughness: 0.35,
        emissive: 0x0e4c5a,
        emissiveIntensity: 0.35,
      })
    );
    planet.position.set(0, 0.2, 0);
    scene.add(planet);

    // Planet atmosphere glow (large transparent sphere)
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.6, 48, 48),
      new THREE.MeshBasicMaterial({
        color: 0x22d3ee,
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      })
    );
    atmosphere.position.copy(planet.position);
    scene.add(atmosphere);

    // --- RINGS (Saturn-like, tilted)
    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(2.6, 0.04, 3, 160),
      new THREE.MeshBasicMaterial({
        color: 0x22d3ee,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
      })
    );
    ring1.rotation.x = Math.PI / 2.4;
    ring1.position.copy(planet.position);
    scene.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(3.0, 0.03, 3, 160),
      new THREE.MeshBasicMaterial({
        color: 0xfbbf24,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
      })
    );
    ring2.rotation.x = Math.PI / 2.4;
    ring2.rotation.y = 0.2;
    ring2.position.copy(planet.position);
    scene.add(ring2);

    // --- ORBITING SATELLITES (small glowing shapes)
    const satellites = new THREE.Group();
    const satMeta: { mesh: THREE.Mesh; radius: number; speed: number; phase: number; tiltY: number }[] = [];
    const satColors = [0x22d3ee, 0x67e8f9, 0xfbbf24, 0xffffff, 0xd4ff00];
    for (let i = 0; i < 10; i++) {
      const kind = i % 3;
      const geom =
        kind === 0
          ? new THREE.OctahedronGeometry(0.22, 0)
          : kind === 1
            ? new THREE.IcosahedronGeometry(0.2, 0)
            : new THREE.TetrahedronGeometry(0.24, 0);
      const c = satColors[i % satColors.length];
      const mat = new THREE.MeshStandardMaterial({
        color: c,
        emissive: c,
        emissiveIntensity: 0.9,
        metalness: 0.6,
        roughness: 0.2,
      });
      const mesh = new THREE.Mesh(geom, mat);
      const radius = 3.6 + (i % 4) * 0.5;
      satMeta.push({
        mesh,
        radius,
        speed: 0.2 + (i % 4) * 0.08,
        phase: (i / 10) * Math.PI * 2,
        tiltY: ((i * 13) % 10) / 20 - 0.25,
      });
      satellites.add(mesh);
    }
    scene.add(satellites);

    // --- COMET / shooting particle (small trailing light)
    const comet = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xfbbf24 })
    );
    scene.add(comet);

    const clock = new THREE.Clock();
    let rafId = 0;
    let disposed = false;

    const tick = () => {
      if (disposed) return;
      const dt = clock.getDelta();
      const t = clock.elapsedTime;

      // planet slow spin
      planet.rotation.y += dt * 0.12;
      planet.rotation.x += dt * 0.04;

      // rings counter-rotate
      ring1.rotation.z += dt * 0.25;
      ring2.rotation.z -= dt * 0.18;

      // starfield drift
      stars.rotation.y += dt * 0.01;
      stars.rotation.x += dt * 0.004;

      // satellites orbit around planet with a tilted plane
      for (const s of satMeta) {
        const angle = s.phase + t * s.speed;
        s.mesh.position.set(
          Math.cos(angle) * s.radius,
          s.tiltY + Math.sin(t * 1.2 + s.phase) * 0.15,
          Math.sin(angle) * s.radius
        );
        s.mesh.rotation.x = t * 1.2 + s.phase;
        s.mesh.rotation.y = t * 0.9 + s.phase;
      }

      // comet loop (big elliptical path)
      const ct = t * 0.4;
      comet.position.set(Math.cos(ct) * 9, Math.sin(ct * 1.3) * 3.5, Math.sin(ct) * 9 - 3);

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
      planet.geometry.dispose();
      (planet.material as THREE.Material).dispose();
      atmosphere.geometry.dispose();
      (atmosphere.material as THREE.Material).dispose();
      ring1.geometry.dispose();
      (ring1.material as THREE.Material).dispose();
      ring2.geometry.dispose();
      (ring2.material as THREE.Material).dispose();
      starGeo.dispose();
      starMat.dispose();
      comet.geometry.dispose();
      (comet.material as THREE.Material).dispose();
      for (const s of satMeta) {
        s.mesh.geometry.dispose();
        (s.mesh.material as THREE.Material).dispose();
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
