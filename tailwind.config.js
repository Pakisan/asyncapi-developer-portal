/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './docs/**/*.{js,ts,vue,md}',
        './docs/.vitepress/**/*.{js,ts,vue}',
        './docs/.vitepress/theme/**/*.{js,ts,vue}'
    ],
    theme: {
        darkMode: 'class',
        theme: {
            extend: {
                colors: {
                    'gray-900': '#111827',
                    'gray-800': '#1f2937',
                    'gray-700': '#374151',
                    'gray-600': '#4b5563',
                    'gray-500': '#6b7280',
                    'gray-400': '#9ca3af',
                    'gray-300': '#d1d5db',
                    'gray-200': '#e5e7eb',
                    'gray-100': '#f3f4f6',
                    'gray-50': '#f9fafb',
                }
            }
        }
    },
}