"use strict";

/*
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 2003) {
      var millenial = true;
      const firstName = "Steven";
      const str = `Oh, You're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = "New Output";
    }
    // console.log(str); //Reference Error
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = "Vedant";
calcAge(2003);

console.log(me);
// console.log(job);
// console.log(year);

var me = "Vedant";
let job = "student";
const year = 2003;

//Functions
console.log(addDecl(5, 6));
// console.log(addExpr(4, 6));
// console.log(addArrow(1, 2));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Example
if (!numProd) deleteShoppingCart();

var numProd = 10;

function deleteShoppingCart() {
  console.log("All Products deleted");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(this);

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAge(2003);

const calcAgeArrow = (birthYear) => {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAgeArrow(2003);

const Vedant = {
  year: 2003,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};
Vedant.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = Vedant.calcAge;
matilda.calcAge();

const f = Vedant.calcAge;
// f();

// var firstName = "matilda";

const Vedant = {
  firstName: "vedant",
  year: 2003,
  calcAge: function () {
    // console.log(this);
    console.log(2023 - this.year);

    // SOLUTION - 1
    // const self = this; //self or that
    // const isMilennial = function () {
    //   console.log(self);
    //   // console.log(this.year >= 1981 && this.year <= 2003);
    //   console.log(self.year >= 1981 && self.year <= 2003);
    // };
    // isMilennial();

    // SOLUTION - 2`
    const isMilennial = () => {
      console.log(this);
      // console.log(this.year >= 1981 && this.year <= 2003);
      console.log(this.year >= 1981 && this.year <= 2003);
    };
    isMilennial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
Vedant.greet();
Vedant.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 3, 6);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 3, 4, 5); // Reference Error

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "vedant",
  age: 21,
};
const friend = me;
friend.age = 25;
console.log("Friend", friend);
console.log("Me", me); //CONFUSION
*/

// PRIMITIVE TYPES
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// REFERENCE TYPES
const jessica = {
  firstName: "jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before Marriage: ", jessica);
console.log("After Marriage: ", marriedJessica);

// marriedJessica = {};

// copying objets
const jessica2 = {
  firstName: "jessica",
  lastName: "williams",
  age: 27,
  family: ["alice", "bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("john");
console.log("Before Marriage: ", jessica2);
console.log("After Marriage: ", jessicaCopy);
