/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                "my-red": "var(--my-red)",
                "my-blue": "var(--my-blue)"
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
