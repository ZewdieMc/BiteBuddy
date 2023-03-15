import { getMeals } from './meals.js';

const populateMeals = () => {
  const mealsContainer = document.querySelector('.mealsContainer');
  getMeals().then((data) => {
    data.categories.slice(0, 9).forEach((meal) => {
      const mealDiv = document.createElement('div');
      mealDiv.classList.add('meal');
      mealDiv.innerHTML = `
      <div class="meal-img">
        <img src="${meal.strCategoryThumb}" alt="${meal.strCategory}">
      </div>
      <div class="meal-stats-wrapper">
      <div class="meal-stats">
        <h3>${meal.strCategory}</h3>
        <div>
          <i class="fa-regular fa-heart fa-2x"></i><p> <span id='item-${meal.idCategory}'class="badge bg-primary rounded-pill ">10</span> Likes </p></div>
      </div>
      <button data-mealId = '${meal.idCategory}'class="btn btn-success comment-btn">Comments</button>
      </div>    
    `;
      mealsContainer.appendChild(mealDiv);
    });
  });
};

export default populateMeals;
