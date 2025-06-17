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
        primary: '#8600D8',
        'background-light': "##C092DD", // Light mode background
        'background-dark': "#58187F",  // Dark mode background
      },
    },
  },
  plugins: [],
};
export default config;
