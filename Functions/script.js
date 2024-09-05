"use strict";

const bookings = [];

const createBooking = function (flightNum, numPassenger, price) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
