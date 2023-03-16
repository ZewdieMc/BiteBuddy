import getMeals from './meals.js';
import pushComment from './involvement.js';

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
     <form class="comment-form" id="form-${meal.idCategory}">
        <input type="text" name="Name" id="" placeholder="Your Name">
        <textarea name="Message" id="" cols="30" rows="10" placeholder="Your Insights"></textarea>
        <button type="submit" id="commentBtn">Comment</button>
      </form>     
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
    document.querySelectorAll('.comment-form').forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const mealId = e.target.parentNode.parentNode.parentNode.querySelector('.comment-btn').dataset.mealid;
        const meal = data.categories.find((m) => m.idCategory === mealId);
        pushComment(meal);
        form.reset();
      });
    });
  });
};

export default populateMeals;
