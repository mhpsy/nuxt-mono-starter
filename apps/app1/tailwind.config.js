/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts,jsx,tsx}",
        "./layouts/**/*.{js,vue,ts,jsx,tsx}",
        "./pages/**/*.{js,vue,ts,jsx,tsx}",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

