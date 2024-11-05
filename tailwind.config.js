// tailwind.config.js
module.exports = {
  corePlugins: {
    preflight: false, // Disable Tailwind's preflight
  },
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
