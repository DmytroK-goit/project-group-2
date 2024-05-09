document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.header-menu-item, .menu-item');

    menuItems.forEach(function (item) {
        item.addEventListener('mouseover', function () {
            item.classList.add('animate__animated', 'animate__heartBeat');
        });

        item.addEventListener('animationend', function () {
            item.classList.remove('animate__animated', 'animate__heartBeat');
        });
    });
});