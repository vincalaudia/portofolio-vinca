/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // For pages
    "./Components/**/*.{js,ts,jsx,tsx}", // For components in 'my-porto/Components'
    "./styles/**/*.css", // If you use Tailwind in CSS files in 'styles' directory
    // Add any other directories where you might use Tailwind CSS classes,

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
