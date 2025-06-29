module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e1e2f",
        secondary: "#4caf50",
        accent: "#007bff",
        background: "#121212",
        text: "#ffffff"
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem'
      }
    }
  },
  plugins: []
};