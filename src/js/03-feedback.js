const throttle = require('lodash.throttle');

const feedbackFormRef = document.querySelector('.feedback-form');

const setInputValue = data => {
    if (data) {
        feedbackFormRef[0].value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
        feedbackFormRef[1].value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
    }
};

setInputValue(localStorage.getItem('feedback-form-state'));

// ========================================================================================

const localStorageData = {
    email: '',
    message: '',
};

feedbackFormRef.addEventListener(
    'input',
    throttle(event => {
        if (event.target.name === 'email') {
            localStorageData.email = event.target.value;
        } else if (event.target.name === 'message') {
            localStorageData.message = event.target.value;
        }

        localStorage.setItem('feedback-form-state', JSON.stringify(localStorageData));
    }, 500),
);

// ========================================================================================

feedbackFormRef.addEventListener('submit', event => {
    event.preventDefault();

    const {
        elements: { email, message },
    } = event.currentTarget;

    const feedBackFormData = {
        email: email.value,
        message: message.value,
    };

    if (email.value !== '' || message.value !== '') {
        console.log(feedBackFormData);
    }

    localStorage.removeItem('feedback-form-state');

    event.currentTarget.reset();
});
