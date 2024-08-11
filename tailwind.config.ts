import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|chip|input|popover|ripple|spinner).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "img-advertisement": "url('/img/Abstract Design.svg')",
      },
      colors: {
        "purple-shades": {
          60: "#703BF7",
          65: "#8254F8",
          70: "#946CF9",
          75: "#A685FA",
          90: "#DBCEFD",
          95: "#EDE7FE",
          97: "#F4F0FE",
          99: "#FBFAFF",
        },
        "white-shades": {
          90: "#E4E4E7",
          95: "#F1F1F3",
          97: "#F7F7F8",
          99: "#FCFCFD",
        },
        "grey-shades": {
          8: "#141414",
          10: "#1A1A1A",
          15: "#262626",
          20: "#333333",
          30: "#4D4D4D",
          40: "#666666",
          50: "#808080",
          60: "#999999",
        },
      },
    },
  },
  plugins: [nextui()],
};
export default config;
