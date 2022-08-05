/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1976d2",
          secondary: "#f2f2f2",
          accent: "#E8AA42",
          neutral: "#002B5B",
          "base-100": "#F5F5F5",
        },
      },
      "dark",
      "",
    ],
  },
  plugins: [require("daisyui")],
  darkMode: "class"
}
