const render = (data) => {
  const modal = document.createElement('section');
  modal.classList.add('hide');
  modal.innerHTML = `
  <div>
    <i class="fa-sharp fa-solid fa-xmark"></i>
  </div>
  <div>
    <img src="${data.strCategoryThumb}" alt="${data.strCategory} image">
    <h2>${data.strCategory}</h2>
    <p>${data.strCategoryDescription}</p>        
  </div>
  `;

  document.body.appendChild(modal);
};

export default render;