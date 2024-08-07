"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = 534;

function logger() {
  console.log("I'm vedant");
}

// calling/running/invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

//FUNCTION DECLARATION
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

//ARROW FUNCTION
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstNane) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstNane} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "vedant"));
console.log(yearsUntilRetirement(1980, "bob"));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstNane) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstNane} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstNane} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "vedant"));
console.log(yearsUntilRetirement(1950, "mike"));

const friend1 = "michael";
const friend2 = "steven";
const friend3 = "peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1983, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends=['bob', 'alice'];

const firstName = "jonas";
const jonas = [firstName, "schmedthmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

//EXEERCISE
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

const friends = ["Michael", "Steven", "Peter"];

//ADD ELEMENTS
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//REMOVE ELEMENTS
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend named Steven");
}

const vedant = [
  "vedant",
  "jalan",
  2024 - 2003,
  "student",
  [("abc", "def", "ghi")],
];

//OBJECTS
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedthmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas.'last'+nameKey);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Wrong request");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedthmann";
console.log(jonas);

//Jonas has 3 friends, and his best
//friend is called Michael.

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedthmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${jonas.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas["calcAge"](1992));
console.log(jonas.getSummary());

// console.log("lifting weights repeatition 1 🏋️");
// console.log("lifting weights repeatition 2 🏋️");
// console.log("lifting weights repeatition 3 🏋️");
// console.log("lifting weights repeatition 4 🏋️");
// console.log("lifting weights repeatition 5 🏋️");
// console.log("lifting weights repeatition 6 🏋️");
// console.log("lifting weights repeatition 7 🏋️");
// console.log("lifting weights repeatition 8 🏋️");
// console.log("lifting weights repeatition 9 🏋️");
// console.log("lifting weights repeatition 10 🏋️");

//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repeatition ${rep} 🏋️`);
}

const types = [];

const vedant = [
  "vedant",
  "jalan",
  2024 - 2003,
  "student",
  ["abc", "def", "ghi"],
  true,
];

for (let i = 0; i < vedant.length; i++) {
  //READING FROM ARRAY
  console.log(vedant[i], typeof vedant[i]);

  //FILLING TYPES ARRAY
  // types[i] = typeof vedant[i];
  types.push(typeof vedant[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//CONTINUE and BREAK
console.log("---ONLY STRINGS ---");
for (let i = 0; i < vedant.length; i++) {
  if (typeof vedant[i] != "string") continue;
  console.log(vedant[i], typeof vedant[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < vedant.length; i++) {
  if (typeof vedant[i] === "number") break;
  console.log(vedant[i], typeof vedant[i]);
}

const vedant = [
  "vedant",
  "jalan",
  2024 - 2003,
  "student",
  ["abc", "def", "ghi"],
  true,
];

for (let i = vedant.length - 1; i >= 0; i--) {
  console.log(i, vedant[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`--------- Starting exercise ${exercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
  }
}

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repeatition ${rep} 🏋️`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: lifting weights repeatition ${rep} 🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice != 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end..");
  }
}
*/
