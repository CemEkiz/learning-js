// ==================== Hello World ==================== //

// let js = "amazing";
// if (js === "amazing") alert("Hello World!");
// console.log(40 + 8 + 23 - 10);

// ==================== Values and Variables ==================== //

// console.log("Cem");
// console.log(26);
// let firstName = "Cem";
// console.log(firstName);

// ==================== Variables Naming Rules ==================== // // Notion :

// //////// Conventions
// let firstName = "Cem"; // camelCase
// let myCurrentJob = "Developer"; // Utiliser un nom de variable descriptif (nameOfMyCat, myFirstJob) plutôt que des noms qui n'ont pas de sens (job1, job2, catNumber2)
// let PI = 3.1415; // Il existe certaines exceptions de nommage pour certains keywords tel que PI par exemple

// //////// Règles
// // let Cem&Sky = value // Il est interdit d'utiliser des signes (sauf _ et $)
// // let 3years = value // Il est interdit de commencer le nom d'une variable par un chiffre (à moins de déclarer "year3" par exemple)
// // let function = value // Il existe une liste de mots reservés et donc interdit  (à moins de déclarer "_function" ou "$function" par exemple)
// // let caseSensitive = value // Les noms des variables sont sensibles à la casse, donc si je déclare "let casesensitive" ça sera une toute autre variable qui sera déclaré

// ==================== Data Types ==================== // // Notion :

// //////// String
// console.log(typeof "Cem");

// //////// Number
// console.log(typeof 23);

// //////// Boolean
// let javascriptIsFun = true;
// console.log(typeof javascriptIsFun);
// console.log(typeof true);
// console.log(typeof false);

// ////////// undefined
// let year;
// console.log(year);
// console.log(typeof year);

// ////////// null
// console.log(typeof null);

// ==================== let VS const VS var ==================== // // Notion :

// ////////// let
// let age = 30;
// age = 31; // Il est possible de muter une valeur déclaré avec let
// console.log(age);

// ////////// const
// const birthYear = 1996;
// console.log(birthYear);

// // birthYear = 1984; // Il n'est pas possible de muter une valeur déclaré avec const (TypeError)
// // console.log(birthYear);

// // const job // Il faut toujours définir une valeur pour initialiser une déclaration const (SyntaxError)

// ////////// var
// var job = "programmer"; // var fonctionne de la même manière que let mais il ne doit pas être utilisé (var = function scope, let = block scope ; cf. section 7)
// job = "teacher";
// console.log(job);

// lastName = "Ekiz"; // Ne pas déclarer une variable comme ceci car ça la déclare dans le "Global Object" (cf. prochaines sections)
// console.log(lastName);

// ==================== Arithmetic Operators ==================== // // Notion :

// let myAge = 26;

// ////////// Addition (+)
// console.log(myAge + 4); // 30

// ////////// Substraction (-)
// console.log(myAge - 6); // 20

// ////////// Multiplication (*)
// console.log(myAge * 2); // 52

// ////////// Division (/)
// console.log(myAge / 2); // 13

// ////////// Remainder (%)

// ////////// Increment (++)
// console.log(myAge++); // 27     (26 + 1)

// ////////// Decrement (--)
// console.log(myAge--); // 25     (26 - 1)

// ////////// Exponentiation (**)
// console.log(2 ** 3); // 8       (2 * 2 *)

// ////////// String Concatenation with "+" Operator
// // Solution 2 : il estpossible d'utiliser les Templates Literals
// // Solution 3 : j'aurai pu ajouter un espace lors de la déclaration de la variable ("Cem " ou " Ekiz")
// const firstName = "Cem";
// const lastName = "Ekiz";
// console.log(firstName + " " + lastName); // Cem Ekiz

// ==================== Assignments Operators ==================== // // Notion :

// ////////// Assignment Operator (=)
// let a = 10 + 5;
// console.log(a); // 15

// ////////// Addition Assignment (+=)
// a += 10; // a = a + 10      (15 + 10)
// console.log(a); // 25

// ////////// Multiplication Assignment (*=)
// a *= 4; // a = a * 4        (25 * 4)
// console.log(a); // 100

// ////////// Division Assignment (/=)
// a /= 2; // a = a / 2        (100 / 2)
// console.log(a); // 50

// ////////// Substraction Assignment (-=)
// a -= 5; // a = a - 5        (50 - 5)
// console.log(a); // 45

// ////////// Exponentiation Assignment (**=)
// a **= 2; // a = a * 45      (45 * 45)
// console.log(a); // 2025

// ////////// Remainder Assignment (%=)

// ==================== Comparison Operator ==================== // // Notion :

// const ageElis = 18;
// const ageCem = 26;

// ////////// Greather than (>)
// console.log(ageCem > ageElis); // true

// ////////// Less than (<)
// console.log(ageCem < ageElis); // false

// ////////// Greater than or equal to (>)
// console.log(ageElis >= 18); // true

// ////////// Less than or equal to (>)
// console.log(ageElis <= 18); // true

// ==================== Others Operators ==================== // // Notion : OK

////////// typeof Operator
// cf. Data Types (cet opérateur sert à renvoyer le Type de Donnée qui a été initialisé)

// ==================== Operator Precedence ==================== // // Notion :

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// // JS fait le calcul "now - 1991" puis "now - 2018" puis il fait la comparaison, comment se fait-il qu'il le fait dans ce (bon) ordre ?
// // Réponse : car il est défini dans JS un ordre du plus haut niveau jusqu'au plus bas niveau de précédence (voir table des précédences sur MDN Web Docs)
// console.log(now - 1991 > now - 2018); // true

// let x, y; // On vient de déclarer 2 variables en même temps grâce à l'opérateur ","
// // On assigne avec "=" de droite à gauche, mais le calcul avec "+" se fait de gauche à droite
// x = y = 25 - 10 - 5;
// console.log(x); // 10

// const averageAge1 = ageJonas + ageSarah / 2; // Cela ne fonctionnera pas car il fera d'abord le calcul "ageSarah / 2 puis l'addition"
// console.log(averageAge1); // 55.5
// const averageAge2 = (ageJonas + ageSarah) / 2; // Cela permet d'isoler l'addition d'abord puis la division ensuite
// console.log(averageAge2); // 32.5

// ==================== String & Template Literals ==================== // // Notion : OK

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// // Construction d'une variable SANS Template Literals
// const jonas =
// 	"I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// // Construction d'une variable AVEC Template Literals
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string`);

// // Saut de ligne SANS Template Literals
// console.log("String with \n\
// multiple \n\
// lines");

// // Saut de ligne AVEC Template Literals
// console.log(`String
// with
// multiple lines`);

// ==================== Taking Decisions : if / else Statements ==================== // // Notion : OK

// const age = 15;

// // Si la condition qui est entre () est true : le premier bloc {} sera exécuté, si il est false : ce sera le bloc qui suit "else" qui sera exécuté
// // if signifie "si", "else" signifie "sinon" ce qui est à l'intérieur de () est la condition qui peut être true ou false, ce qui est à l'intérieur de {} est le bloc qui sera exécuté si la condition est true ou false
// // Dans le cas où il n'y a pas de else Statement : si la condition est true, le bloc {} sera exécuté, si il est false il ne sera pas exécuté
// if (age >= 18) {
// 	console.log("Sarah can start driving license 🚗");
// } else {
// 	const yearsLeft = 18 - age;
// 	console.log(`Sarah is too young, Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
// 	let century = 20;
// } else {
// 	let century = 21;
// }
// console.log;

// ==================== Type Conversion & Type Coercion ==================== // // Notion :

// // Ici "1991" est un String, et "18" est un Number
// // const inputYear = "1991";
// // console.log(inputYear + 18); // 199118 (String et Number)

// ////////// Type Conversion
// /* On parle de Conversion de Data Type lorsqu'on le fait manuellement */

// const inputYear = "1991";
// console.log(Number(inputYear) + 18); // 2009 (Number) // "1991" a été converti en Number, ce qui permet le calcul

// console.log(Number("Cem")); // "NaN -> Not a Number" // Cela arrive quand il n'y a pas de chiffre dans le String

// console.log(String(23)); // 23 (String) // Conversion du Number en String

// /* Il est aussi possible de faire des conversions avec les Boolean mais cela sera étudié plus bas */

// ////////// Type Coercion
// /* On parle de de Coercion de Data Type lorsque JavaScript le fait automatiquement */

// console.log("I am " + 26 + " years old"); // String // Il y a un mix de String et Number, mais grâce au Type Coercion, il sera considéré comme un String

// /* Le seul cas où c'est transformé en string c'est quand il y a Numbers et Strings et le signe "+" qui réalise une concatenation, dans les autres situations, avec les signes "-" "*" "/", etc. les Strings contenant des chiffres seront transformés en Number automatiquement (Type Coercion) */
// console.log("23" + "10" + 3); // 23103 // Car ils seront considérés comme des Strings -> Concatenation de String
// console.log("23" - "10" - 3); // 10 // Car ils seront considérés comme des Numbers -> Calcul 23 - 10 - 3 = 10
// console.log("23" * "2"); // 46 // Car ils seront considérés comme des Numbers -> 23 * 2 = 46

// /* Autre cas particuliers */
// let n = "1" + 1; // "11"
// n = n - 1; // 10 // 11 - 1 = 10

// let n2 = 2 + 3 + 4 + "5";
// console.log(n2); // 95

// let n3 = "10" - "4" - "3" - 2 + "5";
// console.log(n3); // 15

// ==================== Truthy & Falsy Values ==================== // // Notion :

// //////////////////// Falsy Values ////////////////////
// /* Mais qu'est-ce que c'est "falsy values" => ce sont des valeurs qui vont être converti en "false" avec Boolean
//    Il existe 5 valeurs pouvant être converti en false : 0, "", undefined, null, NaN */
// // console.log(Boolean(0)); // false
// // console.log(Boolean("")); // false
// // console.log(Boolean(undefined)); // false
// // console.log(Boolean(null)); // false
// // console.log(Boolean(NaN)); // false

// //////////////////// Truthy Values ////////////////////
// /* À l'inverse, les truthy values => ce sont des valeurs qui vont être converti en "true" avec Boolean
// Exemples => String qui ne sont pas vide, Number autres que 0, etc. */
// // console.log(Boolean("Cem")); // true
// // console.log(Boolean(1)); // true

// //////////////////// En pratique ////////////////////
// /* En réalité on ne fait pas de Type Conversion manuellement, c'est seulement à titre pédagogique.
//    En pratique, c'est le Type Coercion qui entre en action pour les Booleans (de manière implicite)
//    Voici ce que donne le Type Coercion en pratique avec les Truthy et Falsy Values :  */

// /* 0 étant Falsy, Type Coercion -> false alors else est appliqué, si le chiffre était autre que 0 alors if sera appliqué car true */
// const money = 0;
// if (money) {
// 	console.log("Don't spend it all ;)");
// } else {
// 	console.log("You should get a job!");
// }

// /* let n'étant pas défini donc "undefined" -> Type Coercion -> falsy (false) donc else sera appliqué, si la variable était
//    initialisé alors if aurait été appliqué, cependant si la valeur était initialisé avec le Number "0" alors else serait appliqué
//    cependant les Logical Operators résoudront ce problème ! */
// let height;
// if (height) {
// 	console.log("Height is defined");
// } else {
// 	console.log("Height is undefined");
// }

// ==================== Equality Operator : == VS === VS !== and "else if" Statement ==================== // // Notion :

// //////////////////// Strict Equality "===" ////////////////////
// /* "===" signifie "égalité" stricte (la même valeur et le même type) */
// // console.log(18 === 18); // true
// // console.log(18 === 19); // false
// // console.log("18" === 18); // false

// //////////////////// Loose Equality "==" //////////////////// /* à ne pas utiliser */
// /* "==" signifie "égalité" (la même valeur) */
// // console.log(18 == 18); // true
// // console.log(18 == 19); // false
// // console.log("18" == 18); // true

// //////////////////// Strict Not Equality "!==" ////////////////////
// /* "!==" signifie "strictement non égal" (sans Type Coercion)
//    Pour la "Loose Non Equality" => "!=" */
// // console.log(18 !== 18); // false
// // console.log(18 !== 19); // true
// // console.log("18" !== 19); // true

// //////////////////// En pratique 1 ////////////////////
// // const age = "18";
// const age = 18;

// /* Strict Equality */
// if (age === 18) {
// 	console.log("You just became an adult (Strict)");
// }

// /* Loose Equality (à éviter au maximum sauf si nécessaire) */
// if (age == 18) {
// 	console.log("You just became an adult (Loose)");
// }

// //////////////////// En pratique 2 ////////////////////
// /* Il faut transformer la valeur de prompt en "Number" car de base il se définira en String et dans le Control Flow avec
//    le Strict Equality (===), il ne sera pas pris en compte (car "===" ne fait pas de Type Coercion)
//    (Essayer sans le Keyword "Number", le typeof devrait renvoyer string") */
// const favouriteNumber = Number(prompt("What is your favourite number?"));
// console.log(favouriteNumber);
// console.log(typeof favouriteNumber);

// if (favouriteNumber === 21) {
// 	console.log("This is a great number!");
// } else if (favouriteNumber === 15) {
// 	console.log("This is also a cool number!");
// } else if (favouriteNumber === 24) {
// 	console.log("This is also a cool number!");
// } else {
// 	console.log("This number is not 21 or 15 or 24...10");
// }

// if (favouriteNumber !== 21) {
// 	console.log("Why not 21 ?");
// }

// ==================== Logical Operators (AND, OR, NOT) ==================== // // Notion :
// /* && -> AND
//    || -> OR
//    ! -> NOT */

/* (Jouer avec les valeurs "true" et "false" pour voir les résultats sur la console de l'inspecteur) */
const hasDriversLicense = false; // A
const hasGoodVision = false; // B
const isTired = false; // C

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(hasDriversLicense && hasGoodVision && isTired);
// console.log(!hasDriversLicense);

//////////////////// En pratique ////////////////////

if (hasDriversLicense && hasGoodVision && !isTired) {
	console.log("Sarah is able to drive!");
} else {
	console.log("Someone else should drive...");
}
