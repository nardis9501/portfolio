/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#38bdf8",
        primaryTheme: "#242883",
        secondaryTheme: "#1B4454",
      },
    },
  },
  plugins: [],
};
