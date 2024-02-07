/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-background-color": "#0F0F0F",
        "secondary-background-color": "#1A1A1A",
        "primary-border-color": "#292929",
        "primary-heading-color": "#525252",
        "primary-icon-selected-color": "#772AF4",
      },
      fontFamily: {
        cashrole: ["Cashrole", "sans-serif"],
      },
    },
  },
  plugins: [],
};
