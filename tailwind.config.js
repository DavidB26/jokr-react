/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "grey-jokr": "#7D9DB7",
        "grey2-jokr": "#85A2B3",

        "blue-jokr": "#063965",

        "grey3-jokr": "#A8C3DC",

        "medium-blue-jokr": "#173F6D",

        "dark-blue-jokr": "#032039",
        "light-blue-jokr": "#073F70",
        "green-jokr": "#57E39E",
        "light-green-jokr": "#58E39D",
      },
      spacing: {
        1.5: ".375rem",
        123: "30.93rem",
        132: "33.125rem",
        142: "34.625rem",
        145: "36.25rem",
        158: "39.5rem",
        162: "40.625rem",
        164: "41.06rem",
        217:"54.375rem",
        238: "59.375rem"
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
