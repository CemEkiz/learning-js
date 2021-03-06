// ===================================================================================== //
// ===================================================================================== //
// ========================== Converting and Checking Numbers ========================== //
// ===================================================================================== //
// ===================================================================================== //

// /* ---------------------------- Cas de bug spécifiques aux nombres ---------------------------- */

// /* JavaScript est basé sur des nombres binaires et pas en base 10 comme on en a l'habitude. */
// /* Base 10 -->  0 à 9 */
// /* Base 2 (binaire) --> 0 à 1 */
// console.log(23 === 23.0); // true
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); // false

// /* ---------------------------- Convertir un String en Number ---------------------------- */

// /* Avec la fonction Number */
// console.log(Number('23')); // 23

// /* Avec le Type Coercion */
// console.log(+'23'); // 23

// /* ---------------------------- Parsing ---------------------------- */
// /* Le string doit commencer par un Number */

// /* ParseInt */
// /* Le 10 (Radix Parameter) signifie qu'on est sur une base 10 (nombres décimaux pas pris en compte) */
// console.log(Number.parseInt('30px', 10)); // 30
// console.log(Number.parseInt('px30', 10)); // NaN
// console.log(Number.parseInt('2.5rem')); // 2

// /* ParseFloat */
// /* Il permet de prendre en compte les nombres décimaux contrairement à parseInt */
// console.log(Number.parseFloat('2.5rem')); // 2.5
// console.log(Number.parseFloat('2rem')); // 2

// /* ---------------------------- .isNaN ---------------------------- */
// /* Cette Method permet de check si une valeur est 'NaN' (true ou false) */

// console.log(Number.isNaN(20)); // false
// console.log(20); // 20

// console.log(Number.isNaN('20')); // false (c'est un String)
// console.log('20'); // '20'

// console.log(Number.isNaN(+'20x')); // true (+'20x' retourne NaN)
// console.log(+'20x'); // NaN

// console.log(Number.isNaN(23 / 0)); // false
// console.log(23 / 0); // Infinity

// /* ---------------------------- .isFinite ---------------------------- */
// /* - Cette Method permet de check si une valeur est un Number.
//    - Il est préférable d'utiliser cette méthode plutôt que isNaN.
//    - 'Finite' est le contraire de 'Infinite'. */

// console.log(Number.isFinite(20)); // true
// console.log(20); // 20

// console.log(Number.isFinite('20')); // false
// console.log('20'); // '20'

// console.log(Number.isFinite(+'20x')); // false
// console.log(+'20x'); // NaN

// console.log(Number.isFinite(23 / 0)); // false
// console.log(23 / 0); // Infinity

// ======================================================================= //
// ======================================================================= //
// ========================== Math and Rounding ========================== //
// ======================================================================= //
// ======================================================================= //

// /* .sqrt (retourne la racine carré) */
// console.log(Math.sqrt(25)); // 5

// /* .max (retourne la valeur la + élevée)*/
// console.log(Math.max(5, 20, 10, 17, 11)); // 20
// console.log(Math.max(5, '20', 10, 17, 11)); // 20
// console.log(Math.max(5, '20px', 10, 17, 11)); // NaN

// /* .min (retourne la valeur la - élevée)*/
// console.log(Math.min(5, 20, 10, 17, 11)); // 5
// console.log(Math.min(5, '5', 10, 17, 11)); // 5
// console.log(Math.min(5, '5x', 10, 17, 11)); // NaN

// /* PI */
// console.log(Math.PI); // 3.141592653589793

// /* .trunc (permet d'arrondir à l'entier inférieur) */
// console.log(Math.trunc(23.2)); // 23
// console.log(Math.trunc(23.5)); // 23
// console.log(Math.trunc(23.9)); // 23

// /* .ceil (permet d'arrondir à l'entier supérieur) */
// console.log(Math.ceil(23.2)); // 24
// console.log(Math.ceil(23.5)); // 24
// console.log(Math.ceil(23.9)); // 24

// /* .round (permet d'arrondir à l'entier le plus proche) */
// console.log(Math.round(23.2)); // 23
// console.log(Math.round(23.5)); // 24
// console.log(Math.round(23.9)); // 24

// /* .floor (permet d'arrondir) */
// console.log(Math.floor(23.2)); // 23
// console.log(Math.floor(23.5)); // 23
// console.log(Math.floor(23.9)); // 23

// /* .floor VS .trunc (de préférence --> .floor) */
// console.log(Math.trunc(-23.3)); // -23
// console.log(Math.floor(-23.3)); // -24

// /* .random (retourne une valeur au hasard)*/
// console.log(Math.random()); // Nombre décimal entre 0 et 1
// console.log(Math.floor(Math.random() * 6) + 1); // Nombre entier entre 1 et 6

// /* .toFixed (retourne un string avec les décimals arrondis) */
// /* Pour rappel un Number est une Primitive donc elle n'est pas censé avoir de Method,
// mais JS va faire un 'boxing' -> transformer le Number en Object, appliquer la Method
// puis retourner le résultat reconverti en Number */
// console.log(+(2.7).toFixed(0)); // 3
// console.log(+(2.7).toFixed(1)); // 2.7
// console.log(+(2.7).toFixed(3)); // 2.700
// console.log(+(2.345).toFixed(2)); // 2.35
// console.log(+(2.345).toFixed(2)); // 2.35

// /* Fonction pour générer une valeur random entre 2 nombres */
// const randomInt = (min, max) => {
// 	return Math.trunc(Math.random() * (max - min) + 1) + min;
// };
// console.log(randomInt(10, 20)); // Number entre 10 et 20

// ======================================================================== //
// ======================================================================== //
// ========================== Remainder Operator ========================== //
// ======================================================================== //
// ======================================================================== //
// /* Cet opérateur retourne le 'reste'. */

// /* ---------------------------- Exemples ---------------------------- */

// /* 2 x 2 = 4 --> il reste 1 */
// /* '2 entier peut entrer 2 fois dans 5, il restera alors 1' */
// console.log(5 % 2); // 1

// /* 4 x 7 = 28 --> il reste 2 */
// /* 4 entier peut entrer 7 fois dans 30, il restera alors 2 */
// console.log(30 % 4); // 2

// /* Un nombre est 'pair' s'il retourne 0 */
// console.log(6 % 2); // 0
// console.log(30 % 2); // 0
// console.log(102 % 2); // 0

// /* ---------------------------- Fonction isEven ---------------------------- */
// /* Création d'une fonction pour savoir si un nombre est pair ou non */

// const isEven = (n) => n % 2 === 0;

// console.log(isEven(8)); // true
// console.log(isEven(30)); // true
// console.log(isEven(23)); // false
// console.log(isEven(17)); // false

// ======================================================================== //
// ======================================================================== //
// ========================== Numeric Separators ========================== //
// ======================================================================== //
// ======================================================================== //
// /* Les Numeric Separators permettent de lire plus facilement les nombres trop longs
//    --> 27000000000 = 27 000 000 000
//    --> 27000000000 = 27,000,000,000
//    --> 27000000000 = 27.000.000.000 */

// /* JS ne prends pas en compte les '_' donc on peut l'utiliser dans notre code afin
// de faciliter la lisibilité */

// // /* ---------------------------- Exemples ---------------------------- */

// const diameter = 287_460_000_000;
// console.log(diameter); // 287460000000

// const price = 345_99;
// console.log(price); // 34599

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;
// console.log(transferFee1); // 1500
// console.log(transferFee2); // 1500

// // /* ---------------------------- Erreurs à éviter ---------------------------- */

// // console.log(3_.1415);
// // console.log(3._1415);
// // console.log(_3.1415);
// // console.log(3.1415_);

// console.log(Number('230_000')); // NaN
// console.log(parseInt('230_000')); // 230

// ========================================================================= //
// ========================================================================= //
// ========================== Working with BigInt ========================== //
// ========================================================================= //
// ========================================================================= //
// /* JS représente les Numbers en 64 bits. Cela signifie qu'il y a 64 '1' ou '0' (binaire)
// pour représenter un Number. En réalité 53 bits sont utilisés pour stocker les chiffres
// eux même, le reste est dédié au points décimaux et aux signes. */

// /* - Le plus grand nombre pouvant être représenté par JS de manière safe est 9007199254740991
// - 2 --> pour le binaire (0 et 1)
// - 1 --> on retire 1 pour ne pas comptabiliser '0' */
// console.log(2 ** 53 - 1); // 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// /* Pourquoi est-il important d'avoir connaissance de nombre maximum ?
// --> Car les calculs effectués sur des nombres plus grands que le nombre maximum manqueront de précision */
// console.log(2 ** 53); // 9007199254740992
// console.log(2 ** 53 + 1); // 9007199254740992
// console.log(2 ** 53 + 3); // 9007199254740996
// console.log(2 ** 53 + 2); // 9007199254740994
// console.log(2 ** 53 + 4); // 9007199254740996

// /* ---------------------------- BigInt ---------------------------- */

// /* Comment faire alors pour stocker des nombres + grand que le nombre maximum ?
// --> Depuis ES2020, une nouvelle Primitive a été ajouté à JS : BigInt qui permet de stocker
// des nombres infiniment plus long que le nombre max. */

// /* Créer un BigInt Number */
// console.log(6465463116516165446163131n); // 6465463116516165446163131
// console.log(typeof 6465463116516165446163131n); // bigint

// /* ---------------------------- Opération avec des BigInt ---------------------------- */

// /* Opérations sur BigInt */
// console.log(10000n + 10000n); // 20000n
// console.log(1545844164596460000n * 10004654564654945645645640n); // 15465636877575184661692613485846758434400000n

// /* Il n'est pas possible de faire des opérations entre un Number et un BigInt */
// const hugeNum = 3654545615610651646549879849n;
// const num = 23;
// // console.group(hugeNum * num); // TypeError
// console.group(hugeNum * BigInt(num)); // script.js:245 84054549159044987870647236527n

// /* ---------------------------- Exceptions ---------------------------- */
// /* Exceptions des opérations qui fonctionnent entre Number et BigInt */

// console.log(20n > 15); // true
// console.log(20n === 20); // false
// console.log(typeof 20n); // bigint
// console.log(typeof 20); // number

// /* Sans Type Coercion */
// console.log(20n == 20); // true

// /* Concaténation */
// console.log(3215616515614561361651616n + 'is REALLY big');

// /* Divisions */
// console.log(11n / 3n); // 3n
// console.log(10 / 3); // 3.3333333333333335

// ==================================================================== //
// ==================================================================== //
// ========================== Creating Dates ========================== //
// ==================================================================== //
// ==================================================================== //

// /* Créer une Date */

// const now = new Date();
// console.log(now); // Wed Jun 29 2022 20:31:39 GMT+0200

// /* Autres exemples */

// console.log(new Date('Wed Jun 29 2022 20:31:44')); // Wed Jun 29 2022 20:31:44 GMT+0200

// console.log(new Date('December 24, 2015')); // Thu Dec 24 2015 00:00:00 GMT+0100

// /* 2037 --> année
//    10 --> 11ème mois (janvier = 0, février = 1, etc.)
//    19 --> jour
//    15, 23, 5 --> heure, minute, seconde */
// console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05 GMT+0100

// console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sun Jan 04 1970 01:00:00 GMT+0100

// /* ---------------------------- Les Methods de Date ---------------------------- */

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future); // Thu Nov 19 2037 15:23:00 GMT+0100

// /***** Pour obtenir une donnée ******/

// /* Pour obtenir l'année */
// console.log(future.getFullYear()); // 2037

// /* Pour obtenir le mois */
// console.log(future.getMonth()); // 10

// /* Pour obtenir le jour du mois */
// console.log(future.getDate()); // 19

// /* Pour obtenir le jour de la semaine */
// console.log(future.getDay()); // 4

// /* Pour obtenir l'heure */
// console.log(future.getHours()); // 15

// /* Pour obtenir la minute */
// console.log(future.getMinutes()); // 23

// /* Pour obtenir la secodne */
// console.log(future.getSeconds()); // 0

// /* Pour convertir en format ISOS */
// console.log(future.toISOString()); // 2037-11-19T14:23:00.000Z

// /* Pour obtenir le timestamp (de la variable 'future') */
// console.log(future.getTime()); // 2142253380000

// /* Obtenir le timestamp de maintenant */
// console.log(Date.now()); // 1656536395496

// /***** Pour modifer une donnée ******/

// /* Modifier l'année */
// future.setFullYear(2040); //
// /* Modifier le mois */
// future.setMonth(11);

// /* Modifier le jour du mois */
// // future.setDate;

// /* Modifier le jour de la semaine */
// // future.setDay();

// /* Modifier l'heure */
// // future.setHours();

// /* Modifier la minute */
// // future.setMinutes();

// /* Modifier la seconde */
// // future.setSeconds();

// console.log(future);

// ========================================================================== //
// ========================================================================== //
// ========================== Operation with Dates ========================== //
// ========================================================================== //
// ========================================================================== //
// /* Il est possible de faire des opérations très facilement avec l'Object Date grâce
// au Timestamp */

// const future = new Date(2037, 10, 19, 15, 23);

// /* Convertir Date en Timestamp */
// console.log(Number(future)); // 2142253380000
// console.log(+future); // 2142253380000

// /* Fonction pour déterminer le nombre de jours qui sont passé entre 2 dates */
// /* Explication : dans un premier date on soustrait la date 2 à la date 1 ce qui nous donne un résultat en time stamp.
//    Ce dernier on va le diviser par :
//    1000 (millisecondes) * 60 secondes * 60 minutes * 24 heures afin de convertir le timestamp en jour. */
// const calcDaysPassed = (date1, date2) =>
// 	Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));

// /* Il y a donc 10 jours alors dans la date 1 et la date 2 */
// console.log(days1); // 10

// ===================================================================================== //
// ===================================================================================== //
// ========================== Internationalizing Dates (Intl) ========================== //
// ===================================================================================== //
// ===================================================================================== //
// /* Pour les options, il existe d'autres possibilités que 'numeric', comme par exemple 'long'
// qui donnera le nom du mois ou '2-digit' qui donnera le numéro du mois avec 2 digits. */

// const now = new Date();

// /* Voir + d'options sur MDN */
// const options = {
// 	hour: 'numeric',
// 	minute: 'numeric',
// 	day: 'numeric',
// 	month: 'long',
// 	year: 'numeric',
// 	weekday: 'long',
// };

// const locale = navigator.language;
// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

// console.log(new Intl.DateTimeFormat('en-US', options).format(now)); // Friday, July 1, 2022 at 5:19 PM
// console.log(new Intl.DateTimeFormat('en-US').format(now)); // 7/1/2022

// console.log(new Intl.DateTimeFormat('en-GB', options).format(now)); // Friday, 1 July 2022 at 17:19
// console.log(new Intl.DateTimeFormat('en-GB').format(now)); // 01/07/2022

// console.log(new Intl.DateTimeFormat('eu-FR', options).format(now)); // vendredi 1 juillet 2022 à 17:19
// console.log(new Intl.DateTimeFormat('eu-FR').format(now)); // 01/07/2022

// /* Pour adapter au langage du navigateur de l'utilisateur */
// const locale = navigator.language;
// console.log(new Intl.DateTimeFormat(locale, options).format(now)); // vendredi 1 juillet 2022 à 17:22

// ===================================================================================== //
// ===================================================================================== //
// ========================== Internationalizing Dates (Intl) ========================== //
// ===================================================================================== //
// ===================================================================================== //

// const num = 3884764.23;

// /* Voir + d'options sur MDN */
// const options = {
// 	style: 'unit',
// 	unit: 'mile-per-hour',
// 	// useGrouping: false,
// };

// console.log(new Intl.NumberFormat('en-US', options).format(num)); // 3,884,764.23 mph
// console.log(new Intl.NumberFormat('de-DE', options).format(num)); // 3.884.764,23 mi/h
// console.log(new Intl.NumberFormat('fr-FR', options).format(num)); // 3 884 764,23 mi/h
// console.log(new Intl.NumberFormat(navigator.language, options).format(num)); // 3 884 764,23 mi/h

// ==================================================================================== //
// ==================================================================================== //
// ========================== setTimeout() and setInterval() ========================== //
// ==================================================================================== //
// ==================================================================================== //

// /* ---------------------------- setTimeout ---------------------------- */
// /* Cette fonction a pour but de run une callback function après qu'un timer soit écoulé */

// /* setTimeout va utiliser sa callback function pour appeler console.log au bout de 3 secondes (3000ms) */
// setTimeout(() => console.log('I will be there after 3 seconds'), 3000);

// /* Dans cet exemple, 'olives' et 'spinach' seront les arguments des paramètres 'ing1' et 'ing'2 */
// const ingredients = ['olives', 'spinach'];

// const pizzaTimer = setTimeout(
// 	(ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
// 	3000,
// 	...ingredients
// );
// console.log('Waiting...');

// /* clearTimeout permet d'arrêter le Timeout */
// if (ingredients.includes('spinach')) {
// 	clearTimeout(pizzaTimer);
// }

// /* ---------------------------- setTimeout ---------------------------- */
// /* Cette fonction a pour but de run une callback function après que chaque intervalle soit écoulée */

// setInterval(() => {
// 	const now = new Date();
// 	console.log(now);
// }, 1000);
