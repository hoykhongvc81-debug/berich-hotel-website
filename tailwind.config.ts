import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#800020",
          dark: "#600018",
          light: "#9A0025",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8CA5A",
          dark: "#B8941E",
        },
        cream: {
          DEFAULT: "#FDFBF7",
          dark: "#F5F0E8",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        sarabun: ["var(--font-sarabun)", "sans-serif"],
        prompt: ["var(--font-sarabun)", "sans-serif"],
        montserrat: ["var(--font-sarabun)", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 4px 24px rgba(0,0,0,0.08)",
        "luxury-hover": "0 8px 40px rgba(0,0,0,0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
