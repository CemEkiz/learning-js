"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/* Note : cette application est très simplifié mais elle permet de pratiquer tout ce que j'ai
appris jusque là. */
/* Note 2 : on aurait pu utiliser les Maps durant ce projet mais ici Jonas veut simuler une situation
où les données viennent d'un API. Et les données venant d'un API arrivent sous forme d'Object. */

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

const displayMovements = function (movements) {
	// Supprimer le contenu HTML de base (c'est fréquent de le faire)
	containerMovements.innerHTML = "";

	// Boucle sur tous les éléments de l'array "movements"
	movements.forEach(function (mov, i) {
		// Afin de déterminer quel contenu HTML ajouter
		const type = mov > 0 ? "deposit" : "withdrawal";

		// Cibler le contenu HTML à ajouter
		const html = `
		<div class="movements__row">
		<div class="movements__type movements__type--${type}">
		${i + 1} ${type}
		</div>
		<div class="movements__value">${mov} </div>
		</div>
		`;

		// Fonction qui ajoute le contenu HTML ciblé ci-dessus
		containerMovements.insertAdjacentHTML("afterbegin", html);
	});
};

displayMovements(account1.movements);

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// Notes

/* innerHTML vs. textContent */
// console.log(containerMovements.innerHTML); //> cf. Console
// console.log(containerMovements.textContent); //> cf. Console

/* Utilisation de la fonction "insertAdjacentHTML" --> cf. MDN */

// ========================================================================== //
// ========================================================================== //
// ========================== Simple Array Methods ========================== //
// ========================================================================== //
// ========================================================================== //

// /* Pas besoin de retenir toutes les Methods par coeur, il faut aller sur MDN
// et/ou à la limite créer un cheatsheet */

// /* Cette section va illustrer quelques exemples de manipulation d'array avec
// les Methods (c'est assez similaire aux Methods de String pour la plupart) */

// /* ---------------------------- .slice Method ---------------------------- */
// /* Elle permet d'extraire une partie d'un array sans modifier l'array orignal */

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

// /* ---------------------------- .splice Method ---------------------------- */
// /* Elle permet d'extraire une partie d'un array en modifiant l'original */

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

// /* ---------------------------- .reverse Method ---------------------------- */
// /* Elle permet d'inverser l'ordre des éléments d'un array */

// const arr3 = [1, 2, 3, 4, 5];

// console.log(arr3.reverse()); // (5) [5, 4, 3, 2, 1]

// // Array original : il a été modifié
// console.log(arr3); // (5) [5, 4, 3, 2, 1]

// /* ---------------------------- .concat Method ---------------------------- */
// /* Elle permet de fusionner 2 arrays */

// const arr4 = [1, 2, 3, 4, 5];
// const arr5 = [6, 7, 8, 9, 10];

// // Concaténation des 2 arrays (possible aussi avec le Spread Operator)
// const arrConc = arr4.concat(arr5);
// console.log(arrConc); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr4); // (5) [1, 2, 3, 4, 5]
// console.log(arr5); // (5) [6, 7, 8, 9, 10]

// /* ---------------------------- .join Method ---------------------------- */
// /* Elle permet de joindre les éléments en un seul avec un séparateur */

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

// ========================================================================= //
// ========================================================================= //
// ========================== forEach with Arrays ========================== //
// ========================================================================= //
// ========================================================================= //

// const movementArr = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /* --------------- Rappel pour comparaison : avec la for-of Loop --------------- */

// for (const [i, mov] of movementArr.entries()) {
// 	if (mov > 0) {
// 		console.log(`Movement ${i} : You deposited ${Math.abs(mov)}`);
// 	} else {
// 		console.log(`Movement ${i} : You withdrew ${Math.abs(mov)}`);
// 	}
// } //> cf. Console

// /* -------------------------------- Avec forEach -------------------------------- */

// /* Ici forEach est une higher-order function qui va exécuter la Callback function.
// À chaque itération, forEach va call l'élément, l'index, et l'array (mov, i, arr) */
// movementArr.forEach(function (mov, i, arr) {
// 	if (movement > 0) {
// 		console.log(`Movement ${i} : You deposited ${Math.abs(mov)}`);
// 	} else {
// 		console.log(`Movement ${i} : You withdrew ${Math.abs(mov)}`);
// 	}
// }); //> cf. mov

// /* C'est comme si à chaque itération, il se passait ceci */
// // 0: function(200)
// // 1: function(450)
// // 2: function(400)

// /* Question : au final, for-of et forEach donné le même résultat dans ces situations, que choisir ?
// -> forEach est plus clean mais sinon ça dépend des préférences de chacun. */

// /* Note : les emplacements des mots pour [i, mov] dans la for-of loop et (mov, i, arr) dans forEach
// sont inversés. Mais "i" cible l'index et mov cible l'élément. */
// /* Note 2 : forEach fait obligatoirement tout le tour de l'array */

// ================================================================================ //
// ================================================================================ //
// ========================== forEach with Maps and Sets ========================== //
// ================================================================================ //
// ================================================================================ //

// /* -------------------------------- Avec Map -------------------------------- */

// const currenciesMap = new Map([
// 	["USD", "United States dollar"],
// 	["EUR", "Euro"],
// 	["GBP", "Pound sterling"],
// ]);

// console.log(currenciesMap);
// //> Map(3) {'USD' => 'United States dollar', 'EUR' => 'Euro', 'GBP' => 'Pound sterling'}

// /* Ici forEach va call la valeur, la clé et la map (comme pour l'array) */
// currencies.forEach(function (value, key, map) {
// 	console.log(`${key}: ${value}`);
// });
// //> USD: United States dollar
// //> EUR: Euro
// //> GBP: Pound sterling

// /* -------------------------------- Avec Set -------------------------------- */

// const currenciesSet = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

// console.log(currenciesSet);
// //> Set(3) {'USD', 'GBP', 'EUR'}

// currenciesSet.forEach(function (value, _, map) {
// 	console.log(`${_}: ${value}`);
// });
// //> USD, USD
// //> GBP, GBP
// //> EUR, EUR

// /* Note : Pour rappel, Set n'a pas de Key ni d'index mais le pattern des paramètres pour forEach étant
// fonctionnel pour les arrays et maps, il a été décidé par les développeur de JS de le garder ainsi */
