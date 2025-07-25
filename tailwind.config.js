import konstaConfig from "konsta/config";

/** @type {import('tailwindcss').Config} */
export default konstaConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
});
