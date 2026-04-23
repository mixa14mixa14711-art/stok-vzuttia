import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff1f1",
          100: "#ffdede",
          200: "#ffbdbd",
          300: "#ff8f8f",
          400: "#ff5e5e",
          500: "#ff2d2d",
          600: "#e10f0f",
          700: "#b80606",
          800: "#8a0808",
          900: "#5c0404",
        },
        sport: {
          bg: "#05061a",
          surface: "#0b0d2a",
          line: "#1b1f4b",
          ink: "#f4f4f5",
          mute: "#a1a1c5",
          red: "#ff2d2d",
          fire: "#ff6a1a",
          lime: "#d4ff00",
          cyan: "#00e5ff",
          blue: "#38bdf8",
          blueDeep: "#0ea5e9",
        },
        cosmos: {
          void: "#000000",
          deep: "#050507",
          nebula: "#0a0a10",
          surface: "#0f1016",
          line: "#1d2030",
          mute: "#9aa0b4",
          ink: "#f1f3f8",
          violet: "#111827",
          purple: "#1f2937",
          fuchsia: "#67e8f9",
          pink: "#ff2d2d",
          magenta: "#fbbf24",
          cyan: "#22d3ee",
          aqua: "#67e8f9",
          indigo: "#0ea5e9",
          star: "#f9faff",
          gold: "#fbbf24",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Impact", "Oswald", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -5px rgba(255,45,45,0.45)",
        limeGlow: "0 0 40px -5px rgba(212,255,0,0.45)",
        blueGlow: "0 0 40px -5px rgba(56,189,248,0.45)",
        cosmos: "0 0 50px -5px rgba(34,211,238,0.55), 0 0 120px -20px rgba(251,191,36,0.22)",
        violet: "0 0 40px -5px rgba(34,211,238,0.55)",
        magenta: "0 0 40px -5px rgba(251,191,36,0.5)",
        nebula: "inset 0 0 120px rgba(34,211,238,0.18)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(255,45,45,0.6)" },
          "50%": { boxShadow: "0 0 0 12px rgba(255,45,45,0)" },
        },
        cosmicPulse: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(34,211,238,0.7)" },
          "50%": { boxShadow: "0 0 0 14px rgba(34,211,238,0)" },
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
        "cosmos-grad": "linear-gradient(135deg, #000000 0%, #050507 40%, #0a0a10 70%, #000000 100%)",
        "nebula-grad":
          "radial-gradient(60% 80% at 15% 20%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(50% 70% at 85% 15%, rgba(251,191,36,0.12), transparent 60%), radial-gradient(70% 80% at 50% 110%, rgba(212,255,0,0.10), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
