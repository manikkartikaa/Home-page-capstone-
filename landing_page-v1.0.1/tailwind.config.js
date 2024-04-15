module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        blue_gray: {
          50: "#eff2f1",
          700: "#446a60",
          800: "#3b5d50",
          900: "#2f2f2f",
          "800_01": "#2e5a52",
          "700_33": "#34736e33",
        },
        gray: {
          500: "#9db498",
          700: "#6a6a6a",
          800: "#4b4b4b",
          "500_72": "#9db49872",
          "400_cc": "#c9c9c9cc",
          "500_7f": "#9db4987f",
          "500_4c": "#9db4984c",
        },
        black: { 900: "#000000" },
        amber: { A200: "#ffd647", A200_4c: "#ffd6474c" },
      },
      boxShadow: { xs: "4px 8px 8px 0px #446a60", sm: "3px 5px 4px 0px #000000", md: "0px 4px 4px 0px #000000" },
      fontFamily: { roboto: "Roboto", inter: "Inter", dmseriftext: "DM Serif Text" },
      textShadow: { ts: "0px 4px 4px #000000" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
