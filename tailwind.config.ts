import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      colors: {
        charcoal: {
          DEFAULT: "#1a1a1a",
          50: "#f5f5f5",
          100: "#e5e5e5",
          200: "#cfcfcf",
          300: "#a8a8a8",
          400: "#737373",
          500: "#525252",
          600: "#3d3d3d",
          700: "#2a2a2a",
          800: "#1a1a1a",
          900: "#0f0f0f",
        },
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,0,0,0.08), transparent 60%)",
        "soft-grid":
          "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "marquee": "marquee 40s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
