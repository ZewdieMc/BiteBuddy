const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const getMeals = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export default getMeals;
