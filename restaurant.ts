let restaurants = [
  {
    id: 1,
    name: "Thyme & Thyme Again",
    image: "",
    priceRange: "$7 ~ 17",
    location: "Philadelphia",
    rating: 4.6,
    type: "Breakfast",
  },
  {
    id: 2,
    name: "Sunny Side Bites",
    image: "",
    priceRange: "$6 ~ 16",
    location: "San Diego",
    rating: 4.3,
    type: "Breakfast",
  },
  {
    id: 3,
    name: "The Laughing Lettuce",
    image: "",
    priceRange: "$5 ~ 15",
    location: "Columbus",
    rating: 4.1,
    type: "Breakfast",
  },
  {
    id: 4,
    name: "Whimsy Waffles",
    image: "",
    priceRange: "$4 ~ 9",
    location: "Indianapolis",
    rating: 4.7,
    type: "Breakfast",
  },
  {
    id: 5,
    name: "The Sizzling Skillet",
    image: "",
    priceRange: "$12 ~ 22",
    location: "Houston",
    rating: 4.4,
    type: "Beef",
  },
  {
    id: 6,
    name: "Peppercorn Palace",
    image: "",
    priceRange: "$11 ~ 21",
    location: "Dallas",
    rating: 4.4,
    type: "Beef",
  },
  {
    id: 7,
    name: "Saffron Sage",
    image: "",
    priceRange: "$14 ~ 24",
    location: "Austin",
    rating: 4.5,
    type: "Beef",
  },
  {
    id: 8,
    name: "Ember & Spice",
    image: "",
    priceRange: "$12 ~ 22",
    location: "Fort Worth",
    rating: 4.6,
    type: "Beef",
  },
  {
    id: 9,
    name: "The Roaring Roast",
    image: "",
    priceRange: "$10 ~ 20",
    location: "Denver",
    rating: 4.4,
    type: "Beef",
  },
  {
    id: 10,
    name: "Savory Symphony",
    image: "",
    priceRange: "$12 ~ 24",
    location: "Nashville",
    rating: 4.7,
    type: "Beef",
  },
  {
    id: 11,
    name: "The Crave Corner",
    image: "",
    priceRange: "$9 ~ 19",
    location: "Baltimore",
    rating: 4.4,
    type: "Beef",
  },
  {
    id: 12,
    name: "Crimson Crust",
    image: "",
    priceRange: "$9 ~ 19",
    location: "Phoenix",
    rating: 4.1,
    type: "Beef",
  },
  {
    id: 13,
    name: "Basil & Blossom",
    image: "",
    priceRange: "$8 ~ 18",
    location: "Chicago",
    rating: 4.3,
    type: "Pasta",
  },
  {
    id: 14,
    name: "Azure Spoon",
    image: "",
    priceRange: "$8 ~ 18",
    location: "Charlotte",
    rating: 4.4,
    type: "Pasta",
  },
  {
    id: 15,
    name: "Golden Grains",
    image: "",
    priceRange: "$7 ~ 15",
    location: "Las Vegas",
    rating: 4.2,
    type: "Pasta",
  },
  {
    id: 16,
    name: "The Piquant Prawn",
    image: "",
    priceRange: "$5 ~ 10",
    location: "New Orleans",
    rating: 4.5,
    type: "Seafood",
  },
  {
    id: 17,
    name: "The Rustic Roost",
    image: "",
    priceRange: "$9 ~ 19",
    location: "Boston",
    rating: 4.3,
    type: "Seafood",
  },
  {
    id: 18,
    name: "Ocean's Bounty",
    image: "",
    priceRange: "$12 ~ 22",
    location: "Boston",
    rating: 4.6,
    type: "Seafood",
  },
  {
    id: 19,
    name: "Citrus & Spice",
    image: "",
    priceRange: "$6 ~ 14",
    location: "New Orleans",
    rating: 4.3,
    type: "Seafood",
  },
  {
    id: 20,
    name: "Harvest Hues",
    image: "",
    priceRange: "$8 ~ 18",
    location: "Miami",
    rating: 4.4,
    type: "Seafood",
  },
  {
    id: 21,
    name: "Bay Breeze Bistro",
    image: "",
    priceRange: "$10 ~ 20",
    location: "San Francisco",
    rating: 4.5,
    type: "Seafood",
  },
  {
    id: 22,
    name: "Whisk & Wok",
    image: "",
    priceRange: "$10 ~ 20",
    location: "San Francisco",
    rating: 4.2,
    type: "Chicken",
  },
  {
    id: 23,
    name: "Fable & Fork",
    image: "",
    priceRange: "$13 ~ 23",
    location: "San Jose",
    rating: 4.7,
    type: "Chicken",
  },
  {
    id: 24,
    name: "Ethereal Eats",
    image: "",
    priceRange: "$7 ~ 17",
    location: "Washington D.C.",
    rating: 4.6,
    type: "Chicken",
  },
  {
    id: 25,
    name: "Golden Hen",
    image: "",
    priceRange: "$10 ~ 18",
    location: "Houston",
    rating: 4.5,
    type: "Chicken",
  },
  {
    id: 26,
    name: "Moonlit Morsels",
    image: "",
    priceRange: "$15 ~ 25",
    location: "New York",
    rating: 4.7,
    type: "Dessert",
  },
  {
    id: 27,
    name: "Cocoa & Crumbs",
    image: "",
    priceRange: "$6 ~ 12",
    location: "Seattle",
    rating: 4.5,
    type: "Dessert",
  },
  {
    id: 28,
    name: "The Mellow Munch",
    image: "",
    priceRange: "$5 ~ 10",
    location: "Portland",
    rating: 4.1,
    type: "Dessert",
  },
  {
    id: 29,
    name: "Vine & Dine",
    image: "",
    priceRange: "$9 ~ 19",
    location: "San Francisco",
    rating: 4.3,
    type: "Dessert",
  },
  {
    id: 30,
    name: "Sweet Serenade",
    image: "",
    priceRange: "$7 ~ 15",
    location: "Los Angeles",
    rating: 4.6,
    type: "Dessert",
  },
  {
    id: 31,
    name: "Velvet Confections",
    image: "",
    priceRange: "$8 ~ 18",
    location: "Chicago",
    rating: 4.4,
    type: "Dessert",
  },
  {
    id: 32,
    name: "Delightful Bites",
    image: "",
    priceRange: "$6 ~ 14",
    location: "Boston",
    rating: 4.7,
    type: "Dessert",
  },
];

function getAllRestaurants() {
  return restaurants;
}

function getRestaurantById(id: number) {
  return restaurants.find((restaurant) => restaurant.id === id);
}

function getRestaurantsByType(type: string) {
  return restaurants.filter((restaurant) => restaurant.type === type);
}

export { getAllRestaurants, getRestaurantById, getRestaurantsByType };