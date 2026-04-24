import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#dc2626",
          500: "#b91c1c",
          600: "#991b1b",
          700: "#7f1d1d",
          800: "#5f1616",
          900: "#450a0a",
        },
        sport: {
          bg: "#000000",
          surface: "#0a0a0a",
          line: "#1a1a1a",
          ink: "#ffffff",
          mute: "#e5e5e5",
          red: "#b91c1c",
          fire: "#b91c1c",
          lime: "#ffffff",
          cyan: "#b91c1c",
          blue: "#b91c1c",
          blueDeep: "#e10f0f",
        },
        cosmos: {
          void: "#000000",
          deep: "#050505",
          nebula: "#0a0a0a",
          surface: "#0f0f0f",
          line: "#1f1f1f",
          mute: "#e5e5e5",
          ink: "#ffffff",
          violet: "#111111",
          purple: "#1a1a1a",
          fuchsia: "#b91c1c",
          pink: "#b91c1c",
          magenta: "#b91c1c",
          cyan: "#b91c1c",
          aqua: "#b91c1c",
          indigo: "#b91c1c",
          star: "#ffffff",
          gold: "#b91c1c",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Impact", "Oswald", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -5px rgba(185,28,28,0.55)",
        limeGlow: "0 0 40px -5px rgba(255,255,255,0.35)",
        blueGlow: "0 0 40px -5px rgba(185,28,28,0.55)",
        cosmos: "0 0 50px -5px rgba(185,28,28,0.55), 0 0 120px -20px rgba(185,28,28,0.22)",
        violet: "0 0 40px -5px rgba(185,28,28,0.55)",
        magenta: "0 0 40px -5px rgba(185,28,28,0.55)",
        nebula: "inset 0 0 120px rgba(185,28,28,0.18)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(185,28,28,0.6)" },
          "50%": { boxShadow: "0 0 0 12px rgba(185,28,28,0)" },
        },
        cosmicPulse: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(185,28,28,0.7)" },
          "50%": { boxShadow: "0 0 0 14px rgba(185,28,28,0)" },
        },
        twinkle: {
          "0%,100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        nebulaShift: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulseGlow: "pulseGlow 2.2s ease-out infinite",
        cosmicPulse: "cosmicPulse 2.4s ease-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        floatY: "floatY 6s ease-in-out infinite",
        nebulaShift: "nebulaShift 18s ease-in-out infinite",
      },
      backgroundImage: {
        "cosmos-grad": "linear-gradient(135deg, #000000 0%, #050505 40%, #0a0a0a 70%, #000000 100%)",
        "nebula-grad":
          "radial-gradient(60% 80% at 15% 20%, rgba(185,28,28,0.18), transparent 60%), radial-gradient(50% 70% at 85% 15%, rgba(185,28,28,0.10), transparent 60%), radial-gradient(70% 80% at 50% 110%, rgba(255,255,255,0.06), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
