/* eslint-disable camelcase, no-console */

const appId = 'QKwdfW5YtFFU0z305ADd';
const involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const pushComment = async (meal) => {
  const form = document.getElementById(`form-${meal.idCategory}`);
  const postComment = async (url, form) => {
    const formData = new FormData(form);
    const username = formData.get('Name');
    const comment = formData.get('Message');
    const item_id = `section-${meal.idCategory}`;
    const data = { item_id, username, comment };

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const responseData = await response.text();
    console.log(responseData);
  };

  postComment(`${involvementUrl}apps/${appId}/comments`, form);
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
  commentDisplay.firstChildElement.textContent = `Comments (${comments.length})`;
};
export { pushComment, displayComments };
