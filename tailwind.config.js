/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#E1E8EF",
                    100: "#D4DEE7",
                    200: "#B7C7D7",
                    300: "#99B0C7",
                    400: "#7C99B6",
                    500: "#5E82A6",
                    600: "#4C6B8A",
                    700: "#3C546C",
                    800: "#2C3D4F",
                    900: "#1B2631",
                    950: "#141C24",
                },
                accent: {
                    50: "#FAF5F0",
                    100: "#F4ECE1",
                    200: "#E8D6BF",
                    300: "#DDC2A2",
                    400: "#D2AF84",
                    500: "#C69963",
                    600: "#B78343",
                    700: "#926835",
                    800: "#6C4D28",
                    900: "#4B351B",
                    950: "#382814",
                },
            },
        },
        screens: {
            max1100: { raw: "(max-width: 1100px)" },
            max1000: { raw: "(max-width: 1000px)" },
            max950: { raw: "(max-width: 950px)" },
            max850: { raw: "(max-width: 850px)" },
            max800: { raw: "(max-width: 800px)" },
            max700: { raw: "(max-width: 700px)" },
            max650: { raw: "(max-width: 650px)" },
            max600: { raw: "(max-width: 600px)" },
            max500: { raw: "(max-width: 500px)" },
            max450: { raw: "(max-width: 450px)" },
            max400: { raw: "(max-width: 400px)" },

            min600: { raw: "(min-width: 600px)" },
            min800: { raw: "(min-width: 800px)" },
            min1000: { raw: "(min-width: 1000px)" },
            min1200: { raw: "(min-width: 1200px)" },
        },
    },
    plugins: [],
};
