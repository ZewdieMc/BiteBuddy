import getMeals from './meals.js';
import ceateMealDiv from './mealDOM.js';

const populateMeals = () => {
  const mealsContainer = document.querySelector('.mealsContainer');
  getMeals().then((data) => {
    data.categories.slice(0, 9).forEach((meal) => {
      const mealDiv = document.createElement('div');
      mealDiv.classList.add('meal');

      const modal = document.createElement('section');
      modal.classList.add('hide', 'modalPopup');
      modal.setAttribute('id', `${meal.idCategory}`);
      mealDiv.append(...ceateMealDiv(meal));
      mealsContainer.appendChild(mealDiv);
    });
  });
};

export default populateMeals;
