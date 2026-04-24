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
          bg: "#000000",
          surface: "#0a0a0a",
          line: "#1a1a1a",
          ink: "#ffffff",
          mute: "#e5e5e5",
          red: "#ff2d2d",
          fire: "#ff2d2d",
          lime: "#ffffff",
          cyan: "#ff2d2d",
          blue: "#ff2d2d",
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
          fuchsia: "#ff2d2d",
          pink: "#ff2d2d",
          magenta: "#ff2d2d",
          cyan: "#ff2d2d",
          aqua: "#ff2d2d",
          indigo: "#ff2d2d",
          star: "#ffffff",
          gold: "#ff2d2d",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Impact", "Oswald", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -5px rgba(255,45,45,0.55)",
        limeGlow: "0 0 40px -5px rgba(255,255,255,0.35)",
        blueGlow: "0 0 40px -5px rgba(255,45,45,0.55)",
        cosmos: "0 0 50px -5px rgba(255,45,45,0.55), 0 0 120px -20px rgba(255,45,45,0.22)",
        violet: "0 0 40px -5px rgba(255,45,45,0.55)",
        magenta: "0 0 40px -5px rgba(255,45,45,0.55)",
        nebula: "inset 0 0 120px rgba(255,45,45,0.18)",
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
          "0%,100%": { boxShadow: "0 0 0 0 rgba(255,45,45,0.7)" },
          "50%": { boxShadow: "0 0 0 14px rgba(255,45,45,0)" },
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
          "radial-gradient(60% 80% at 15% 20%, rgba(255,45,45,0.18), transparent 60%), radial-gradient(50% 70% at 85% 15%, rgba(255,45,45,0.10), transparent 60%), radial-gradient(70% 80% at 50% 110%, rgba(255,255,255,0.06), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
