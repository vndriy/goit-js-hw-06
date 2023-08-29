const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

inputElement.addEventListener('input', event => {
    if (event.currentTarget.value === '') {
        outputElement.textContent = 'Anonymous';
    } else {
        outputElement.textContent = event.currentTarget.value;
    }
});
