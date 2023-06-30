import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sofia: ["var(--font-sofia)", ...fontFamily.sans],
        "PT-sans": ["var(--font-pt-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
