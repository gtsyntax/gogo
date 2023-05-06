import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
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
} satisfies Config

