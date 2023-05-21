const modals = () => {
    function initModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            scroll = calcScroll();
        console.log(scroll)
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                modal.classList.add('modal--active');
                document.body.style.overflow = 'hidden'; //прибирає скролл
                if (window.screen.width >= 992) { //скролл стрибає тільки на комп'ютерах
                    document.body.style.marginRight = `${scroll}px`
                }
            });
        })
        close.addEventListener('click', () => {
            modal.classList.remove('modal--active');
            document.body.style.overflow = '';
            if (window.screen.width >= 992) {
                document.body.style.marginRight = '';
            }
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('modal--active');
                document.body.style.overflow = '';
                if (window.screen.width >= 992) {
                    document.body.style.marginRight = '';
                }
            }
        })
    }

    function calcScroll() {
        let block = document.createElement('div');

        block.style.width = '40px';
        block.style.height = '40px';
        block.style.overflowY = 'scroll';
        block.style.visibility = 'hidden';

        document.body.appendChild(block);
        let scrollWidth = block.offsetWidth - block.clientWidth;
        block.remove();

        return scrollWidth;
    }

    initModal('[data-modal]', '.modal__contact', '.modal__contact [data-close]');

};

export default modals;