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
      keyframes: {
        pulse: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.05)",
          },
        },
      },
      animation: {
        pulse: "pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
