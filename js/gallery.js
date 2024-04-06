document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const mainImage = gallery.querySelector('figure img');
    const thumbnails = gallery.querySelectorAll('ul li img');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const newSrc = this.src.replace('-small', '-large');

            mainImage.src = newSrc;
            mainImage.alt = this.alt;

            const figcaption = gallery.querySelector('figure figcaption');
            figcaption.textContent = this.alt;
        });
    });
});
