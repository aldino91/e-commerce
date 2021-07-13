module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      padding: ["hover"],
      backgroundColor: ["checked", "active"],
      borderColor: ["checked"],
      animation: ["motion-safe"],
      maxHeight: ["focus"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    {
      strategy: "class",
    },
  ],
};
