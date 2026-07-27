/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', 'src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0c0a09',
          900: '#14110e',
          850: '#1c1916',
          800: '#292521',
        },
        royal: {
          50: '#fef9ec',
          100: '#fdf0d0',
          200: '#fae0a1',
          300: '#f6c968',
          400: '#f2b13a',
          500: '#ea9613',
          600: '#c97708',
          700: '#a35c06',
          800: '#7c4509',
          900: '#5c3308',
        },
        electric: {
          50: '#fdf3ee',
          100: '#fbe2d4',
          200: '#f6c4a8',
          300: '#ef9d72',
          400: '#e87a4a',
          500: '#d95d2a',
          600: '#b8451a',
          700: '#933616',
          800: '#732c16',
          900: '#5e2615',
        },
        amber: {
          400: '#ffc24d',
          500: '#ffae1a',
          600: '#e09100',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(234, 150, 19, 0.45)',
        'glow-blue': '0 0 40px -10px rgba(217, 93, 42, 0.45)',
        'glow-amber': '0 0 40px -10px rgba(255, 174, 26, 0.45)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-24px) translateX(8px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'aurora': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(40px,-30px) scale(1.1)' },
          '66%': { transform: 'translate(-30px,20px) scale(0.95)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 14s ease-in-out infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        aurora: 'aurora 18s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
