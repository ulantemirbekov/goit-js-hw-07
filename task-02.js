const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const createIngredients = (ingredient) => {
    const ingredientRef = document.createElement('li');
    ingredientRef.textContent = ingredient;
    return ingredientRef;
};

const ingredientsMarkup = ingredients.map(ingredient => createIngredients(ingredient));
ingredientsRef.append(...ingredientsMarkup);