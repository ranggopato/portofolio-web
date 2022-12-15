/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        cursor: "cursor .6s linear infinite alternate",
        type: "type 1.8s ease-out .8s 1 normal both",
        "type-reverse": "type 1.8s ease-out 0s infinite alternate-reverse both",
      },
      colors: {
        navbar: "rgb(0, 255, 0)",
        blacky: "rgb(60, 60, 59)",
        kuning: "rgb(245, 236, 67)",
        cokelat: "rgb(102, 97, 5)",
        test: "rgb(0, 59, 0)",
      },
    },
    fontFamily: {
      quicksand: ["Rubik Vinyl", "cursive"],
      ibm: ["IBM Plex Mono", "monospace"],
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({});
    }),
  ],
};
