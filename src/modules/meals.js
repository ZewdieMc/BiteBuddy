import Like from './like.js';

const mealsURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const fetchData = async () => {
  const [mealsResponse, likesReponse] = await Promise.all([
    fetch(mealsURL),
    Like.getLikes(),
  ]);
  return Promise.all([mealsResponse.json(), likesReponse]);
};
export default fetchData;
