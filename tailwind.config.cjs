/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "black-gray": "#050505",
      },
      backgroundColor: {
        "black-gray": "#050505",
      },
      fontSize: {
        h2: "52px",
      },
    },
  },
  plugins: [],
};
