const hamburger = () => {
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.header__menu');

    function closeMenu() {
        menu.classList.remove('header__menu--active');
        hamburger.classList.remove('hamburger--active');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', (e) => {
        if (!menu.classList.contains('header__menu--active')) {
            menu.classList.add('header__menu--active');
            hamburger.classList.add('hamburger--active');
            document.body.style.overflow = 'hidden';
        } else {
            closeMenu();
        }
    });

    menu.addEventListener('click', (e) => {
        if ((e.target.tagName === 'A' || e.target.classList.contains('overlay')) && (menu.classList.contains('header__menu--active'))) {
            closeMenu();
        }
    });
}

export default hamburger;