/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                mainBG: "#0F1108",
                secondaryBG: "#F4FAFF",
                mainAccent: "#FAF33E",
                secondaryAccent: "#003566",
                mainText: "#FFFFFF",
            },
        },
    },
    plugins: [],
};
