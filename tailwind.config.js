/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#38bdf8",
        primaryTheme: "#171A46",
        secondaryTheme: "#1B4454",
      },
    },
  },
  plugins: [],
};
