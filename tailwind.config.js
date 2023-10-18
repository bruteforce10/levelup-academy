/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    extend: {
      colors: {
        prime: "#1759D7",
        second: "#22C58B",
        tersier: "#E5E9F2",
        white: "#F6F8FD",
        deep: "#181230",
        primebase: "#457adf",
        tersierbase: "#181230",
      },
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg-search": {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='305' height='27' viewBox='0 0 305 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.31943 16.2406L161.646 4.72973C164.1 4.55023 165.714 7.23737 164.404 9.31944L159.307 17.4198C157.956 19.5673 159.715 22.3182 162.231 21.9927L300.805 4.06476' stroke='%23FFC947' stroke-width='8' stroke-linecap='round'/%3E%3C/svg%3E%0A");`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "20px 60px",
          backgroundSize: "330px",
        },
      });
    }),
    require("daisyui"),
  ],
  daisyui: {
    themes: false,
    darkTheme: false,
  },
};
