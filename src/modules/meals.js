const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
// eslint-disable-next-line import/no-mutable-exports
let meals = [];
const getMeals = async () => {
  const response = await fetch(url);
  const data = await response.json();
  meals = data.categories;
  return data;
};
export { getMeals, meals };
