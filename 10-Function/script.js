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

/* -------------------------- Avec Function Expression -------------------------- */

const greet = function (greeting) {
	return function (name) {
		console.log(`${greeting} ${name}`);
	};
};

/* En faisant cela, "greeterHey" devient une fonction qui stock la fonction "greet" */
const greeterHey = greet("Hey");
greeterHey("Cem"); // Hey Cem
greeterHey("Elis"); // Hey Elis
/* ou sinon */
greet("Hello")("Jonas"); // Hello Jonas

/* -------------------------- Avec Arrow Function -------------------------- */

/* Méthode 1 (un peu confuse donc il faut préférer Function Expression) */
const greetArrow1 = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArrow1("Hello")("Cem"); // Hello Cem

// /* Méthode 2 (pour information) */
// const greetArrow2 = (greeting) => {
// 	return function (name) {
// 		console.log(`${greeting} ${name}`);
// 	};
// };

// const greetHello2 = greetArrow2("Hello");
// greetHello2("Cem"); // Hello Cem
