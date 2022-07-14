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

// /* NOTE:
//    1. Classes are NOT hoisted
//    2. Class are first-class citizens
//    3. Classes are executed in strict mode */

// /* NOTE: instance method VS static method
//    - Les instance method sont liés aux nouvelles instances (object) crée
//    - Les static method sont liés aux prototypes elles-même (ex: Array.from ne peut pas être utilisé
//    sur les arrays crée à partir de l'Object Array mais que sur l'Array Object lui-même) */

// /* ---------------------------- ES6 Classes ---------------------------- */

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

// 	// Instance Method
// 	calcAge() {
// 		console.log(2037 - this.birthYear);
// 	}

// 	// Static Method
// 	static hey() {
// 		console.log('Hey there');
// 		// console.log(this);
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

// // Instance Method
// console.log(jessica); // PersonCl {firstName: 'Jessica', birthYear: 1996}
// jessica.calcAge(); // 41

// // Static Method
// PersonCl.hey(); // Hey there
// // jessica.hey(); // TypeError

// // Setters and Getters
// console.log(jessica.age); // 41
// console.log(jessica._fullName); // Jessica Davis
// console.log(jessica.fullName); // Jessica Davis

// console.log(jessica.__proto__ === PersonCl.prototype); // true

// /* ---------------------------- Constructor Function ---------------------------- */
// // Pour comparaison avec ES6 Classes

// // Constructor Function
// const Person = function (firstName, birthYear) {
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;
// };

// // Création d'un object (instance)
// const cem = new Person('Cem', 1996);

// // Ajout d'une instance method
// Person.prototype.calcAge = function () {
// 	console.log(2022 - this.birthYear);
// };

// // Ajout d'une static method
// Person.hey = function () {
// 	console.log('Hey there');
// 	// console.log(this);
// };

// // Call Instance Method
// cem.calcAge(); // 26

// // Call Static Method
// Person.hey(); // Hey there

// =================================================================== //
// =================================================================== //
// ========================== Object.create ========================== //
// =================================================================== //
// =================================================================== //

// const PersonProto = {
// 	calcAge() {
// 		console.log(2037 - this.birthYear);
// 	},

// 	init(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birthYear = birthYear;
// 	},
// };

// /* Exemple 1 */

// // On crée l'object "steven" et on définit son prototype à "PersonProto"
// // À noter qu'il n'y pas le keyword "new"
// const steven = Object.create(PersonProto);

// console.log(steven); // cf. Console
// console.log(steven.__proto__ === PersonProto); // true

// // C'est une mauvaise pratique de créer des propriétés de cette manière (cf. Exemple 2 à la place)
// steven.name = 'Steven';
// steven.birthYear = 2002;

// steven.calcAge(); // 35

// /* Exemple 2 */

// const sarah = Object.create(PersonProto);

// // J'ai crée une "Constructor Function" manuellement alors que d'hab c'est automatique (cf. ES6 Classes / Constructor Function)
// sarah.init('Sarah', 1979);

// sarah.calcAge(); // 58

// ================================================================================= //
// ================================================================================= //
// ========================== Inheritance between Classes ========================== //
// ================================================================================= //
// ================================================================================= //

// /* On va utiliser la Constructor Function pour le moment pour mieux comprendre le fonctionnement
// de l’héritage entre les Classes. (cf. plus bas pour la version avec ES6 Classes) */

// /* ---------------------------- with Constructor Function ---------------------------- */

// const Person = function (firstName, birthYear) {
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
// 	console.log(2037 - this.birthYear);
// };

// /* NOTE: Lorsqu'on attribue les propriétés/methods de Person à Student il faut rediriger le "this" Keyword
// vers Student grâce à la method .call ainsin Student aura les mêmes propriétés/methods que Person + celles
// qui sont spécifiques à Student */
// const Student = function (firstName, birthYear, course) {
// 	Person.call(this, firstName, birthYear);
// 	this.course = course;
// };

// /* NOTE: Cela permet de créer une connexion entre Student et Person. Il faut faire cela avant d'ajouter
// de nouvelles methods (comme ci-dessous avec .introduce) à la class Student sinon -> overwrite. */
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
// 	console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike); // Student {firstName: 'Mike', birthYear: 2020, course: 'Computer Science'}
// mike.introduce(); // My name is Mike and I study Computer Science
// mike.calcAge(); // 17

// console.log(mike.__proto__); // cf. Console
// console.log(mike.__proto__.__proto__); // cf. Console

// console.log(mike instanceof Student); // true
// console.log(mike instanceof Person); // true
// console.log(mike instanceof Object); // true

// // Redéfinir le constructor de Student sur le bon
// console.dir(Student.prototype.constructor); // Person
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor); // Student

// /* ---------------------------- with ES6 Classes ---------------------------- */
// /* NOTE: - En pratique il est mieux d'utiliser les ES6 Classes plutôt que les Constructor Function
//          - Mais les ES6 Classes ont un haut niveau d'abstraction donc si j'ai besoin de comprendre
//          le fonctionnement de qqch. je dois me référer aux Constructor Functions.*/

// class PersonCl {
// 	constructor(fullName, birthYear) {
// 		this.fullName = fullName;
// 		this.birthYear = birthYear;
// 	}

// 	// Instance Method
// 	calcAge() {
// 		console.log(2022 - this.birthYear);
// 	}

// 	// Static Method
// 	static hey() {
// 		console.log('Hey there');
// 		// console.log(this);
// 	}

// 	// Getter
// 	get age() {
// 		return 2022 - this.birthYear;
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

// /* NOTE: On peut créer un prototype et lui faire hériter des propriétés/methods d'un autre prototype
//    sans forcément ajouter de nouvelles propriétés/methods + spécifiques (cf. martha) */
// class MiniStudentCl extends PersonCl {}

// class StudentCl extends PersonCl {
// 	constructor(fullName, birthYear, course) {
// 		// Toujours à faire en premier car cela crée le this keyword
// 		super(fullName, birthYear);
// 		this.course = course;
// 	}

// 	introduce() {
// 		console.log(`My name is ${this.fullName} and I study ${this.course}`);
// 	}

// 	calcAge() {
// 		console.log(
// 			`I'm ${
// 				2022 - this.birthYear
// 			} years old, but as a student I feel more like ${
// 				2022 - this.birthYear + 10
// 			}`
// 		);
// 	}
// }

// const martha = new MiniStudentCl('Martha Jones', 2012);
// console.log(martha); // MiniStudentCl {fullName: 'Martha Jonas', birthYear: 2012}
// console.log(martha.__proto__); // PersonCl

// const alex = new StudentCl('Alex Scott', 2003, 'Computer Science');
// console.log(alex); // StudentCl {fullName: 'Alex Scott', birthYear: 2003, course: 'Computer Science'}
// console.log(alex.__proto__); // PersonCl

// alex.introduce(); // 19
// alex.calcAge(); // 19

// /* ---------------------------- with Object.create ---------------------------- */
// /* NOTE: Cette technique est la plus pratique/simple mais c'est la moins utilisée dans la réalité */

// const PersonProto = {
// 	calcAge() {
// 		console.log(2022 - this.birthYear);
// 	},

// 	init(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birthYear = birthYear;
// 	},
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
// 	PersonProto.init.call(this, firstName, birthYear);
// 	this.course = course;
// };

// StudentProto.introduce = function () {
// 	console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 1995, 'Computer Science');
// console.log(jay); // {firstName: 'Jay', birthYear: 2010, course: 'Computer Science'}
// jay.introduce();
// jay.calcAge();

// ================================================================================ //
// ================================================================================ //
// ========================== More Examples with Classes ========================== //
// ================================================================================ //
// ================================================================================ //
// /* Section ayant pour but de montrer d'autres possibilités avec les Classes */

// class Account {
// 	constructor(owner, currency, pin) {
// 		this.owner = owner;
// 		this.currency = currency;
// 		this.pin = pin;
// 		this.movements = [];
// 		this.locale = navigator.language;

// 		console.log(`Thanks for opening an account, ${owner}`);
// 	}

// 	deposit(val) {
// 		this.movements.push(val);
// 	}

// 	withdraw(val) {
// 		this.deposit(-val);
// 	}

// 	approveLoan(val) {
// 		return true;
// 	}

// 	requestLoan(val) {
// 		if (this.approveLoan(val)) {
// 			this.deposit(val);
// 			console.log(`Loan approved`);
// 		}
// 	}
// }

// const acc1 = new Account('Jonas', 'EUR', 1111, []);
// // console.log(acc1);

// // Sans Public Interface
// // acc1.movements.push(250);
// // acc1.movements.push(-140);
// // console.log(acc1);

// // Avec Public Interface
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000); // Loan approved
// console.log(acc1.approveLoan(1000)); // true1
// console.log(acc1); // Account {owner: 'Jonas', currency: 'EUR', pin: 1111, movements: Array(3), locale: 'fr'}
