/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        saffron: "#FF7A00",
        leaf: "#1B5E20",
        cream: "#FFF8E7",
        redrich: "#8B0000",
        ink: "#21150F",
      },
      fontFamily: {
        heading: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 28px 80px rgba(139, 0, 0, 0.16)",
        glow: "0 0 34px rgba(255, 122, 0, 0.34)",
      },
      borderRadius: {
        premium: "16px",
      },
    },
  },
  plugins: [],
};
