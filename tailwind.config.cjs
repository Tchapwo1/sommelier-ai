/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#d41132",
                "background-light": "#f8f6f6",
                "background-dark": "#221013",
                "surface-dark": "#2d1b1e",
                "surface-darker": "#1a0b0d"
            },
            fontFamily: {
                display: ["Work Sans", "ui-sans-serif", "system-ui"]
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                "2xl": "1rem",
                full: "9999px"
            }
        }
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")]
};
