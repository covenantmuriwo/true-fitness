/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-red': '#dc2626',
        'logo-red': '#ef4444',        // brighter for logos
        'dark-bg': '#0a0a0a',
        'dark-card': '#1f2937',
        'accent-gold': '#d97706',
        'light-text': '#f1f5f9',
      },
      fontFamily: {
        heading: ['Impact', 'sans-serif'], // or import a bold gym font later
      }
    },
  },
  plugins: [],
}