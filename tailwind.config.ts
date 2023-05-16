import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        robotocondensed: ["Roboto Condensed", "sans-serif"],
        robotoslab: ["Roboto Slab", "sans-serif"],
      },
      height: {
        "176": "44rem;",
      },
      width: {
        "128": "32rem;",
        "176": "44rem;",
      },
      backgroundImage: {
        login: "url('img/forest-bg.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
