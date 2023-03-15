const ceateMealDiv = (meal) => {
  // !the modal
  const modal = document.createElement('section');
  modal.classList.add('hide', 'modalPopup');

  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');

  const closeIconContainer = document.createElement('div');
  closeIconContainer.classList.add('closeIcon');

  const closeIcon = document.createElement('i');
  closeIcon.classList.add('fa-sharp', 'fa-solid', 'fa-xmark', 'closeModal');

  const mealContent = document.createElement('div');
  mealContent.classList.add('mealContent');

  const mealImg = document.createElement('img');
  mealImg.setAttribute('src', `${meal.strCategoryThumb}`);
  mealImg.setAttribute('alt', `${meal.strCategory} image`);

  const mealName = document.createElement('h2');
  mealName.textContent = meal.strCategory;

  const mealDsc = document.createElement('p');
  mealDsc.textContent = meal.strCategoryDescription;

  mealContent.appendChild(mealImg);
  mealContent.appendChild(mealName);
  mealContent.appendChild(mealDsc);

  closeIconContainer.appendChild(closeIcon);

  modalContainer.appendChild(closeIconContainer);
  modalContainer.appendChild(mealContent);

  closeIcon.addEventListener('click', () => {
    modal.classList.toggle('hide');
  });
  modal.append(modalContainer);

  // !the meal Div
  const mealDiv = document.createElement('div');
  mealDiv.classList.add('meal');

  const mealImgContainer = document.createElement('div');
  mealImgContainer.classList.add('meal-img');

  mealImgContainer.appendChild(mealImg);

  const mealStatsWrapper = document.createElement('div');
  mealStatsWrapper.classList.add('meal-stats-wrapper');

  const mealStats = document.createElement('div');
  mealStats.classList.add('meal-stats');

  const heartLikeWrapper = document.createElement('div');
  const heartIcon = document.createElement('i');
  heartIcon.setAttribute('id', `item-${meal.idCategory}`);
  heartIcon.classList.add('fa-regular', 'fa-heart', 'fa-2x');

  const badgeLikeWrapper = document.createElement('p');
  const likeBadge = document.createElement('span');
  likeBadge.setAttribute('id', `item-${meal.idCategory}`);
  likeBadge.classList.add('badge', 'bg-primary', 'rounded-pill');
  likeBadge.textContent = '10';

  const likesText = document.createElement('p');
  likesText.textContent = 'Likes';
  badgeLikeWrapper.appendChild(likeBadge);
  badgeLikeWrapper.appendChild(likesText);

  heartLikeWrapper.appendChild(heartIcon);
  heartLikeWrapper.appendChild(badgeLikeWrapper);

  mealStats.appendChild(mealName);
  mealStats.appendChild(heartLikeWrapper);
  mealStatsWrapper.appendChild(mealStats);

  const commentBtn = document.createElement('button');
  commentBtn.classList.add('btn', 'btn-success', 'comment-btn');
  commentBtn.setAttribute('data-mealId', meal.idCategory);
  commentBtn.textContent = 'Comments';

  mealStatsWrapper.appendChild(commentBtn);
  commentBtn.addEventListener('click', () => {
    modal.classList.toggle('hide');
  });

  return [mealImgContainer, mealStatsWrapper, modal];
};

export default ceateMealDiv;