import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: "var(--bg-primary)",
          deep: "var(--bg-secondary)",
          light: "var(--bg-elevated)",
        },
        ink: {
          DEFAULT: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        burgundy: {
          DEFAULT: "var(--accent-burgundy)",
          light: "var(--accent-burgundy-light)",
        },
        gold: {
          DEFAULT: "var(--accent-gold)",
          light: "var(--accent-gold-light)",
        },
        sage: {
          DEFAULT: "var(--accent-sage)",
          light: "var(--accent-sage-light)",
        },
        warm: {
          border: "var(--border-subtle)",
          "border-strong": "var(--border-strong)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
