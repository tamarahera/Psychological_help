const modals = () => {

    function openModal(modalSelector, scrollNum) {
        modalSelector.classList.add('modal--active');
        document.body.style.overflow = 'hidden'; //прибирає скролл
        if (window.screen.width >= 992) { //скролл стрибає тільки на комп'ютерах
            document.body.style.marginRight = `${scrollNum}px`
        }
    }

    function closeModal(modalSelector) {
        modalSelector.classList.remove('modal--active');
        document.body.style.overflow = '';
        if (window.screen.width >= 992) {
            document.body.style.marginRight = '';
        }
    }

    function initModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                openModal(modal, scroll);
            });
        })
        close.addEventListener('click', () => {
            closeModal(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });

        window.addEventListener('keydown', (e) => {
            if (modal.classList.contains('modal--active') && e.key === 'Escape') {
                closeModal(modal);
            }
        });
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