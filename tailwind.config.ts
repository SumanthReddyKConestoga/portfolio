import type { Config } from "tailwindcss";

// Parisian Blue theme — chalk backgrounds, slate blue text, powder blue accents.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#0B1030",
          925: "#12163A",
          900: "#171C46",
          875: "#1D2352",
        },
        surface: {
          DEFAULT: "rgba(13,17,45,0.55)",
          raised: "rgba(255,255,255,0.05)",
          high: "rgba(255,255,255,0.10)",
        },
        content: {
          primary: "#F7F8FC",
          secondary: "#C9CDE4",
          muted: "#9BA1C4",
        },
        accent: {
          DEFAULT: "#E879F9",
          sharp: "#F0ABFC",
          silver: "#CBB6F0",
          success: "#4ADE80",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderColor: {
        line: "rgba(247, 248, 252, 0.14)",
        "line-strong": "rgba(247, 248, 252, 0.24)",
      },
      maxWidth: {
        shell: "76rem",
      },
      animation: {
        "pulse-dot": "pulseDot 2.4s ease-in-out infinite",
        blink: "blink 1.1s step-end infinite",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
