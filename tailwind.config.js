// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {
            'max-sm': { 'raw': '(max-width: 375px)' },
            'max-md': { 'raw': '(max-width: 768px)' },
            'xs': '375px',
            'md': '768px',
            'xl': '900px',
          },
          boxShadow: {
            'pink-sh': 'inset 0px -12px 0px 11px #9D2DF5, inset 0px -4px 0px 5px #243041',
          },
      },
    },
    plugins: [],
  }
  
  