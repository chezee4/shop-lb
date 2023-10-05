import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        "custom-orange": "#FD7E14",
        "custom-blue-hover": "#0B5ED7",
        "footer-bg-color": "#F8F9FA"
      },
      textColor: {
        "custom-orange": "#FD7E14",
        "card-color-text": "#212529",
        "placeholder-text": "#6C757D"
      },
      boxShadow:{
        "custom-shadow-md": "0px 8px 16px 0px rgba(0, 0, 0, 0.15)",
      },
      borderColor:{
        "custom-border-cart": "rgba(0, 0, 0, 0.17)",
        "custom-orange": "#FD7E14",
        "custom-blue-hover": "#0A58CA",
        "hr-bg-color": "rgba(33, 37, 41, 0.25)"
      },
      flex: {
        "2": "0 0 104px"
      },
      screens: {
        'mm': '480px', 
      },
      accentColor:{
        "custom-orange": "#FD7E14"
      }
    },
  },
  plugins: [],
}
export default config
