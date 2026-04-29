/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0F172A', // Navy
                secondary: '#14B8A6', // Teal
                accent: '#F59E0B',    // Amber
                soft: '#F8FAFC',     // Slate-50
                dark: '#020617',     // Slate-950
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Montserrat', 'sans-serif'],
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}
