/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "#ffffff00",
      "cod-gray": {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#101010",
      },
      tango: {
        50: "#fef7ee",
        100: "#fceed8",
        200: "#f8d8b0",
        300: "#f3bc7e",
        400: "#ee9649",
        500: "#e97824",
        600: "#db601b",
        700: "#b54919",
        800: "#913b1b",
        900: "#753319",
        950: "#3f170b",
      },
    },
  },
  plugins: [],
};
