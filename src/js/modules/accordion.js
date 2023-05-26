const accordion = (triggers, triggerActiveClass, contentActiveClass) => {
    const btns = document.querySelectorAll(triggers);

    btns.forEach(item => {
        item.addEventListener('click', function () {
            console.log('click')
            this.classList.toggle(triggerActiveClass);
            this.nextElementSibling.classList.toggle(contentActiveClass);

            if (this.classList.contains(triggerActiveClass)) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0';
            }
        });
    });
};

export default accordion;