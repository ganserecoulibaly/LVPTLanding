/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f5f0ea',
        'cream-dark': '#ede8e0',
        navy: '#1e2d3d',
        'navy-light': '#2d3f52',
        coral: '#e8735a',
        'coral-light': '#f0a090',
        teal: '#4a8c7a',
        sand: '#d4c4b0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}
