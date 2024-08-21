/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        fu: { max: "600px" },
        // , max: "720px"
      },
    },
  },
  plugins: [],
};
