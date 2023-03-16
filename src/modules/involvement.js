/* eslint-disable camelcase, no-console */

const pushComment = (meal) => {
  const appId = 'mQsLNs528XlSYeyDcoUF';
  const involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

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

export default pushComment;
