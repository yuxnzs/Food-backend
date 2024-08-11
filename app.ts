import express from "express";
import { getAllRestaurants } from "./restaurant";

const app = express();

app.get("/restaurants", (req, res) => {
  res.send(getAllRestaurants());
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
