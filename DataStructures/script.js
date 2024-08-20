"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is Your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIng) {
    console.log(mainIngredient);
    console.log(otherIng);
  },
};

/*
/////////////////////////////////////
// The Nullish Coalescing Operator
/////////////////////////////////////

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or ' ')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

/////////////////////////////////////
// SHORT CIRCUITING (&& and ||)
/////////////////////////////////////

console.log("-----OR-----");
// Properties of Logical Operators:
// use any data type, return any data type, short-circuiting
console.log(3 || "Vedant");
console.log("" || "Vedant");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "hello" || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("-----AND-----");
console.log(0 && "Jonas");
console.log(7 && "Vedant");
console.log(1 && 7);

console.log("hello" && 23 && null && "vedant");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach");

//////////////////////////////////
// Rest Pattern and Parameters
//////////////////////////////////

// 1) DESTUCTURING

//SPREAD, because on RIGHT SIDE of '='
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT SIDE of '='
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2) FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(3, 4, 5, 6);
add(1, 2, 3, 4, 5, 5, 6);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrrom", "corn", "tomato", "olives");
restaurant.orderPizza("mushroom");

/////////////////////////////////
Spread Operator (...)
/////////////////////////////////

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "burger"];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables are arrays,strings,maps,sets (NOT OBJECTS)
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schemedthmann`);

const ingredients = [
  prompt("Let's make Pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { ...restaurant, founder: "vedant", foundedIn: 1998 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);


/////////////////////////////////
Destructuring Objects
/////////////////////////////////

restaurant.orderDelivery({
  time: "22:30",
  address: "ABCD, xyz",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "ghi, jkl",
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};
({ a, b } = obj);
console.log(a, b);

//Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//////////////////////////////////
DESTUCTURING ARRAYS
//////////////////////////////////
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// let temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

// console.log(restaurant.order(2, 0));
// Receive two return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
*/
