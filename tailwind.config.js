import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-white": "#F9F9F9",
        grey: "#686868",
        "dark-grey": "#262626",
        "grey-50": "rgba(227, 227, 227, 0.50)",
        "grey-20": "rgba(249, 249, 249, 0.20)",
        "grey-10": "rgba(249, 249, 249, 0.10)",
        "light-grey-20": "rgba(104, 104, 104, 0.20)",
        dark: "#141414",
        "light-dark": "#1F1F1F",
        blue: "#4F92F7",
        green: "#30B94D",
        red: "#E90516",
        "light-red": "#E85050",
        "red-10": "rgba(232, 80, 80, 0.10)",
        "red-20": "rgba(232, 80, 80, 0.20)",
        "red-80": "rgba(232, 80, 80, 0.90)",
        overlay: "rgba(20, 20, 20, 0.60)",
        select: "#3E3E3E",
      },
      screens: {
        sm: { max: "374px" },
        s: "375px",
        md: "768px",
        lg: "1440px",
      },
      borderRadius: {
        2: "2px",
        4: "4px",
        8: "8px",
        12: "12px",
        15: "15px",
        30: "30px",
      },
      fontSize: {
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        28: "28px",
        40: "40px",
        32: "32px",
        50: "50px",
        64: "64px",
        68: "68px",
        70: "70px",
      },
      fontFamily: {
        "gilroy-bold": "Gilroy-Bold",
        "gilroy-medium": "Gilroy-medium",
      },
      transitionDuration: {
        350: "350ms",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Gilroy-Bold",
          src: "url(assets/fonts/Gilroy-Bold.ttf)",
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Gilroy-Medium",
          src: "url(assets/fonts/Gilroy-Medium.ttf)",
        },
      });
    }),
  ],
};
