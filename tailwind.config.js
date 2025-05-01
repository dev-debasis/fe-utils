/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#6366f1",
        secondary: "#a855f7",
        accent: "#facc15",
        // bgLight: "#f9fafb",
        bgLight: "#f1f5f9",
        bgDark: "#0f172a",
        glassWhite: "rgba(255,255,255,0.1)",
        glassBlack: "rgba(0,0,0,0.4)",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },

  plugins: [],
  darkMode: "class",
};
