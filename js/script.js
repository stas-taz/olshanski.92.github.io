window.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav'),
    navItem = document.querySelectorAll('.nav_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        nav.classList.toggle('nav_active');
    });

    navItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            nav.classList.toggle('nav_active');
        });
    });
});
