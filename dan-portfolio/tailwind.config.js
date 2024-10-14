/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      xsm: "500px", // Custom screen size @media (min-width: 500px)
      sm: "640px", // Tailwind's default 'sm'
      md: "768px", // Tailwind's default 'md'
      lg: "1024px", // Tailwind's default 'lg'
      xl: "1280px", // Tailwind's default 'xl'
      "2xl": "1536px", // Tailwind's default '2xl'
    },
  },
  plugins: [],
};
