/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#0AAD0A",
        "brand-secondary": "#0AAD0A",
        "brand-accent": "#FAF1E5",
        "brand-black": "#070707",
        "brand-white": "#FFFFFF",
      }
    },
  },
  plugins: [],
}

