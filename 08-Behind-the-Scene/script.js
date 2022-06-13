"use strict";

// ===================================================================== //
// ===================================================================== //
// ========================== Scoping Practice========================== //
// ===================================================================== //
// ===================================================================== //

// function calcAge(birthYear) {
// 	const age = 2037 - birthYear;

// 	function printAge() {
// 		const output = `You are ${age}, born in ${birthYear}`;
// 		console.log(output);

// 		if (birthYear >= 1981 && birthYear <= 1996) {
// 			var millenial = true;
// 			// const firstName = "Steven";
// 			const str = `Oh, and you're a millenial, ${firstName}`;
// 			console.log(str);
// 		}

// 		console.log(millenial);
// 	}

// 	printAge();
// 	return age;
// }

// const firstName = "Jonas";
// calcAge(1991);

// ======================================================================= //
// ======================================================================= //
// ========================== Hoisting Practice ========================== //
// ======================================================================= //
// ======================================================================= //

// /******************** Variables ********************/
// console.log(me); // undefined
// console.log(job); // ReferenceError : Cannot access "job" before initialization
// console.log(year); // ReferenceError : Cannot access "year" before initialization
// console.log(x); // ReferenceError : x is not defined

// var me = "Jonas";
// let job = "Teacher";
// const year = 1991;

// /******************** Functions ********************/

// console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // ReferenceError : Cannot access 'addExpr' before initialization
// console.log(addArrow(2, 3)); // ReferenceError: Cannot access 'addArrow' before initialization

// function addDecl(a, b) {
// 	return a + b;
// }

// const addExpr = function (a, b) {
// 	return a + b;
// };

// const addArrow = (a, b) => a + b;

// /******************** Exemple d'erreur possible ********************/

// /* Le if Statement est-il truthy ou falsy ?
// Il est falsy car même si la variable numProducts contient 10, le if Statement a été utilisé
// avant la déclaration de la variable var donc au moment du hoisting, JS considère sa valeur
// comme étant undefined (qui est falsy).  */

// if (!numProducts) {
// 	deleteShoppingCart();
// }

// console.log(numProducts); // undefined

// var numProducts = 10;

// function deleteShoppingCart() {
// 	console.log("All products deleted");
// }

// /******************** var & Window Object ********************/
// /* var crée une propriété dans le Window Object contrairement à let et const */

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false

// ================================================================== //
// ================================================================== //
// ========================== this Keyword ========================== //
// ================================================================== //
// ================================================================== //

// console.log(this); // Window Object

// this keyword with function
const calcAge = function (birthYear) {
	console.log(2037 - birthYear);
	console.log(this);
};

// this keyword with arrow function
const calcAgeArrow = (birthYear) => {
	console.log(2037 - birthYear);
	console.log(this);
};

calcAge(1991); // 46 & Undefined (function)
calcAgeArrow(1991); // 46 & Window Object (arrow function)

/**************** with Object ****************/

const jonas = {
	year: 1991,
	calcAge: function () {
		console.log(this); // jonas Object
		console.log(2037 - this.year); // 46
	},
};

jonas.calcAge();

const matilda = {
	year: 2017,
};

matilda.calcAge = jonas.calcAge;

matilda.calcAge();

// ================================================================================================= //
// ================================================================================================= //
// ========================== this Keyword with Regular & Arrow Functions ========================== //
// ================================================================================================= //
// ================================================================================================= //

// // Regular Functions vs. Arrow Functions
// // var firstName = 'Matilda';
// const jonas = {
// 	firstName: "Jonas",
// 	year: 1991,
// 	calcAge: function () {
// 		// console.log(this);
// 		console.log(2037 - this.year);
// 		// Solution 1
// 		// const self = this; // self or that
// 		// const isMillenial = function () {
// 		//   console.log(self);
// 		//   console.log(self.year >= 1981 && self.year <= 1996);
// 		// };
// 		// Solution 2
// 		const isMillenial = () => {
// 			console.log(this);
// 			console.log(this.year >= 1981 && this.year <= 1996);
// 		};
// 		isMillenial();
// 	},
// 	greet: () => {
// 		console.log(this);
// 		console.log(`Hey ${this.firstName}`);
// 	},
// };
// jonas.greet();
// jonas.calcAge();
// // arguments keyword
// const addExpr = function (a, b) {
// 	console.log(arguments);
// 	return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);
// var addArrow = (a, b) => {
// 	console.log(arguments);
// 	return a + b;
// };
// addArrow(2, 5, 8);

// =========================================================================== //
// =========================================================================== //
// ========================== Primitives VS Objects ========================== //
// =========================================================================== //
// =========================================================================== //

// let lastName = "Williams";
// let oldLastName = lastName;
// lastName = "Davis";
// console.log(lastName, oldLastName); // Davis, Williams

// const jessica = {
// 	firstName: "Jessica",
// 	lastName: "Williams",
// 	age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";
// console.log("Before mariage:", jessica); // lastName: Davis, age: 27
// console.log("After mariage:", marriedJessica); // lastName: Davis, age 27

// // Copying Objects

// const jessica2 = {
// 	firstName: "Jessica",
// 	lastName: "Williams",
// 	age: 27,
// 	family: ["Alice", "Bob"],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = "Davis";

// jessicaCopy.family.push("Mary");
// jessicaCopy.family.push("John");

// console.log("Before mariage:", jessica2); // lastName: Williams, age: 27
// console.log("After mariage:", jessicaCopy); // lastName: Davis, age: 27
