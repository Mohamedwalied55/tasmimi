/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: "#F5F7F2",
          100: "#E8EDDF",
          200: "#D4DDC8",
          300: "#B8C5A8",
          400: "#91A477",
          500: "#6B7D4A",
          600: "#5F6F45",
          700: "#4A5935",
          800: "#3F4B2F",
          900: "#2D3622"
        },
        cream: {
          50: "#FFFEFC",
          100: "#FDFBF7",
          200: "#F8F5EE"
        },
        beige: {
          50: "#FAF8F4",
          100: "#F5F0EB",
          200: "#EDE6DD",
          300: "#E2D8CB"
        },
        warmGray: {
          50: "#F8F9F7",
          100: "#EEF0EC",
          200: "#DDE1DA",
          300: "#C5CBC1",
          400: "#9CA49A",
          500: "#7E857B",
          600: "#666D64",
          700: "#4F554D",
          800: "#353A34",
          900: "#252922"
        }
      },
      fontFamily: {
        sans: [
          "var(--font-arabic)",
          "Cairo",
          "Tajawal",
          "Arial",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 10px 40px rgba(63, 75, 47, 0.08)",
        card: "0 4px 24px rgba(63, 75, 47, 0.06)",
        olive: "0 8px 30px rgba(95, 111, 69, 0.18)"
      }
    }
  },
  plugins: []
};
