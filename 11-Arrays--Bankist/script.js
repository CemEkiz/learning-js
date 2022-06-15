"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
	owner: "Jonas Schmedtmann",
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};

const account2 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};

const account3 = {
	owner: "Steven Thomas Williams",
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};

const account4 = {
	owner: "Sarah Smith",
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
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

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
	["USD", "United States dollar"],
	["EUR", "Euro"],
	["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// ========================================================================== //
// ========================================================================== //
// ========================== Simple Array Methods ========================== //
// ========================================================================== //
// ========================================================================== //

/* Pas besoin de retenir toutes les Methods par coeur, il faut aller sur MDN 
et/ou à la limite créer un cheatsheet */

/* Cette section va illustrer quelques exemples de manipulation d'array avec
les Methods (c'est assez similaire aux Methods de String pour la plupart) */

/* ---------------------------------------------------------------------------- */
/* .slice Method : extraire une partie d'un array sans modifier l'array orignal */
/* ---------------------------------------------------------------------------- */

// let arr = ["a", "b", "c", "d", "e"];

// console.log(arr.slice(2)); // (3) ['c', 'd', 'e']
// console.log(arr.slice(2, 4)); // (2) ['c', 'd']
// console.log(arr.slice(-2)); // (2) ['d', 'e']
// console.log(arr.slice(-1)); // ['e']
// console.log(arr.slice(1, -2)); // (2) ['b', 'c']

// // Créer une Shallow Copy (aussi possible avec le Spread O)
// const arrCopy = arr.slice();

// // Array original : il n'a pas été modifié
// console.log(arr); // (5) ['a', 'b', 'c', 'd', 'e']

/* ----------------------------------------------------------------------- */
/* .splice Method : extraire une partie d'un array en modifiant l'original */
/* ----------------------------------------------------------------------- */

// // Utilité principale de .splice : supprimer certaines parties de l'array original */

// const arr2 = ["a", "b", "c", "d", "e"];

// console.log(arr2.splice(-1)); // ["e"];
// console.log(arr2.splice(-1)); // ["d"];

// // Array original : il a été modifié
// console.log(arr2); // ['a', 'b', 'c']

// /* Remarque : les chiffres de .slice cible les espaces entre les éléments tandis
// que les chiffres de .splice vise l'index des éléments */
// const arr22 = ["a", "b", "c", "d", "e"];
// console.log(arr22.slice(1, 3)); // ['b', 'c']
// console.log(arr22.splice(1, 3)); // ['b', 'c', 'd']

/* --------------------------------------------------------- */
/* .reverse Method : inverse l'ordre des éléments d'un array */
/* --------------------------------------------------------- */

// const arr3 = [1, 2, 3, 4, 5];

// console.log(arr3.reverse()); // (5) [5, 4, 3, 2, 1]

// // Array original : il a été modifié
// console.log(arr3); // (5) [5, 4, 3, 2, 1]

/* ---------------------------------- */
/* .concat Method : fusionne 2 arrays */
/* ---------------------------------- */

// const arr4 = [1, 2, 3, 4, 5];
// const arr5 = [6, 7, 8, 9, 10];

// // Concaténation des 2 arrays (possible aussi avec le Spread Operator)
// const arrConc = arr4.concat(arr5);
// console.log(arrConc); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr4); // (5) [1, 2, 3, 4, 5]
// console.log(arr5); // (5) [6, 7, 8, 9, 10]

/* --------------------------------------------------- */
/* .join Method : fusionne 2 arrays avec un séparateur */
/* --------------------------------------------------- */

// const arr6 = [1, 2, 3, 4, 5];
// const arr7 = [6, 7, 8, 9, 10];

// console.log(arr6.join("_")); // 1_2_3_4_5
// console.log([...arr6, ...arr7].join(" - ")); // 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10

// ================================================================ //
// ================================================================ //
// ========================== .at Method ========================== //
// ================================================================ //
// ================================================================ //

// const arr = [23, 11, 64];

// // Manière habituelle d'accéder à l'élément d'un Array
// console.log(arr[0]); // 23
// // Accéder l'élément d'un array avec le Method .at
// console.log(arr.at(0)); // 23

// // Accéder au dernier élément d'un array sans .at
// console.log(arr[arr.length - 1]); // 64
// console.log(arr.slice(-1)[0]); // 64

// // Accéder au dernier élément d'un array avec .at
// console.log(arr.at(-1)); // 64

// /* L'utilisation de .at ou pas dépendra des préférences et du contexte. */

// // .at Method sur un String
// console.log("Cem".at(2)); // m
// console.log("Cem".at(-1)); // m
