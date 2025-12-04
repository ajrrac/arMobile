/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#22C55E",
          dark: "#16A34A",
        },
        danger: "#EF4444",
        background: "#F9FAFB",
        card: "#FFFFFF",
        border: "#E5E7EB",
        text: {
          dark: "#111827",
          gray: "#6B7280",
          light: "#9CA3AF",
        },
      },
      fontSize: {
        "greeting": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "balance": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "label": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "card-title": ["16px", { lineHeight: "24px", fontWeight: "500" }],
        "tab": ["12px", { lineHeight: "16px", fontWeight: "500" }],
      },
      borderRadius: {
        "card": "12px",
        "button": "50px",
      },
    },
  },
  plugins: [],
};

