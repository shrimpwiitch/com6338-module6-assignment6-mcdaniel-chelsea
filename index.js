console.log("Hamburger JS loaded");
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburgerMenu.classList.toggle('show-menu');
        updateAria();
    });

    document.addEventListener('click', (e) => {
        if (
            hamburgerMenu.classList.contains('show-menu') &&
            !hamburgerMenu.contains(e.target) &&
            e.target !== hamburgerBtn
        ) {
            hamburgerMenu.classList.remove('show-menu');
            updateAria();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && hamburgerMenu.classList.contains('show-menu')) {
            hamburgerMenu.classList.remove('show-menu');
            updateAria();

            hamburgerBtn.focus();
        }
    });

    function updateAria() {
        const isOpen = hamburgerMenu.classList.contains('show-menu');
        hamburgerBtn.setAttribute('aria-expanded', isOpen.toString());
    }

    updateAria();
});