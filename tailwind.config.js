const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        './src/**/*.{html,ts,vue}',
        './docs/**/*.{html,js,vue,ts,md}',
        './docs/.vitepress/**/*.{html,js,vue,ts,md}',
    ],
    theme: {...},
    plugins: [],
}