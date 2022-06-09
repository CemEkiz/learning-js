"use strict";

// ======================================================================== //
// ======================================================================== //
// ========================== Default Parameters ========================== //
// ======================================================================== //
// ======================================================================== //

// const bookings = [];

// /* ------------------- Sans paramètres par défaut ------------------- */
// const createBooking1 = function (flightNum, numPassengers, price) {
// 	const booking = {
// 		flightNum,
// 		numPassengers,
// 		price,
// 	};
// 	console.log(booking);
// 	bookings.push(booking);
// };

// createBooking1("LH123"); // {flightNum: 'LH123', numPassengers: undefined, price: undefined}

// /* ------------------- La méthode ES5 (ancienne) pour définir des paramètres par défaut ------------------- */
// // /* La Méthode ES5 pour définir des paramètres par défaut */
// const createBooking2 = function (flightNum, numPassengers, price) {
// 	numPassengers = numPassengers || 1;
// 	price = price || 199;
// 	const booking = {
// 		flightNum,
// 		numPassengers,
// 		price,
// 	};
// 	console.log(booking);
// 	bookings.push(booking);
// };

// /* ------------------- La méthode ES6 pour définir des paramètres par défaut ------------------- */
// const createBooking2 = function (flightNum, numPassengers = 1, price = 199) {
// 	const booking = {
// 		flightNum,
// 		numPassengers,
// 		price,
// 	};
// 	console.log(booking);
// 	bookings.push(booking);
// };

// createBooking2("LH123"); // {flightNum: 'LH123', numPassengers: 1, price: 199}
// createBooking2("LH124", 2, 800); // {flightNum: 'LH123', numPassengers: 2, price: 800}

// /* ------------------- Paramètres dynamiques ------------------- */
// /* Attention : l'ordre des paramètres est important pour que le calcul dynamique fonctionne */
// const createBooking3 = function (
// 	flightNum,
// 	numPassengers = 1,
// 	price = 199 * numPassengers
// ) {
// 	const booking = {
// 		flightNum,
// 		numPassengers,
// 		price,
// 	};
// 	console.log(booking);
// 	bookings.push(booking);
// };

// createBooking3("LH125", 5); // {flightNum: 'LH125', numPassengers: 5, price: 995}
// createBooking3("LH125", 10); // {flightNum: 'LH125', numPassengers: 10, price: 1990}
// createBooking3("LH126", undefined, 1000); // {flightNum: 'LH126', numPassengers: 1, price: 1000}

// console.log(bookings); // cf. Console

// ====================================================================================================== //
// ====================================================================================================== //
// ========================== How Passing Arguments Works : Value VS Primitive ========================== //
// ====================================================================================================== //
// ====================================================================================================== //
// const flight = "LH234";
// const jonas = {
// 	name: "Jonas Schmedtmann",
// 	passport: 164161949865,
// };

// const checkIn = function (flightNum, passenger) {
// 	flightNum = "LH999";
// 	passenger.name = "Mr. " + passenger.name;

// 	if (passenger.passport === 164161949865) {
// 		console.log("Checked in");
// 	} else {
// 		console.log("Wrong passport!");
// 	}
// };

// /* Nous remarquons ci-dessous que flight n'a pas été modifié après l'appel de la fonction
// mais que jonas.name a été modifié */
// console.log(flight); // LH234
// console.log(jonas); // {name: 'Jonas Schmedtmann', passport: 164161949865}
// checkIn(flight, jonas); // Checked in
// console.log(flight); // LH234
// console.log(jonas); // {name: 'Mr. Jonas Schmedtmann', passport: 164161949865}

// /* Pourquoi flight n'a pas été modifié ? Car dans la memory heap ce n'est pas la même variable
// c'est une "copie" stocké dans une autre variable. */
// let flightNum = flight;
// console.log(flightNum); // LH234
// flightNum = "LH200";
// console.log(flightNum); // LH200
// console.log(flight); // LH234

// /* Pourquoi jonas.name a été modifié ? Car passenger.name et jonas.name sont le même object
// dans la memory heap. */
// const passenger = jonas;
// console.log(passenger); // {name: 'Mr. Jonas Schmedtmann', passport: 164161949865}
// passenger.name = "Cem Ekiz";
// console.log(passenger); // {name: 'Cem Ekiz', passport: 164161949865}
// console.log(jonas); // {name: 'Cem Ekiz', passport: 164161949865}

// /* Autre cas de situation réelle qui pourrait poser problème dans le code */
// const newPassport = function (person) {
// 	person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(jonas);
// /* Le passport de l'object jonas a été modifié */
// checkIn(flight, jonas); // Wrong passport!
// console.log(jonas.passport); // 46619893

// ============================================================================================ //
// ============================================================================================ //
// ========================== Functions Accepting Callback Functions ========================== //
// ============================================================================================ //
// ============================================================================================ //

// /* -------------------------- Exemple 2 -------------------------- */

// const oneWord = function (str) {
// 	return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
// 	const [first, ...others] = str.split(" ");
// 	return [first.toUpperCase(), ...others].join(" ");
// };

// const transformer = function (str, fn) {
// 	console.log(`Original string: ${str}`);
// 	console.log(`Transformed string: ${fn(str)}`);
// 	console.log(`Transformed by: ${fn.name}`);
// };

// /* transformer = higher-order function et upperFirstWord = callback function */
// transformer("JavaScript is the best!", upperFirstWord);
// // Original string: JavaScript is the best!
// // Transformed string: JAVASCRIPT is the best!
// // Transformed by: upperFirstWord

// /* transformer = higher-order function et oneWord = callback function */
// transformer("JavaScript is the best!", oneWord);
// // Original string: JavaScript is the best!
// // Transformed string: javascriptisthebest!
// // Transformed by: oneWord

// /* -------------------------- Exemple 2 -------------------------- */

// const high5 = function () {
// 	console.log("Hey!");
// };

// /* addEventListener = higher-order function et high5 = callback function */
// document.body.addEventListener("click", high5);

// /* -------------------------- Exemple 3 -------------------------- */

// const high6 = function () {
// 	console.log("Heyho!");
// };

// /* forEach = higher-order function et et high6 = callback function */
// ["Jonas", "Martha", "Adam"].forEach(high6);
// // x3 Heyho!

// /* -------------------------- Notes : Abstraction -------------------------- */
// /* L'abstraction dans la programmation a une importance cruciale,  en effet dans les exemples
// ci-dessus le fonctionnement des callback function est "caché" et n'est pas utiliser directement,
// elle est utilisé indirectement par la higher-order function. Dans l'exemple de la fonction "transformer",
// on utilise la callback fonction "upperFirstWord" ou "oneWord" mais on s'en fiche de comment elles fonctionnent,
// ce qui importe c'est la fonction "transformer".
// - transformer(quoi ? => le string, comment ? => callback function).
// - addEventListener(quel événement ? => au clic, qu'est-ce qu'il se passera ? => callback function), etc. */

// =================================================================================== //
// =================================================================================== //
// ========================== Functions returning Functions ========================== //
// =================================================================================== //
// =================================================================================== //

// /* -------------------------- Avec Function Expression -------------------------- */

// const greet = function (greeting) {
// 	return function (name) {
// 		console.log(`${greeting} ${name}`);
// 	};
// };

// /* En faisant cela, "greeterHey" devient une fonction qui stock la fonction "greet" */
// const greeterHey = greet("Hey");
// greeterHey("Cem"); // Hey Cem
// greeterHey("Elis"); // Hey Elis
// /* ou sinon */
// greet("Hello")("Jonas"); // Hello Jonas

// /* -------------------------- Avec Arrow Function -------------------------- */

// /* Méthode 1 (un peu confuse donc il faut préférer Function Expression) */
// const greetArrow1 = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greetArrow1("Hello")("Cem"); // Hello Cem

// /* Méthode 2 (pour information) */
// const greetArrow2 = (greeting) => {
// 	return function (name) {
// 		console.log(`${greeting} ${name}`);
// 	};
// };

// const greetHello2 = greetArrow2("Hello");
// greetHello2("Cem"); // Hello Cem

// // ================================================================================ //
// // ================================================================================ //
// // ========================== The Call and Apply Methods ========================== //
// // ================================================================================ //
// // ================================================================================ //

// /* Je crée un Object pour l'Airline "Lufthansa" dans lequel il y aura une Method (book) */
// const lufthansa = {
// 	airline: "Lufthansa",
// 	iataCode: "LH",
// 	bookings: [],
// 	book(flightNum, name) {
// 		console.log(
// 			`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
// 		);
// 		this.bookings.push({
// 			flight: `${this.iataCode}${flightNum}`,
// 			name,
// 		});
// 	},
// };

// const eurowings = {
// 	airline: "Eurowings",
// 	iataCode: "EW",
// 	bookings: [],
// };

// lufthansa.book(239, "Jonas Schmedtmann"); // Jonas Schmedtmann booked a seat on Lufthansa flight LH239
// lufthansa.book(635, "John Smith"); // John Smith booked a seat on Lufthansa flight LH635
// console.log(lufthansa); // cf. Console

// /* Je stocke la Method .book dans une variable, la Method devient alors une Regular Fonction,
// ce n'est pas une Method qui appartient à l'Object lufthansa mais c'est une copie séparée */
// const book = lufthansa.book;

// // // /* -------------------------------- .call Method -------------------------------- */

// /* ___Sans .call Method___ */
// /* La fonctionne renvoie une erreur à cause du "this" keyword, il faut alors préciser à quel Object
// le "this" correspond explicitement (avec les Methods des fonctions) */
// // book(23, "Sarah Williams"); // TypeError

// /* ___Avec .call Method___ */
// /* .call Method : le premier argument désigne la cible du this keyword */
// book.call(eurowings, 23, "Sarah Williams"); // Sarah Williams booked a seat on Eurowings flight EW23
// console.log(eurowings); // cf. Console

// book.call(lufthansa, 239, "Mary Cooper"); // Mary Cooper booked a seat on Lufthansa flight LH239
// console.log(lufthansa); // cf. Console

// /* -------------------------------- .apply Method -------------------------------- */
// /* C'est une Method similaire à .call Method mais il faut créer un Array d'abord qui sera le second argument
// tandis que le premier restera (comme pour .call) la cible à designer pour le this keyword */

// const flightData = [583, "George Cooper"];
// book.apply(eurowings, flightData); // George Cooper booked a seat on Eurowings flight EW583
// console.log(eurowings); // cf. Console

// /* Mais il est conseillé d'utiliser call tout de même qui est la nouvelle Method en combinaison avec le Spread Operator */
// const flightData2 = [583, "Tom Nell"];
// book.call(eurowings, ...flightData2); // George Cooper booked a seat on Eurowings flight EW583

// ================================================================== //
// ================================================================== //
// ========================== .bind Method ========================== //
// ================================================================== //
// ================================================================== //

// const lufthansa = {
// 	airline: "Lufthansa",
// 	iataCode: "LH",
// 	bookings: [],
// 	book(flightNum, name) {
// 		console.log(
// 			`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
// 		);
// 		this.bookings.push({
// 			flight: `${this.iataCode}${flightNum}`,
// 			name,
// 		});
// 	},
// };

// const eurowings = {
// 	airline: "Eurowings",
// 	iataCode: "EW",
// 	bookings: [],
// };

// /* -------------------------------- .bind Method -------------------------------- */

// /* La Method .bind fonctionne différement : elle crée une nouvelle fonction (SANS appeler la fonction) qui redirige le this keyword
// vers le nouvel Object souhaité */

// /* 1 - Il faut d'abord stocker la Method dans une variable afin de la convertir en Regular Function (comme pour .call et .apply) */
// const book = lufthansa.book;

// /* 2 - Utilisation de la Method .bind qui permet de rediriger le this keyword vers l'Object souhaité tout en créant une nouvelle fonction */
// const bookEW = book.bind(eurowings);
// const bookLUF = book.bind(lufthansa);

// /* 3 - Enfin, on peut utiliser la nouvelle fonction de manière classique */
// bookEW(23, "Steven Williams"); // Steven Williams booked a seat on Eurowings flight EW23
// bookLUF(45, "James Roger"); // James Roger booked a seat on Lufthansa flight LH45
// console.log(eurowings); // cf. Console
// console.log(lufthansa); // cf. Console

// /* -------------------------------- Partial Application -------------------------------- */

// /* _____Exemple 1_____ */
// /* Il est aussi possible de définir un argument en avance lors de la création de la fonction : on appelle ça "Partial Application"
// cela signifie que une partie des arguments de la fonction est déjà définie */
// const bookEW55 = book.bind(eurowings, 55);
// bookEW55("Thomas Cooper"); // Thomas Cooper booked a seat on Eurowings flight EW55

// /* _____Exemple 2_____ */

// const addTax = (rate, value) => value + value * rate;

// /* Sans Partial Application : utilisation classique d'une fonction, il faut définir les 2 arguments */
// console.log(addTax(0.2, 100)); // 120

// /* Avec Partial Application : il faut bind les arguments "par défaut", null est obligatoire car c'est l'emplacement de .this et il n'est
// pas présent dans cette fonction, puis la seconde valeur correspond à rate, etc. (L'ordre des arguments est donc très important !)
// Au moment du call de la fonction il suffit de définir l'argument pour value */

// const addVAT = addTax.bind(null, 0.2);
// console.log(addVAT(100)); // 120

// /* Pourquoi ne pas utiliser Default Parameters ?
// Car avec la Method .bind  cela crée une nouvelle fonction plus spécifique et qui est séparée de la fonction d'origine (qui sert de base) */

// /* Alternative : Function returning Function */
// const addTax2 = function (rate) {
// 	return function (price) {
// 		console.log(price + price * rate);
// 	};
// };

// const addVAT2 = addTax2(0.2);
// addVAT2(100); // 120

// /* -------------------------------- Function Methods et Event Listener -------------------------------- */

// /* Je crée une nouvelle propriété pour l'Object lufthansa et je définis la valeur à 300 */
// lufthansa.planes = 300;

// /* Je crée une nouvelle Method pour l'Object lufthansa, le "this" pointe vers lufthansa */
// lufthansa.buyPlane = function () {
// 	this.planes++;
// 	console.log(this);
// 	console.log(this.planes);
// };

// /* La Method fonctionne correctement car le this keyword pointe vers lufthansa */
// // lufthansa.buyPlane(); // 301

// /* Dans le cas d'un Event Listener, la handler function "lufthansa.buyPlane" sera call au moment du clic du bouton
// mais cela retourne NaN et retourne l'élément html du bouton. Pourquoi ? Car le this keyword de la handler function
// (lufthansa.buyPlane) est attaché à "document.querySelector(".buy") donc cela fausse toute la fonction. */
// // document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane); // cf. Console (au moment du clic)

// /* Pour résoudre ce problème il faut utiliser rediriger le .this keyword vers lufthansa : .call ou .bind ?
// La réponse est évidemment .bind car nous voulons pas call la fonction tout de suite (ce que ferait .call Method)
// nous voulons juste rediriger le .this de la handler function qui sera utilisé plus tard (au moment du clic) */
// document
// 	.querySelector(".buy")
// 	.addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// ===================================================================================================== //
// ===================================================================================================== //
// ========================== Immediately Invoked Function Expressions (IIFE) ========================== //
// ===================================================================================================== //
// ===================================================================================================== //
/* Les IIFE sont des fonctions qui sont crée pour être call qu'une seule fois */

/* IIFE */
(function () {
	console.log("This will never run again");
	const isPrivate = 23;
})(); // This will never run again

/* IIFE avec l'Arrow Function */
(() => console.log("This will ALSO never run again"))(); // This will ALSO never run again

/* Pourquoi l'IIFE existe ?
Pour rappel dans le Global Scope on peut pas accéder aux données encapsulé (privé).
Dans la première IIFE j'ai crée une variable qui est encapsulé dans une fonction, 
je ne peux pas y accéder via le Globale Scope (cf. ci-dessous) */
// console.log(isPrivate); // ReferenceError
/* Par contre dans la Scope d'une fonction il est possible d'accéder aux données du Global Scope,
cela marche donc dans un sens mais pas dans l'autre. Donc pour répondre à la question initiale, les IIFE
existe dans le but d'encapsuler des variables, données, etc. */

/* Mais dans le Modern JavaScript si on veut seulement encapsuler des données il suffit de le faire avec un 
bloc d'instruction (cf. ci-dessous), les IIFE ne sont plus utilisés pour cela (on les utilise uniquement 
lorsqu'on a besoin d'éxectuer une fonction qu'une seule fois) */
{
	const isPrivate = 23;
	var notPrivate = 46;
}

// console.log(isPrivate); // ReferenceError
console.log(notPrivate); // 46
