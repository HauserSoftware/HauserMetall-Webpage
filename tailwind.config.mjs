/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#01406C',
        secondary: {
          50: '#eef8ff',
          100: '#ddf2ff',
          200: '#b3e5ff',
          300: '#6fd2ff',
          400: '#23bbff',
          500: '#00a3ff',
          600: '#0081dd',
          700: '#0066b3',
          800: '#005793',
          900: '#01406c',
          950: '#012d50',
        },
      },
    },
  },
  plugins: [],
};
