import getMeals from './meals.js';

const populateMeals = () => {
  const mealsContainer = document.querySelector('.mealsContainer');
  getMeals().then((data) => {
    data.categories.slice(0, 9).forEach((meal) => {
      const mealDiv = document.createElement('div');
      mealDiv.classList.add('meal');

      const modal = document.createElement('section');
      modal.classList.add('hide', 'modalPopup');
      modal.setAttribute('id', `section-${meal.idCategory}`);
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

      modal.innerHTML = `
      <div class="modal-container">
      <div class="closeIcon">
       <i data-closeid='${meal.idCategory}' class="fa-sharp fa-solid fa-xmark closeModal"></i>
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
    document.querySelectorAll('.comment-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelector(`#section-${btn.dataset.mealid}`).classList.remove('hide');
      });
    });

    document.querySelectorAll('.closeModal').forEach((close) => {
      close.addEventListener('click', () => {
        document.querySelector(`#section-${close.dataset.closeid}`).classList.add('hide');
      });
    });
  });
};

export default populateMeals;
