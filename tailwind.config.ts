import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        danaRegular: ["var(--font-dana-regular)"],
        danaThin: ["var(--font-dana-thin)"],
        danaLight: ["var(--font-dana-light)"],
        danaMedium: ["var(--font-dana-medium)"],
        danaExtrabold: ["var(--font-dana-extrabold)"],
        danaExtralight: ["var(--font-dana-extralight)"],
        danaBold: ["var(--font-dana-bold)"],
        danaBlack: ["var(--font-dana-black)"],
        danaDemibold: ["var(--font-dana-demibold)"],
      },
      colors: {
        // Primary colors
        primary: "#6750A4",
        "primary-dark": "#D0BCFF",
        "primary-container": "#EADDFF",
        "primary-container-dark": "#4F378B",
        onPrimary: "#FFFFFF",
        "onPrimary-dark": "#381E72",
        // Secondary colors
        secondary: "#625B71",
        "secondary-dark": "#CCC2DC",
        "secondary-container": "#E8DEF8",
        "secondary-container-dark": "#4A4458",
        onSecondary: "#FFFFFF",
        "onSecondary-dark": "#332D41",

        // Tertiary colors
        tertiary: "#7D5260",
        "tertiary-dark": "#EFB8C8",
        "tertiary-container": "#FFD8E4",
        "tertiary-container-dark": "#633B48",
        onTertiary: "#FFFFFF",
        "onTertiary-dark": "#492532",

        // Error colors
        error: "#B3261E",
        "error-dark": "#F2B8B5",
        "error-container": "#F9DEDC",
        "error-container-dark": "#8C1D18",
        onError: "#FFFFFF",
        "onError-dark": "#601410",

        // Surface colors
        surface: "#FFFFFF",
        "surface-dark": "#1C1B1F",
        onSurface: "#1C1B1F",
        "onSurface-dark": "#E6E1E5",

        // Outline colors
        outline: "#79747E",
        "outline-dark": "#938F99",
      },
    },
  },
  plugins: [],
};
export default config;
