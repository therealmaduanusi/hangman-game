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
      },
    },
    plugins: [],
  }
  
  