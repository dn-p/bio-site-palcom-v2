let index = 0;
let autoSlideInterval;

function showSlide() {
    const slides = document.querySelectorAll(".slide");
    if (index >= slides.length) {
        index = 0; // Kembali ke awal jika sudah mencapai akhir
    }
    
    document.querySelector(".slider").style.transform = `translateX(${-index * 100}%)`;
}

/* Fungsi untuk berpindah ke slide berikutnya */
function nextSlide() {
    index++;
    showSlide();
    resetAutoSlide(); // Reset auto-slide setelah klik manual
}

/* Fungsi untuk berpindah ke slide sebelumnya */
function prevSlide() {
    index--;
    if (index < 0) {
        index = document.querySelectorAll(".slide").length - 1; // Kembali ke slide terakhir
    }
    showSlide();
    resetAutoSlide(); // Reset auto-slide setelah klik manual
}

/* Fungsi untuk memulai auto-slide */
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 3000); // Ganti slide setiap 3 detik
}

/* Fungsi untuk mereset auto-slide saat tombol diklik */
function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Hentikan auto-slide saat tombol diklik
    startAutoSlide(); // Mulai ulang auto-slide setelah beberapa detik
}

/* Jalankan auto-slide saat halaman dimuat */
document.addEventListener("DOMContentLoaded", () => {
    startAutoSlide();
});
