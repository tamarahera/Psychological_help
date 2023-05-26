const slider = (slides, prev, next) => {
    let slideIndex = 1;
    const items = document.querySelectorAll(slides),
        btnDotsWrapper = document.querySelector('.specialist__dots'),
        btnDots = document.querySelectorAll('.specialist__dots-btn');

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add('animate__animated');
            item.classList.remove('specialist__slides-item--active');
        });
        btnDots.forEach(item => {
            item.classList.remove('specialist__dots-btn--active');
        });

        items[slideIndex - 1].classList.add('specialist__slides-item--active');
        btnDots[slideIndex - 1].classList.add('specialist__dots-btn--active');
    };

    showSlides(slideIndex);

    function changeSlides(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            changeSlides(-1);
            items[slideIndex - 1].classList.remove('animate__fadeInLeft');
            items[slideIndex - 1].classList.remove('animate__fadeInDown');

            items[slideIndex - 1].classList.add('animate__fadeInRight');
        });
        nextBtn.addEventListener('click', () => {
            changeSlides(1);
            items[slideIndex - 1].classList.add('animate__fadeInLeft');

            items[slideIndex - 1].classList.remove('animate__fadeInDown');
            items[slideIndex - 1].classList.remove('animate__fadeInRight');
        });

        btnDotsWrapper.addEventListener('click', (e) => {
            btnDots.forEach((item, index) => {
                if (e.target === item) {
                    slideIndex = index + 1;
                    showSlides(slideIndex);

                    items[slideIndex - 1].classList.remove('animate__fadeInRight');
                    items[slideIndex - 1].classList.remove('animate__fadeInLeft');
                    items[slideIndex - 1].classList.add('animate__fadeInDown');
                }
            });
        });

    } catch (e) {}
};

export default slider;