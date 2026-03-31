import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        card: "#F5F5F5",
        neutral: {
          50:  "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        glass: {
          light: "rgba(255, 255, 255, 0.5)",
          medium: "rgba(255, 255, 255, 0.65)",
          heavy: "rgba(255, 255, 255, 0.82)",
          card: "rgba(250, 250, 250, 0.55)",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.06)",
        "glass-raised": "0 20px 60px -10px rgba(0, 0, 0, 0.12)",
        "glass-soft": "0 4px 16px 0 rgba(0, 0, 0, 0.04)",
        "glass-elevated": "0 24px 48px -12px rgba(0, 0, 0, 0.15)",
        "glass-glow": "0 0 40px rgba(0, 0, 0, 0.08)",
        "button-glow": "0 0 24px rgba(23, 23, 23, 0.15)",
        "button-hover": "0 0 32px rgba(23, 23, 23, 0.25)",
      },
      borderRadius: {
        card: "24px",
        image: "16px",
        input: "12px",
        button: "9999px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      backdropBlur: {
        glass: "32px",
        "glass-heavy": "40px",
        "glass-light": "16px",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(200%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-scale": "fadeInScale 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        shimmer: "shimmer 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
