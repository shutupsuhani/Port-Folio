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
        primary: '#3498db',
        'background-light': "#ffffff", // Light mode background
        'background-dark': "#121212",  // Dark mode background
      },
    },
  },
  plugins: [],
};
export default config;
