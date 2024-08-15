// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
//PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task to this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temperature amplitude? Answer: diff bw highest and lowest temp
// - How to compute max and min temp?
// - What's sensor error? And what to do?

// 2) Breaking up to sub-probs
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amp = calcTempAmplitude(temperature);
console.log(amp);

//PROBLEM -2
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge the arrys..

// 2) Breaking the problem
// - Merge two arrays..

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const ampBug = calcTempAmplitudeBug([4, 5, 6, 2], [1, 2, -9, 0]);
console.log(ampBug);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",

    // C) FIX
    // value: Number(prompt("Degree celcius")),
    value: 10,
  };

  // B) Find the Bug
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify the bug.
console.log(measureKelvin());

// Using a Debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const ampBug = calcTempAmplitudeBug([4, 5, 6, 2], [1, 2, 9, 7]);
// A) Identify
console.log(ampBug);
*/

const printForecast = function (arr) {
  var array = [];
  array.push("...");
  for (let i = 0; i < arr.length; i++) {
    array.push(`${arr[i]}°C in ${i + 1} days ...`);
  }
  console.log(array.join(" "));
};
const test1 = printForecast([17, 21, 23]);
const test2 = printForecast([12, 5, -5, 0, 4]);
