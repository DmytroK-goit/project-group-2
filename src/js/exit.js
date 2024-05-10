function closeModal() {
    var modal = document.getElementById('header-menu');
    modal.classList.add('fadeOut');

    setTimeout(function () {
        modal.style.display = 'none';
        modal.classList.remove('fadeOut'); // Очистити клас після анімації
    }, 10000); // Час анімації у мілісекундах (0.5 секунди)
}