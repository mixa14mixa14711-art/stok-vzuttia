import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fdf4ef",
          100: "#fae4d4",
          200: "#f3c29e",
          300: "#ea9a63",
          400: "#e17a3a",
          500: "#cf5d1f",
          600: "#a7461a",
          700: "#7f3618",
          800: "#5a2814",
          900: "#3b1c10",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
