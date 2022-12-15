const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElem = document.querySelector('#ingredients');

const ingredientsItem = [];

ingredients.forEach(ingredient => {
  const ingredientsItemElem = document.createElement('li');
  ingredientsItemElem.classList.add('item');
  ingredientsItemElem.textContent = ingredient;
  ingredientsItem.push(ingredientsItemElem);
});

ingredientsElem.append(...ingredientsItem);
