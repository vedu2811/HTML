"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const vedant = new Person("Vedant", 2003);
console.log(vedant);

// 1. New {} is created
// 2. function is created, this={}
// 3. {} linked to prototype
// 4. function automatically return {}
