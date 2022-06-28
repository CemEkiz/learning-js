// ===================================================================================== //
// ===================================================================================== //
// ========================== Converting and Checking Numbers ========================== //
// ===================================================================================== //
// ===================================================================================== //

/* ---------------------------- Cas de bug spécifiques aux nombres ---------------------------- */

/* JavaScript est basé sur des nombres binaires et pas en base 10 comme on en a l'habitude. */
/* Base 10 -->  0 à 9 */
/* Base 2 (binaire) --> 0 à 1 */
console.log(23 === 23.0); // true
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

/* ---------------------------- Convertir un String en Number ---------------------------- */

/* Avec la fonction Number */
console.log(Number("23")); // 23

/* Avec le Type Coercion */
console.log(+"23"); // 23

/* ---------------------------- Parsing ---------------------------- */
/* Le string doit commencer par un Number */

/* ParseInt */
/* Le 10 (Radix Parameter) signifie qu'on est sur une base 10 (nombres décimaux pas pris en compte) */
console.log(Number.parseInt("30px", 10)); // 30
console.log(Number.parseInt("px30", 10)); // NaN
console.log(Number.parseInt("2.5rem")); // 2

/* ParseFloat */
/* Il permet de prendre en compte les nombres décimaux contrairement à parseInt */
console.log(Number.parseFloat("2.5rem")); // 2.5
console.log(Number.parseFloat("2rem")); // 2

/* ---------------------------- .isNaN ---------------------------- */
/* Cette Method permet de check si une valeur est "NaN" (true ou false) */

console.log(Number.isNaN(20)); // false
console.log(20); // 20

console.log(Number.isNaN("20")); // false (c'est un String)
console.log("20"); // "20"

console.log(Number.isNaN(+"20x")); // true (+"20x" retourne NaN)
console.log(+"20x"); // NaN

console.log(Number.isNaN(23 / 0)); // false
console.log(23 / 0); // Infinity

/* ---------------------------- .isFinite ---------------------------- */
/* - Cette Method permet de check si une valeur est un Number.
   - Il est préférable d'utiliser cette méthode plutôt que isNaN.
   - "Finite" est le contraire de "Infinite". */

console.log(Number.isFinite(20)); // true
console.log(20); // 20

console.log(Number.isFinite("20")); // false
console.log("20"); // "20"

console.log(Number.isFinite(+"20x")); // false
console.log(+"20x"); // NaN

console.log(Number.isFinite(23 / 0)); // false
console.log(23 / 0); // Infinity
