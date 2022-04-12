// ================================================================= //
// ================================================================= //
// ========================== Strict Mode ========================== // Notion :
// ================================================================= //
// ================================================================= //

// "use strict"

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// =============================================================== //
// =============================================================== //
// ========================== Functions ========================== // Notion :
// =============================================================== //
// =============================================================== //

// /* Les fonctions peuvent être ré-utilisés (comme les variables)
//    La partie qui se trouve entre {} est nommée "Function Body", c'est cette partie qui sera exécuté
//    Après avoir crée une fonction on peut la ré-utiliser autant de fois qu'on le souhaite en l'appelant avec "logger()" par exemple
//    En anglais on dit "invoking", "running" ou "calling" the function lorsque l'on fait appel à une fonction
//    Une fonction peut contenir des données mais peut aussi en renvoyer
//    Analogie : on met des fruits (données) dans un mixeur (fonction), celle-ci va mixer (fonction body va s'exécuter) et retourner un jus de fruit (données)
//    Les fonctions permettent de créer du maintenable code, car elles permettent de ré-utiliser des parties de code facilement en évitant les redondances
//    Et éviter les répétions est un principe fondamental du Clean Code ! */

// function logger() {
// 	console.log("My name is Cem");
// }

// logger();
// logger();
// logger();

// /* Ce qui est à l'intérieur des () est appelé "paramètre", il est possible d'en définir plusieurs
//    Les paramètres sont comme des variables spécifiques à cette fonction
//    Ces paramètres sont vides mais ils seront remplis par des arguments lors de l'appel de la fonction
//    "apples, oranges" => ce sont les paramètres dans cet exemple */

// function fruitProcessor(apples, oranges) {
// 	const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// 	return juice;
// }

// // function fruitProcessor(apples, oranges) {
// // 	return `Juice with ${apples} apples and ${oranges} oranges`;
// // }

// /* Lorsqu'on fait appel à la fonction, on remplit les paramètres par des arguments
//    "5, 0" et "2, 4" => ce sont les arguments dans cet exemple */

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// ================================================================================================== //
// ================================================================================================== //
// ========================== Function Declartions VS Function Expressions ========================== // Notion :
// ================================================================================================== //
// ================================================================================================== //
// /* Le résultat sera le même, mais la différence réside dans le fait qu'une Declaration peut survenir après l'avoir utilisé
//    Tandis qu'une Function Expression (stocké dans une variable) doit d'abord être déclaré afin d'être utilisé
//    Le choix dépend des développeurs, mais il peut être judicieux d'opter pour Function Expression afin d'être sur d'avoir déclaré sa fonction plus haut */

// /* ---------------------- Function Declaration ---------------------- */

// const age1 = calcAge1(1996);
// console.log(age1); // 26

// function calcAge1(birthYear) {
// 	return 2022 - birthYear;
// }

// /* ---------------------- Function Expression ---------------------- */

// const calcAge2 = function (birthYear) {
// 	return 2022 - birthYear;
// };

// const age2 = calcAge2(1996);
// console.log(age2); // 26

// ==================================================================== //
// ==================================================================== //
// ========================== Arrow Function ========================== // Notion :
// ==================================================================== //
// ==================================================================== //
// /* Arrow Function est une autre forme de Function Expression qui est plus courte et donc + rapide à coder
//    Le body function après le "=>"
//    Le "return" va se réaliser implicitement, sans qu'on ait à l'écrire, et on a pas besoin des {} également
//    C'est donc très pratique pour les fonctions courtes */

// const calcAge3 = (birthYear) => 2022 - birthYear;

// const age3 = calcAge3(1980);
// console.log(age3); // 57

// /* ---------------------- Scénario 1 ---------------------- */
// /* Il y a un paramètre mais une Body Function + longue */
// /* Explication : la fonction s'appelle "yearUntilRetirement, le paramètre est "birthYear"
//                  le body function est constitué d'une variable "age" qui définit l'âge puis l'utilise pour faire le calcul "65 - age" dans la variable "retirement"
//                  la fonction retourne le résultat de la variable retirement */

// // const yearsUntilRetirement = (birthYear) => {
// // 	const age = 2022 - birthYear;
// // 	const retirement = 65 - age;
// // 	return retirement;
// // };

// // const retirementCem = yearsUntilRetirement(1996);
// // console.log(retirementCem);

// /* ---------------------- Scénario 2 ---------------------- */
// /* Il y a plusieurs paramètres */
// /* Explication : la fonction s'appelle "yearUntilRetirement, les paramètres sont "birthYear" et "firstName"
//                  le body function est constitué d'une variable "age" qui définit l'âge puis l'utilise pour faire le calcul "65 - age" dans la variable "retirement"
//                  la fonction retourne un String avec une phrase contenant les 2 paramètres */

// const yearsUntilRetirement = (birthYear, firstName) => {
// 	const age = 2022 - birthYear;
// 	const retirement = 65 - age;
// 	return `${firstName} retires in ${retirement} years`;
// };

// const retirementCem = yearsUntilRetirement(1996, "Cem");
// console.log(retirementCem);

// ====================================================================================== //
// ====================================================================================== //
// ========================== Function calling others Function ========================== // Notion :
// ====================================================================================== //
// ====================================================================================== //
// /* Reprenons l'exemple du Fruit Processor : dans cet exemple, la machine a besoin de fruits.
//    Mais rajoutons un autre critère : elle a besoin que ces fruits en questions soit coupés mais elle ne sait pas le faire
//    Elle doit donc faire appel à une autre machine
//    cf. Slide PDF de Jonas */

// function cutFruitPieces(fruit) {
// 	return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
// 	const applePieces = cutFruitPieces(apples);
// 	const orangePieces = cutFruitPieces(oranges);

// 	const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
// 	return juice;
// }

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// ========================================================================= //
// ========================================================================= //
// ========================== Reviewing Functions ========================== // Notion :
// ========================================================================= //
// ========================================================================= //
/* À noter : return Statement ne fait pas que renvoyer une valeur, mais elle met fin à la fonction
   donc tout ce qui se trouve après ne sera pas exécuté ! */

// const calcAge = function (birthYear) {
// 	return 2022 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
// 	const age = calcAge(birthYear);
// 	const retirement = 65 - age;

// 	if (retirement > 0) {
// 		console.log(`${firstName} retires in ${retirement} years`);
// 		return retirement;
// 	} else {
// 		console.log(`${firstName} retires in ${retirement} years`);
// 		return -1;
// 	}

// 	return `${firstName} retires in ${retirement} years`;
// };

// const retirementCem = yearsUntilRetirement(1996, "Cem");
// console.log(retirementCem);
// const retirementMike = yearsUntilRetirement(1955, "Mike");
// console.log(retirementMike);

// ============================================================================ //
// ============================================================================ //
// ========================== Introduction to Arrays ========================== //  Notion :
// ============================================================================ //
// ============================================================================ //
// /* Les arrays ("tableaux") sont des Data Structure, dans lesquels on peut mettre des variables afin de les utiliser plus tard
//    C'est donc très utile quand on a beaucoup de variables
//    Une autre Data Structure : Object (mais c'est pas l'objet de cette section) */

// /* Sans Array on ferait comme ceci par exemple */
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Michael";

// /* À la place de créer plusieurs variables, on peut utiliser les Arrays */
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends); // (3) ["Michael", "Steven", "Peter"]

// /* Une autre manière de créer des Arrays : */
// // const years = new Array(1991, 1984, 2008, 2020);
// // console.log(years);

// /* Mais comment appeler une valeur en particulier faisant parti d'un Array
//    Admettons que nous voulons appeler Michael (il est en position 0) et Peter (en position 2) */
// console.log(friends[0]); // Michael
// console.log(friends[2]); // Peter

// /* Pour savoir le nombre de valeurs qu'il y a dans un Array */
// console.log(friends.length); // 3

// /* Pour changer une valeur de l'Array */
// /* À noter qu'on change une valeur de const alors qu'à la base ce n'est pas possible, mais Array = pas une Primitive Data
//    La manière dont les valeurs sont stockés ont donc une importance (+ d'infos dans la section "How JS works behind the scene")
//    Mais il est impossible de changer l'Array entier */

// friends[2] = "Jay";
// console.log(friends); // (3) ["Michael", "Steven", "Peter"]

// /* Mais il est impossible de changer l'Array entier */
// // friends = ["Bob", "Alice"];

// /* Un Array peut contenir plusieurs valeurs de Data Types différentes, des variables et peut même contenir d'autre Array */
// const firstName = "Cem";
// const cem = [firstName, "EKIZ", 2022 - 1996, "Developer", friends];
// console.log(cem);
// console.log(cem.length);

// /* ---------------------- Scénario ---------------------- */
// /* Calculer l'âge de plusieurs personnes */

// const calcAge = function (birthYear) {
// 	return 2022 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// /* Il ne faut pas faire cela car la fonction calcAge attend une valeure seule, or l'Array contient plusieurs valeurs */
// // const ageOfPeople = calcAge(years);
// // console.log(ageOfPeople);

// /* À la place il faut sélectionner les valeurs à l'intérieur de l'Array */
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// /* Il est aussi possible de stocker les valeurs que produisent les expressions des variables age1, age2, etc.
//    Dans l'exemple ci-dessus l'expression calcAge(years[0]) produit la valeur 32 (âge), et cette expression peut être contenu dans un Array */
// const ages = [
// 	calcAge(years[0]),
// 	calcAge(years[1]),
// 	calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// ======================================================================================= //
// ======================================================================================= //
// ========================== Basic Arrays Operations (Methods) ========================== //  Notion :
// ======================================================================================= //
// ======================================================================================= //
// /* JavaScript a des built-in functions applicables directement aux Arrays : les "Methods"
//    On relie une method à un Array (ou autres) par le biais de la notation pointée "." */

// const friends = ["Michael", "Steven", "Peter"];

// /* ---------------------- Ajouter ---------------------- */

// /* La méthode push() ajoute un ou plusieurs éléments à la fin d'un Array */
// friends.push("Jay");
// console.log(friends);

// /* La méthode unshift() ajoute un ou plusieurs éléments au début d'un Array */
// friends.unshift("John");
// console.log(friends);

// /* Si on veut savoir uniquement la taille */
// // const newLength = friends.push("James");
// // console.log(friends);
// // console.log(newLength); // 5

// /* ---------------------- Supprimer ---------------------- */

// /* La méthode pop() supprime le dernier élément d'un Array (pas besoin d'entrer d'arguments) */
// friends.pop();
// console.log(friends);

// /* Pas très souvent utilisé */
// // const popped = friends.pop();
// // console.log(popped); // Peter // friends.pop() retourne l'élément qui a été supprimé

// /* La méthode shift() supprime le premier élément d'un Array (pas besoin d'entrer d'arguments) */
// friends.shift();
// console.log(friends);

// /* Pas très souvent utilisé */
// // const shifted = friends.shift();
// // console.log(shifted); // Michael // friends.pop() retourne l'élément qui a été supprimé

// /* ---------------------- Trouver la position d'un élément ---------------------- */

// console.log(friends.indexOf("Steven")); // 1
// console.log(friends.indexOf("Bob")); // -1

// /* ---------------------- Savoir si un élément est dans l'Array ---------------------- */

// console.log(friends.includes("Steven")); // 1
// console.log(friends.includes("Bob")); // -1

// /* Cette méthode test avec l'égalité stricte ! */
// friends.push(23);
// console.log(friends.includes("23"));

// /* ---------------------- Combiner les Methods avec les Conditionnal ---------------------- */
// /* C'est très souvent utilisé */

// if (friends.includes("Peter")) {
// 	console.log("You have a friend called Bob");
// }

// ============================================================================= //
// ============================================================================= //
// ========================== Introduction to Objects ========================== //  Notion :
// ============================================================================= //
// ============================================================================= //
/* Les Objects sont aussi une forme de Data Structure (comme les Arrays) */
/* Pour rappel dans un Array, il peut y avoir plusieurs valeurs séparés par des virgules (strings, nombres, array imbriqué, etc.)
   mais le seul moyen d'appeler une valeur qui est dans un Array est de connaître sa position ([1] ou [3] par exemple)  */
/* Les Objects résoudent ce problème car il est possible de nommer, c'est ce qu'on appelle "key" donc l'ordre des éléments n'a pas d'importance
   On utilise donc les Arrays pour des structures ordonnées et les Objects pour des structures désordonnées */

// /* À titre de comparaison entre les Arrays et les Objects */
// // const jonasArray = [
// // 	"Jonas",
// // 	"Schmedtmann",
// // 	2037 - 1991,
// // 	"Teacher",
// // 	["Michael", "Peter", "Steven"],
// // ];

// /* Voici à quoi ressemble une structure de donnée avec les Objects
//    Chaque ligne correspond à une "key-value pair"
//    Object = correspond à tout ce qui est entre {}
//    Property (ou Key) = correspond à "firstName", "lastName", etc.
//    Property Value (ou Value) = Données, Arrays, Functions, etc. */
// const jonas = {
// 	firstName: "Jonas",
// 	lastName: "Schmedtmann",
// 	age: 2037 - 1991,
// 	job: "Teacher",
// 	friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);

// ====================================================================================== //
// ====================================================================================== //
// ========================== Dot Notation VS Bracket Notation ========================== //  Notion :
// ====================================================================================== //
// ====================================================================================== //

// const jonas = {
// 	firstName: "Jonas",
// 	lastName: "Schmedtmann",
// 	age: 2037 - 1991,
// 	job: "Teacher",
// 	friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);

// /* Voici commment récupérer une donnée dans un Object : grâce à l'opérateur "notation pointée" -> "."*/
// console.log(jonas.firstName);
// /* ou grâce au [] -> pour information, l'avantage ici est de pouvoir appeler une expression (= opération qui produit une valeur) */
// console.log(jonas["lastName"]);

// /* Autre exemple avec les [] qui inclut une expression (pas possible avec la notation pointée) */
// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// /* Un autre scénario dans lequel on ne sait pas encore quel valeur nous allons recevoir à l'avance
//    -> Dans le prompt je vais demander "job" et nous allons voir ce que la console nous renvoie
//    Cet exemple montre clairement la différence entre la "." Notation et la "[]" Notation */
// const interestedIn = prompt(
// 	"What do you want to know about Jonas? Choose between firstName, lastName, age, job and friendsjob"
// );
// console.log(interestedIn); // job
// console.log(jonas.interestedIn); // undefined (falsy value) // c'est ce qu'on obtient lorsqu'on essaye d'accéder à une Property qui n'existe pas dans un Object
// console.log(jonas[interestedIn]); // Teacher
// console.log(jonas[interestedIn]); // undefined // si je demande une Property qui n'existe pas, la console retourne "undefined" => falsy value

// /* Maintenant de print un string dans la console lorsque l'user essaye d'accéder à une Property qui n'existe pas ! */
// /* Explication : "si jonas[interestedIn"] existe (si c'est true) alors print le dans la console
//                   sinon (si c'est falsy : 0, undefined, etc.) print le string "Wrong request!" */
// if (jonas[interestedIn]) {
// 	console.log;
// } else {
// 	console.log("Wrong request!");
// }

// /* Ajouter une nouvelle Property à un Object : possible de le faire avec "." ou [] */
// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// console.log(jonas);
// console.log(jonas.location);

// /* Exemple plus complexe (la notation pointée agit de gauche à droite => jonas.friends d'abord puis friends.length ! // cf. Table des Precedence si besoin) */
// console.log(
// 	`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`
// );

// ==================================================================== //
// ==================================================================== //
// ========================== Object Methods ========================== //  Notion :
// ==================================================================== //
// ==================================================================== //
// /* Pour rappel : dans un Object il peut y avoir plusieurs types de données, des Arrays et mêmes d'autres Object
//    Voyons maintenant les Functions à l'intérieur d'un Object (Functions = un autre type de valeur) = Methods */

// /* ---------------------- Scénario 1 ---------------------- */
// /* Lorsqu'une Function Expression (calcAge dans cet exemple) est attaché à un Object => on appelle cela une "Method"
//    calcAge est donc une Property qui a pour valeur une Function
//    L'instruction "this" pointe sur Jonas dans cet exemple pour la Property "birthYear"
//    En fait, cela revient à écrire "return 2037 - jonas.birthYear" mais imaginons que nous changeons le nom de la variable "jonas" par un autre nom,
//    cela casserait tout le code, alors qu'avec le keyword "this", il n'y a pas ce problème ! */

// const jonas = {
// 	firstName: "Jonas",
// 	lastName: "Schmedtmann",
// 	birthYear: 1991,
// 	job: "Teacher",
// 	friends: ["Michael", "Peter", "Steven"],
// 	hasDriversLicense: true,

// 	calcAge: function () {
// 		return 2022 - this.birthYear;
// 	},
// };

// /* Sans le keyword "this" dans l'Object "jonas", il aurait fallu rentrer un argument dans la fonction (1991) mais c'est contraire au principe de non-répétition.
//    C'est l'objet (jonas) qui appelle sa méthode (calcAge). Donc le "this.birthYear" dans la Method "calcAge" fera référence au birthYear de l'object Jonas */
// /* ou */
// console.log(jonas.calcAge()); // 31 //
// // console.log(jonas["calcAge"]()); // 31 //

// /* Il est possible de faire comme ceci pour accéder plusieurs fois à l'âge de Jonas mais dans le cadre d'un site/application ça serait "lourd" en terme de calcul
//    et c'est une mauvaise pratique */
// // console.log(jonas.calcAge()); // 31 //
// // console.log(jonas.calcAge()); // 31 //
// // console.log(jonas.calcAge()); // 31 //

/* ---------------------- Scénario 2 ---------------------- */
// /* Admettons que nous avons besoin d'accéder à l'âge de quelqu'un à plusieurs reprises, à plusieurs endroits différents mais nous voulons éviter les calculs répétitifs */

// /* Il faut calculer l'âge une fois, puis le stocker dans l'Object et quand on aura besoin on appellera l'âge en tant que Property dans l'Object */
// /* Dans l'exemple ci-dessous nous avons créer une nouvelle propriété "age" (this.age revient à écrire cem.age) ! */
// const cem = {
// 	firstName: "Cem",
// 	lastName: "Ekiz",
// 	birthYear: 1996,
// 	job: "Développeur Web",
// 	friends: ["Jeremy", "Azzedine", "Sojy"],
// 	hasDriversLicense: true,

// 	calcAge: function () {
// 		this.age = 2022 - this.birthYear;
// 		return this.age;
// 	},

// 	getSummary: function () {
// 		return `${
// 			this.firstName
// 		} is a ${this.calcAge()}-year old Web Developer, and he has ${
// 			this.hasDriversLicense ? "a" : "no"
// 		} driver's license.`;
// 	},
// };

// /* Attention : il faut avoir au moins computer la version "cem.calcage()" avant d'utiliser "cem.age" autant de fois que l'on veut
// Si on essaye seulement "console.log(cem.age" -> la console retourne undefined */
// console.log(cem.calcAge());
// console.log(cem.getSummary());

// /** À noter : dans l'exercice sur les Basics Arrays nous avons appelé des built-in Methods "friends.push" ou "friends.indexOf"
//     "push" et "indexOf" sont des Methods (ou Functions), et "friends" était le nom de l'Array. Les Arrays sont donc aussi des Objects.  **/

// ============================================================================== //
// ============================================================================== //
// ========================== Iteration : The FOR Loop ========================== //  Notion :
// ============================================================================== //
// ============================================================================== //
// /* Les loops font aussi parti du Control Flow, tout comme les if...else Statement ou switch Statement.
//    Les loops permettent d'automatiser les tâches répétitives */

// // console.log("Lifting weights repetition 1 🏋️");
// // console.log("Lifting weights repetition 2 🏋️");
// // console.log("Lifting weights repetition 3 🏋️");
// // console.log("Lifting weights repetition 4 🏋️");
// // console.log("Lifting weights repetition 5 🏋️");
// // console.log("Lifting weights repetition 6 🏋️");
// // console.log("Lifting weights repetition 7 🏋️");
// // console.log("Lifting weights repetition 8 🏋️");
// // console.log("Lifting weights repetition 9 🏋️");
// // console.log("Lifting weights repetition 10 🏋️");

// /* Une Loop for continuera à s'éxecuter tant que la condition est true (ici la condition est "rep <= 10") */
// for (let rep = 1; rep <= 10; rep++) {
// 	console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

// ============================================================================================= //
// ============================================================================================= //
// ========================== Looping Arrays, Breaking and Continuing ========================== //  Notion :
// ============================================================================================= //
// ============================================================================================= //

// const jonas = [
// 	"Jonas",
// 	"Schmedtmann",
// 	2037 - 1991,
// 	"Teacher",
// 	["Michael", "Peter", "Steven"],
// 	true,
// ];

// const types = [];

// /* Voici ce que je veux faire avec une Loop for */
// // console.log(jonas[0]);
// // console.log(jonas[1]);
// // console.log(jonas[2]);
// // console.log(jonas[3]);
// // console.log(jonas[4]);

// /* La Loop "for" a pour variable "i" qui est une convention lorsqu'il faut "counter".
//    On commence à 0 car c'est comme cela que les Arrays fonctionnent.
//    Ensuite la condition est "i < 5", c'est logique car il n'y a pas de [5] dans l'Array, donc la Loop continue tant que le counter n'atteint pas 5.
//    Ensuite on définit ce que doit faire la Loop à la fin de chaque tour : "i++" autrement dit elle s'incrémente de 1 à chaque tour.
//    Ensuite on définit qu'elle doit afficher jonas[i] à chaque tour. Étant donné qu'elle va faire 5 tours en s'incrémentant de 1 à la fin de chaque tour,
//    On obtiendra toutes les propriétés de l'Object jonas de [0] à [4]. */

// // for (let i = 0; i < 5; i++) {
// // 	console.log(jonas[i]);
// // }

// /* Ce que je viens de faire ci-dessus fonctionne. Cependant j'ai hardcode la condition "i < 5" car imaginons que j'ajoute une nouvelle propriété dans
//    l'Object jonas... alors elle ne sera pas log dans la console à cause de cette condition.
//    La solution => jonas.length (à la place de la condition "i < 5")  */

// for (let i = 0; i < jonas.length; i++) {
// 	/* Reading from jonas array */
// 	console.log(jonas[i], typeof jonas[i]);

// 	/* Filling types array */
// 	// types[i] = typeof jonas[i];
// 	/* ou de cette manière */
// 	types.push(typeof jonas[i]);
// }

// console.log(types);

// /* ---------------------- Scénario avec la For Loop ---------------------- */

// /* On crée d'abord un Array appelé "years" contenant les années d'anniversaire de plusieurs personnes */
// const years = [1991, 2007, 1969, 2020];

// /* Ensuite on crée un Array vide appelé "ages" (la Loop va s'occuper de calculer les âges et de les push dans cet Array vide) */
// const ages = [];

// /* Maintenant nous créons la Loop "for", on utilise le nom "i" pour la variable, la condition est de continuer jusqu'à arriver à la fin de l'Array (i < years.length)
//    Et à la fin de chaque tour on avance de 1 (i++)
//    Nous voulons calculer l'âge à chaque tour : 2022 - years[i], signifie => année actuelle - année de naissance de l'emplacement actuel dans l'Array
//    Nous voulons que ce calcul soit "push" dans la variable "ages" donc => ages.push(2022 - years[i]) */
// for (let i = 0; i < years.length; i++) {
// 	ages.push(2022 - years[i]);
// }

// console.log(ages);

// /* ---------------------- continue Statement ---------------------- */

// const jonas = [
// 	"Jonas",
// 	"Schmedtmann",
// 	2037 - 1991,
// 	"Teacher",
// 	["Michael", "Peter", "Steven"],
// 	true,
// ];

// /* Admettons que nous voulons print uniquement les String :
//    if (typeof jonas [i] !== "string") continue
//    Cela signifie "si le Data Type de l'élément actuel dans l'Array n'est pas un string, alors on le skip et on passe au suivant"
//    Cela aura donc pour résultat donc de print uniquement les strings !*/

// for (let i = 0; i < jonas.length; i++) {
// 	if (typeof jonas[i] !== "string") continue;
// 	console.log(jonas[i], typeof jonas[i]);
// }

// /* ---------------------- break Statement ---------------------- */

// const jonas = [
// 	"Jonas",
// 	"Schmedtmann",
// 	2037 - 1991,
// 	"Teacher",
// 	["Michael", "Peter", "Steven"],
// 	true,
// ];

// /* Exemple : lorsqu'un number sera trouvé, on arrête la Loop.
//    C'est un peu contre-intuitif mais en fait, ici ce qu'il va se passer c'est que la Loop va continuer à print toutes les propriétés peu importe leur types
//    puis quand elle tombera sur un nombre, la loop s'arrêtera (le nombre ne sera pas print). */

// for (let i = 0; i < jonas.length; i++) {
// 	if (typeof jonas[i] === "number") break;
// 	console.log(jonas[i], typeof jonas[i]);
// }

// ========================================================================================== //
// ========================================================================================== //
// ========================== Looping Backwards and Loops in Loops ========================== //  Notion :
// ========================================================================================== //
// ========================================================================================== //

// /* ---------------------- Looping Backwards ---------------------- */

// const jonas = [
// 	"Jonas",
// 	"Schmedtmann",
// 	2037 - 1991,
// 	"Teacher",
// 	["Michael", "Peter", "Steven"],
// 	true,
// ];

// /* Nous voulons dans cet exemple Loop en commencant par la fin => [4], [3], [2], etc. */

// for (let i = jonas.length - 1; i >= 0; i--) {
// 	console.log(i, jonas[i]);
// }

// /* ---------------------- Loops in Loops ---------------------- */

// /* La première loop lance l'exercie 1 et s'arrêtera à 3, et à chaque exercice une Loop de 5 répétions se lance. */
// for (let exercise = 1; exercise <= 3; exercise++) {
// 	console.log(`Starting exercise ${exercise}`);

// 	for (let rep = 1; rep <= 5; rep++) {
// 		console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
// 	}
// }

// ==================================================================== //
// ==================================================================== //
// ========================== The while Loop ========================== //  Notion :
// ==================================================================== //
// ==================================================================== //

// /* Je met ça là à titre de comparaison avec la while Loop */
// for (let rep = 1; rep <= 10; rep++) {
// 	console.log(`Lifting weight repetition ${rep}`);
// }

// /* Nous allons réaliser le même résultat qu'avec le for loop mais avec le while loop.
//    Mais quel est l'avantage du while loop dans ce cas ? => il est plus versatile, car il nécessite seulement une condition
//    contrairement à la for loop qui demande un "counter".
//    Dans cet exemple on a mis le "let rep = 1" qui est un counter car on en a besoin dans ce cas spécifique, mais tout ce dont a besoin
//    une while loop en réalité est un condition (rep <= 10 dans cet exemple), tant que la condition est "true" la loop continue ! */

// let rep = 1;
// while (rep <= 10) {
// 	console.log(`(While) Lifting weights repetition ${rep}`);
// 	rep++;
// }

// /* ---------------------- Exemple (où on a pas besoin de counter) ---------------------- */
// /* Donc la while loop peut aider résoudre certain problème où on a pas besoin de counter (de nombres qui increase). */

// // let rep = 1;
// // while (rep <= 10) {
// // 	console.log(`(While) Lifting weights repetition ${rep}`);
// // 	rep++;
// // }

// /* Dans cet exemple, on va lancer un dé. Puis continuer à lancer le jusqu'à qu'on tombe sur un 6.
//    Donc dans cette situation on ne sait pas à l'avance combien de combien de Loops nous aurons besoin. C'est une situation parfaite pour utiliser while.
//    --- Pas besoin de comprendre le built-in Object "Math" pour le moment.  --- */

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
// 	console.log(`You rolled a ${dice}`);
// 	dice = Math.trunc(Math.random() * 6) + 1;
// 	if (dice === 6) console.log("Loop is about to end...");
// }
