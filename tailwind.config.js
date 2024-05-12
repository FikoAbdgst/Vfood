/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "18": "72px",
        "10screen": "10vh",
        "90screen": "90vh",
        "80screen": "80vh",
      },
      fontSize: {
        "xxs": "8px",
        "2xs": "5px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
