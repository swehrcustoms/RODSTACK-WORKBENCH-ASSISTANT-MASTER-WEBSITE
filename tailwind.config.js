/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B111E",
        workbench: "#0F172A",
        elevated: "#1E293B",
        ink: "#F8FAFC",
        mute: "#94A3B8",
      },
      fontFamily: {
        sans: ['"Segoe UI"', "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 0 48px rgba(34, 211, 238, 0.14)",
        card: "0 24px 60px rgba(2, 6, 23, 0.45)",
      },
      maxWidth: {
        page: "76rem",
      },
    },
  },
  plugins: [],
};
