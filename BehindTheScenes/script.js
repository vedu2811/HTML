"use strict";

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 2003) {
      var millenial = true;
      const firstName = "Steven";
      const str = `Oh, You're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); //Reference Error
    console.log(millenial);
    // console.log(add(2, 3));
  }
  printAge();

  return age;
}

const firstName = "Vedant";
calcAge(2003);
