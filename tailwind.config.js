/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://files.refokus.com/storage/v1/object/public/Website%20Assets/Glass%20background.webm')",
      }
    },
  },
  plugins: [],
}

