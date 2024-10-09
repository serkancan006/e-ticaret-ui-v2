import type { Config } from "tailwindcss";
import aspectRatio from '@tailwindcss/aspect-ratio'; // Import the plugin

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true,
        padding: '0.25rem',
      }
    },
  },
  plugins: [
    aspectRatio, // Use the imported plugin
  ],
};

export default config;
