import { fontPlugin } from "./src/lib/font-plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        // Title
        "title-large": ["25px", { lineHeight: "150%", letterSpacing: "0%", fontWeight: "700" }],
        "title-medium-b": ["21px", { lineHeight: "150%", letterSpacing: "0%", fontWeight: "700" }],
        "title-medium": ["21px", { lineHeight: "150%", letterSpacing: "0%", fontWeight: "600" }],
        "title-small": ["19px", { lineHeight: "150%", letterSpacing: "0%", fontWeight: "600" }],
        // Body
        "body-large": ["19px", { lineHeight: "150%", letterSpacing: "0%", fontWeight: "400" }],
        "body-medium-sb": ["17px", { lineHeight: "150%", letterSpacing: "0%", fontWeight: "600" }],
        "body-medium-m": ["17px", { lineHeight: "150%", letterSpacing: "0%", fontWeight: "500" }],
        "body-medium-r": ["17px", { lineHeight: "150%", letterSpacing: "0%", fontWeight: "400" }],
        "body-small": ["15px", { lineHeight: "150%", letterSpacing: "0%", fontWeight: "400" }],
        // Label
        "label-small": ["13px", { lineHeight: "150%", letterSpacing: "0%", fontWeight: "400" }],
      },
      colors: {
        yellow: {
          1: "#FBFBEE",
          2: "#FFFDF7",
          300: "#FFFDF7",
          400: "#FAF7EF",
          500: "#F8F2DE",
          600: "#FEF2C9",
          700: "#FEEBAB",
          800: "#FFE89B",
          900: "#FFE078",
        },
        green: {
          1: "#B5CDB7",
          2: "#C2DAC4",
          3: "#E2ECDC",
          4: "#EFF4E5",
          50: "#E6F5EE",
          100: "#B5CDB7",
          200: "#8AD0B2",
          300: "#54BA8E",
          400: "#EFF4E5",
          500: "#009857",
          600: "#008A4F",
          700: "#006C3E",
          800: "#005430",
          900: "#004025",
          font: "#254434",
        },
        gray: {
          0: "#F4F4F4",
          50: "#EEEFEF",
          100: "#CBCCCD",
          200: "#B2B3B4",
          300: "#8E9092",
          400: "#797B7D",
          500: "#575A5D",
          600: "#4F5255",
          700: "#3E4042",
          800: "#303233",
          900: "#252627",
          1000: "#000000",
        },
        black: {
          font: "#121212",
        },
        Deactivated: {
          font: "#8E8E93", 
        },
        white: {
          font: "#FAFAFA",
        },
        // 기존 시스템 색상 유지
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
      },
    },
    keyframes: {
      "fade-in": {
        "0%": { opacity: "0", transform: "translateY(10px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      "fade-out": {
        "0%": { opacity: "1", transform: "translateY(0)" },
        "100%": { opacity: "0", transform: "translateY(10px)" },
      },
    },
    animation: {
      "fade-in": "fade-in 0.5s ease-out forwards",
      "fade-out": "fade-out 0.5s ease-in forwards",
    },
  },
  plugins: [fontPlugin],
};
