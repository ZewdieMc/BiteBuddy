import { postComment, displayComments } from './involvement.js';
import fetchData from './meals.js';

const displayLikes = (likes) => {
  likes.forEach((like) => {
    document.getElementById(`${like.item_id}`).textContent = `${like.likes}`;
  });
};
const populateMeals = async () => {
  const mealsContainer = document.querySelector('.mealsContainer');
  const [meals, likes] = await fetchData();
  meals.categories.slice(0, 9).forEach((meal) => {
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
          <i class="fa-regular fa-heart fa-2x"></i><p> <span id='item-${meal.idCategory}'class="badge bg-danger rounded-pill px-3 ">0</span> Likes </p></div>
      </div>
      <button data-mealId = '${meal.idCategory}'class="btn btn-success comment-btn">Comments</button>
      </div>    
    `;

    modal.innerHTML = `
      <div class="modal-container">
      <div class="closeIcon">
       <i data-closeid='${meal.idCategory}' class="fa-sharp fa-solid fa-xmark fa-2x closeModal"></i>
     </div>
     <div class="mealContent">
      <img src="${meal.strCategoryThumb}" alt="${meal.strCategory} image">
       <h2>${meal.strCategory}</h2>
       <p>${meal.strCategoryDescription}</p>        
     </div>
      <div class="comments-display" id="display-${meal.idCategory}">
        <h3>Comments(0)</h3>
        <div class="comments-container" id="container-${meal.idCategory}">          
        </div>
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

    const commentBtn = mealDiv.querySelector('.comment-btn');
    commentBtn.addEventListener('click', () => {
      modal.classList.remove('hide');
      displayComments(meal);
    });
    const closeBtn = modal.querySelector('.closeModal');
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hide');
    });
    const form = modal.querySelector('.comment-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      postComment(meal.idCategory, form.Name.value, form.Message.value).then(() => {
        form.reset();
        displayComments(meal);
      });
    });
  });

  displayLikes(likes);
};

export default populateMeals;
