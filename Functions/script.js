"use strict";

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  // ES5
  // numPassenger = numPassenger || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 880);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);

const flight = "LH234";
const vedant = {
  name: "Vedant Jalan",
  passport: 234123523442,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 234123523442) {
    alert("Checked In");
  } else {
    alert("Wrong Passport");
  }
};

// checkIn(flight, vedant);
// console.log(flight);
// console.log(vedant);

const newPassport = function (person) {
  person.passport = Math.random() * 1000000000000;
};
newPassport(vedant);
checkIn(flight, vedant);

// Javascript does not have 'passby reference' but only 'passby values'
*/

const oneWord = function (str) {
  return str.replaceAll(" ", "").tolowercase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.touppercase(), ...others].join(" ");
};
