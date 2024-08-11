import express from "express";
import {
  getAllRestaurants,
  getRestaurantById,
  getRestaurantMenuItemCount,
} from "./restaurant";
import { getNumberOfMeals } from "./meal-db-service";

const app = express();

// Return data for the home page
app.get("/restaurants", (req, res) => {
  res.send(getAllRestaurants());
});

// Return data for a restaurant's detail page
app.get("/restaurants/:category/:id", async (req, res) => {
  const { category, id } = req.params;

  // Convert string id to number
  let numberId = parseInt(id, 10);
  if (isNaN(numberId)) {
    res.status(400).send("Invalid ID");
    return;
  }

  const menuItemCount = getRestaurantMenuItemCount(numberId);
  if (menuItemCount === undefined) {
    res.status(400).send("Error getting menu items");
    return;
  }

  // Combine restaurant info and meals data from TheMealDB
  const restaurant = getRestaurantById(numberId);
  const meals = await getNumberOfMeals(category, menuItemCount);

  res.json({ restaurant, meals });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
