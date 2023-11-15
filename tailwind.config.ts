import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#21252b',
                textColor: '#EDEDED',
            },
            animation: {
                bgAnimation: 'bgAnimation 150s linear infinite',
            },
            keyframes: {
                bgAnimation: {
                    from: { 'background-position-y': '0%' },
                    to: { 'background-position-y': '1603px' },
                },
            },
        },
    },
    plugins: [],
}
export default config
