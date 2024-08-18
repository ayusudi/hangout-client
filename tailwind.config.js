/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        conthrax: ['Conthrax', 'sans-serif'],
        myriad: ['Myriad Pro Regular', 'serif'],
        myriadb: ['Myriad Pro Bold', 'serif'],
        myriadl: ['Myriad Pro Light', 'serif'],
      },
    },
  },
  plugins: [],
}
