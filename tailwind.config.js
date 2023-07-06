/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        myColor: '#ff00ff',
        customColor: {
          light: '#abcdef',
          dark: '#654321'
        },
        gold: '#6E6655'
      }
    },
  },
  plugins: [],
}

