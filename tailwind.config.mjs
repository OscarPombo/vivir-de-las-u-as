/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        rosa: {
          50:  '#fff0f5',
          100: '#ffe0ec',
          400: '#f472a8',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
        },
        dorado: {
          400: '#f6c90e',
          500: '#eab308',
          600: '#ca8a04',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
