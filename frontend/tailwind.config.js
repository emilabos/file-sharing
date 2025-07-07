/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#4285F4",
          blueLight: "#6FA8F5",
          blueDark: "#1967D2",
        },
        secondary: {
          purple: "#8B5CF6",
          purpleLight: "#A78BFA",
          purpleDark: "#7C3AED",
        },
        accent: {
          orange: "#FF6B47",
          orangeLight: "#FF8A6B",
          orangeDark: "#E5512D",
        },
        success: {
          green: "#10B981",
          greenLight: "#34D399",
          greenBg: "#ECFDF5",
        },
        warning: {
          yellow: "#F59E0B",
          yellowLight: "#FCD34D",
          yellowBg: "#FFFBEB",
        },
        error: {
          red: "#EF4444",
          redLight: "#F87171",
          redBg: "#FEF2F2",
        },
        office: {
          excel: "#1D6F42",
          word: "#185ABD",
          powerpoint: "#B7472A",
        },
        file: {
          pdf: "#E53E3E",
          image: "#8B5CF6",
          text: "#6B7280",
          video: "#F56565",
          zip: "#FFA500",
          default: "#4A5568",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      animation: {
        spin: "spin 1s linear infinite",
        fadeIn: "fadeIn 0.3s ease-out",
        float: "float 3s ease-in-out infinite",
        "float-delayed": "float 3s ease-in-out infinite 1s",
        "float-slow": "float 4s ease-in-out infinite",
        "float-fast": "float 2.5s ease-in-out infinite 0.5s",
        pulse: "pulse 2s ease-in-out infinite",
        "letter-glow": "letterGlow 2s ease-in-out infinite alternate",
        "tooltip-bounce": "tooltipBounce 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
            opacity: "1",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(1.1)",
            opacity: "0.8",
          },
        },
        letterGlow: {
          "0%": { filter: "brightness(1) saturate(1)" },
          "100%": { filter: "brightness(1.2) saturate(1.3)" },
        },
        tooltipBounce: {
          "0%": {
            transform: "translateX(-50%) translateY(10px)",
            opacity: "0",
          },
          "100%": { transform: "translateX(-50%) translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
