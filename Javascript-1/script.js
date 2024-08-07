/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Vedant");
console.log(23);

let firstName = "Apple";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Varible name conventions
let vedant_jalan = "VJ";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "vedant");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Jalan";
console.log(lastName);


//Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Vedant";
const lastName = "Jalan";
console.log(firstName + " " + lastName);

//Assignment Operators
let x = 10 + 5;
x += 10; //x=x+10 =25
x *= 4; //x=x*4 =100
x++; //x=x+1
x--;
x--;
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah); //>, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2019);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2019);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`; //Template Strings
console.log(jonasNew);

console.log(`a regular string..`);

console.log("String with \nmultiple \nlines");

console.log(`string with
multiple 
lines`);

const age = 15;

if (age >= 18) {
  console.log(`eligible for driving licence🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`wait another ${yearsLeft} years for your licence`);
}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number("Vedant"));
console.log(typeof NaN);

console.log(String(23), 23);

//Type Coercion
console.log("I'm " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" > "18");

let n = "1" + 1;
n -= 1;
console.log(n);

//5 FALSY Values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("vedant"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 10;
if (money) {
  console.log("Don't spent it all");
} else {
  console.log("You should get a job");
}

let height = 0;
if (height) {
  console.log("YAY, Height is defined");
} else {
  console.log("Height is undefined");
}

const age = "18";
if (age === 18) console.log("Adult - strict");

if (age == 18) console.log("Adult - loose");

const fav = Number(prompt("Write your fav. no."));
console.log(fav);
console.log(typeof fav);

if (fav === 23) {
  console.log("Cool");
} else if (fav === 7) {
  console.log("nice one");
} else if (fav === 9) {
  console.log("good");
} else {
  console.log("Not 7 or 23 or 9");
}

if (fav !== 23) {
  console.log("Why not 23?");
}

const hasDriverLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//   console.log("Sarah can drive");
// } else {
//   console.log("Can't drive");
// }

const isTired = false; //C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah can drive");
} else {
  console.log("Can't drive");
}

const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("prepare videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("prepare videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy weekend");
} else {
  console.log("Not a valid day");
}

//STATEMENT
if (23 > 10) {
  const str = "23>10";
}

//EXPRESSION
const me = "vedant";
console.log(`I'm ${2024 - 2003} years old ${me}`);

const age = 23;
// age >= 18
//   ? console.log("I like to drink wine🍷")
//   : console.log("I like to drink water💧");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water💧"}`);
*/
