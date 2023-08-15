/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      fontSize: {
        h1: [
          '6.25rem',
          {
            fontWeight: '500',
            letterSpacing: '-2px',
            lineHeight: '6.25rem',
          },
        ],
        'h1-responsive': [
          '10vw',
          {
            fontWeight: '500',
            letterSpacing: '-2px',
            lineHeight: '10vw',
          },
        ],
        h2: [
          '4.0rem',
          {
            fontWeight: '500',
            lineHeight: '4rem',
            letterSpacing: '-1px',
          },
        ],
        'h2-responsive': [
          '8vw',
          {
            fontWeight: '500',
            letterSpacing: '-2px',
            lineHeight: '8vw',
          },
        ],
        h3: [
          '2rem',
          {
            lineHeight: '2rem',
          },
        ],
        'h3-responsive': [
          '4vw',
          {
            lineHeight: '4vw',
          },
        ],
        span: [
          '0.75rem',
          {
            fontWeight: '600',
            letterSpacing: '4px',
            uppercase: true,
          },
        ],
      },
      colors: {
        brand: {
          blue: '#01d8fc',
          black: '#202223',
          white: '#202223',
          purple: '#dee3ff',
          beige: '#feefd9',
          pink: '#feeaea',
        },
      },
    },
  },
  plugins: [],
};
