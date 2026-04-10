/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"Cascadia Code"', '"Fira Code"', '"Consolas"', 'monospace'],
      },
      colors: {
        ms: {
          red: '#F25022',
          green: '#7FBA00',
          blue: '#00A4EF',
          yellow: '#FFB900',
        },
        brand: {
          blue: '#0078D4',
          deep: '#005faa',
        },
        github: {
          dark: '#24292E',
          hover: '#1B1F23',
        },
      },
    },
  },
  plugins: [],
};
