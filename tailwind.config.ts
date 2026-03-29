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
        card: "#FFF6EE",
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
        card: "0 4px 24px rgba(232, 168, 56, 0.08)",
        "button-hover": "0 6px 20px rgba(232, 168, 56, 0.35)",
      },
      borderRadius: {
        card: "20px",
        image: "16px",
        input: "12px",
        button: "9999px"
      }
    },
  },
  plugins: [],
};
export default config;
