/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "320px",
      smd: "500px",
      xmd: "600px",
      pmd: "700px",
      md: "950px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1330px",
      "3xl": "1440px",
    },
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-5%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "bounce-anim": "bounce 1s infinite",
      },
    },
  },
};
