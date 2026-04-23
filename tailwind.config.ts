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
          bg: "#0a0a0b",
          surface: "#111113",
          line: "#1f1f22",
          ink: "#f4f4f5",
          mute: "#a1a1aa",
          red: "#ff2d2d",
          fire: "#ff6a1a",
          lime: "#d4ff00",
          cyan: "#00e5ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Impact", "Oswald", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -5px rgba(255,45,45,0.45)",
        limeGlow: "0 0 40px -5px rgba(212,255,0,0.45)",
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
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulseGlow: "pulseGlow 2.2s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
