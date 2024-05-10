const footer = document.querySelector('.sticky-inf-footer');
// Змінна для вибору елементу вмісту
const content = document.querySelector('.content');

// Функція для оновлення висоти вмісту
function updateContentHeight() {
    const contentHeight = content.offsetHeight;
    footer.style.marginTop = `${contentHeight}px`;
}

// Оновлення висоти вмісту при завантаженні сторінки та при зміні розміру вікна
window.addEventListener('load', updateContentHeight);
window.addEventListener('resize', updateContentHeight);
