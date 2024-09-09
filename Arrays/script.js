"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Vedant Jalan",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 9182,
};

const account2 = {
  owner: "Abir Chodha",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 8727,
};

const account3 = {
  owner: "Surya Pratap Singh",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 7266,
};

const account4 = {
  owner: "Uday Kishor Pawar",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 8773,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  // .textContent=0;

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    }. ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance}€`;
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const totalDep = movements
    .filter((mov) => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${totalDep}€`;

  const totalWit = movements
    .filter((mov) => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(totalWit)}€`;

  const totalInterest = movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * 1.2) / 100)
    .filter((mov) => mov > 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${totalInterest}€`;
};
// calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);
console.log(accounts);

// Event Handlers
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // Prevent Form from Submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display the UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    // Display movements
    // Display balance
    // Display summary
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
/*
let arr = ["a", "b", "c", "d", "e"];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());

// SPLICE - Mutates(changes) original array
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 3);
console.log(arr);

// REVERSE - Mutates
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr.reverse());
console.log(arr);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(" - "));

// AT Method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// Getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log("jonas".at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log("--- FOREACH ---");
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// For Each does not break out of the array - it completes the whole array anyhow...

// forEach on MAPS
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(key, value);
});

// forEach on SETS
const currenciesUnique = new Set(["usd", "gbp", "inr", "usd", "eur", "eur"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
  console.log(_, value);
});

//////////////////////////////////////////////
// Coding Challenge #1

const checkDogs = function (dogsJulia, dogsKate) {
  const julia = dogsJulia.slice(1, -2);
  const fullArr = julia.concat(dogsKate);

  fullArr.forEach(function (dog, i, arr) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
const dogs1 = [3, 5, 2, 12, 7];
const dogs2 = [4, 1, 15, 8, 3];
const dogs3 = [9, 16, 6, 8, 3];
const dogs4 = [10, 5, 6, 1, 4];
console.log("---DataSet 1---");
checkDogs(dogs1, dogs2);
console.log("---DataSet 2---");
checkDogs(dogs3, dogs4);

// MAP Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd;
});

const movementsUSDArrow = movements.map((mov) => mov * euroToUsd);
console.log(movements);
console.log(movementsUSD);
console.log(movementsUSDArrow);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptive = movements.map(function (mov, i, arr) {
  return `Movement ${
    i + 1
  }: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`;

  // if (mov > 0) {
  //   return `Movement ${i + 1}: You deposited ${mov}`;
  // } else {
  //   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  // }
});
console.log(movementsDescriptive);

// FILTER METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const depositFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositFor.push(mov);
  }
}
console.log(depositFor);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

const withdrawalFor = [];
for (const mov of movements) {
  if (mov < 0) {
    withdrawalFor.push(mov);
  }
}
console.log(withdrawalFor);

// The REDUCE Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// acc - Accumulator is like a snowball
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

const balanceArrow = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balanceArrow);

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, cur) => {
  if (acc > cur) return acc;
  else return cur;
}, movements[0]);
console.log(max);

///////////////////////////////////////////
// Coding Challenge 2

// const ages = [5, 2, 4, 1, 15, 8, 3];
const ages = [16, 6, 10, 5, 6, 1, 4];
const calcAverageHumanAge = function (ages) {
  const dogHumanAge = ages.map((age) => (age <= 2 ? 2 * age : 16 + 4 * age));
  console.log(dogHumanAge);

  const dogsFiltered = dogHumanAge.filter((age) => age >= 18);
  console.log(dogsFiltered);

  const avgAge =
    dogsFiltered.reduce((acc, cur) => acc + cur, 0) / dogsFiltered.length;
  console.log(avgAge);
};
calcAverageHumanAge(ages);

// CHAINING METHODS
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

//////////////////////////////////////////////////
// Coding Challenge 3

const calcAverageHumanAge = function (ages) {
  const avgAge = ages
    .map((age) => (age <= 2 ? age * 2 : age * 4 + 16))
    .filter((mov) => mov >= 18)
    .reduce((acc, mov, i, arr) => acc + mov / arr.length, 0);
  console.log(avgAge);
};
const ages = [5, 2, 4, 1, 15, 8, 3];
calcAverageHumanAge(ages);

// FIND Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find((acc) => (acc.owner = "Vedant Jalan"));
console.log(account);
*/
