/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        adlam: ['"ADLaM Display"', "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      screens: {
        customScreen: "1600px",
      },
    },
  },
  plugins: [require("daisyui")],
};
