/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00ADB5",
          secondary: "#222831",
          accent: "#393E46",
          neutral: "#3d4451",
          "base-100": "#EEEEEE",
        },
      },
      "dark",
      "",
    ],
  },
  plugins: [require("daisyui")],
}
