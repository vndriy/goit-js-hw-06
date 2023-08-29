const btnPlus = document.querySelector('[data-action="increment"]');
const btnMinus = document.querySelector('[data-action="decrement"]');
const counterValue = document.querySelector('#value');

console.log(btnPlus);
console.log(btnMinus);
console.log(counterValue);

let currentValue = 0;

const handleMinus = () => {
    currentValue--;
    counterValue.textContent = currentValue;
}

btnMinus.addEventListener("click", handleMinus);

const handlePlus = () => {
    currentValue++;
    counterValue.textContent = currentValue;
}

btnPlus.addEventListener("click", handlePlus);



// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.