/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "arvo": ["Arvo", "serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
            "primary": "#22d3ee",
            "secondary": "#1e1b4e",
            "accent": "#fafaf9",
            "neutral": "#fafaf9",
            "base-100": "#ffffff",
            "info": "#3abff8",   
            "success": "#36d399",
            "warning": "#fbbd23",
            "error": "#f87272",
        },
      },
    ],
  },
  plugins: [
    require("daisyui")
  ],
}

