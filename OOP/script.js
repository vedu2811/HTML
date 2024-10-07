"use strict";

/*
const Person = function (firstName, birthYear) {
  // Instance Properties..
  this.firstName = firstName;
  this.birthYear = birthYear;

  // // NEVER DO THIS
  // this.calcAge = function () {
  //   console.log(2024 - this.birthYear);
  // };
};

const vedant = new Person("Vedant", 2003);
console.log(vedant);

// 1. New {} is created
// 2. function is created, this={}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 2011);
console.log(matilda, jack);

const jalan = "jalan";

console.log(vedant instanceof Person);
console.log(jalan instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

vedant.calcAge();

console.log(vedant.__proto__);
console.log(vedant.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(vedant));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";
console.log(vedant.species, matilda.species);

console.log(vedant.hasOwnProperty("firstName"));
console.log(vedant.hasOwnProperty("species"));

console.log(vedant.__proto__);

// Object.Prototype (Top Of Prototype chain)
console.log(vedant.__proto__.__proto__);

console.log(vedant.__proto__.__proto__.__proto__); //NULL

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 3, 6, 6, 1, 1];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir((x) => x + 1);

////////////////////////////////////////////////
// Coding challenge 1

const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car("BMW", 120);
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
const merz = new Car("Mercedes", 95);
merz.accelerate();
merz.brake();
*/

// CLASSES IN ES6

// class expression
// const PersonCl = class {};

// class DECLRATION
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const vedant = new PersonCl("Vedant", 2003);
console.log(vedant);
