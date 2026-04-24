"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// EU emblem geometry: 12 gold 5-pointed stars on a deep-blue disk.
// Animation: ring orbits slowly; each star counter-rotates to stay upright,
// wobbles + pulses; secondary "twinkle" stars fly across the disk.
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
    scene.fog = new THREE.FogExp2(0x00061a, 0.055);

    const camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 200);
    camera.position.set(0, 0, 8);

    // --- Lights
    scene.add(new THREE.AmbientLight(0x0a1530, 0.6));
    const goldKey = new THREE.PointLight(0xfcd116, 2.2, 50);
    goldKey.position.set(4, 3, 5);
    scene.add(goldKey);
    const blueFill = new THREE.PointLight(0x3b6cff, 1.6, 50);
    blueFill.position.set(-5, -2, 4);
    scene.add(blueFill);
    const whiteRim = new THREE.PointLight(0xffffff, 0.8, 40);
    whiteRim.position.set(0, 6, 6);
    scene.add(whiteRim);

    // --- Background starfield (gold/white/blue)
    const starGeo = new THREE.BufferGeometry();
    const starCount = 1400;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const palette = [
      new THREE.Color(0xffffff),
      new THREE.Color(0xfcd116), // EU gold
      new THREE.Color(0xffe169),
      new THREE.Color(0x6b8cff),
      new THREE.Color(0x9fb8ff),
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
      size: 0.16,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const starsPoints = new THREE.Points(starGeo, starMat);
    scene.add(starsPoints);

    // --- EU blue backdrop disk (soft glow)
    const EU_BLUE = 0x003399;
    const EU_GOLD = 0xfcd116;

    // Emblem root — all EU elements live here so we can scale responsively.
    // Shifted upward so the "ЄВРО МІКС" headline sits in the visual center of the emblem.
    const emblem = new THREE.Group();
    emblem.position.y = 2.0;
    scene.add(emblem);

    const blueDisk = new THREE.Mesh(
      new THREE.CircleGeometry(3.6, 96),
      new THREE.MeshBasicMaterial({
        color: EU_BLUE,
        transparent: true,
        opacity: 0.55,
      })
    );
    blueDisk.position.z = -0.4;
    emblem.add(blueDisk);

    // Outer vignette for the disk
    const blueHalo = new THREE.Mesh(
      new THREE.RingGeometry(3.55, 4.3, 128),
      new THREE.MeshBasicMaterial({
        color: 0x1e3a8a,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      })
    );
    blueHalo.position.z = -0.35;
    emblem.add(blueHalo);

    // Faint gold ring where the 12 stars sit (guide line, subtle)
    const guideRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.25, 0.012, 8, 160),
      new THREE.MeshBasicMaterial({
        color: EU_GOLD,
        transparent: true,
        opacity: 0.18,
        blending: THREE.AdditiveBlending,
      })
    );
    guideRing.position.z = -0.1;
    emblem.add(guideRing);

    // --- Build 5-pointed star geometry (flat, extruded slightly for depth)
    const makeStarShape = (outerR: number, innerR: number) => {
      const shape = new THREE.Shape();
      for (let i = 0; i < 10; i++) {
        const angle = (i * Math.PI) / 5 - Math.PI / 2;
        const r = i % 2 === 0 ? outerR : innerR;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
      }
      shape.closePath();
      return shape;
    };

    const starShape = makeStarShape(0.36, 0.15);
    const starGeom = new THREE.ExtrudeGeometry(starShape, {
      depth: 0.06,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.015,
      bevelSegments: 2,
      curveSegments: 16,
    });
    starGeom.center();

    const starMatGold = new THREE.MeshStandardMaterial({
      color: EU_GOLD,
      emissive: 0xffc400,
      emissiveIntensity: 0.55,
      metalness: 0.55,
      roughness: 0.28,
    });

    // --- 12 stars of the EU emblem
    const ring = new THREE.Group();
    const RADIUS = 2.25;
    type StarData = { mesh: THREE.Mesh; haloMesh: THREE.Mesh; baseAngle: number };
    const starData: StarData[] = [];

    // Halo (flat billboard) behind each star for glow
    const haloGeom = new THREE.CircleGeometry(0.55, 24);
    for (let i = 0; i < 12; i++) {
      const starMesh = new THREE.Mesh(starGeom, starMatGold.clone());
      const halo = new THREE.Mesh(
        haloGeom,
        new THREE.MeshBasicMaterial({
          color: EU_GOLD,
          transparent: true,
          opacity: 0.18,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
      halo.position.z = -0.05;
      starMesh.add(halo);
      ring.add(starMesh);
      starData.push({
        mesh: starMesh,
        haloMesh: halo,
        baseAngle: (i / 12) * Math.PI * 2,
      });
    }
    emblem.add(ring);

    // --- Secondary twinkling gold particles drifting across the blue disk
    const twinkleCount = 60;
    const twinkleGeo = new THREE.BufferGeometry();
    const twinklePos = new Float32Array(twinkleCount * 3);
    const twinkleSeed: number[] = [];
    for (let i = 0; i < twinkleCount; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * 3.2;
      twinklePos[i * 3] = Math.cos(a) * r;
      twinklePos[i * 3 + 1] = Math.sin(a) * r;
      twinklePos[i * 3 + 2] = -0.2 + Math.random() * 0.3;
      twinkleSeed.push(Math.random() * 10);
    }
    twinkleGeo.setAttribute("position", new THREE.BufferAttribute(twinklePos, 3));
    const twinkleMat = new THREE.PointsMaterial({
      color: EU_GOLD,
      size: 0.09,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const twinkles = new THREE.Points(twinkleGeo, twinkleMat);
    emblem.add(twinkles);

    // Responsive emblem scale — shrink on narrow viewports so it never
    // overflows the hero container on mobile.
    const applyResponsiveScale = () => {
      const aspect = width / Math.max(1, height);
      // Under ~520px wide: strongly scale down.
      // Between 520–900px: moderately.
      // Desktop: full size.
      let s = 1;
      if (width < 380) s = 0.52;
      else if (width < 520) s = 0.62;
      else if (width < 720) s = 0.75;
      else if (width < 960) s = 0.88;
      // If container is very tall relative to width (portrait), clamp further.
      if (aspect < 0.8) s = Math.min(s, 0.7);
      if (aspect < 0.6) s = Math.min(s, 0.55);
      emblem.scale.setScalar(s);
    };
    applyResponsiveScale();

    const clock = new THREE.Clock();
    let rafId = 0;
    let disposed = false;

    const tick = () => {
      if (disposed) return;
      const dt = clock.getDelta();
      const t = clock.elapsedTime;

      // Background starfield slow drift
      starsPoints.rotation.y += dt * 0.008;
      starsPoints.rotation.x += dt * 0.003;

      // Ring orbits slowly, stars stay upright (counter-rotated)
      const ringAngle = t * 0.12;
      for (let i = 0; i < starData.length; i++) {
        const s = starData[i];
        const a = s.baseAngle + ringAngle;
        const x = Math.cos(a) * RADIUS;
        const y = Math.sin(a) * RADIUS;
        s.mesh.position.set(x, y, 0);
        // Keep star upright + small wobble + gentle self-spin on Y
        s.mesh.rotation.z = Math.sin(t * 1.4 + i) * 0.12;
        s.mesh.rotation.y = Math.sin(t * 0.9 + i * 0.7) * 0.35;
        // Pulse scale
        const scale = 1 + Math.sin(t * 2.2 + i * 0.9) * 0.1;
        s.mesh.scale.setScalar(scale);
        // Halo opacity pulse (halo inherits rotation; counter-face the camera via setting matrix)
        const mat = s.haloMesh.material as THREE.MeshBasicMaterial;
        mat.opacity = 0.12 + (Math.sin(t * 3 + i * 1.1) * 0.5 + 0.5) * 0.22;
      }

      // Blue disk subtle breathing
      blueDisk.scale.setScalar(1 + Math.sin(t * 0.6) * 0.015);
      (blueHalo.material as THREE.MeshBasicMaterial).opacity =
        0.28 + Math.sin(t * 0.8) * 0.06;

      // Twinkle particles drift radially + fade in/out
      const tpos = twinkleGeo.getAttribute("position") as THREE.BufferAttribute;
      for (let i = 0; i < twinkleCount; i++) {
        const seed = twinkleSeed[i];
        const a0 = seed * 0.6283;
        const drift = 0.2 + (seed % 1) * 0.3;
        const rad = (Math.sin(t * drift + seed) * 0.5 + 0.5) * 3.1 + 0.2;
        tpos.setX(i, Math.cos(a0 + t * 0.15) * rad);
        tpos.setY(i, Math.sin(a0 + t * 0.15) * rad);
      }
      tpos.needsUpdate = true;
      twinkleMat.opacity = 0.55 + Math.sin(t * 1.1) * 0.25;

      // Guide ring gentle opacity pulse
      (guideRing.material as THREE.MeshBasicMaterial).opacity =
        0.14 + Math.sin(t * 0.9) * 0.06;

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
      applyResponsiveScale();
    };
    window.addEventListener("resize", onResize);

    rafId = requestAnimationFrame(tick);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      starGeo.dispose();
      starMat.dispose();
      blueDisk.geometry.dispose();
      (blueDisk.material as THREE.Material).dispose();
      blueHalo.geometry.dispose();
      (blueHalo.material as THREE.Material).dispose();
      guideRing.geometry.dispose();
      (guideRing.material as THREE.Material).dispose();
      starGeom.dispose();
      starMatGold.dispose();
      haloGeom.dispose();
      for (const s of starData) {
        (s.mesh.material as THREE.Material).dispose();
        (s.haloMesh.material as THREE.Material).dispose();
      }
      twinkleGeo.dispose();
      twinkleMat.dispose();
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
