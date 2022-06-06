"use strict";

// ======================================================================== //
// ======================================================================== //
// ========================== Default Parameters ========================== //
// ======================================================================== //
// ======================================================================== //

const bookings = [];

// /* ------------------- Sans paramètres par défaut ------------------- */
const createBooking1 = function (flightNum, numPassengers, price) {
	const booking = {
		flightNum,
		numPassengers,
		price,
	};
	console.log(booking);
	bookings.push(booking);
};

createBooking1("LH123"); // {flightNum: 'LH123', numPassengers: undefined, price: undefined}

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

/* ------------------- La méthode ES6 pour définir des paramètres par défaut ------------------- */
const createBooking2 = function (flightNum, numPassengers = 1, price = 199) {
	const booking = {
		flightNum,
		numPassengers,
		price,
	};
	console.log(booking);
	bookings.push(booking);
};

createBooking2("LH123"); // {flightNum: 'LH123', numPassengers: 1, price: 199}
createBooking2("LH124", 2, 800); // {flightNum: 'LH123', numPassengers: 2, price: 800}

/* ------------------- Paramètres dynamiques ------------------- */
/* Attention : l'ordre des paramètres est important pour que le calcul dynamique fonctionne */
const createBooking3 = function (
	flightNum,
	numPassengers = 1,
	price = 199 * numPassengers
) {
	// ES5
	// numPassengers = numPassengers || 1;
	// price = price || 199;
	const booking = {
		flightNum,
		numPassengers,
		price,
	};
	console.log(booking);
	bookings.push(booking);
};

createBooking3("LH125", 5); // {flightNum: 'LH125', numPassengers: 5, price: 995}
createBooking3("LH125", 10); // {flightNum: 'LH125', numPassengers: 10, price: 1990}
createBooking3("LH126", undefined, 1000); // {flightNum: 'LH126', numPassengers: 1, price: 1000}

console.log(bookings); // cf. Console
