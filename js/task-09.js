function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
const background = document.querySelector('body');
  
btn.addEventListener('click', () => {

  if (event.currentTarget) {
    
    background.style.backgroundColor = getRandomHexColor();
    colorName.textContent = background.style.backgroundColor
  }


})