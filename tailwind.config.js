/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'sg': { 'raw': '(max-width: 360px)' },
        'sp': { 'raw': '(max-width: 390px)' },
        'se': { 'raw': '(max-height: 667px)' },
      },
    },
  },
  plugins: [],
};
