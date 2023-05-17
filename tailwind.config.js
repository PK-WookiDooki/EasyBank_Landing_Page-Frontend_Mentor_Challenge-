/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DBlue: "hsl(233, 26%, 24%)",
        LGreen: "hsl(136, 65%, 51%)",
        BCyan: "hsl(192, 70%, 51%)",
        GBlue: "hsl(233, 8%, 62%)",
        LGBlue: "hsl(220, 16%, 96%)",
        VLGray: "hsl(0, 0%, 98%)",
        LGray: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
