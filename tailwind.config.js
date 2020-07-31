module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        beaver: "#9e7166",
        codGray: "#111111",
        mirage: "#17192b",
        ebonyClay: "#242b37",
        shuttleGray: "#5c6779",
      },
      spacing: {
        450: "450px",
        520: "520px",
        750: "750px",
        1040: "1040px",
        1280: "1280px",
      },
      fontSize: {
        "40px": "40px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
