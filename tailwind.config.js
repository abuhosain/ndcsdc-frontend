/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Core Brand Tokens (05_DESIGN.md) */
        ink: {
          DEFAULT: "#1A1614",
          secondary: "#4A4540",
          muted: "#6E685E",
          onDark: "#F5EFE0",
          pure: "#110E0C",
        },
        brand: {
          DEFAULT: "#A81818",
          hover: "#8F1313",
          bright: "#D91A1A",
          maroon: "#6B2E2A",
          gold: "#E8C547",
        },
        /* Canvas & Surfaces - Proposal Authentic Palette */
        canvas: {
          DEFAULT: "#E6E0CD",
          light: "#EFEADB",
          white: "#FFFFFF",
        },
        surface: {
          1: "#EFEADB",
          2: "#E6E0CD",
          sand: "#B8B09A",
          card: "#F4EFE2",
          muted: "#DFD8C4",
        },
        border: {
          DEFAULT: "#B9B29E",
          subtle: "#CBC4B1",
          strong: "#9E9783",
        },
        /* Semantic */
        success: "#2E7D32",
        warning: "#B7791F",
        error: "#B3261E",
        info: "#1F5FA8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderRadius: {
        DEFAULT: "8px",
        card: "10px",
        lg: "10px",
        xl: "12px",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(26, 22, 20, 0.05)",
        card: "0 4px 12px rgba(26, 22, 20, 0.06)",
        cardHover: "0 8px 24px rgba(26, 22, 20, 0.10)",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
