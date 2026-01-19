/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Red Hat Display"', 'sans-serif'],
        display: ['"Red Hat Display"', 'sans-serif'],
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) linear infinite",
      },
      keyframes: {
        scroll: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
