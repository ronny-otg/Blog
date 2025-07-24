// tailwind.config.js
const colors = require('tailwindcss/colors'); // Opsional: untuk referensi warna langsung jika diperlukan

module.exports = {
  // Pastikan path konten Anda benar agar Tailwind memindai file HTML dan JS Anda
  content: [
    './index.html',
    './posts/**/*.html',
    './privacy-policy.html',
    './terms-conditions.html',
    './js/**/*.js',
  ],
  darkMode: 'class', // Mengaktifkan dark mode berdasarkan kelas 'dark' pada elemen html
  theme: {
    extend: {
      // Menambahkan font kustom yang digunakan di proyek Anda
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      // Anda bisa memperluas palet warna di sini jika ada warna kustom
      colors: {
        // Contoh: 'custom-blue': '#1a2b3c',
      },
    },
  },
  plugins: [
    // Ini adalah plugin kustom untuk mendefinisikan utilitas CSS kompleks
    function ({ addUtilities, theme }) {
      const newUtilities = {
        // Utilitas untuk gradien dan bayangan teks logo utama (light mode)
        '.logo-gradient-light': {
          backgroundImage: `linear-gradient(to right, ${theme('colors.blue.600')}, ${theme('colors.purple.600')}, ${theme('colors.pink.500')}, ${theme('colors.blue.600')}, ${theme('colors.purple.600')}, ${theme('colors.pink.500')})`,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-size': '400% auto',
          animation: 'gradient-walk 6s linear infinite',
          'text-shadow': `0px 0px 8px rgba(${theme('colors.blue.400')}, 0.5)`,
        },
        // Utilitas untuk gradien dan bayangan teks logo utama (dark mode)
        '.logo-gradient-dark': {
          backgroundImage: `linear-gradient(to right, ${theme('colors.sky.400')}, ${theme('colors.indigo.400')}, ${theme('colors.purple.400')}, ${theme('colors.sky.400')}, ${theme('colors.indigo.400')}, ${theme('colors.purple.400')})`,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-size': '400% auto',
          animation: 'gradient-walk 6s linear infinite',
          'text-shadow': `0px 0px 8px rgba(${theme('colors.sky.300')}, 0.6)`,
        },
        // Utilitas untuk bayangan teks logo saat hover (light mode)
        '.logo-shadow-light-hover': {
          'text-shadow': `0px 0px 15px rgba(${theme('colors.blue.300')}, 0.8)`,
        },
        // Utilitas untuk bayangan teks logo saat hover (dark mode)
        '.logo-shadow-dark-hover': {
          'text-shadow': `0px 0px 15px rgba(${theme('colors.sky.200')}, 0.9)`,
        },
        // Utilitas untuk gradien dan bayangan teks logo di overlay loading (light mode)
        '.loading-logo-gradient-light': {
          backgroundImage: `linear-gradient(to right, ${theme('colors.blue.600')}, ${theme('colors.purple.600')}, ${theme('colors.pink.500')}, ${theme('colors.blue.600')})`,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-size': '200% auto',
          animation: 'gradient-walk 4s linear infinite',
          'text-shadow': `0px 0px 12px rgba(${theme('colors.blue.400')}, 0.7)`,
        },
        // Utilitas untuk gradien dan bayangan teks logo di overlay loading (dark mode)
        '.loading-logo-gradient-dark': {
          backgroundImage: `linear-gradient(to right, ${theme('colors.sky.400')}, ${theme('colors.indigo.400')}, ${theme('colors.purple.400')}, ${theme('colors.sky.400')})`,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-size': '200% auto',
          animation: 'gradient-walk 4s linear infinite',
          'text-shadow': `0px 0px 12px rgba(${theme('colors.sky.300')}, 0.8)`,
        },
      };
      // Menambahkan utilitas baru ini agar responsif dan dapat digunakan dengan pseudo-class hover
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
