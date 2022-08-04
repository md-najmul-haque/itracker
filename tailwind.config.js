/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00ADB5",
          secondary: "#0d0e10",
          accent: "#E23E57",
          neutral: "#3d4451",
          "base-100": "#F5F5F5",
        },
      },
      "dark",
      "",
    ],
  },
  plugins: [require("daisyui")],
}
