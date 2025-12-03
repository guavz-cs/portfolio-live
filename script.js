const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobilePanel = document.getElementById('mobile-panel');
const closeBtn = document.getElementById('close-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    mobilePanel.classList.remove('translate-x-full');
});

function closeMobileMenu() {
    mobilePanel.classList.add('translate-x-full');
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
    }, 300);
}

closeBtn.addEventListener('click', closeMobileMenu);

mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        closeMobileMenu();
    }
});

document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('hidden')) {
            closeMobileMenu();
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        closeMobileMenu();
    }
});
