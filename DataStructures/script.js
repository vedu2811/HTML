"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 Enhanced Object Literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is Your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIng) {
    console.log(mainIngredient);
    console.log(otherIng);
  },
};

const rest = new Map();
rest.set("name", "Classico italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

// console.log(rest);
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
rest.clear();
console.log(rest);
console.log(rest.size);

/*
////////////////////////////////
// Sets
////////////////////////////////

const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(orderSet);

console.log(new Set("Jonas"));

console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
orderSet.delete("Risotto");
console.log(orderSet);

// orderSet.clear();
// console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("vedant jalan").size);

/////////////////////////////////
// Object.keys/values/entries
/////////////////////////////////
//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

////////////////////////////
// Optional Chaining
////////////////////////////

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

//With Optional Chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderVedant?.(0, 1) ?? "Method does not exist");

//Arrays
const users = [{ name: "vedant", email: "abc.io" }];
// const users = [];

console.log(users[0]?.name ?? "Users array empty");

if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log("Users array empty");
}

///////////////////////////////
// FOR-OF loop
///////////////////////////////

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);

////////////////////////////////
// Coding challenge 1
////////////////////////////////

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

////////////////////////////////////
// Coding Challenge - 2
////////////////////////////////////

// 1.
for (const [i, value] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${value}`);
}

// 2.
const entry = Object.values(game.odds);
let sum = 0;
for (const odd of entry) {
  sum += odd;
}
const avg = sum / entry.length;
console.log(`Average = ${avg}`);

// 3.

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// console.log(`Odd of victory ${game.team1}: ${entry[0][1]}`);
// console.log(`Odd of draw: ${entry[1][1]}`);
// console.log(`Odd of victory ${game.team2}: ${entry[2][1]}`);

// BONUS.
const scorers = {};
for (const players of game.scored) {
  scorers[players] ? scorers[players]++ : (scorers[players] = 1);
}
console.log(scorers);

// 1
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const playersFinal = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(playersFinal);

// 5
const { team1, x: draw, team2 } = { ...game.odds };
console.log(team1, draw, team2);

// 6
const printGoals = function (...playerNames) {
  console.log(`${playerNames.length} goals scored:`, ...playerNames);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// 7
team1 < team2 && console.log("team 1 winning");
team2 < team1 && console.log("Team 2 winning");

////////////////////////////////
// Logical Assignment Operator
////////////////////////////////
const rest1 = {
  name: "capri",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "la piazza",
  owner: "abcd",
};

// OR Assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish Assignment Operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND Assignment operator
// rest1.owner = rest1.owner && "anonymous";
// rest2.owner = rest2.owner && "anonymous";

rest1.owner &&= "anonymous";
rest2.owner &&= "anonymous";

console.log(rest1);
console.log(rest2);

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
