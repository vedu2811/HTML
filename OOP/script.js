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

Person.hey = function () {
  console.log("Hey THERE...");
  console.log(this);
};
Person.hey();
// jonas.hey();

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

// CLASSES IN ES6

// class expression
// const PersonCl = class {};

// class DECLRATION
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // INSTANCE METHODS
  // Methods get added to .prototype property automatically
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2024 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // STATIC METHOD
  static hey() {
    console.log("Hey THERE...");
    console.log(this);
  }
}

const vedant2 = new PersonCl("Vedant Jalan", 2003);
console.log(vedant2);
vedant.calcAge();
console.log(vedant2.age);

console.log(vedant2.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
vedant2.greet();

// IMPORTANT Points about Classes
// 1. Classes are NOT Hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

PersonCl.hey();

const account = {
  owner: "Jonas",
  movements: [200, 133, 532, 777],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const vedant = Object.create(PersonProto);
console.log(vedant);
vedant.name = "Vedant";
vedant.birthYear = 2003;
vedant.calcAge();

console.log(vedant.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1981);
sarah.calcAge();

/////////////////////////////////////////
// Coding Challenge 2

class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.name} is going at ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.name} is going at ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(x) {
    this.speed = x * 1.6;
  }
}

const ford = new Car("Ford", 120);
ford.accelerate();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 100;
console.log(ford.speed);

///////////////////////////////////////////////
// Inheritance between Classes: Constructor fxns

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.intro = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const vedant = new Student("Vedant", 2003, "CSE");
console.log(vedant);
vedant.intro();
vedant.calcAge();

console.log(vedant.__proto__);
console.log(vedant.__proto__.__proto__);

console.log(vedant instanceof Student);
console.log(vedant instanceof Person);
console.log(vedant instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

////////////////////////////////////////////////////////
// Coding challenge 3

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
