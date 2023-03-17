import pushComment from './involvement.js';
import Like from './like.js';
import fetchData from './meals.js';
import itemCounter from './itemsCount.js';

const displayLikes = (likes) => {
  likes.forEach((like) => {
    document.getElementById(`${like.item_id}`).textContent = `${like.likes}`;
  });
};

const handleLike = (elements) => {
  elements.forEach((element) => {
    element.addEventListener('click', async (e) => {
      const currentLike = document.getElementById(`${e.target.dataset.itemid}`).textContent;
      document.getElementById(`${e.target.dataset.itemid}`).textContent = `${parseInt(currentLike, 10) + 1}`;
      const status = await Like.postLike(e.target.dataset.itemid);
      if (status === 201) {
        Like.getLikes().then((likes) => {
          const targetLike = likes.find((like) => like.item_id === e.target.dataset.itemid);
          document.getElementById(`${targetLike.item_id}`).textContent = `${targetLike.likes}`;
        });
      }
    });
    element.addEventListener('mousedown', () => {
      element.classList.remove('fa-regular');
      element.classList.add('fa-solid');
    });
    element.addEventListener('mouseup', () => {
      element.classList.remove('fa-solid');
      element.classList.add('fa-regular');
    });
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
          <i data-itemid = 'item-${meal.idCategory}'class="fa-regular fa-heart fa-2x like"></i><p> <span id='item-${meal.idCategory}'class="badge bg-danger rounded-pill px-3 ">0</span> Likes </p></div>
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

    document.querySelectorAll('.comment-form').forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const mealId = e.target.parentNode.parentNode.parentNode.querySelector('.comment-btn').dataset.mealid;
        const meal = meals.categories.find((m) => m.idCategory === mealId);
        pushComment(meal);
        form.reset();
      });
    });
  });

  document.querySelectorAll('.closeModal').forEach((close) => {
    close.addEventListener('click', () => {
      document.querySelector(`#section-${close.dataset.closeid}`).classList.add('hide');
    });
  });

  displayLikes(likes);
  handleLike(document.querySelectorAll('.like'));
  document.querySelector('#itemsCounter').textContent = itemCounter() ? `BiteBuddyMeals(${itemCounter()})` : 'BiteBuddyMeals';
};

export default populateMeals;
