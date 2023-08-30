const inputElement = document.querySelector('#validation-input');

inputElement.addEventListener('blur', () => {
    console.log(inputElement.textContent.length);

    const currentLength = inputElement.value.trim().length;
    const expectedLength = parseInt(inputElement.dataset.length, 10);

    if (currentLength === expectedLength) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');


    } else {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid');


    }
})