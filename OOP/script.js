"use strict";

const Person = function (firstName, birthYear) {
  console.log(this);
};

new Person("Vedant", 2003);

// 1. New {} is created
// 2. function is created, this={}
// 3. {} linked to prototype
// 4. function automatically return {}
