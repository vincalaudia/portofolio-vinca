import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Scans all files in the 'pages' directory
    "./Components/**/*.{js,ts,jsx,tsx}", // Scans all files in the 'Components' directory
    "./styles/**/*.css", // Scans all CSS files in the 'styles' directory
    // You can add more paths here if you have other directories where you use Tailwind CSS classes
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
