const forms = () => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        textareas = document.querySelectorAll('textarea'),
        inputPhone = document.querySelector('input[name="user_phone"]');

    inputPhone.addEventListener('input', () => {
        inputPhone.value = inputPhone.value.replace(/[^-0-9\+\(\)]/, '');
    });

    const message = {
        loading: 'Loading...',
        success: 'Thanks! We will answer as soon as possible.',
        error: 'Something goes wrong.'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let result = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await result.text();
    };

    const resetInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        textareas.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div'); // ств блок, а який вставимо повідомлення для корист
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item); // або JSON

            postData('server.php', formData)
                .then(result => {
                    console.log(result)
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.textContent = message.error;
                })
                .finally(() => {
                    resetInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 4000);
                })
        });
    });
}

export default forms;