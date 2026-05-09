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
        bg: {
          primary: "#050810",
          secondary: "#0c1120",
          card: "#0f1628",
        },
        accent: {
          purple: "#6c63ff",
          cyan: "#00d4ff",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #6c63ff 0%, #00d4ff 100%)",
        "gradient-accent-r": "linear-gradient(135deg, #00d4ff 0%, #6c63ff 100%)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        float2: "float2 10s ease-in-out infinite",
        float3: "float3 7s ease-in-out infinite",
        pulse2: "pulse2 2s ease-in-out infinite",
        typing1: "typing 1.4s ease-in-out infinite",
        typing2: "typing 1.4s ease-in-out 0.2s infinite",
        typing3: "typing 1.4s ease-in-out 0.4s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        float3: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8)" },
        },
        typing: {
          "0%, 80%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "40%": { transform: "translateY(-6px)", opacity: "1" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(108, 99, 255, 0.3)",
        "glow-lg": "0 0 60px rgba(108, 99, 255, 0.4)",
        "glow-btn": "0 4px 24px rgba(108, 99, 255, 0.4)",
        "glow-btn-hover": "0 8px 32px rgba(108, 99, 255, 0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
