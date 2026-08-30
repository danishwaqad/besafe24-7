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
          950: "#061018",
          900: "#0A1824",
          800: "#102333",
          700: "#1A3548",
        },
        ember: {
          300: "#F6C98A",
          400: "#E8A54B",
          500: "#D8892A",
        },
        cream: {
          50: "#FBF7F0",
          100: "#F4EDE3",
          200: "#E8D9C4",
        },
        sage: "#3D8B7A",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 60px -20px rgba(216, 137, 42, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
