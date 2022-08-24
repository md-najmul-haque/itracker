/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  daisyui: {
    themes: [
      {
        theme: {
          primary: "#1976d2",
          secondary: "#f2f2f2",
          accent: "#06283D",
          neutral: "#002B5B",
          "orange": "#ff6400",
          "base-100": "#F5F5F5",
        },
      },
      // "dark",
      // "",
    ],
  },
  plugins: [require("daisyui"), require('tw-elements/dist/plugin')],
}
