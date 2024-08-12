let restaurants = [
  {
    id: 1,
    name: "Thyme & Thyme Again",
    image:
      "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$7 ~ 17",
    location: "Philadelphia",
    rating: 4.6,
    category: "Breakfast",
    menuItemCount: 7,
  },
  {
    id: 2,
    name: "Sunny Side Bites",
    image:
      "https://images.pexels.com/photos/25819520/pexels-photo-25819520.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$6 ~ 16",
    location: "San Diego",
    rating: 4.3,
    category: "Breakfast",
    menuItemCount: 11,
  },
  {
    id: 3,
    name: "The Laughing Lettuce",
    image:
      "https://images.pexels.com/photos/1239347/pexels-photo-1239347.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$5 ~ 15",
    location: "Columbus",
    rating: 4.1,
    category: "Breakfast",
    menuItemCount: 5,
  },
  {
    id: 4,
    name: "Whimsy Waffles",
    image:
      "https://images.pexels.com/photos/4790315/pexels-photo-4790315.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$4 ~ 9",
    location: "Indianapolis",
    rating: 4.7,
    category: "Breakfast",
    menuItemCount: 9,
  },
  {
    id: 5,
    name: "The Sizzling Skillet",
    image:
      "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$12 ~ 22",
    location: "Houston",
    rating: 4.4,
    category: "Beef",
    menuItemCount: 13,
  },
  {
    id: 6,
    name: "Peppercorn Palace",
    image:
      "https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$11 ~ 21",
    location: "Dallas",
    rating: 4.4,
    category: "Beef",
    menuItemCount: 6,
  },
  {
    id: 7,
    name: "Saffron Sage",
    image:
      "https://images.pexels.com/photos/299351/pexels-photo-299351.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$14 ~ 24",
    location: "Austin",
    rating: 4.5,
    category: "Beef",
    menuItemCount: 10,
  },
  {
    id: 8,
    name: "Ember & Spice",
    image:
      "https://images.pexels.com/photos/1027810/pexels-photo-1027810.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$12 ~ 22",
    location: "Fort Worth",
    rating: 4.6,
    category: "Beef",
    menuItemCount: 8,
  },
  {
    id: 9,
    name: "The Roaring Roast",
    image:
      "https://images.pexels.com/photos/2568587/pexels-photo-2568587.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$10 ~ 20",
    location: "Denver",
    rating: 4.4,
    category: "Beef",
    menuItemCount: 15,
  },
  {
    id: 10,
    name: "Savory Symphony",
    image:
      "https://images.pexels.com/photos/18015000/pexels-photo-18015000.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$12 ~ 24",
    location: "Nashville",
    rating: 4.7,
    category: "Beef",
    menuItemCount: 4,
  },
  {
    id: 11,
    name: "The Crave Corner",
    image:
      "https://images.pexels.com/photos/4101805/pexels-photo-4101805.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$9 ~ 19",
    location: "Baltimore",
    rating: 4.4,
    category: "Beef",
    menuItemCount: 7,
  },
  {
    id: 12,
    name: "Crimson Crust",
    image:
      "https://images.pexels.com/photos/15378110/pexels-photo-15378110.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$9 ~ 19",
    location: "Phoenix",
    rating: 4.1,
    category: "Beef",
    menuItemCount: 12,
  },
  {
    id: 13,
    name: "Basil & Blossom",
    image:
      "https://images.pexels.com/photos/5411629/pexels-photo-5411629.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$8 ~ 18",
    location: "Chicago",
    rating: 4.3,
    category: "Pasta",
    menuItemCount: 5,
  },
  {
    id: 14,
    name: "Azure Spoon",
    image:
      "https://images.pexels.com/photos/12720645/pexels-photo-12720645.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$8 ~ 18",
    location: "Charlotte",
    rating: 4.4,
    category: "Pasta",
    menuItemCount: 5,
  },
  {
    id: 15,
    name: "Golden Grains",
    image:
      "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$7 ~ 15",
    location: "Las Vegas",
    rating: 4.2,
    category: "Pasta",
    menuItemCount: 9,
  },
  {
    id: 16,
    name: "The Piquant Prawn",
    image:
      "https://images.pexels.com/photos/1150447/pexels-photo-1150447.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$5 ~ 10",
    location: "New Orleans",
    rating: 4.5,
    category: "Seafood",
    menuItemCount: 6,
  },
  {
    id: 17,
    name: "The Rustic Roost",
    image:
      "https://images.pexels.com/photos/2313682/pexels-photo-2313682.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$9 ~ 19",
    location: "Boston",
    rating: 4.3,
    category: "Seafood",
    menuItemCount: 14,
  },
  {
    id: 18,
    name: "Ocean's Bounty",
    image:
      "https://images.pexels.com/photos/2410602/pexels-photo-2410602.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$12 ~ 22",
    location: "Boston",
    rating: 4.6,
    category: "Seafood",
    menuItemCount: 8,
  },
  {
    id: 19,
    name: "Citrus & Spice",
    image:
      "https://images.pexels.com/photos/4869334/pexels-photo-4869334.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$6 ~ 14",
    location: "New Orleans",
    rating: 4.3,
    category: "Seafood",
    menuItemCount: 4,
  },
  {
    id: 20,
    name: "Harvest Hues",
    image:
      "https://images.pexels.com/photos/11444806/pexels-photo-11444806.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$8 ~ 18",
    location: "Miami",
    rating: 4.4,
    category: "Seafood",
    menuItemCount: 11,
  },
  {
    id: 21,
    name: "Bay Breeze Bistro",
    image:
      "https://images.pexels.com/photos/10836201/pexels-photo-10836201.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$10 ~ 20",
    location: "San Francisco",
    rating: 4.5,
    category: "Seafood",
    menuItemCount: 15,
  },
  {
    id: 22,
    name: "Whisk & Wok",
    image:
      "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$10 ~ 20",
    location: "San Francisco",
    rating: 4.2,
    category: "Chicken",
    menuItemCount: 13,
  },
  {
    id: 23,
    name: "Fable & Fork",
    image:
      "https://images.pexels.com/photos/698308/pexels-photo-698308.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$13 ~ 23",
    location: "San Jose",
    rating: 4.7,
    category: "Chicken",
    menuItemCount: 5,
  },
  {
    id: 24,
    name: "Ethereal Eats",
    image:
      "https://images.pexels.com/photos/2418486/pexels-photo-2418486.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$7 ~ 17",
    location: "Washington D.C.",
    rating: 4.6,
    category: "Chicken",
    menuItemCount: 7,
  },
  {
    id: 25,
    name: "Golden Hen",
    image:
      "https://images.pexels.com/photos/10338451/pexels-photo-10338451.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$10 ~ 18",
    location: "Houston",
    rating: 4.5,
    category: "Chicken",
    menuItemCount: 12,
  },
  {
    id: 26,
    name: "Moonlit Morsels",
    image:
      "https://images.pexels.com/photos/26063521/pexels-photo-26063521.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$15 ~ 25",
    location: "New York",
    rating: 4.7,
    category: "Dessert",
    menuItemCount: 9,
  },
  {
    id: 27,
    name: "Cocoa & Crumbs",
    image:
      "https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$6 ~ 12",
    location: "Seattle",
    rating: 4.5,
    category: "Dessert",
    menuItemCount: 8,
  },
  {
    id: 28,
    name: "The Mellow Munch",
    image:
      "https://images.pexels.com/photos/2372528/pexels-photo-2372528.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$5 ~ 10",
    location: "Portland",
    rating: 4.1,
    category: "Dessert",
    menuItemCount: 4,
  },
  {
    id: 29,
    name: "Vine & Dine",
    image:
      "https://images.pexels.com/photos/3274104/pexels-photo-3274104.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$9 ~ 19",
    location: "San Francisco",
    rating: 4.3,
    category: "Dessert",
    menuItemCount: 7,
  },
  {
    id: 30,
    name: "Sweet Serenade",
    image:
      "https://images.pexels.com/photos/25916369/pexels-photo-25916369.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$7 ~ 15",
    location: "Los Angeles",
    rating: 4.6,
    category: "Dessert",
    menuItemCount: 14,
  },
  {
    id: 31,
    name: "Velvet Confections",
    image:
      "https://images.pexels.com/photos/27098472/pexels-photo-27098472.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$8 ~ 18",
    location: "Chicago",
    rating: 4.4,
    category: "Dessert",
    menuItemCount: 11,
  },
  {
    id: 32,
    name: "Delightful Bites",
    image:
      "https://images.pexels.com/photos/835752/pexels-photo-835752.jpeg?auto=compress&cs=tinysrgb&w=1920",
    priceRange: "$6 ~ 14",
    location: "Boston",
    rating: 4.7,
    category: "Dessert",
    menuItemCount: 12,
  },
];

function getAllRestaurants() {
  return restaurants;
}

function getRestaurantById(id: number) {
  return restaurants.find((restaurant) => restaurant.id === id);
}

function getRestaurantsBycategory(category: string) {
  return restaurants.filter((restaurant) => restaurant.category === category);
}

function getRestaurantMenuItemCount(id: number) {
  return restaurants.find((restaurant) => restaurant.id === id)?.menuItemCount;
}

export {
  getAllRestaurants,
  getRestaurantById,
  getRestaurantsBycategory,
  getRestaurantMenuItemCount,
};
