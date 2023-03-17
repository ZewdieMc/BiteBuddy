const baseLikesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appEndPoint = 'apps/';
const likesEndPoint = '/likes/';
const appID = 'pgqQPEfft8XtKsYxgKvu';
class Like {
  async createApp() {
    const reponse = await fetch(baseLikesURL + appEndPoint, {
      method: 'POST',
    });
    this.appID = await reponse.text();
  }

  static async getLikes() {
    const response = await fetch(baseLikesURL + appEndPoint + appID + likesEndPoint);
    const data = await response.json();
    return data;
  }

  static async postLike(itemId) {
    const like = {
      item_id: itemId,
    };
    const response = await fetch(baseLikesURL + appEndPoint + appID + likesEndPoint, {
      method: 'POST',
      body: JSON.stringify(like),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.status;
  }
}

export default Like;