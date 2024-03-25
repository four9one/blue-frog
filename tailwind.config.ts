import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "355px",
      ...defaultTheme.screens,
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      a: "90%",
      b: "70%",
      c: "60%",
    },
    extend: {
      backgroundImage: {
        bgBanner: "url('./assets/banner-bg.png')",
        bgProfile: "url('./assets/profile2.png')",
      },
      colors: {
        primary: "#60CC71",
        light: "#bbb",
        lighter: "#ddd",
        dark: "#333",
        darker: "#111",
        background: "#ECECEC",
        darkText: "#1E1E1E",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
