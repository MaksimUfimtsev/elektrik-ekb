import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#07060D",
        panel: "#100A1C",
        panel2: "#150D26",
        magenta: { DEFAULT: "#FF2D95" },
        violet: { DEFAULT: "#A855F7" },
        cyan: { DEFAULT: "#00E5FF" },
        acid: { DEFAULT: "#F8FF00" },
        danger: { DEFAULT: "#FF3B3B" },
        txt: "#DCD4EE",
        dim: "#8E84AE",
        line: "rgba(168,85,247,.22)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: { content: "74rem" },
    },
  },
  plugins: [],
};
export default config;
