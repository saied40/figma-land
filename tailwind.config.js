/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: "var(--body-bg)",
        // header: "var(--header-bg)",
      },
      spacing: {
        35: "8.75rem",
      },
      boxShadow: {
        DEFAULT: "0 0 30px 8px var(--tw-shadow-color)",
      },
      // animation: [],
      // keyframes: {
      //   name: {
      //     "0%": {},
      //     "100%": {},
      //   },
      // },
    },
    fontFamily: {
      body: ["Graphik", "sans-serif"],
    },
  },
  // plugins: [],
  corePlugins: {
    textOpacity: false,
    ringOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    backdropOpacity: false,
    backgroundOpacity: false,
    placeholderOpacity: false
  },
};
