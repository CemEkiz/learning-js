"use strict";

// Data needed for a later exercise
// const flights =
// 	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

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

// /* Pour rappel, lors d'un test booléen si une valeur true ou truthy est détecté alors elle
// le test s'arrête et la valeur en question est retourné
// En fait || cherche à renvoyer une valeur true, il renverra alors la première valeur true
// sur laquelle elle tombera mais si il y en a plusieurs d'affilés elle retournera le dernier */

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
// /* Ici on a un problème car on veut retourner le nombre d'élèves même si il est égal à 0
// mais étant considéré comme falsy il ne sera pas renvoyé */
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
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest3.numGuests = rest3.numGuests || 10;
// console.log(rest1.numGuests); // 20
// console.log(rest2.numGuests); // 10
// console.log(rest3.numGuests); // 10

// /* Avec le OR Assignment Operator ||= */
// /* C'est la même chose que ci-dessus mais de manière + concise mais le problème c'est que dans l'exemple
// du rest3 nous voulons retourner 0 mais il est considéré comme falsy donc 10 sera retourné...  */
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// rest3.numGuests ||= 10;
// console.log(rest1); // 20
// console.log(rest2); // 10
// console.log(rest3); // 10

// /* Pour résoudre le problème du rest3 et retourner 0 au lieu de 10 on utilisera le Nullish Assignment Operator */
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// rest3.numGuests ??= 10;
// console.log(rest1); // 20
// console.log(rest2); // 10
// console.log(rest3); // 0

// /* -------------------------- ||= et ??= -------------------------- */

// /* Pour rappel avec le AND Logical Operator && */
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";
// console.log(rest1); // undefined (mais la Key a été crée dans l'Object rest1)
// console.log(rest2); // <ANONYMOUS>

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
// console.log(restaurant5.openingHours?.thu?.open); // 12

// /* Exemple */
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
// 	const open = restaurant5.openingHours[day]?.open ?? "closed";
// 	console.log(`On ${day}, we open at ${open}`);
// }

// /* L'optional Chaining test si ce qui est avant le "?." existe, si oui alors on applique la suite
// sinon on applique ce qui est après le "??", c'est donc une sorte de test if simplifié très pratique !
// La combinaison de l'opérateur ?. et ?? est donc très utile. */

// /* Optional Chaining avec Method */
// console.log(restaurant5.order?.(0, 1) ?? "Method does not exist"); // (2) ['Focaccia', 'Pasta']
// console.log(restaurant5.orderRisotto?.(0, 1) ?? "Method does not exist"); // Method does not exist

// /* Optional Chaining avec Array */
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
// for (const [key, { open, close }] of Object.entries(openingHours)) {
// 	console.log(`On the ${key} we open at ${open} and close at ${close}`);
// }

// ========================================================= //
// ========================================================= //
// ========================== Set ========================== //
// ========================================================= //
// ========================================================= //
// /* Set est un built-in Data Structure (comme Array et Object)
// - La particularité de Set c'est que les valeurs dupliquées ne sont pas prises en comptes
// - C'est similaire à un Array au niveau de la structure (pas de key)
// - Set est lui-même un itérable
// - Il n'est pas possible de récupérer un élément d'un Set car il n'y a pas d'index
// - Le but principale de Set n'est pas donc de stocker des éléments pour les récupérer plus tard mais plutôt de savoir
// si un élément est dans un Set ou non (avec la Method .has), si on veut stocker des éléments dans le but de les récupérer
// afin de les utiliser plus tard : il vaut mieux créer un Array */

// /* Voici comment créer un Set, à l'intérieur de ([]) il doit y avoir un itérable (pas obligatoirement un Array) */
// const orderSet = new Set([
// 	"Pasta",
// 	"Pizza",
// 	"Pizza",
// 	"Risotto",
// 	"Pasta",
// 	"Pizza",
// ]);

// /* La structure est similaire à un Array et il n'y a pas de valeurs dupliquées */
// console.log(orderSet); // Set(3) {'Pasta', 'Pizza', 'Risotto'}

// /* Method .size : pour connaître la longueur d'un Set */
// console.log(orderSet.size); // 3

// /* Method .has : pour vérifier si une valeur existe dans un Set (similaire à la Method .include pour les Arrays) */
// console.log(orderSet.has("Pizza")); // true
// console.log(orderSet.has("Bread")); // false

// /* Method .add : pour ajouter un élément à un Set */
// orderSet.add("Garlic Bread");
// orderSet.add("Garlic Bread");
// console.log(orderSet); // Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}

// /* Method .delete : pour supprimer un élément d'un Set */
// orderSet.delete("Risotto");
// console.log(orderSet); // Set(3) {'Pasta', 'Pizza', 'Garlic Bread'}

// for (const order of orderSet) {
// 	console.log(order);
// } // cf. Console

// /* Method .clear : supprimer tous les éléments d'un Set */
// const myFriends = new Set(["Dwight", "Jim", "Michael"]);
// myFriends.clear();
// console.log(myFriends); // Set(0) {size: 0}

// /* On peut aussi rentrer d'autres itérables dans un Set, comme un string par exemple */
// const myName = new Set("Cem");
// console.log(myName); // Set(3) {'C', 'e', 'm'}
// /* Pour savoir le nombre de lettre qu'il y a dans un String */
// console.log(myName.size); // 3

// /* -------------------------- Convertir un Set en Array -------------------------- */

// /* Je crée un Array */
// const myArray = [1, 2, 3, 3, 4, 5, 5, 5];
// console.log(myArray); // (8) [1, 2, 3, 3, 4, 5, 5, 5]

// /* L'Array a été converti en Set (donc les dupliqués ont été supprimés) */
// const mySet = new Set(...[myArray]);
// console.log(mySet); // Set(5) {1, 2, 3, 4, 5}

// /* Je rebalance les données du Set avec les données uniques dans un nouvel Array */
// const uniqueArray = [...mySet];
// console.log(uniqueArray); // (5) [1, 2, 3, 4, 5]

// /* -------------------------- Exemple d'utilisation de Set -------------------------- */
// /* Dans cet exemple nous avons 2 Chef, 3 Waiter et 1 Manager. Le problème est le suivant :
// Nous voulons savoir combien de poste différent il existe. */
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// /* Solution : On va créer un Set et le convertir en même temps en Array grâce au Spread Operator
// afin de supprimer les dupliqués tout en stockant les données dans un Array */
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique); // (3) ['Waiter', 'Chef', 'Manager']

// /* Il existe donc 3 postes différents */
// console.log(staffUnique.length); // 3

// /* Une autre solution pour résoudre ce problème */
// console.log(
// 	new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
// ); // 3

// ========================================================= //
// ========================================================= //
// ========================== Map ========================== //
// ========================================================= //
// ========================================================= //
// /* Map est un built-in Data Structure (comme Array, Object et Set)
// - Map est similaire à object car il permet de lier des valeurs à des keys
// - La différence de Map : les keys peuvent être de n'importe quel type (les keys des Objects étant des Strings) */

// /* Créer une Map */
// const rest = new Map();

// /* La Method .set : permet de remplir la Map */
// /* Explication : "name" est mapé à "Classico Italiano" etc. */
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// rest.set(2, "Lisbon, Portugal");

// /* Lorsqu'on ajoute des données à Map avec la Method .set, celle-ci ne fait pas que ajouter des données mais elle retourne
// également la Map */
// // console.log(rest.set());

// /* Il est possible d'enchaîner l'utilisation de la Method .set */
// rest
// 	.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
// 	.set("open", 11)
// 	.set("close", 23)
// 	.set(true, "We are open :D")
// 	.set(false, "We are closed :(");

// console.log(rest); // cf. Console

// /* Créer une Map avec des éléments */
// const myMap = new Map([
// 	["name", "John"],
// 	["surname", "Doe"],
// ]);
// console.log(myMap); // Map(2) {'name' => 'John', 'surname' => 'Doe'}

// // /* _____Les Methods_____ */

// /* La Method .get : retourne l'élément spécifié de la Map */
// console.log(rest.get("name")); // Classico Italiano
// console.log(rest.get(true)); // We are open :D

// /* Cet exemple sert à montrer les possibilités de Map en utilisant d'autres Types que String en Keys (ici des Booleans)
// mais ce code n'est pas très pratique dans la réalité car pas assez lisible/explicite */
// const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); // We are open :D

// /* La Method .has : permet de savoir si un élément existe ou non dans la Map  */
// console.log(rest.has("categories")); // true
// console.log(rest.has("guest")); // false

// /* La Method .delete : permet de supprimer une Key de la Map */
// rest.delete(2);
// console.log(rest); // cf. Console

// /* La Method .size : permet de connaître le nombre d'éléments qu'il y a dans une Map */
// console.log(rest.size); // 7

/* La Method .clear :  permet de supprimer tous les éléments de la Map */
// rest.clear();
// console.log(rest); // Map(0) {size: 0}

// /* -------------------------- Utiliser un Array en Key -------------------------- */

// /* Erreur à ne pas commettre */
// /* Explication : ici nous avons rentré exactement le même Array sur les 2 lignes (.set pour ajouter, et .get pour retourner)
// mais les deux Arrays sont distinctes dans le heap (dans la mémoire) ce ne sont pas les mêmes ! C'est pour cela que undefined est retourné */
// rest.set([1, 2], "Test");
// console.log(rest.get([1, 2])); // undefined

// /* La bonne manière de faire */
// /* Explication : il faut d'abord créer un Array et la stocker dans une Variable et ensuite l'utiliser dans la Map */
// const arr = [1, 2];
// rest.set(arr, "Test");
// console.log(rest.get(arr)); // Test

// /* -------------------------- Utiliser un Object en Key -------------------------- */

// /* Pour cet exemple on va utiliser le DOM (qui est un Object) */
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest); // cf. Console

// /* -------------------------- Créer un simple Quizz -------------------------- */

// /* Cette structure fait penser à "Object.entries" qui est un "Array d'un Array" */
// const question = new Map([
// 	["question", "What is the best programming language in the World ?"],
// 	[1, "C"],
// 	[2, "Java"],
// 	[3, "JavaScript"],
// 	["correct", 3],
// 	[true, "Correct !"],
// 	[false, "Try again !"],
// ]);

// console.log(question); // cf. Console

// /* Pour rappel, Map est un Iterable donc il est possible de faire des Boucles dans une Map */

// /* Petite précision : un Object n'est pas un itérables mais Object.entries est un itérable, c'est pourquoi
// après le "of" nous devions mettre Object.entries, mais Map est un itérable donc on peut directement entrer
// le nom de la Map (ici "question") */

// /* _____Quizz App_____ */

// console.log(question.get("question")); // What is the best programming language in the World ?

// for (const [key, value] of question) {
// 	if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }
// // Answer 1: C
// // Answer 2: Java
// // Answer 3: JavaScript

// const answer = Number(prompt("Your answer"));
// console.log(answer); // cf. Console

// /* Sans l'utilisation du if Statement */
// console.log(question.get(question.get("correct") === answer));

// /* Avec l'utilisation du if Statement */
// // if (answer === true) {
// // 	console.log(question.get(true));
// // } else {
// // 	console.log(question.get(false));
// // }

// /* -------------------------- Convertir Object.entries en Map -------------------------- */

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

// /* Avant la conversion */
// console.log(Object.entries(openingHours)); // cf. Console

// /* Après la conversion */
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap); // cf. Console

// /* -------------------------- Convertir Map en Array -------------------------- */

// const question = new Map([
// 	["question", "What is the best programming language in the World ?"],
// 	[1, "C"],
// 	[2, "Java"],
// 	[3, "JavaScript"],
// 	["correct", 3],
// 	[true, "Correct !"],
// 	[false, "Try again !"],
// ]);

// /* Avant conversion */
// console.log(question); // cf. Console

// /* Après conversion */
// const newArr = [...question];
// console.log(newArr); // cf. Console

// /* -------------------------- Plusieurs Object en Key : Object VS Map  -------------------------- */
// /* - Un Object ne peut contenir qu'un seul Object en Key, dans le cas où il y en a plusieurs : seulement le dernier sera pris en compte
//    - Une Map peut contenir plusieurs Objects en Key sans conflit, c'est un de ses avantages par rapport à Object */

// /* _____Dans le cas d'un Object_____*/

// /* Je crée un Object avec 2 propriétés */
// const myObject = {
// 	myName: "Cem",
// 	surname: "Ekiz",
// };

// /* Je crée 2 Objects vide */
// const a = {};
// const b = {};

// /* J'ajoute un par un les 2 Objects que j'ai crée ci-dessus (l'Object étant la Key auquel je paire un String ("a" et "b")) */
// /* Le problème est le suivant : seulement le dernier Object ajouté en tant que Key sera compté, c'est là que Map résout
// ce problème car il n'a pas cette contrainte. */
// myObject[a] = "a";
// myObject[b] = "b";
// console.log(myObject); // cf. Console

// /* _____Dans le cas d'une Map_____ */

// /* Je crée 2 Objects vide */
// const c = {};
// const d = {};

// /* Je crée ma Map : j'y ajoute les 2 Objects que je viens de créer ci-dessus (c et d) et je paire des Strings ("c" et "d") */
// const myMap = new Map([
// 	[c, "c"],
// 	[d, "d"],
// ]);

// console.log(myMap); // cf. Console

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

// ========================================================================== //
// ========================================================================== //
// ========================== Working with Strings ========================== //
// ========================================================================== //
// ========================================================================== //
/* La plupart des Methods que nous allons voir ne change pas le String d'origine car pour rappel
un String est une Primitive Data est n'est pas PAS MUTABLE. Donc lorsqu'on va utiliser les Methods
pour manipuler un String, cela crée et renvoie un nouveau String (qu'on peut stocker dans une nouvelle Variable) */

const airline = "TAP Air Portugal";
const plane = "A320";

// /* -------------------------- Les Methods de String  -------------------------- */

// /* Retourner la première lettre indexé d'un String */
// console.log(plane[0]); // A
// console.log(plane[1]); // 1 (String)
// console.log("Cem"[0]); // C

// /* Retourner la taille d'un String */
// console.log(airline.length); // 16
// console.log("Cem".length); // 3

// /* Retourner l'index d'un caractère du String */
// console.log(airline.indexOf("r")); // 6
// console.log(airline.lastIndexOf("r")); // 10

// /* Retourner le mot d'un String */
// console.log(airline.indexOf("Portugal")); // 8

// /* Extraire les caractères d'un String, le String devient alors un Sub-String */
// console.log(airline.slice(4)); // Air Portugal
// console.log(airline.slice(4, 7)); // Air

// /* Extraire le premier mot d'un String ayant plusieurs mots */
// console.log(airline.slice(0, airline.indexOf(" "))); // TAP

// /* Extraire le dernier mot d'un String ayant plusieurs mots */
// console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // Portugal

// /* Extraire les caractères d'un String en partant de la fin */
// console.log(airline.slice(-2)); // al

// /* Extraire la dernière lettre d'un String */
// console.log(airline.slice(-1)); // l

// /* Extraire tous les caractères (même si on peut le faire plus simplement) */
// console.log(airline.slice(1, -1) + 1); // TAP Air Portugal

// // /* -------------------------- Exercie avec Fonction/String/Method  -------------------------- */

// /* Fonction pour retourner si la place est Middle Seat ou pas */
// /* Partie gauche de l'avion : ABC ___ Partie droite de l'avion : DEF
//    Donc les places B et E sont les Middle Seat */

// const checkMiddleSeat = function (seat) {
// 	const s = seat.slice(-1);
// 	if (s === "B" || s === "E") {
// 		console.log(`The place ${seat} is a Middle Seat`);
// 	} else {
// 		console.log(`The place ${seat} is not a Middle Seat`);
// 	}
// };

// checkMiddleSeat("11B"); // The place 11B is a Middle Seat
// checkMiddleSeat("23C"); // The place 23C is not a Middle Seat
// checkMiddleSeat("3E"); // The place 3E is a Middle Seat

// // /* ----------- Comment se fait-il qu'une Primitive Data comme un String ait des Methods ----------- */

// /* Cette partie n'est pas à retenir par coeur c'est juste à titre d'information ;) */
// /* En réalité, lorsque nous appelons une Method sur un String (comme .slice ou .indexOf), JavaScript
// convertit le String Primitive en String Object (c'est ce qu'on appelle le "Boxing") avec le même contenu,
// et c'est sur le String Object que la Method est call en réalité (et non pas sur le String Primitive)
// et une fois que la Method a été appliqué, JS retourne le nouveau String sous forme de String Primitive */

// /* String "Object" */
// console.log(new String("Cem")); // cf. Console
// console.log(typeof new String("Cem")); // object

// /* Exemple : le String "Cem" va être convertit en String Object afin d'appliquer la Method .slice puis il sera
// retourné sous forme de String Primitive à nouveau */
// console.log(new String("Cem").slice(-1)); // m
// console.log(typeof new String("Cem").slice(1)); // string

// // /* -------------------------- String et Case -------------------------- */

// /* Changer la Case d'un String */
// console.log(airline.toLowerCase()); // tap air portugal
// console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// /* -------------------------- Exercie : Définir une Case personnalisé  -------------------------- */

// /* Cas pratique : un passager a pas respecté les Case "Cem" par exemple, il a écrit "jOnAS" il faut réctifier cela */
// /* En bonus je peux faire une fonction pour cela */
// const passenger = "jOnAS";
// 1.
// const passengerLower = passenger.toLowerCase();
// 2.
// const passengerCorrect =
// 	passengerLower[0].toUpperCase() + passengerLower.slice(1);
// 3.
// console.log(passengerCorrect); // Jonas
// console.log(passengerLower.slice(1));

// const upperCaser = function (name) {
// 	const passengerLower = name.toLowerCase();
// 	const passengerCorrect =
// 		passengerLower[0].toUpperCase() + passengerLower.slice(1);
// 	console.log(passengerCorrect);
// };

// upperCaser("jOnaS"); // Jonas
// upperCaser("MICHAEL"); // Michael
// upperCaser("dwiGHT"); // Dwight

// /* -------------------------- Exercice : Formater un String  -------------------------- */

// /* Créer et stocker les 2 e-mails */
// const email = "hello@jonas.io";
// const loginEmail1 = " Hello@Jonas.Io \n";
// const loginEmail2 = "  ekizCEM.PRO@gmail.com      ";

// // // 1.
// // const lowerEmail = loginEmail1.toLowerCase();
// // // 2.
// // const trimmedEmail = lowerEmail.trim();
// // // 3.
// // console.log(trimmedEmail); // hello@jonas.io

// /* Fonction pour définir la mise en forme du String */
// const emailNormalizer = function (email) {
// 	const normalizedEmail = email.toLowerCase().trim();
// 	return normalizedEmail;
// };

// const newEmail = emailNormalizer(loginEmail1);
// const newEmail2 = emailNormalizer(loginEmail2);
// console.log(newEmail); // hello@jonas.io
// console.log(newEmail2); // ekizcem.pro@gmail.com

// // /* -------------------------- Replacer des parties d'un String -------------------------- */

// /* Remplacer le "$" par "€" et le "," par "." */
// const priceGB = "288,97$";
// const priceEU = priceGB.replace("$", "€").replace(",", ".");
// console.log(priceEU); // 288.97€

// /* Remplacer TOUTES les occurences du String "door" par "gate" */
// const announcement =
// 	"All passengers come to boarding door 23. Boarding door 23!";
// console.log(announcement); // All passengers come to boarding door 23. Boarding door 23!

// /* Méthode 1 : avec l'utilisation de la Method .replaceAll */
// const announcementNew = announcement.replaceAll("door", "gate");
// console.log(announcementNew); // All passengers come to boarding gate 23. Boarding gate 23!

// /* Méthode 2 : avec l'utilisation de Regular Expression */
// const announcementNew2 = announcement.replace(/door/g, "gate");
// console.log(announcementNew2); // All passengers come to boarding gate 23. Boarding gate 23!

// // /* -------------------------- Les Methods de String qui retournent des Booleans -------------------------- */

// const plane2 = "Airbus A320neo";

// /* La Method .includes */
// console.log(plane2.includes("A320")); // true
// console.log(plane.includes("Boeing")); // false

// /* La Method .startsWith */
// console.log(plane2.startsWith("Air")); // true
// console.log(plane2.startsWith("A320")); // false
// console.log(plane2.endsWith("neo")); // true

// /* P'tit exercice pratique : vérifier si le nouvel avion fait partie de la famille "Airbus" */
// if (plane2.startsWith("Airbus") && plane2.endsWith("neo")) {
// 	console.log("Part of the New Airbus family");
// }

// /* Exercice : vérifier si le bagage est autorisé dans l'avion */
// /* Je transforme l'input (item) en lowercase avec la Method toLowerCase pour faciliter le if statement qui va suivre
// Dans cette situation il est important de transformer l'input de l'utilisateur en lowercase car JS est sensible à la casse
// et donc "Knife" et "knife" n'est pas considéré comme étant le même String pour JavaScript. */
// const checkBaggage = function (items) {
// 	const baggage = items.toLowerCase();
// 	if (baggage.includes("knife") || baggage.includes("gun")) {
// 		console.log("You are not allowed on board");
// 	} else {
// 		console.log("Welcome aboard!");
// 	}
// };

// checkBaggage("I have a laptop, some Food and a pocket Knife"); // You are not allowed on board
// checkBaggage("Socks and camera"); // Welcome aboard!
// checkBaggage("Got some snacks and a gun for protection"); // You are not allowed on board

// // /* -------------------------- Autres Methods de String -------------------------- */

// /* La Method .split */
// /* La Method .split divise un string en une liste de substrings et met chacun de ces substring dans un array et retourne l’array
// (elle nécessite un divider qui sert de repère pour diviser le string) */

// /* Dans cet exemple le divider est le caractère "+" */
// console.log("a+very+nice+string".split("+")); //  ['a', 'very', 'nice', 'string']

// /* Dans cet exemple le divider est le caractère " " */
// console.log("Mon nom est Cem".split(" ")); // (4) ['Mon', 'nom', 'est', 'Cem']

// /* La Method .join */
// /* La Method .join concatène les éléments d’un array et crée un nouveau string avec tous les éléments assemblés
// puis retourne ce nouveau string */

// const elements = ["Fire", "Air", "Water"];
// console.log(elements.join()); // Fire,Air,Water
// console.log(elements.join("")); // FireAirWater
// console.log(elements.join(" ")); // Fire Air Water
// console.log(elements.join("-")); // Fire-Air-Water

// /* Exemple dans lequel j’utilise .split puis .join */
// const [firstName, lastName] = "Cem Ekiz".split(" ");
// console.log(firstName); // Cem
// console.log(lastName); // Ekiz

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName); // Mr. Cem EKIZ

/* Je veux capitaliser la première lettre de chaque mot */
const capitalizeName = function (name) {
	const names = name.split(" ");
	const namesUpper = [];
	for (const n of names) {
		namesUpper.push(n[0].toUpperCase() + n.slice(1));
		// namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
	}
	// console.log(namesUpper);
	console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis"); // Jessica Ann Smith Davis
capitalizeName("cem ekiz"); // Cem Ekiz
capitalizeName("jonas schmedtmann"); // Jonas Schmedtmann

/* La Method .padStart et .padEnd */
/* Permet de remplir un String avec le caractère spécifié afin qu'il fasse la largeur spécifié */
const myName = "Cem Ekiz";
const teacherName = "Jonas Schmedtmann";
console.log(myName.padStart(25, "+").padEnd(30, "+")); // +++++++++++++++++Cem Ekiz+++++
console.log(teacherName.padStart(25, "+").padEnd(30, "+")); // ++++++++Jonas Schmedtmann+++++

/* Cacher le numéro de carte bancaire sauf les 4 derniers chiffres */
const maskCreditCard = function (number) {
	const str = number + "";
	const last = str.slice(-4);
	return last.padStart(str.length, "*");
};

console.log(maskCreditCard(11515666)); // ****5666
console.log(maskCreditCard(45132197415)); // *******7415
console.log(maskCreditCard(5421210320365161)); // ************5161

/* La Method .repeat */
const message = "Bad weather... All departures Delayed... ";
console.log(message.repeat(5)); // cf. Console

const planesInLine = function (n) {
	console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesInLine(5); // There are 5 planes in line ✈️✈️✈️✈️✈️
planesInLine(10); // There are 10 planes in line ✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
planesInLine(2); // There are 2 planes in line ✈️✈️

/* String Methods Practice */

const flights =
	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
	const [type, from, to, time] = flight.split(";");
	const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
		"_",
		" "
	)} ${getCode(from)} to ${getCode(to)} ${time.replace(":", "h")}`.padStart(40);
	console.log(output);
}
