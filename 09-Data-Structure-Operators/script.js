"use strict";

// Data needed for a later exercise
const flights =
	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// ========================================================================== //
// ========================================================================== //
// ========================== Destructuring Arrays ========================== //
// ========================================================================== //
// ========================================================================== //
// /* Destructuring Assignment est une syntaxe spécial qui permet de unpack les arrays ou les objets
// dans des variables. Il est possible de décomposer des Arrays et des Objects (ce sont les deux
// principales Data Structure de JavaScript) */

// const arr = [2, 3, 4];

// /* Récuperer les valeurs d'un Array SANS le Destructuring Assignment */
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c); // 2 3 4

// /* Récupérer les valeurs d'un Array AVEC le Destructuring Assignment */
// /* Ceci ne crée pas un array (même si la syntaxe y ressemble). Cela va créer 3 variables (x, y, z)
// auxquelles seront assignées les 3 premières valeurs de l'Array arr */
// const [x, y, z] = arr;
// console.log(x, y, z); // 2 3 4

// /* L'Array original n'est bien sûr pas affecté */
// console.log(arr); // (3) [2, 3, 4]

// /* Récupérer un Array imbriqué */
// /* Exemple : je veux récupérer le 2, pas le 4 et l'Array [5, 6] */
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // 2 (2) [5, 6]

// /* Récupérer les valeurs individuelles d'un Array imbriqué */
// /* Exemple : je veux récupérer le 8 et le 3 et 2 de l'array imbriqué */
// const nested2 = [8, 9, [3, 2]];
// const [m, , [n, o]] = nested2;
// console.log(m, n, o); // 8 3 2

// /* Attribuer une valeur par défaut */
// /* Exemple : je crée 3 variables avec le Destructuring Assignment alors qu'il n'y a que 2 valeurs dans l'Array */
// const arr2 = [8, 9];
// const [p = 1, q = 1, r = 1] = arr2;
// console.log(p, q, r); // 8 9 1

// =========================================================================== //
// =========================================================================== //
// ========================== Destructuring Objects ========================== //
// =========================================================================== //
// =========================================================================== //

// /* Récupérer les Keys de l'Object pour les décomposer en Variables */
// const cem = {
// 	firstName: "Cem",
// 	lastName: "Ekiz",
// 	age: 26,
// };

// const { firstName, lastName, age } = cem;
// console.log(firstName, lastName, age); // Cem Ekiz 26

// /* Récupérer les Keys d'un Object pour les décomposer en Variables en changeant leur nom   */
// const mike = {
// 	firstName: "Mike",
// 	city: "New-York",
// 	job: "Teacher",
// };

// const { firstName: mikeName, city: mikeCity, job: mikeJob } = mike;
// console.log(mikeName, mikeCity, mikeJob); // Mike New-York Teacher

// /* Définir une valeur par défaut si la Key n'existe pas dans l'Object */
// const sarah = {
// 	firstName: "Sarah",
// 	age: 22,
// };

// const { firstName: sarahName = [], favoriteFood: sarahFavoriteFood = [] } =
// 	sarah;
// console.log(sarahFavoriteFood, sarahName); // [] "Sarah"

// /* Muter des Variables */
// /* Exemple : je veux que num1 ait pr valeur 23 et que num2 ait pour valeur 7 */
// let num1 = 111;
// let num2 = 999;
// const obj = { num1: 23, num2: 7, num3: 14 };

// ({ num1, num2 } = obj);
// console.log(num1, num2); // 23 7

// /* Destructuring Nested Objects */
// const michael = {
// 	firstName: "Michael",
// 	lastNaeme: "Schott",
// 	friends: {
// 		bestFriends: {
// 			bf1: "Dwight",
// 			bf2: "Jim",
// 		},
// 	},
// };

// const { friends } = michael;

// const {
// 	bestFriends: { bf1: michaelBF1, bf2: michaelBF2 },
// } = friends;
// console.log(michaelBF1, michaelBF2); // Dwight Jim

// =========================================================================== //
// =========================================================================== //
// ========================== Spread Operator (...) ========================== //
// =========================================================================== //
// =========================================================================== //
// /* - Le Spread Operator permet de récupérer les valeurs individuelle d'un Array. Il sert principalement
// à expandre un Array existant dans un Array que nous venons de créer, on ne l'utilise pas pour créer une nouvelle
// variable comme pour le Destructuring Assignment car il faut l'utiliser dans une situation ou il y a des valeurs séparés par des virgules :
// admettons que nous créons un nouvel Array nous allons ajouter des valeurs à l'intérieur (séparé par des virgules) puis "...array1" pour expandre
// un Array existant (mais celui d'origine n'est pas modifié)
//    - Le Spread Operator fonctionne avec tous les iterables (Arrays, Strings, Maps, Set) */

// /* Le Spread Operator permet de simplifier la tâche suivante : */
// /* Exemple : nous avons un premier Array (arr1) et nous créons un second Array (badNewArray)
// et nous voulons étendre le premier Array dans le second */
// const arr1 = [7, 8, 9];
// const badNewArray = [1, 2, arr1[0], arr1[1], arr1[2]];
// console.log(badNewArray); // 1 2 7 8 9

// /* Étendre les valeurs d'un Array à un autre Array */
// const arr2 = [7, 8, 9];
// const goodNewArray = [1, 2, ...arr2];
// console.log(goodNewArray); // 1 2 7 8 9

// /* Obtenir les valeurs individuelles d'un Array */
// console.log(goodNewArray); // (5) [1, 2, 7, 8, 9]
// console.log(...goodNewArray); // 1 2 7 8 9

// /* Créer la copie d'un Array */
// const charachter = ["Kevin", "Meredith", "Angela"];
// const charachterCopy = [...charachter];
// console.log(charachterCopy); // (3) ['Kevin', 'Meredith', 'Angela']

// /* Fusionner 2 Array */
// const charachter2 = ["Michael", "Jim"];
// const charachter3 = ["Pam", "Andy"];
// const charachterMerged = [...charachter2, ...charachter3];
// console.log(charachterMerged); // (4) ['Michael', 'Jim', 'Pam', 'Andy']

// /* Spread Operator avec un String */
// const str = "Jonas";
// const letters = [...str, "", "S."];
// console.log(letters); // (7) ['J', 'o', 'n', 'a', 's', '', 'S.']

// ======================================================================================= //
// ======================================================================================= //
// ========================== Rest Pattern and Parameters (...) ========================== //
// ======================================================================================= //
// ======================================================================================= //
// /* Rest est similaire à Spread mais il sert à pack (au lieu de unpack) les valeurs d'un array
// et au niveau de la syntaxe il se différencie au fait qu'il se place à gauche du "=" */

// /* Spread Operator car les "..." sont à droite du "=" */
// const arr = [1, 2, ...[3, 4]];
// console.log(arr); // (4) [1, 2, 3, 4]

// /* Rest Operator car les "..." sont à gauche du "=" */
// /* Explication : ici nous décomposons les 2 premières valeurs de arr1 et le reste sera dans l'array "others" */
// const arr1 = [1, 2, 3, 4, 5];
// const [a, b, ...others] = arr1;
// console.log(a, b, others); // 1 2 (3) [3, 4, 5]

// /* Rest Parameter */
// const add = function (...numbers) {
// 	let sum = 0;
// 	for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// 	console.log(sum);
// };

// add(2, 3); // 5
// add(5, 3, 7, 2); // 17
// add(8, 2, 5, 3, 2, 1, 4); // 25

// const x = [23, 5, 7];
// add(...x); // 35

// ================================================================================== //
// ================================================================================== //
// ========================== Short Circuiting (&& and ||) ========================== //
// ================================================================================== //
// ================================================================================== //

// /* -------------------------- || -------------------------- */

// /* Lors de l'utilisation de Logical Operators il est possible d'utiliser toutes sortes de
// types de données, retourner tout types de données et peut réaliser un "short-circuiting"
// Pour rappel, lors d'un test booléen si une valeur true ou truthy est détecté alors elle
// le test s'arrête et la valeur en question est retourné
// En fait || cherche à renvoyer une valeur true, il renverra alors la première valeur true sur laquelle elle tombera
// mais si il y en a plusieurs d'affilés elle retournera le dernier */

// console.log(3 || "Cem"); // 3
// console.log("" || "Cem"); // Jonas
// console.log(true || 0); // true
// console.log(undefined || null); // null
// console.log(undefined || 0 || "" || "Hello" || 23 || null); // Hello

// /* -------------------------- && -------------------------- */
// /* Dans le cas d'un Short-Circuiting, l'opérateur && marche de la manière opposée à ||
// Donc dès qu'il tombe sur une valeur false il la renvoie, si il y a plusieurs falsy valeurs alors
// il renvoie la dernière falsy valeur
// En fait le && cherche à renvoyer une valeur true si toutes les opérandes sont trues, mais il suffit qu'une
// opérande soit falsy et tout sera considéré comme false */
// console.log(0 && "Cem"); // 0
// console.log(7 && "Cem"); // Cem
// console.log("Hello" && 23 && null && "Cem"); // null

// ====================================================================================== //
// ====================================================================================== //
// ========================== Nullish Coalescing Operator (??) ========================== //
// ====================================================================================== //
// ====================================================================================== //
// /* En fait le Nullish Operator ne considère pas 0 et "" comme falsy */

// /* En comparaison avec && */
// /* Ici on a un problème car on veut retourner le nombre d'élèves même si il est égal à 0*/
// const studentNumber = 0;
// const students = studentNumber || 10;
// console.log(students); // 10

// /* Le Nullish Operator résout ce problème */
// const studentNumber2 = 0;
// const students2 = studentNumber2 ?? 10;
// console.log(students2); // 0

// ================================================================================== //
// ================================================================================== //
// ========================== Logical Assignment Operators ========================== //
// ================================================================================== //
// ================================================================================== //

// const rest1 = {
// 	name: "Capri",
// 	numGuests: 20,
// };

// const rest2 = {
// 	name: "La Piazza",
// 	owner: "Giovanni Rossi",
// };

// const rest3 = {
// 	name: "Capri",
// 	numGuests: 0,
// };

// /* -------------------------- ||= et ??= -------------------------- */

// /* Pour rappel avec le OR Logical Operator || */
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest3.numGuests = rest3.numGuests || 10;
// // console.log(rest1.numGuests); // 20
// // console.log(rest2.numGuests); // 10
// // console.log(rest3.numGuests); // 10

// /* Avec le OR Assignment Operator ||= */
// /* C'est la même chose que ci-dessus mais de manière + concise mais le problème c'est que dans l'exemple
// du rest3 nous voulons retourner 0 mais il est considéré comme falsy donc 10 sera retourné...  */
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;
// // rest3.numGuests ||= 10;
// // console.log(rest1); // 20
// // console.log(rest2); // 10
// // console.log(rest3); // 10

// /* Pour résoudre le problème du rest3 et retourner 0 au lieu de 10 on utilisera le Nullish Assignment Operator */
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// rest3.numGuests ??= 10;
// console.log(rest1); // 20
// console.log(rest2); // 10
// console.log(rest3); // 0

// /* -------------------------- ||= et ??= -------------------------- */

// /* Pour rappel avec le AND Logical Operator && */
// // rest1.owner = rest1.owner && "<ANONYMOUS>";
// // rest2.owner = rest2.owner && "<ANONYMOUS>";
// // console.log(rest1); // undefined (mais la Key a été crée dans l'Object rest1)
// // console.log(rest2); // <ANONYMOUS>

// /* Avec le AND Assignment Operator (&&=) */
// /* L'avantage de cet opérateur réside dans le fait qu'il sert à modifier une Key existante (Truthy) et contrairement
// à ci-dessus il ne créera pas de Key si celle-ci n'existe pas (Falsy) */
// rest1.owner &&= "<ANONYMOUS>";
// rest2.owner &&= "<ANONYMOUS>";
// console.log(rest1); // undefined (sans créer la Key dans l'Object rest1)
// console.log(rest2); // <ANONYMOUS>

// ===================================================================== //
// ===================================================================== //
// ========================== The for-of Loop ========================== //
// ===================================================================== //
// ===================================================================== //
// /* Il est possible de faire ce que fait la for-of avec une loop classique avec le counter etc. mais justement
// le for-of loop simplifie ce procédé */

// const theOfficeFemale = ["Meredith", "Angela", "Phyllis"];
// const theOfficeMale = ["Jim", "Ryan", "Dwight"];
// const theOfficeMix = [...theOfficeFemale, ...theOfficeMale];
// console.log(theOfficeMix);

// /* Explication : en fait la variable "item" est l'élément actuel de chaque itération */
// for (const item of theOfficeMix) {
// 	console.log(item);
// }

// /* Il est aussi possible d'obtenir l'index actuel de chaque itération même si ce n'est pas l'objectif premier du for-of loop */
// for (const item of theOfficeMix.entries()) {
// 	console.log(item);
// }

// console.log(theOfficeMix.entries()); // Array Iterator (plus tard dans la formation)
// console.log([...theOfficeMix.entries()]); // cf. Console

// /* cf. Console */
// for (const [i, el] of theOfficeMix.entries()) {
// 	console.log(`${i + 1}: ${el}`);
// }

// ============================================================================== //
// ============================================================================== //
// ========================== Enhanced Object Literals ========================== //
// ============================================================================== //
// ============================================================================== //

// const openingHours = {
// 	thu: {
// 		open: 12,
// 		close: 22,
// 	},
// 	fri: {
// 		open: 11,
// 		close: 23,
// 	},
// 	sat: {
// 		open: 0,
// 		close: 24,
// 	},
// };

// /* L'ancienne méthode pour insérer un object existant dans un autre */
// /* Le problème réside que le nom de la propriété (key) est identique au nom de l'Object */
// const restaurant1 = {
// 	name: "Classico Pizza",
// 	openingHours: openingHours,
// };

// /* La nouvelle méthode depuis ES6 (Enhanced Object Literals) */
// /* Il suffit juste d'entrer le nom de l'Object */
// const restaurant2 = {
// 	name: "Classico Pizza",
// 	openingHours,
// };

// /* L'ancienne méthode pour inclure une fonction dans un Object */
// const restaurant3 = {
// 	name: "Classico Pizza",
// 	order: function (starterIndex, mainIndex) {
// 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// 	},
// };

// /* La nouvelle méthode depuis ES6 (Enhanced Object Literals) */
// /* On peut enlever le keyword "function" */
// const restaurant4 = {
// 	name: "Classico Pizza",
// 	order(starterIndex, mainIndex) {
// 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// 	},
// };

// /* On peut "compute" (calculer) des Keys dans un Object */
// const weekdays = ["mon", "tue,", "wed", "thu", "fri", "sat", "sun"];

// const openingHours2 = {
// 	[weekdays[3]]: {
// 		open: 12,
// 		close: 22,
// 	},
// 	[weekdays[4]]: {
// 		open: 11,
// 		close: 23,
// 	},
// 	[weekdays[5]]: {
// 		open: 0,
// 		close: 24,
// 	},
// };

// console.log(openingHours2);

// ================================================================================ //
// ================================================================================ //
// ========================== Optional Chaining (?.) ========================== //
// ================================================================================ //
// ================================================================================ //

// const restaurant5 = {
// 	name: "Classico Pizza",
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
// 			open: 0,
// 			close: 24,
// 		},
// 	},

// 	order(starterIndex, mainIndex) {
// 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// 	},
// };

// /* Ancienne méthode pour faire des tests avec les Keys d'un Object */
// /* Ici on cherche à savoir si ces 2 propriétés existes, si oui alors on log mais ça peut devenir
// encombrant quand il y a plusieurs propriétés imbriquées dans un Object */
// if (restaurant5.openingHours.open && restaurant5.openingHours.mon.open) {
// 	console.log(restaurant5.openingHours.mon.open);
// } // undefined

// if (restaurant5.openingHours && restaurant5.openingHours.fri.open) {
// 	console.log(restaurant5.openingHours.fri.open);
// } // 11

// /* Avec l'Optional Chaining (?.) : si la propriété avant le "?." n'existe pas alors le reste qui suit ne sera pas lu */
// console.log(restaurant5.openingHours.mon?.open); // undefined
// console.log(restaurant5.openingHours?.mon?.open); // undefined

// /* Exemple */
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
// 	const open = restaurant5.openingHours[day]?.open ?? "closed";
// 	console.log(`On ${day}, we open at ${open}`);
// }

// /* L'optional Chaining test si ce qui est avant le "?." existe, si oui alors on applique la suite
// sinon on applique ce qui est après le "??", c'est donc une sorte de test if simplifié très pratique !
// La combinaison de l'opérateur ?. et ?? est donc très utile. */

// /* Optional Chaining et Method */
// console.log(restaurant5.order?.(0, 1) ?? "Method does not exist"); // (2) ['Focaccia', 'Pasta']
// console.log(restaurant5.orderRisotto?.(0, 1) ?? "Method does not exist"); // Method does not exist

// /* Optional Chaining et Array */
// const users = [{ name: "Jonas", email: "hello@jonas.io" }];
// console.log(users[0]?.name ?? "User array empty");

// /* Sans Optional Chaining il aurait fallu faire ceci : */
// if (users.length > 0) {
// 	console.log(users[0].name);
// } else {
// 	console.log("User Array Empty");
// }

// ================================================================================================ //
// ================================================================================================ //
// ========================== Looping Objects : Keys, Values and Entries ========================== //
// ================================================================================================ //
// ================================================================================================ //
// /* Après avoir appris à Loop dans un Array (qui est un itérable), je vais à present loop à travers un
// Object (qui n'est pas un itérable) */

// const openingHours = {
// 	thu: {
// 		open: 12,
// 		close: 22,
// 	},
// 	fri: {
// 		open: 11,
// 		close: 23,
// 	},
// 	sat: {
// 		open: 0,
// 		close: 24,
// 	},
// };

// /* Property Names */
// const properties = Object.keys(openingHours);
// console.log(properties); // cf. Console

// console.log(properties.length); // 3

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
// 	openStr += `${day}, `;
// }

// console.log(openStr); // We are open on 3 days: thu,fri,sat,

// /* Property Values */
// const values = Object.values(openingHours);
// console.log(values); // cf. Console

// /* Entire Object */
// const entries = Object.entries(openingHours);
// console.log(entries); // cf. Console

// /* [key, {open, close}] = Destructuring assez compliqué car la valeur de la key est un Object
// mais avec de la pratique et en cherchant à vraiment comprendre ce qu'il se passe c'est plutôt simple ;) */
// for (const [key, { open, close }] of entries) {
// 	console.log(`On the ${key} we open at ${open} and close at ${close}`);
// }

// ================================================================================ //
// ================================================================================ //
// ========================== Italian Restaurant Example ========================== //
// ================================================================================ //
// ================================================================================ //

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
// 			open: 0,
// 			close: 24,
// 		},
// 	},

// 	order(starterIndex, mainIndex) {
// 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// 	},

// 	orderDelivery({
// 		starterIndex = 1,
// 		mainIndex = 0,
// 		time = "20:00",
// 		address,
// 	}) {
// 		console.log(
// 			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// 		);
// 	},

// 	orderPasta(ing1, ing2, ing3) {
// 		console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
// 	},

// 	orderPizza(mainIngredient, ...otherIngredients) {
// 		console.log(mainIngredient);
// 		console.log(otherIngredients);
// 	},
// };

// /* Utilisation de la Method "order" (même s'il est possible de le faire sans fonction) */
// const [starterCourse, mainCourse] = restaurant.order(2, 0);
// console.log(starterCourse, mainCourse); // Garlic Bread Pizza

// /* Utilisation de la Method orderDelivery */
// restaurant.orderDelivery({
// 	time: "22:30",
// 	address: "Via del Sole, 21",
// 	mainIndex: 2,
// 	starterIndex: 2,
// }); // Order received! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22:30

// restaurant.orderDelivery({
// 	address: "Via del Sole, 21",
// 	starterIndex: 1,
// }); // Order received! Bruschetta and Pizza will be delivered to Via del Sole, 21 at 20:00

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary); // Italian Vegetarian

// // /* Switch 2 valeurs SANS Destructuring Assignment */
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary); // Vegetarian Italian

// /* Switch 2 valeurs AVEC Destructuring Assignment */
// /* Pas besoin d'utiliser let ou const car on ne fait que ré-assigner */
// [main, secondary] = [secondary, main];
// console.log(main, secondary); // Vegetarian Italian

// /* Destructuring Objects sans changement du nom des Keys */
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories); // cf. Console

// /* Destructuring Objects avec changement du nom des Keys */
// const {
// 	name: restaurantName,
// 	openingHours: hours,
// 	categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags); // cf. Console

// /* Valeur par défaut lorsqu'une Key n'est pas dans l'Object */
// /* Dans notre exemple du restaurant la Key "menu" n'existe pas tandis que starterMenu existe */
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters); // cf. Console

// /* Destructuring Nested Objects */
// const {
// 	fri: { open: openFri, close: closeFri },
// } = openingHours;
// console.log(openFri, closeFri); // 11 23

// /* Créer un nouveau menu en utilisant le Spread Operator */
// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu); // (4) ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// /* Copier le mainMenu */
// const mainMenuCopy = [...restaurant.mainMenu];

// /* Fusionner le mainMenu et starterMenu */
// const menuMerged = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menuMerged); // (7) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// /* Utilisons le Spread Operator avec la method orderPasta */
// const ingredients = ["Mushrooms", "Tomato", "Cheese"];
// console.log(ingredients); // (3) ['Mushrooms', 'Tomato', 'Cheese']

// restaurant.orderPasta(...ingredients); // Here is your delicious pasta with Mushrooms, Tomato, Cheese

// /* Spread Operator avec Objects */
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Giuseppe" };
// console.log(newRestaurant); // cf. Console

// /* Copier un Object avec le Spread Operator */
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name); // Ristorante Roma
// console.log(restaurant.name); // Classico Italiano

// /* Utiliser Rest et Spread */
// const [pizza, , risotto, ...otherFood] = [
// 	...restaurant.mainMenu,
// 	...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood); // Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// /* Utiliser Rest avec un Object */
// /* Exemple : nous voulons un Object contenant que les jours de lundi à vendredi */
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays); // {thu: {…}, fri: {…}}

// /* Utilisation de la fonction orderPizza avec le Rest Parameter */
// /* Le premier ingredient est indiqué dans un string et le reste est placé dans un array */
// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach"); // mushrooms (3) ['onion', 'olives', 'spinach']

// /* Dans cet exemple on utilise le Ternary Operator pour faire un test
// Si c'est true (?) alors "restaurant.numGuests" sinon (:) 10 */
// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); // 23

// /* Mais il est possible de simplifier le code en réalisant un short-circuiting
// La première valeur "true" sera retourné, dans ce cas c'est "restaurant.numGuests" donc 23 */
// const guests2 = restaurant.numGuests || 10; // 23

// /* Nullish Operator */
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests); // 10

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect); // 0
