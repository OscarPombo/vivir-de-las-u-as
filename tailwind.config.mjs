/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#B5455A',
          dark:    '#8E3447',
        },
        surface: {
          DEFAULT: '#FAFAF8',
          alt:     '#F2EDE9',
        },
        content: {
          DEFAULT: '#1C1C1C',
          muted:   '#6B6565',
        },
        border: '#DDD7D1',
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      maxWidth: {
        text: '700px',
      },
    },
  },
  plugins: [],
};
