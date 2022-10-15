module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      base: "#fffcec",
      darkGreen: "#719259",
      clay: "#DD8955",
      lightBlue: "#5B8F9A",
      skyBlue: "#cee4ef",
      pink: "#df7665",
      lightPink: "#f9b1a2",
      gold: "#e0c79d",

      naturalWhite: "#d2cec5",
      freshAir: "#b0bcc8",
      olive: "#719259",
      sorbet: "#fff6be",
      papaya: "#df7665",
      coral: "#f9b1a2",
      chartreuse: "#b3b355",
    },
    backgroundImage: {},
    extend: {
      backgroundImage: {
        flowers: "url('/src/assets/flowers.png')",
        stars: "url('/src/assets/stars.png')",
        wallpaper: "url('/src/assets/wallpaper.png')",
      },
    },
  },
  plugins: [],
};
