const inputElement = document.querySelector('#validation-input');

inputElement.addEventListener('blur', () => {
    console.log(inputElement.textContent.length);

    const currentLength = inputElement.value.length;
    const expectedLength = parseInt(inputElement.dataset.length, 10);

    if (currentLength === expectedLength) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
    console.log(checkLength);

    } else {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid');
    console.log(checkLength);

    }
})