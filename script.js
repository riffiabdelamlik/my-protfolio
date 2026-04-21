// 1. تشغيل السلايدر المتحرك (Swiper)
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});

// 2. وظائف المعرض (Gallery Modal)
const gallery = document.getElementById("galleryModal");

function openGallery() {
    gallery.style.display = "flex";
    document.body.style.overflow = "hidden"; // قفل التمرير عند فتح المعرض
}

function closeGallery() {
    gallery.style.display = "none";
    document.body.style.overflow = "auto";
}

// إغلاق المعرض عند الضغط في أي مكان خارج المحتوى
window.onclick = function(event) {
    if (event.target == gallery) {
        closeGallery();
    }
}