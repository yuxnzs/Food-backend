import express from "express";
import cors from "cors";
import {
  getAllRestaurants,
  getRestaurantById,
  getRestaurantMenuItemCount,
} from "./restaurant";
import { getNumberOfMeals } from "./meal-db-service";

const app = express();
app.use(cors());

// Return data for the home page
app.get("/restaurants", (req, res) => {
  res.send(getAllRestaurants());
});

// Return data for a restaurant's menu page
app.get("/restaurant/:category/:id", async (req, res) => {
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

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
