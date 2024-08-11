import axios from "axios";

async function getMealDB(category: string) {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );

  return response.data;
}

async function getNumberOfMeals(category: string, from: number, to: number) {
  const meals = await getMealDB(category);

  return meals.meals.slice(from, to);
}

export default getNumberOfMeals;
