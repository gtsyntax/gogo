/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#4c3398",
        "brand-secondary": "#7849f7",
        "brand-yellow": "#ffd300",
      }
    },
  },
  plugins: [],
}

