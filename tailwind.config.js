/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_colour: "var(--primary-colour)",

        text_primary_colour: "var(--text-colour)",
        text_secondary_colour: "var(--text-secondary-colour)",
      },
      backgroundImage: {
        banner_bg: "url('./src/assets/images/landingpage/banner.png')",
      },

      fontFamily: {
        custom_primary_font: "var(--custom-primary-font)",
      },
    },
  },
  plugins: [],
};
