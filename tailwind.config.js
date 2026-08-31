/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Company Brand Colors
          // blue: '#2563EB',
          blue: '#2563eb',
          // 'blue-light': '#60A5FA',
          'blue-light': '#93C5FD',
          'blue-light1': '#eff6ff',
          'blue-dark': '#1a4f8c',
          yellow: '#FBBF24',
          'yellow-light': '#FCD34D',
          'yellow-light1': '#fefce8',
          'yellow-dark': '#F59E0B',
          'yellow-light-bg': "#fcb60124",
          red: '#EF4444',
          'red-light': '#F87171',
          'red-dark': '#DC2626',
          green: '#32CD32',
          'green-light': '#34D399',
          'green-light1': '#f0fdf4',
          'green-dark': '#059669',
          purple: '#8B5CF6',
          'purple-light': '#A78BFA',
          'purple-dark': '#7C3AED',
          // Neutral Colors
          white: '#FFFFFF',
          grey: '#CED4DA',
          'light-grey': '#F8F9FA',
          'medium-grey': '#6C757D',
          'dark-grey': '#212529',
          black: '#000000',
        },

        /* --------------------------------------------------------------
         * Home-page dark theme — same purple/black language as /about.
         * `night` = black/violet neutrals, `neon` = primary violet accent,
         * `mint`  = secondary purple accent. These three scales are only
         * referenced by the home-page components, so they stay scoped
         * to the home page.
         * ------------------------------------------------------------ */
        night: {
          50: '#F5F4F8',
          100: '#E7E5EE',
          200: '#D3D0DC',
          300: '#B8B6C4', // about-page body copy
          400: '#8F8CA0',
          500: '#777583', // about-page muted copy
          600: '#4B4860',
          700: '#35314A',
          800: '#29263A', // about-page border
          900: '#1A1829', // about-page raised surface
          950: '#0B0A14', // about-page canvas
        },
        neon: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA', // about-page accent light
          500: '#8B5CF6', // about-page accent
          600: '#7C3AED', // about-page accent dark
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#2E1065',
        },
        mint: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC', // about-page gradient tail
          500: '#A855F7',
          600: '#9333EA',
          700: '#7E22CE',
          800: '#6B21A8',
          900: '#581C87',
          950: '#3B0764',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.05)',
        'compact': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero-xl': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-lg': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'hero-md': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'hero-sm': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.3', fontWeight: '700' }],
        'subtitle': ['clamp(1.125rem, 2vw, 1.5rem)', { lineHeight: '1.4', fontWeight: '400' }],
        'subtitle-sm': ['clamp(1rem, 1.5vw, 1.25rem)', { lineHeight: '1.5', fontWeight: '400' }],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-delay': 'fadeIn 1s ease-out 0.3s both',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'pulse-slower': 'pulse 6s ease-in-out infinite',
        'spin-slow-reverse': 'spin 18s linear infinite reverse',
        'tilt': 'tilt 8s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'fade-in-scale': 'fadeInScale 0.5s ease-out',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      fontWeight: {
        bold: '500',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(0.6deg)' },
          '75%': { transform: 'rotate(-0.6deg)' },
        },
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
}