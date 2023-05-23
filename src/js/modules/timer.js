const timer = (id) => {
    const hours12 = 12 * 60 * 60 * 1000,
          deadline = Date.parse(new Date()) + hours12;
    const getTimeDeadline = (endtime) => {
        const time = endtime - Date.parse(new Date()),
            seconds = Math.floor((time / 1000) % 60), //к-сть хвилин, які всередині часу t, повертається залишок  в с
            minutes = Math.floor((time / 1000 / 60) % 60), // поверт залишок в хв
            hours = Math.floor((time / (1000 * 60 * 60)) % 24); // поверт залишок в год

        return {
            'total': time,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
        };
    };

    const addZero = (num) => {
        if (num <= 9) {
            return `0${num}`
        } else {
            return num;
        }
    };

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
            seconds = timer.querySelector('#seconds'),
            minutes = timer.querySelector('#minutes'),
            hours = timer.querySelector('#hours'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const time = getTimeDeadline(endtime);

            seconds.textContent = addZero(time.seconds);
            minutes.textContent = addZero(time.minutes);
            hours.textContent = addZero(time.hours);

            if (time.total <= 0) {
                seconds.textContent = '00';
                minutes.textContent = '00';
                hours.textContent = '00';

                clearInterval(timeInterval);
            };
        };
    };

    setClock(id, deadline);
};

export default timer;   