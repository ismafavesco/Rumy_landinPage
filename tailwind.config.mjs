import defaultTheme from "tailwindcss/defaultTheme";
import config from "./src/utils/config";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      "3xs": "350px",
      "2xs": "400px",
      xs: "475px",
      ...defaultTheme.screens, // Merge with default screens
    },
    extend: {
      fontFamily: {
        sketch: ["CabinSketch", ...defaultTheme.fontFamily.mono],
        sans: ["Rowdies", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        corporate: {
          ...require("daisyui/src/theming/themes")["[data-theme=corporate]"],
          "primary": "#c7f9cc",     // Fresh mint green
          "secondary": "#26342D",  //  green-gray
          "primary-content": "#1a1a1a", // Darker black for strong contrast
          "neutral": "#26342D",         // Green dark
          "neutral-content": "#e5f0e9", // Softer light green-gray for readability
          "base-100": "#292929",        // Gray background
          "base-content": "#f2f2f2"     // Light gray for text on gray background
        }
      },
      "dark", // Default dark theme
      config.theme // Your custom theme from config
    ],
  },
};
