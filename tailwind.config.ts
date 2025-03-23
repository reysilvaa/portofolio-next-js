import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      colors: {
        // Western Cowboy color palette
        cowboy: {
          leather: 'rgb(30, 20, 10)',    // Updated for better contrast
          sand: 'rgb(255, 245, 230)',    // Updated for better contrast
          rust: 'rgb(165, 74, 42)',      // Unchanged
          gold: 'rgb(191, 133, 46)',     // Unchanged
          wood: 'rgb(58, 29, 18)',       // Unchanged
          parchment: 'rgb(243, 233, 209)' // Unchanged
        },
        yellow: {
          400: '#FFD200',
        }
      },
      fontFamily: {
        western: ['Georgia', 'Garamond', 'serif'],
        scrapbook: ['Comic Sans MS', 'Segoe UI', 'Arial', 'sans-serif']
      },
      backgroundImage: {
        'cowboy-parchment': "url('/textures/old-paper.jpg')",
        'cowboy-leather': "url('/textures/leather.jpg')",
        'cowboy-wood': "url('/textures/wood-grain.jpg')"
      },
      boxShadow: {
        'page': '0 0 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)',
        'wanted': '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.1)'
      },
      keyframes: {
        tumbleweed: {
          '0%': { transform: 'translateX(-100%) rotate(0deg)' },
          '100%': { transform: 'translateX(100vw) rotate(1080deg)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        shake: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' }
        }
      },
      animation: {
        tumbleweed: 'tumbleweed 20s linear infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        shake: 'shake 0.5s ease-in-out'
      },
      clipPath: {
        'star': 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
        'torn-paper-bottom': 'polygon(0% 0%, 5% 20%, 15% 15%, 25% 22%, 35% 15%, 45% 22%, 55% 15%, 65% 22%, 75% 15%, 85% 22%, 95% 15%, 100% 20%, 100% 100%, 0% 100%)'
      }
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.clip-path-star': {
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
        },
        '.clip-path-torn-paper-bottom': {
          clipPath: 'polygon(0% 0%, 5% 20%, 15% 15%, 25% 22%, 35% 15%, 45% 22%, 55% 15%, 65% 22%, 75% 15%, 85% 22%, 95% 15%, 100% 20%, 100% 100%, 0% 100%)'
        }
      }
      addUtilities(newUtilities)
    })
  ],
} satisfies Config;
