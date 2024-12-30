/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        prime: "#FACA13",
      },
    },
    fontFamily: {
      //serif: ["NotoSerif", "serif"],
      sans: ["Nunito_Sans", "sans"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
