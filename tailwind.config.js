/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
    colors: {
      "giants_orange" : "#FF521B",
      "pumpkin": "#F96900",
      "rich_black": "#0D1821"
    }
  },
  plugins: [],
}

