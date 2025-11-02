// js/carrusel.js
document.addEventListener("DOMContentLoaded", function() {
    const imgs = document.querySelectorAll('.carrusel-img');
    let idx = 0;
    let interval = null;

    function showImg(i) {
        imgs.forEach((img, idx2) => {
        img.classList.toggle('active', idx2 === i);
        });
    }

    function next() {
        idx = (idx + 1) % imgs.length;
        showImg(idx);
    }
    function prev() {
        idx = (idx - 1 + imgs.length) % imgs.length;
        showImg(idx);
    }
    // Botones
    document.querySelector('.carrusel-btn.prev').onclick = () => {
        prev();
        resetInterval();
    };
    document.querySelector('.carrusel-btn.next').onclick = () => {
        next();
        resetInterval();
    };

    // Autoplay cada 3 segundos, infinito
    function resetInterval() {
        if (interval) clearInterval(interval);
        interval = setInterval(next, 10000);
    }
    resetInterval();
    showImg(idx);
});
