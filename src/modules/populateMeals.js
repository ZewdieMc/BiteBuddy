import getMeals from './meals.js';

const populateMeals = () => {
  const mealsContainer = document.querySelector('.mealsContainer');
  getMeals().then((data) => {
    data.categories.slice(0, 9).forEach((meal) => {
      const mealDiv = document.createElement('div');
      mealDiv.classList.add('meal');

      const modal = document.createElement('section');
      modal.classList.add('hide', 'modalPopup');
      modal.setAttribute('id', `${meal.idCategory}`);
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

      modal.innerHTML = `
      <div class="modal-container">
      <div class="closeIcon">
       <i class="fa-sharp fa-solid fa-xmark closeModal"></i>
     </div>
     <div class="mealContent">
      <img src="${meal.strCategoryThumb}" alt="${meal.strCategory} image">
       <h2>${meal.strCategory}</h2>
       <p>${meal.strCategoryDescription}</p>        
     </div>
     </div>
      `;
      mealDiv.appendChild(modal);
      mealsContainer.appendChild(mealDiv);
    });
  });
};

export default populateMeals;
