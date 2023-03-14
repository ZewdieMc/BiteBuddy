import './style.css';

import populateMeals from './modules/populateMeals.js';

populateMeals();

window.onload = () => {
  const commentBtn = document.querySelectorAll('.comment-btn');
  commentBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      document.getElementById(`${index + 1}`).classList.toggle('hide');
    });
  });

  const close = document.querySelectorAll('.closeModal');
  close.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      document.getElementById(`${index + 1}`).classList.toggle('hide');
    });
  });
};
