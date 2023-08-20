/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                mainBG: "#000814",
                secondaryBG: "#E8E9ED",
                mainAccent: "#FFD60A",
                secondaryAccent: "#FFC300",
                tertiaryAccent: "#003566",
                mainText: "#FFFFFF",
            },
        },
    },
    plugins: [],
};
