import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        "md-xl": "990px",
        lg: "1152px",
        xl: "1280px",
        "2xl": "1536px",
      },
      boxShadow: {
        '4-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 -10px 15px -3px rgb(0 0 0 / 0.1), 10px 0 15px -3px rgb(0 0 0 / 0.1), -10px 0 15px -3px rgb(0 0 0 / 0.1)',
      }
    },
    colors: {
      ...colors,
      primary: {
        light: "#217974",
        secondary: "#dcb07b",
        textColor: "#201616",
        whiteGray:"#6C7072"
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
export default config;
