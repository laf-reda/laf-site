/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-alt": "var(--bg-alt)",
        "bg-surface": "var(--bg-surface)",
        "bg-card": "var(--bg-card)",
        "bg-hover": "var(--bg-hover)",
        gold: "var(--gold)",
        "gold-light": "var(--gold-light)",
        "gold-deep": "var(--gold-deep)",
        "gold-dim": "var(--gold-dim)",
        "gold-border": "var(--gold-border)",
        text: "var(--text)",
        "text-dim": "var(--text-dim)",
        "text-muted": "var(--text-muted)",
      },
      fontFamily: {
        display: ["var(--display)", "Georgia", "serif"],
        body: ["var(--body)", "system-ui", "sans-serif"],
        label: ["var(--label)", "sans-serif"],
      },
      fontSize: {
        "x-small": "0.68rem",
        small: "0.62rem",
        medium: "0.65rem",
        large: "0.85rem",
        "x-large": "1.05rem",
        "xx-large": "1.9rem",
        "xxx-large": "2.2rem",
      },
      spacing: {
        max: "1200px",
        pad: "clamp(1.5rem, 5vw, 4rem)",
        gap: "clamp(1.5rem, 3vw, 2.5rem)",
      },
      transitionTimingFunction: {
        "ease-custom": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        fadeUp: "fadeUp 0.9s ease-custom",
        fadeIn: "fadeIn 0.8s ease",
        scrollPulse: "scrollPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(36px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};
