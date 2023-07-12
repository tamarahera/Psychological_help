const scrolling = (upSelector, limitElem) => {
    const upElem = document.querySelector(upSelector);

    let limitForShow = document.querySelector(limitElem);
    limitForShow = Math.round(limitForShow.getBoundingClientRect().top + document.documentElement.scrollTop);
// document.documentElement.scrollTop -  already scrolled
// getBoundingClientRect().top -  position of element

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > limitForShow) {
            upElem.classList.add('animate__fadeInUp', 'animate__animated');
            upElem.classList.remove('animate__fadeOutDown');
        } else {
            upElem.classList.add('animate__fadeOutDown');
            upElem.classList.remove('animate__fadeInUp');
        }
    });

    // scrolling with request animation frame

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.2;

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            let heightTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top, // верхні координати елементу
                start = null;
 
            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    px; // к-сть рх, яких треба пролистати протягом анімації

                    if (toBlock < 0) {
                        px = Math.max((heightTop - progress/speed), (heightTop + toBlock));
                    } else {
                        px = Math.min((heightTop + progress/speed), (heightTop + toBlock));
                    }; 

                document.documentElement.scrollTo(0, px);

                if (px != heightTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }

            }
        });
    });
}
export default scrolling;