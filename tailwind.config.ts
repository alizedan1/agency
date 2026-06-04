import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper:      "#FBFAF4",
        cream:      "#F2EFE3",
        "cream-deep": "#ECE8D8",
        tint:       "#EAF0E2",
        "tint-2":   "#E1EAD6",
        sage: {
          DEFAULT: "#6E8B5A",
          deep:    "#51703F",
          soft:    "#9DB389",
        },
        olive: {
          DEFAULT: "#8C9A4C",
          deep:    "#6E7B36",
        },
        forest: {
          DEFAULT: "#18271C",
          2:       "#213A28",
          3:       "#2C4A33",
        },
        ink: {
          DEFAULT: "#24261F",
          soft:    "#3C3F34",
          muted:   "#5E6153",
          ghost:   "#9A9C8C",
        },
        line: {
          DEFAULT: "#E4E1D2",
          soft:    "#EDEADD",
        },
        "on-forest": "#EEF2E6",
        surface: "#FFFFFF",
      },
      fontFamily: {
        sans:  ["Hanken Grotesk", "system-ui", "-apple-system", "sans-serif"],
        serif: ["Newsreader", "Georgia", "Times New Roman", "serif"],
      },
      borderRadius: {
        sm:   "8px",
        DEFAULT: "14px",
        lg:   "22px",
        xl:   "30px",
        pill: "100px",
      },
      animation: {
        "pulse-dot": "vpulse 2s ease-in-out infinite",
        typing1:     "vbounce 1.3s ease-in-out infinite",
        typing2:     "vbounce 1.3s ease-in-out 0.18s infinite",
        typing3:     "vbounce 1.3s ease-in-out 0.36s infinite",
        vrise:       "vrise 0.4s cubic-bezier(0.22,1,0.36,1) both",
        "scroll-bob":"scrollbob 2s ease-in-out infinite",
      },
      keyframes: {
        vpulse: {
          "0%,100%": { opacity: "1",    transform: "scale(1)"   },
          "50%":     { opacity: "0.45", transform: "scale(0.7)" },
        },
        vbounce: {
          "0%,80%,100%": { transform: "translateY(0)",   opacity: "0.4" },
          "40%":          { transform: "translateY(-5px)", opacity: "1"   },
        },
        vrise: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to:   { opacity: "1", transform: "translateY(0)"   },
        },
        scrollbob: {
          "0%,100%": { transform: "translateY(0)"   },
          "50%":     { transform: "translateY(6px)" },
        },
      },
      boxShadow: {
        chat:        "0 30px 70px -30px rgba(36,38,31,0.22), 0 2px 6px rgba(36,38,31,0.04)",
        "btn-sage":  "0 10px 26px rgba(81,112,63,0.28)",
        card:        "0 1px 3px rgba(36,38,31,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
