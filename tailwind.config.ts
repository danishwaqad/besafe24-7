import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "rgb(41 37 36 / <alpha-value>)",
          900: "rgb(68 64 60 / <alpha-value>)",
          800: "rgb(87 83 78 / <alpha-value>)",
          700: "rgb(120 113 108 / <alpha-value>)",
        },
        sea: {
          50: "rgb(238 248 245 / <alpha-value>)",
          100: "rgb(213 239 232 / <alpha-value>)",
          700: "rgb(15 122 114 / <alpha-value>)",
          800: "rgb(12 99 92 / <alpha-value>)",
          900: "rgb(10 79 75 / <alpha-value>)",
        },
        ember: {
          300: "rgb(247 180 138 / <alpha-value>)",
          400: "rgb(229 106 50 / <alpha-value>)",
          500: "rgb(201 74 28 / <alpha-value>)",
        },
        cream: {
          50: "rgb(255 252 248 / <alpha-value>)",
          100: "rgb(247 241 232 / <alpha-value>)",
          200: "rgb(232 224 212 / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 18px 40px -18px rgba(229, 106, 50, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
