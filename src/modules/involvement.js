const pushComment = (meal) => {
  const appId = 'QKwdfW5YtFFU0z305ADd';
  const involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

  const form = document.getElementById(`form-${meal.idCategory}`);
  const postComment = async (url, form) => {
    const formData = new FormData(form);
    const username = formData.get('Name');
    const comment = formData.get('Message');
    const itemId = `section-${meal.idCategory}`;
    const data = { itemId, username, comment };

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const responseData = await response.text();
    return responseData;
  };

  postComment(`${involvementUrl}apps/${appId}/comments`, form);
};

export default pushComment;
