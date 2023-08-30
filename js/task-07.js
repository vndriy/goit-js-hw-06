const fontSize = document.querySelector('#font-size-control'); // повзунок
const textSize = document.querySelector('#text'); // Абркадабра

    textSize.style.fontSize = `${fontSize.value}px`;

fontSize.addEventListener('input', () => {
const value = fontSize.value
    textSize.style.fontSize = `${fontSize.value}px`;
})
