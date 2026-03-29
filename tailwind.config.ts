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
        background: "#FFFBF7",
        glass: {
          light: "rgba(255, 255, 255, 0.4)",
          medium: "rgba(255, 255, 255, 0.6)",
          heavy: "rgba(255, 255, 255, 0.8)",
          card: "rgba(255, 246, 238, 0.5)"
        },
        pink: {
          accent: "#F4A7B9",
        },
        gold: {
          accent: "#E8A838",
        },
        brown: {
          primary: "#2C1810",
          secondary: "#7A5C52"
        }
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(44, 24, 16, 0.05)",
        "glass-raised": "0 14px 40px -10px rgba(232, 168, 56, 0.2)",
        "button-glow": "0 0 24px rgba(232, 168, 56, 0.4)",
        "button-hover": "0 0 32px rgba(232, 168, 56, 0.6)",
      },
      borderRadius: {
        card: "24px",
        image: "16px",
        input: "12px",
        button: "9999px"
      }
    },
  },
  plugins: [],
};
export default config;
