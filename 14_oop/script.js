'use strict';

// ================================================================================================ //
// ================================================================================================ //
// ========================== Constructor Functions and the new Operator ========================== //
// ================================================================================================ //
// ================================================================================================ //

// // Une Constructor Function
// const Person = function (firstName, birthYear) {
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;

// 	// Ne JAMAIS ajouter une fonction à l'intérieur d'un Prototype (car mauvaise perf.)
// 	// À la place on va utiliser la Prototypal Inheritance !
// 	// this.calcAge = function () {
// 	// 	console.log(2037 - this.birthYear);
// 	// };
// };

// // Call de la Constructor Function
// const cem = new Person('Cem', 1996);
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(cem); // Person {firstName: 'Cem', birthYear: 1996}
// console.log(matilda); // Person {firstName: 'Matilda', birthYear: 2017}
// console.log(jack); // Person {firstName: 'Jack', birthYear: 1975}

// console.log(cem instanceof Person); // true
// console.log(matilda instanceof Person); // true
// console.log(jack instanceof Person); // true

// // NOTE:
// /* Lors de l'appel de la fonction avec "new"
//    1. Nouvel Object vide {} est crée
//    2. Function est call, "this" pointe vers le nouvel Object vide {}
//    3. L'Object vide {} est lié à un Prototype (cf. section suivante)
//    4. La fonction retourne automatiquement l'Object vide {} */

// ================================================================ //
// ================================================================ //
// ========================== Prototypes ========================== //
// ================================================================ //
// ================================================================ //
// /* Toutes les fonctions en JS, ont une proprité appellé "prototype", y compris les Constructor Functions. */

// // 1. Créer un prototype (class) sans y inclure les methods directement à l'intérieur :
// const Person = function (firstName, birthYear) {
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;
// };

// // 2. Attribuer une fonction (method) à un prototype de cette manière :
// Person.prototype.calcAge = function () {
// 	console.log(2022 - this.birthYear);
// };

// // Le prototype contient bien les propriétés firstName, birthYear et la method calcAge
// console.log(Person.prototype); // cf. Console

// /* 3. Créer un Object (instance) à partir d'un prototype avec le Constructor "new"  */
// const cem = new Person('Cem', 1996);

// /* 4. Utiliser la method attribué au prototype Person sur un Object */
// cem.calcAge(); // 26

// // L'object (instance) a pu utiliser calcAge() grâce au Prototypal Inheritence (son prototype => Person)
// console.log(cem); // Person {firstName: 'Jonas', birthYear: 1991}

// // /!\ Person.prototype n'est PAS le prototype de Person (le keyword "prototype" est trompeur)
// // Par contre c'est le prototype de l'object lié comme l'object "cem" par exemple
// console.log(cem.__proto__); // {calcAge: ƒ, constructor: ƒ}
// console.log(cem.__proto__ === Person.prototype); // true
// console.log(Person.prototype.isPrototypeOf(cem)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// // Ajouter une nouvelle propriété à un prototype
// Person.prototype.species = 'Homo Sapiens';

// console.log(Person.prototype); // cf. Console
// console.log(cem.species); // Homo Sapiens

// // La propriété "species" n'est pas vraiment dans l'object cem mais elle y a accès grâce au Prototypal Inheritence
// console.log(cem); // cf. Console
// console.log(cem.hasOwnProperty('species')); // false
