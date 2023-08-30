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
const randomColor = getRandomHexColor();
    
    background.style.backgroundColor = randomColor;
    colorName.textContent = randomColor;
  }


})