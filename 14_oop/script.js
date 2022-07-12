'use strict';

// ================================================================================================ //
// ================================================================================================ //
// ========================== Constructor Functions and the new Operator ========================== //
// ================================================================================================ //
// ================================================================================================ //

// Une Constructor Function
const Person = function (firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;

	// Ne JAMAIS ajouter une fonction à l'intérieur d'un Prototype (car mauvaise perf.)
	// À la place on va utiliser la Prototypal Inheritance !
	// this.calcAge = function () {
	// 	console.log(2037 - this.birthYear);
	// };
};

// Call de la Constructor Function
const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(jonas); //> Person {firstName: 'Jonas', birthYear: 1991}
console.log(matilda); //> Person {firstName: 'Matilda', birthYear: 2017}
console.log(jack); //> Person {firstName: 'Jack', birthYear: 1975}

console.log(jonas instanceof Person); //> true
console.log(matilda instanceof Person); //> true
console.log(jack instanceof Person); //> true

// NOTE:
/* Lors de l'appel de la fonction avec "new"
   1. Nouvel Object vide {} est crée
   2. Function est call, "this" pointe vers le nouvel Object vide {}
   3. L'Object vide {} est lié à un Prototype (cf. section suivante)
   4. La fonction retourne automatiquement l'Object vide {} */
