import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  // Tailwind v4 типы хотят кортеж, если используешь class-стратегию:
  // ["class", selector]
  darkMode: ["class", ".dark"],

  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/features/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],

  theme: {
    extend: {}
  },

  plugins: [tailwindcssAnimate]
};

export default config;
