'use strict';

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

// /* NOTE: Ne JAMAIS attribuer une fonction à l'intérieur d'un Prototype object, à la place
// on va faire comme ci-dessus pour ajouter une fonction. Les objects (instances) crée à partir
// de ce prototype n'auront pas cette fonction au moment de leur création (= meilleur perf.) mais
// elle pourront accéder à la fonction grâce au Prototypal Inheritence */

// // Le prototype contient bien les propriétés firstName, birthYear et la method calcAge
// console.log(Person.prototype); // cf. Console

// /* 3. Créer un Object (instance) à partir d'un prototype avec le Constructor "new"  */
// const cem = new Person('Cem', 1996);
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(cem); // Person {firstName: 'Cem', birthYear: 1996}
// console.log(matilda); // Person {firstName: 'Matilda', birthYear: 2017}
// console.log(jack); // Person {firstName: 'Jack', birthYear: 1975}
// console.log(cem instanceof Person); // true
// console.log(matilda instanceof Person); // true
// console.log(jack instanceof Person); // true

// /* NOTE: Lors de l'appel de la fonction avec "new"
//    1. Nouvel Object vide {} est crée
//    2. Function est call, "this" pointe vers le nouvel Object vide {}
//    3. L'Object vide {} est lié à un Prototype (cf. section suivante)
//    4. La fonction retourne automatiquement l'Object vide {} */

// /* 4. Utiliser la method attribué au prototype Person sur un Object */
// cem.calcAge(); // 26

// // L'object (instance) a pu utiliser calcAge() grâce au Prototypal Inheritence (son prototype => Person)
// console.log(cem); // Person {firstName: 'Jonas', birthYear: 1991}

// /* NOTE: /!\ Person.prototype n'est PAS le prototype de Person (le keyword "prototype" est trompeur)
//    Par contre c'est le prototype de l'object lié comme l'object "cem" par exemple */
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

// =============================================================================================== //
// =============================================================================================== //
// ========================== Prototypal Inheritence on Built-in Object ========================== //
// =============================================================================================== //
// =============================================================================================== //

// class Person {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// Person.prototype.calcAge = function () {
// 	console.log(2022 - this.birthYear);
// };

// const cem = new Person('Cem', 1996);

// Person.prototype.species = 'Homo Sapiens';

// /* ---------------------------- Prototype Chain ---------------------------- */

// // Remontons la Prototype Chain de l'Object cem de 1 lvl
// console.log(cem.__proto__); // Person.prototype

// // Remontons la Prototype Chain de l'Object cem de 2 lvl
// console.log(cem.__proto__.__proto__); // Object.prototype

// // Remontons la la Prototype Chain de l'Object cem de 3 lvl
// console.log(cem.__proto__.__proto__.__proto__); // null

// console.dir(Person.prototype.constructor); // cf. Console

// /* ---------------------------- Array object ---------------------------- */

// /* NOTE: L'Array object contient la propriété length, les methods forEach, flatMap, map, pop, push...
// Donc tous les arrays qui sont crée peuvent utiliser ces methods et accéder aux propriété de l'Array object
// grâce au Prototype Inheritance */

// const arr = [3, 3, 3, 4, 5, 7, 5, 6, 5];

// console.log(arr.__proto__); // Array prototype
// console.log(arr.__proto__ === Array.prototype); // true
// console.log(arr.__proto__.__proto__); // Object prototype

// // Créer une method dans Array.prototype (déconseillé)
// Array.prototype.unique = function () {
// 	return [...new Set(this)];
// };

// console.log(arr.unique()); // (5) [3, 4, 5, 7, 6]

// /* NOTE: Pourquoi est-ce déconseillé d'ajouter des Methods à Array.prototype ?
// 1. Car les devs de JS pourraient ajouter des nouvelles features/methods ayant le même nom que j'ai donné à
// une de mes methods, et cela pourrait break le code.
// 2. En travail d'équipe, cela porterait à confusion car chacun appelerait ses methods différement, etc. */

// /* ---------------------------- More examples ---------------------------- */

// const h1 = document.querySelector('h1');
// console.dir(h1); // cf. Console
// console.log(h1.__proto__); // HTMLHeadingElement
// console.log(h1.__proto__.__proto__); // HTMLElement
// console.log(h1.__proto__.__proto__.__proto__); // Element
// console.log(h1.__proto__.__proto__.__proto__.__proto__); // Node
// console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__); // EventTarget
// console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__); // Object

// ================================================================= //
// ================================================================= //
// ========================== ES6 Classes ========================== //
// ================================================================= //
// ================================================================= //

// // constructor function (Old way)
// // const PersonCl = function (firstName, birthYear) {
// // };

// // class expression (New way)
// // const PersonCl = class {
// // 	constructor(firstName, birthYear) {}
// // };

// // class declaration (New way)
// class PersonCl {
// 	constructor(fullName, birthYear) {
// 		this.fullName = fullName;
// 		this.birthYear = birthYear;
// 	}

// 	/* NOTE: Écrire une Method ici revient à l'écrire à l'extérieur, elle ne sera pas ajouté au nouvelle instance
// 	Mais la Method sera ajouté au prototype et donc accessible/utilisable par les nouvelles instances */
// 	calcAge() {
// 		console.log(2037 - this.birthYear);
// 	}

// 	// Getter
// 	get age() {
// 		return 2037 - this.birthYear;
// 	}

// 	// Getter (pour le Setter fullname afin d'éviter conflit)
// 	get fullName() {
// 		return this._fullName;
// 	}

// 	// Setter avec une propriété déjà existante
// 	set fullName(name) {
// 		if (name.includes(' ')) {
// 			this._fullName = name;
// 		} else {
// 			alert(`${name} is not a full name`);
// 		}
// 	}
// }

// // La création d'instance n'a pas changé
// const jessica = new PersonCl('Jessica Davis', 1996);
// // const walter = new PersonCl('Walter', 1980);

// console.log(jessica); // PersonCl {firstName: 'Jessica', birthYear: 1996}

// jessica.calcAge(); // 41

// console.log(jessica.age); // 41

// console.log(jessica._fullName); // Jessica Davis
// console.log(jessica.fullName); // Jessica Davis

// console.log(jessica.__proto__ === PersonCl.prototype); // true

// /* NOTE:
//    1. Classes are NOT hoisted
//    2. Class are first-class citizens
//    3. Classes are executed in strict mode */
