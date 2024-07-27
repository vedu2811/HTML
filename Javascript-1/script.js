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
*/

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
