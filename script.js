        // Ambil semua gambar
        const images = document.querySelectorAll('.Education .icon img');
      
        // Tambahkan event listener untuk setiap gambar
        images.forEach(image => {
          // Saat kursor masuk
          image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1)'; // Perbesar gambar
            image.style.transition = 'transform 0.3s ease'; // Animasi transisi
          });
      
          // Saat kursor keluar
          image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)'; // Kembalikan ukuran gambar seperti semula
          });
        });