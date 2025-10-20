/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // For App Router
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "border-glow": "border-glow 2s ease-in-out infinite",
      },
      keyframes: {
        "border-glow": {
          "0%": {
            borderColor: "rgba(99, 102, 241, 0.4)", // indigo-500 with opacity
            boxShadow:
              "0 0 5px rgba(99, 102, 241, 0.3), 0 0 10px rgba(99, 102, 241, 0.2)",
          },
          "50%": {
            borderColor: "rgba(99, 102, 241, 0.8)",
            boxShadow:
              "0 0 10px rgba(99, 102, 241, 0.5), 0 0 15px rgba(99, 102, 241, 0.3)",
          },
          "100%": {
            borderColor: "rgba(99, 102, 241, 0.4)",
            boxShadow:
              "0 0 5px rgba(99, 102, 241, 0.3), 0 0 10px rgba(99, 102, 241, 0.2)",
          },
        },
      },
    },
  },
  plugins: [],
};
