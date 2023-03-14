import getMeals, { meals } from './meals.js';

const populateMeals = () => {
  console.log(meals);
  const mealsContainer = document.querySelector('.mealsContainer');
  getMeals().then((data) => {
    data.categories.slice(0, 9).forEach((meal) => {
      const mealDiv = document.createElement('div');
      mealDiv.classList.add('meal');
      mealDiv.innerHTML = `
      <div class="meal-img">
        <img src="${meal.strCategoryThumb}" alt="${meal.strCategory}">
      </div>
      <div class="meal-stats">
        <h3>${meal.strCategory}</h3>
        <div><i class="fa-regular fa-heart"></i><p> 0 Likes </p></div>
      </div>
      <button data-mealId = '${meal.idCategory}'class="comment-btn">Comments</button>
    `;
      mealsContainer.appendChild(mealDiv);
    });
  });
};

export default populateMeals;
