let currentImageIndex = 0;
const images = document.querySelectorAll('.image-grid img');
const previewImg = document.getElementById('previewImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showPreview(imagePath) {
  previewImg.style.opacity = 0; // Sembunyikan gambar sementara
  setTimeout(() => {
    previewImg.src = imagePath;
    previewImg.style.opacity = 1; // Tampilkan gambar dengan efek fade
  }, 300); // Atur waktu fade (dalam milidetik)
}

prevBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showPreview(images[currentImageIndex].src);
});

nextBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showPreview(images[currentImageIndex].src);
});

// Menampilkan gambar pertama saat halaman dimuat
showPreview(images[currentImageIndex].src);