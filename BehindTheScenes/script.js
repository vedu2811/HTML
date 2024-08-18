"use strict";

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 2003) {
      var millenial = true;
      const str = `Oh, You're a millenial, ${firstName}`;
      console.log(str);
    }
    // console.log(str); //Reference Error
    console.log(millenial);
  }
  printAge();

  return age;
}

const firstName = "Vedant";
calcAge(2003);
