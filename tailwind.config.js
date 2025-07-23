// tailwind.config.js
// Konfigurasi lengkap untuk Tailwind CSS pada proyek LogikaLiar.
// Mendefinisikan warna kustom, font, dan plugin untuk fungsionalitas tambahan.

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Mengonfigurasi file mana yang akan dipindai Tailwind untuk kelas-kelasnya.
  // Ini penting agar Tailwind dapat mengoptimalkan ukuran file CSS akhir.
  content: [
    "./index.html",
    "./posts/**/*.html", // Pindai semua file HTML di dalam folder posts
    "./js/**/*.js",      // Pindai file JavaScript untuk kelas dinamis (jika ada)
  ],
  // Mengaktifkan mode gelap berdasarkan kelas CSS, bukan preferensi sistem.
  // Ini memungkinkan toggle manual untuk mode gelap.
  darkMode: 'class',
  theme: {
    // Memperluas tema default Tailwind.
    // Properti yang ditambahkan di sini akan digabungkan dengan tema default.
    extend: {
      // Definisi warna kustom untuk branding LogikaLiar.
      // Warna-warna ini memberikan tampilan premium dan elegan.
      colors: {
        // Palet warna slate untuk latar belakang, teks sekunder, dll.
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a', // Warna slate paling gelap, cocok untuk dark mode
        },
        // Palet warna teal, bisa digunakan untuk aksen atau elemen interaktif.
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Warna teal utama
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Palet warna emerald, cocok untuk highlight atau status positif.
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // Warna emerald utama
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        // Palet warna amber, bisa untuk peringatan atau aksen hangat.
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Warna amber utama
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      // Definisi font keluarga kustom.
      // Font serif untuk judul memberikan kesan mewah, sans-serif untuk konten.
      fontFamily: {
        // Contoh: 'Merriweather', 'Georgia', 'serif'
        serif: ['Merriweather', 'Georgia', 'serif'],
        // Contoh: 'Inter', 'Arial', 'sans-serif'
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      // Definisi animasi kustom.
      // Digunakan untuk efek reveal on scroll dan transisi lainnya.
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
      // Definisi keyframes untuk animasi kustom.
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  // Plugin Tailwind CSS.
  // Menambahkan fungsionalitas seperti formulir dasar atau rasio aspek.
  plugins: [
    // require('@tailwindcss/forms'), // Contoh plugin untuk styling form
    // require('@tailwindcss/typography'), // Contoh plugin untuk styling markdown
  ],
}


