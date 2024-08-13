/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      // padding: '16px'
    },
    extend: {
      screens: {
        "2xl": "1320px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4b92ff",

          secondary: "#b7e3ff",

          accent: "#0c4eb3",

          neutral: "#142d55",

          "base-100": "#ffffff",

          // "base-100": "#fbfeff",

          info: "#0dcaf0",

          success: "#147858",

          warning: "#ffc107",

          error: "#cc2f3e",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
