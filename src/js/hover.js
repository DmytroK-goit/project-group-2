document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.header-menu-item, .footer-social-icon, .menu-item, .menu-icon-item-phone, .header-menu-item-phone, .menu-icon-item');

    menuItems.forEach(function (item) {
        item.addEventListener('mouseover', function () {
            item.classList.add('animate__animated', 'animate__heartBeat');
        });

        item.addEventListener('animationend', function () {
            item.classList.remove('animate__animated', 'animate__heartBeat');
        });
    });
});