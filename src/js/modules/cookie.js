const cookie = () => {
    const storageType = localStorage;
    const consentPropertyType = 'site_consent';

    const hasConsented = () => {
        if (storageType.getItem(consentPropertyType) === 'true') {
            return true;
        } else {
            return false;
        }
    }

    const toggleStorage = (prop) => { // зберігаємо згоду юзера
        storageType.setItem(consentPropertyType, prop);
    }

    const popup = document.querySelector('.cookie');
    const btnCancel = popup.querySelector('[data-btn="cancel"]');
    const btnAccept= popup.querySelector('[data-btn="accept"]');


    if (hasConsented()) {
        console.log('Loading...')
    } else {
        popup.classList.add('cookie--active');
    }

    btnAccept.addEventListener('click', () => {
        toggleStorage(true);
        popup.classList.remove('cookie--active');
        console.log('Loading...')
    });

    btnCancel.addEventListener('click', () => {
        toggleStorage(false);
        popup.classList.remove('cookie--active');
    });

}

export default cookie;