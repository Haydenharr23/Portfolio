import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'exo': ['var(--font-exo)', 'sans-serif'],
        'lato': ['var(--font-lato)', 'sans-serif'],
      },
      colors: {
        'custom-dark': '#1a1a1a',
        'custom-light': '#f8f9fa',
      },
    },
  },
  plugins: [],
}
export default config

