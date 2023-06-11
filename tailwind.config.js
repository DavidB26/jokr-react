/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "grey-jokr": "#7D9DB7",
        "grey2-jokr": "#85A2B3",
        "grey3-jokr": "#A8C3DC",
        "dark-blue-jokr": "#032039",
        "light-blue-jokr": "#073F70",
        "green-jokr": "#57E39E",
        "light-green-jokr": "#58E39D",
      },
      spacing: {
        1.5: ".375rem",
        132: "33.125rem",
        142: "34.625rem",
        162: "40.625rem",
      },
      maxWidth: {
        "8xl": "85.375rem",
      },
      fontSize:{
        '4.5xl': ['40px',{
          lineHeight: '44px'
        }
      ]
      }
    },
  },
  plugins: [],
};
