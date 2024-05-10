window.addEventListener('scroll', function () {
    var header = document.querySelector('.sticky-header');
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});