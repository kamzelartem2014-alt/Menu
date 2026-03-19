const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('overlay');

const toggleMenu = () => {
    menuBtn.classList.toggle('open');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    // Запрещаем скролл основной страницы при открытом меню
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
};

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Закрываем при клике на любой пункт
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', toggleMenu);
});