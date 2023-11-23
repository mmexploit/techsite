import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': "#e4f7ff",
          '100': "#cdeaff",
          '200': "#9cd3ff",
          '300': "#66bbfe",
          '400': "#3ea6fc",
          '500': "#2699fc",
          '600': "#1592fe",
          '700': "#007fe3",
          '800': "#0070cb",
          '900': "#0061b4",
        }
      }
    },
  },
  plugins: [],
}
export default config
