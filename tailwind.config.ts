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
        "primary-color": "var(--color)",
      },
      backgroundColor: {
        "primary-bg-out": "var(--background-out)",
        "primary-bg-in": "var(--background-in)",
      }
    },
  },
  plugins: [],
};
export default config;
