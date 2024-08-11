import axios from "axios";

interface MealDBResponse {
  meals: Meal[];
}

interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

// Get meals from API
async function getMealDB(category: string): Promise<MealDBResponse> {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );

  return response.data;
}

// Get certain category and certain number of random meals from API response
async function getNumberOfMeals(category: string, menuItems: number) {
  const meals = await getMealDB(category);
  const randomMeals = getRandomElements(meals.meals, menuItems);

  return randomMeals.map((meal: Meal) => {
    return {
      ...meal,
      price: getMealPrice(meal.idMeal),
    };
  });
}

// Convert meal id to price, e.g. 52772 => 17.72
function getMealPrice(mealId: string): number {
  const numberId = parseInt(mealId, 10);
  if (isNaN(numberId)) {
    return 0;
  }

  const lastFourDigits = numberId % 10000; // 52772 to 2772
  const price = 10 + (lastFourDigits % 1000) / 100; // Convert to xx.xx format, e.g. 12.72
  return parseFloat(price.toFixed(2)); // Round to two decimals
}

// Get random elements from an array
function getRandomElements<T>(array: T[], count: number): T[] {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export { getNumberOfMeals };
