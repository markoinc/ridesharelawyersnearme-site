/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',  // Royal blue - main brand color
          light: '#3b82f6',    // Lighter royal blue
          dark: '#1d4ed8',     // Darker royal blue
        },
        secondary: {
          DEFAULT: '#dbeafe',  // Light blue - accent/background
          light: '#eff6ff',    // Lighter blue for subtle backgrounds
          dark: '#bfdbfe',     // Slightly darker light blue
        },
        accent: {
          DEFAULT: '#1e40af',  // Deep blue for emphasis
          green: '#059669',    // Emerald green for success/trust
          gold: '#f59e0b',     // Amber for urgency/CTAs
        }
      },
    },
  },
  plugins: [],
}
