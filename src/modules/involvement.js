import commentCounter from './commentCount.js';

const appId = 'pgqQPEfft8XtKsYxgKvu';
const involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const postComment = async (mealId, username, comment) => {
  const url = `${involvementUrl}apps/${appId}/comments`;
  const data = { item_id: `section-${mealId}`, username, comment };

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response.text();
};

const displayComments = async (meal) => {
  const commentDisplay = document.getElementById(`display-${meal.idCategory}`);
  const getComments = async (url) => {
    const response = await fetch(url);
    const commentArray = await response.json();
    return commentArray;
  };

  const comments = await getComments(`${involvementUrl}apps/${appId}/comments?item_id=section-${meal.idCategory}`);

  const commentsContainer = document.getElementById(`container-${meal.idCategory}`);
  commentsContainer.innerHTML = '';

  comments.forEach((element) => {
    const comment = document.createElement('p');
    comment.innerHTML = `${element.creation_date} ${element.username}: ${element.comment}`;
    commentsContainer.appendChild(comment);
  });
  commentDisplay.firstElementChild.textContent = `Comments (${commentCounter()})`;
};
export { postComment, displayComments };
