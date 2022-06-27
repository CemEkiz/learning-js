"use strict";

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
// 	if (mov > 0) {
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

// ===================================================================== //
// ===================================================================== //
// ========================== The .map Method ========================== //
// ===================================================================== //
// ===================================================================== //
// /* Cette Method permet de loop over un array mais contrairement à forEach,
// il va retourner un nouvel array et appliquer une callback function. */

// /* Exemple : nous voulons convertir ces mouvements € en $ */

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUSD = 1.1;

// /* ---------------------------- Exemple avec Regular Function ---------------------------- */

// const movementsToUSD = movements.map(function (mov) {
// 	return Math.trunc(mov * eurToUSD);
// });

// // Array d'origine
// console.log(movements); //> (8) [200, 450, -400, 3000, -650, -130, 70, 1300]

// console.log(movementsToUSD); //> (8) [220, 495, -440, 3300, -715, -143, 77, 1430]

// /* ---------------------------- Exemple avec Arrow Function ---------------------------- */

// const movementsToUSD2 = movements.map((mov) => Math.trunc(mov * eurToUSD));

// // Array d'origine
// console.log(movements); //> (8) [200, 450, -400, 3000, -650, -130, 70, 1300]

// // Nouvel array
// console.log(movementsToUSD2); //> (8) [220, 495, -440, 3300, -715, -143, 77, 1430]

// /* ---------------------------- Exemple avec for of ---------------------------- */
// /* Cet exemple aura le même résultat que ci-dessus mais avec la for of loop. */

// const movementsUSDfor = [];

// for (const mov of movements) {
// 	movementsUSDfor.push(Math.trunc(mov * eurToUSD));
// }

// console.log(movementsUSDfor);

// /* Note : En confrontant l'utilisation de la boucle of (sans fonction donc assez linéaire) à l'utilisation
// de la .map Method avec une callback function on peut noter que ce sont 2 paradigmes assez différents
// (Linear programming VS Functionnal programming) et il faut savoir que la tendance se tourne au Functionnal
// Programming avec l'utilisation de Methods, et de Callback Functions. */

// /* ---------------------------- .map Method avec les 3 Parameters ---------------------------- */

// const movementsDescriptions = movements.map(
// 	(mov, i, arr) =>
// 		`Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
// 			mov
// 		)} `
// );

// console.log(movementsDescriptions); //> Cf. Console

// /* Note : Différence entre forEach et .map Method
// Bien que les 2 features permettent de loop over un array et d'utiliser une callback function sur les 3 paramètres (mov, i, arr)
// il y une différence au niveau de l'output. Avec forEach on crée un "side effect" car elle retourne un output un par un (elle retourne
// autant de ligne qu'il y a d'élément dans l'array) tandis que la .map Method va retourner les outputs dans un seul et même nouvel array. */

// ======================================================================== //
// ======================================================================== //
// ========================== The .filter Method ========================== //
// ======================================================================== //
// ======================================================================== //
// /* Cette Method permet de loop over un array et de filtrer des éléments. Dans l'exemple ci-dessous
// nous voulons un nouvel array ("deposits") qui contiendra seulement des nombres positifs. */

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /* ---------------------------- Exemple avec Regular Function ---------------------------- */

// const deposits = movements.filter((mov) => mov > 0);

// console.log(movements); // (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(deposits); // (5) [200, 450, 3000, 70, 1300]

// const withdrawals = movements.filter((mov) => mov < 0);

// console.log(movements); // (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(withdrawals); // (3) [-400, -650, -130]

// /* ---------------------------- Exemple avec for of ---------------------------- */

// const depositsFor = [];

// for (const mov of movements) {
// 	if (mov > 0) {
// 		depositsFor.push(mov);
// 	}
// }

// const withdrawalsFor = [];

// for (const mov of movements) {
// 	if (mov < 0) {
// 		withdrawalsFor.push(mov);
// 	}
// }

// console.log(withdrawalsFor); // (3) [-400, -650, -130]
// console.log(depositsFor); // (5) [200, 450, 3000, 70, 1300]

// /* Note : Pourquoi utiliser les methods .map, .filter, .reduce au lieu de la for-loop ?
// 1) Les Methods sont plus simple à coder et à comprendre.
// 2) C'est la tendance vers laquelle la majorité des développeurs vont.
// 3) Cela permet de faire des grandes chaînes de Methods -> variable.method().method().method */

// ======================================================================== //
// ======================================================================== //
// ========================== The .reduce Method ========================== //
// ======================================================================== //
// ======================================================================== //
// /* Cette Method permet de faire la somme de tous les éléments d'un array en une seule
// et unique valeur (effet boule de neige). */

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// /* acc = Accumulateur = boule de neige */
// /* 0 = L'accumulation commence à 0 */
// const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);

// console.log(balance); // 3840

// /* ---------------------------- Exemple avec for of ---------------------------- */

// let balance2 = 0;
// for (const mov of movements) {
// 	balance2 += mov;
// }

// console.log(balance2); // 3840

// /* ---------------------------- Maximum Value ---------------------------- */
// /* La .reduce Method permet de faire beaucoup de choses, dans cet exemple on va chercher
// et retourner la valeur la plus grande d'un array, il faut toujours se demander "quel sera le rôle
// du paramètre "acc" */

// const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const max = movements.reduce((acc, mov) => {
// 	if (acc > mov) {
// 		return acc;
// 	} else {
// 		return mov;
// 	}
// }, movements[0]);

// console.log(max); // 3000

// ====================================================================== //
// ====================================================================== //
// ========================== Chaining Methods ========================== //
// ====================================================================== //
// ====================================================================== //

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUSD = 1.1;

// // const totalDepositsUSD = movements
// // 	.filter((mov) => mov > 0)
// // 	.map((mov) => mov * eurToUSD)
// // 	.reduce((acc, mov) => acc + mov, 0);

// // console.log(totalDepositsUSD); // 5522.000000000001

// /* Pour débuguer il faudrait utiliser console.log afin de déterminer d'où provient la source de l'erreur */
// /* Admettons que nous avons mis le signe "<" au lieu de ">" lors de l'étape de la Method .filter
// cf. l'étape de la Method .map qui résulte de la Method .filter (c'est comme une pipeline/cascade/effet domino) */
// /* Ici on peut donc déduire que l'erreur viens de l'étape de la Method .filter qui a filtrer seulement les nombres négatifs. */

// const totalDepositsUSD = movements
// 	.filter((mov) => mov < 0)
// 	.map((mov, i, arr) => {
// 		console.log(arr);
// 		return mov * eurToUSD;
// 	})
// 	.reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD); // -1298.0000000000002

// ====================================================================== //
// ====================================================================== //
// ========================== The .find Method ========================== //
// ====================================================================== //
// ====================================================================== //
// /* Cela permet de récupérer l'élément d'un array en se basant sur une condition */
// /* Cette Method ressemble à .filter mais contrairement à ce dernier, .find ne va pas
// retourner un array avec tous les éléments true mais seulement le premier élément true */

// /* ---------------------------- Exemple 1 ---------------------------- */
// /* Trouver le premier withdrawal */

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find((mov) => mov < 0);

// console.log(movements); // (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(firstWithdrawal); // -400

// /* ---------------------------- Exemple 2 ---------------------------- */
// /* Trouver un compte (Object) en se basant sur le nom du propriétaire */

// const account11 = {
// 	owner: "Michael",
// 	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
// };

// const account22 = {
// 	owner: "Dwight",
// 	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
// };

// const account33 = {
// 	owner: "Phyllis",
// 	movements: [200, -200, 340, -300, -20, 50, 400, -460],
// };

// const accountsNew = [account11, account22, account33];

// const accountsFind = accountsNew.find((acc) => acc.owner === "Dwight");

// console.log(accountsFind); // {owner: 'Dwight', movements: Array(8)}

// /* ---------------------------- Exemple avec for of ---------------------------- */

// const accountsNewFor = [account11, account22, account33];

// let accountfor;

// for (const account of accountsNewFor) {
// 	if (account.owner === "Michael") {
// 		accountfor = account;
// 		break;
// 	}
// }

// console.log(accountfor); // {owner: 'Michael', movements: Array(8)}

// =========================================================================== //
// =========================================================================== //
// ========================== The .findIndex Method ========================== //
// =========================================================================== //
// =========================================================================== //
// /* Il fonctionne de la même manière que .find Method : il fonctionne avec une callback
// function qui prend en charge une condition, si celle-ci est true alors l'index sera retourné
// (rappel : dans le cas de .find c'est l'élément qui est retourné) */

// const character1 = {
// 	name: "Michael",
// 	sexe: "Male",
// };

// const character2 = {
// 	name: "Dwight",
// 	sexe: "Male",
// };

// const character3 = {
// 	name: "Angela",
// 	sexe: "Female",
// };

// const character4 = {
// 	name: "Erin",
// 	sexe: "Male",
// };

// const allCharacters = [character1, character2, character3, character4];

// const firstFemale = allCharacters.findIndex((all) => all.sexe === "Female");

// console.log(firstFemale); // 2

// ================================================================================== //
// ================================================================================== //
// ========================== The .some and .every Methods ========================== //
// ================================================================================== //
// ================================================================================== //

// /* ---------------------------- Rappel : .includes Method ---------------------------- */
// // EQUALITY
// /* Cette Method permet de savoir si un élément existe dans un array mais elle test avec
// une strict égalité (===) */

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements.includes(-130)); // true

// /* ---------------------------- .some Method ---------------------------- */
// // CONDITION : au moins un élément
// /* Cela permet de faire un test conditionnel qui retournera true ou false */
// /* Il suffit qu'au moins un élément soit true pour valider la condition */

// const movements0 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const anyDeposits = movements.some((mov) => mov > 1500);
// console.log(anyDeposits); // true

// /* ---------------------------- .every Method ---------------------------- */
// /* CONDITION : tous les éléments */
// /* Comme avec .some, ici un test conditionnel est réalisé pour retourner true ou false */
// /* Il faut que tous les éléments soit true afin de valider la condition */

// const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const movements2 = [200, 450, 3000, 70, 1300];

// console.log(movements1.every((mov) => mov > 0)); // false
// console.log(movements2.every((mov) => mov > 0)); // true

// /* ---------------------------- DRY Tips ---------------------------- */
// /* Il peut être pratique de stocker la callback function dans une variable */

// const movements3 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposit = (mov) => mov > 0;
// console.log(movements3.some(deposit)); // true
// console.log(movements3.every(deposit)); // false
// console.log(movements3.filter(deposit)); // (5) [200, 450, 3000, 70, 1300]

// ==================================================================================== //
// ==================================================================================== //
// ========================== The .flat and .flatMap Methods ========================== //
// ==================================================================================== //
// ==================================================================================== //

/* ---------------------------- .flat ---------------------------- */
/* Flat permet de transformer un array imbriqué en un seul et même array */

/* ______Avec un Array d'une profondeur de 1 */
const arrNested = [[1, 2, 3], [4, 5, 6], 7, 8];

/* .flat() est considéré comme par défaut au level 1 */
const flatArrLevel1 = arrNested.flat();
console.log(flatArrLevel1); // (8) [1, 2, 3, 4, 5, 6, 7, 8]

/* ______Avec un Array d'une profondeur de 2 */
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

/* Ici la profondeur étant plus élevé il faut définir le level à 2 */
const flatArrLevel2 = arrDeep.flat(2);
console.log(flatArrLevel2); //

/* ---------------------------- .flat VS .flatMap ---------------------------- */

const account11 = {
	owner: "Jonas Schmedtmann",
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
};

const account22 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
};

const account33 = {
	owner: "Steven Thomas Williams",
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
};

const account44 = {
	owner: "Sarah Smith",
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};

const accountsNew = [account11, account22, account33, account44];

// Avec flat : on peut avoir accès au level grâce à flat(), il suffit d'entrer la valeur de profondeur
const accountMovementsFlat = accountsNew
	.map((acc) => acc.movements)
	.flat()
	.reduce((acc, mov) => acc + mov, 0);

console.log(accountMovementsFlat); //> 17840

// Avec flatMap : on ne peut pas avoir accès au level grâce à flatMap mais c'est + performant
const accountMovementsFlatMap = accountsNew
	.flatMap((acc) => acc.movements)
	.reduce((acc, mov) => acc + mov, 0);

console.log(accountMovementsFlatMap); //> 17840
