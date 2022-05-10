"use strict";

// ====================================================== //
// ====================================================== //
// ==========================  ========================== //
// ====================================================== //
// ====================================================== //
// Data needed for a later exercise
const flights =
	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// ========================================================================= //
// ========================================================================= //
// ========================== Destructuring Array ========================== // Notion :
// ========================================================================= //
// ========================================================================= //
// /* Cela consiste à éclater (déstructer ou unpack) les valeurs d'un array dans des variables pour les retrouver */

// /* Je crée un Array */
// const arr = [2, 3, 4];

// /* Je peux les retrouver de la manière suivante : */
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c); // 2 3 4

// /* Mais il est + pratique d'utiliser cette méthode : */
// const [x, y, z] = arr;
// console.log(x, y, z); // 2 3 4

// /* ----------------------------- Restaurant Exemple ----------------------------- */

// const restaurant = {
// 	name: "Classico Italiano",
// 	location: "Via Angelo Tavanti 23, Firenze, Italy",
// 	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
// 	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
// 	mainMenu: ["Pizza", "Pasta", "Risotto"],

// 	order: function (starterIndex, mainIndex) {
// 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// 	},
// };

// /* Destructurer les valeurs d'un Array
//    PS : En laissant l'espace blanc je skip la 2ème valeur de l'Array */
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary); // Italian Vegetarian

// /* Intervertir */
// [main, secondary] = [secondary, main];
// console.log(main, secondary); // Vegetarian Italian

// /* L'ancienne méthode pour intervertir */
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // Recevoir 2 valeurs depuis une fonction avec la déstructuration
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse); // Garlic Bread Pizza

// /* ----------------------------- Nested Destructuring ----------------------------- */

// const nested = [2, 4, [5, 6]];

// /* De manière simple */
// // const [i, , j] = nested;
// // console.log(i, j); // 2 [5, 6]

// /* ou alors avec encore + de précision*/
// const [i, , [j, k]] = nested;
// console.log(i, j, k); // 2 5 6

// /* ----------------------------- Default Values ----------------------------- */
// /* Il est possible de définir des valeurs par défaut à la place d'undefined
//    Cela peut être utile dans le cas où nous utilisons des APIs */

// /* Sans définir de valeur par défaut */
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // 8 9 undefined

// /* En définissant la valeur par défaut sur 1 par exemple () */
// const [a = 1, b = 1, c = 1] = [8, 9];
// console.log(a, b, c); // 8 9 1

// =========================================================================== //
// =========================================================================== //
// ========================== Destructuring Objects ========================== // Notion :
// =========================================================================== //
// =========================================================================== //
/* Cela consiste à éclater (déstructer ou unpack) les propriétés d'un Object dans des variables pour les retrouver */

/* ----------------------------- Restaurant Exemple ----------------------------- */

// const restaurant = {
// 	name: "Classico Italiano",
// 	location: "Via Angelo Tavanti 23, Firenze, Italy",
// 	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
// 	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
// 	mainMenu: ["Pizza", "Pasta", "Risotto"],

// 	openingHours: {
// 		thu: {
// 			open: 12,
// 			close: 22,
// 		},
// 		fri: {
// 			open: 11,
// 			close: 23,
// 		},
// 		sat: {
// 			open: 0, // Open 24 hours
// 			close: 24,
// 		},
// 	},

// 	order: function (starterIndex, mainIndex) {
// 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// 	},

// 	orderDelivery: function ({
// 		starterIndex = 1,
// 		mainIndex = 0,
// 		time = "20:00",
// 		address,
// 	}) {
// 		console.log(
// 			`Order receveid! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// 		);
// 	},
// };

/* -------------------------------------------------------------------------------- */

// restaurant.orderDelivery({
// 	time: "22:30",
// 	address: "Via del Sole, 21",
// 	mainIndex: 2,
// 	starterIndex: 2,
// }); // Order receveid! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22:30

// restaurant.orderDelivery({
// 	address: "Via del Sole, 21",
// 	starterIndex: 1,
// }); // Order receveid! Bruschetta and Pizza will be delivered to Via del Sole, 21 at 20:00

// /* Destructuer les propriétés d'un Object */
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// /* Changer le nom des variables */
// /* En quoi cela peut être utile ? En pratique on va souvent récupérer des Objects via des APIs et
//    destructurer les propriétés, donc il peut être pratique de changer le nom des variables */
// const {
// 	name: restaurantName,
// 	openingHours: hours,
// 	categories: tags,
// } = restaurant;

// /* Définir des valeurs par défaut */
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// /* Muter des variables */
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b); // 23 7

// /* Destructurer des Objects imbriqués */
// /* Dans l'Object restaurant > Object openingHours > Object fri > je destructure open et close et je leur assigne des variables */
// const {
// 	fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// =========================================================================== //
// =========================================================================== //
// ========================== Spread Operator (...) ========================== // Notion :
// =========================================================================== //
// =========================================================================== //
/* Cet opérateur permet d'ajouter plus facilement des nouveaux éléments à un Array */
/* Son utilisation est similaire à la décompostion (destructuring) mais il récupère tous les éléments d'un Array
   et ne crée pas de nouvelles variables contrairement à la décomposition */

// /* Array de base */
// const arr = [7, 8, 9];

// /* Ancienne manière de faire */
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr); // 1 2 7 8 9

// /* Avec le Spread Operator */
// const newArr = [1, 2, ...arr];
// console.log(newArr); // 1 2 7 8 9

// /* Le Spread Operator peut aussi servir à obtenir les valeurs d'un Array individuellement */
// console.log(newArr); // (5) [1, 2, 7, 8, 9]
// console.log(...newArr); // 1 2 7 8 9

/* ----------------------------- Restaurant Exemple ----------------------------- */

// const restaurant = {
// 	name: "Classico Italiano",
// 	location: "Via Angelo Tavanti 23, Firenze, Italy",
// 	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
// 	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
// 	mainMenu: ["Pizza", "Pasta", "Risotto"],

// 	openingHours: {
// 		thu: {
// 			open: 12,
// 			close: 22,
// 		},
// 		fri: {
// 			open: 11,
// 			close: 23,
// 		},
// 		sat: {
// 			open: 0, // Open 24 hours
// 			close: 24,
// 		},
// 	},

// 	order: function (starterIndex, mainIndex) {
// 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// 	},

// 	orderDelivery: function ({
// 		starterIndex = 1,
// 		mainIndex = 0,
// 		time = "20:00",
// 		address,
// 	}) {
// 		console.log(
// 			`Order receveid! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// 		);
// 	},

// 	orderPasta: function (ing1, ing2, ing3) {
// 		console.log(
// 			`Here is your delicious pasta with ${ing1} ${ing2} and ${ing3}`
// 		);
// 	},
// };

// /* Je crée un nouvel Array dans lequel je me base sur le mainMenu du restaurant
//    J'y rajoute simplement "Gnocci" */
// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// /* Copie d'un Array grâce au Spread Operator */
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// /* Fusionner 2 arrays */
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(restaurant.starterMenu);
// console.log(restaurant.mainMenu);
// console.log(menu); // retourne un seul Array contenant starterMenu et mainMenu

// /* - Petite parenthèse : Les Iterables sont des arrays, strings, maps, sets mais PAS les Objects
//    - Le Spread Operator ne s'appliques qu'aux Iterables  */
// const str = "Jonas";
// const letters = [...str, "", "S."];
// console.log(letters);

// /* En fait le Spread Operator s'utilise dans des endroits qui peuvent accueilir des valeurs séparés d'une virgule */

// /* Exemple qui fonctionne */
// const myName = "Cem";
// console.log(...myName); // C e m // Chaque lettre est séparé
// /* Exemple qui ne fonctionnera pas */
// // const myLastName = "Ekiz"
// // console.log(`Mon nom est ${...myLastName}`)

/* ----------------------------- Real World Example with Order Pasta of Restaurant ----------------------------- */

// const ingredients = [
// 	prompt("Let's make pasta! Ingredients 1?"),
// 	prompt("Let's make pasta! Ingredients 2?"),
// 	prompt("Let's make pasta! Ingredients 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);
// /* Cela revient à faire */
// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

/* ----------------------------- Objects ----------------------------- */

// /* Il est possible d'ajouter des nouvelles propriétés à un Object */
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
// console.log(newRestaurant);

// /* Créer une copie et modifier une valeur */
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name); // Ristorante Roma
// console.log(restaurant.name); // Classico Italiano

// ===================================================================== //
// ===================================================================== //
// ========================== Rest Parameters ========================== // Notion :
// ===================================================================== //
// ===================================================================== //

/* ----------------------------- Restaurant Exemple ----------------------------- */

// const restaurant = {
// 	name: "Classico Italiano",
// 	location: "Via Angelo Tavanti 23, Firenze, Italy",
// 	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
// 	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
// 	mainMenu: ["Pizza", "Pasta", "Risotto"],

// 	openingHours: {
// 		thu: {
// 			open: 12,
// 			close: 22,
// 		},
// 		fri: {
// 			open: 11,
// 			close: 23,
// 		},
// 		sat: {
// 			open: 0, // Open 24 hours
// 			close: 24,
// 		},
// 	},

// 	order: function (starterIndex, mainIndex) {
// 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// 	},

// 	orderDelivery: function ({
// 		starterIndex = 1,
// 		mainIndex = 0,
// 		time = "20:00",
// 		address,
// 	}) {
// 		console.log(
// 			`Order receveid! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// 		);
// 	},

// 	orderPasta: function (ing1, ing2, ing3) {
// 		console.log(
// 			`Here is your delicious pasta with ${ing1} ${ing2} and ${ing3}`
// 		);
// 	},

// 	orderPizza: function (mainIngredient, ...otherIngredients) {
// 		console.log(mainIngredient);
// 		console.log(otherIngredients);
// 	},
// };

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
// restaurant.orderPizza("mushrooms");

/* ---------------------------------- Destructuring ----------------------------------  */

// // 1) Destructuring

// // SPREAD, because on RIGHT side of "="
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);
// console.log(...arr);

// // REST, because on LEFT side of "="
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
// 	...restaurant.mainMenu,
// 	...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

/* ---------------------------------- Functions ----------------------------------  */

// /* Sans le REST Parameter */
// // const add = function (numbers) {
// // 	console.log(numbers);
// // };

// /* Avec le REST Parameter */
// const add = function (...numbers) {
// 	let sum = 0;
// 	for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// 	console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);
