/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'dugas': ['Dugas', 'sans-serif'],
        'favorit': ['Favorit', 'serif'],
        'favorit-bold': ['Favorit-bold', 'serif'],
        'favorit-mono': ['Favorit-mono', 'serif'],
      },
      colors:{
        "border-black": "var(--border-black) "
      },
    },
  },
  plugins: [],
};
