/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "#16D5FF",
        "dark-navy": "#0A1F2C",
        "midnight-blue": "#14253C",
        "light-gray": "#E8F2F7",
        "bright-green": "#00E676",
        "warning-orange": "#FFAB40",
        "text-dark-gray": "#2D2D2D",
      },
    },
  },
  plugins: [],
};
