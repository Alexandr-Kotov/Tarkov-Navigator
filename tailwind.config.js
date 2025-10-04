/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#f59e0b", /* amber-500 */
          400: "#fbbf24",
        }
      }
    },
  },
  plugins: [],
}
