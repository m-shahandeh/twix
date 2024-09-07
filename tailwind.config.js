/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {},
    fontFamily: {
      drupalPrimaryTypefaceFont: [
        "DrupalPrimaryTypefaceFont",
        "Arial",
        "Helvetica Neue",
        "Helvetica",
        "sans-serif",
      ],
    },
  },
  plugins: [],
};
