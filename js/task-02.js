const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(ingredient => {
const list = document.querySelector('#ingredients');
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  list.append(li);
});

console.log(document.querySelector('#ingredients'));

