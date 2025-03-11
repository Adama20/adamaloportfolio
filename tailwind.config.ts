
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Ajout des couleurs spécifiques pour les thèmes
        blue: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c7fb",
          300: "#66abf9",
          400: "#338ff7",
          500: "#0073f5",
          600: "#005cc4",
          700: "#004593",
          800: "#002e62",
          900: "#001731",
        },
        green: {
          50: "#e6f7ef",
          100: "#ccefdf",
          200: "#99dfbf",
          300: "#66cf9f",
          400: "#33bf7f",
          500: "#00af5f",
          600: "#008c4c",
          700: "#006939",
          800: "#004626",
          900: "#002313",
        },
        purple: {
          50: "#f0e6fe",
          100: "#e1ccfd",
          200: "#c399fb",
          300: "#a566f9",
          400: "#8733f7",
          500: "#6800f5",
          600: "#5300c4",
          700: "#3e0093",
          800: "#2a0062",
          900: "#150031",
        },
        orange: {
          50: "#fef0e6",
          100: "#fde1cc",
          200: "#fbc399",
          300: "#f9a566",
          400: "#f78733",
          500: "#f56800",
          600: "#c45300",
          700: "#933e00",
          800: "#622900",
          900: "#311500",
        },
        teal: {
          50: "#e6fefa",
          100: "#ccfdf5",
          200: "#99fbeb",
          300: "#66f9e1",
          400: "#33f7d7",
          500: "#00f5cd",
          600: "#00c4a4",
          700: "#00937b",
          800: "#006252",
          900: "#003129",
        },
        indigo: {
          50: "#e6e8fe",
          100: "#ccd1fd",
          200: "#99a3fb",
          300: "#6675f9",
          400: "#3347f7",
          500: "#001af5",
          600: "#0015c4",
          700: "#001093",
          800: "#000b62",
          900: "#000531",
        },
        rose: {
          50: "#fee6f0",
          100: "#fdcce1",
          200: "#fb99c3",
          300: "#f966a5",
          400: "#f73387",
          500: "#f50069",
          600: "#c40053",
          700: "#93003e",
          800: "#62002a",
          900: "#310015",
        },
        amber: {
          50: "#fef8e6",
          100: "#fdf1cc",
          200: "#fbe399",
          300: "#f9d566",
          400: "#f7c733",
          500: "#f5b900",
          600: "#c49400",
          700: "#936f00",
          800: "#624a00",
          900: "#312500",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInFromTop: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        dataSpin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in-left": "slideInFromLeft 0.5s ease-out forwards",
        "slide-in-right": "slideInFromRight 0.5s ease-out forwards",
        "slide-in-top": "slideInFromTop 0.5s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
        "data-spin": "dataSpin 10s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
