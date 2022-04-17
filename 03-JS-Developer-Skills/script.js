// Utilisation du strict mode dans tous les projets !
// 'use strict';

// 1) Paramétrage de l'extension Prettier -> OK
// 2) Paramétrage de mon 1er snippet "cl -> console.log()" : Command Palett > User Snippets > cem.code-snippets (Vidéo 55 | Timecode 11:00)
// 3) Extension TODO Highlight -> à paramétrer (Vidéo 55 | Timecode )

// ================================================================================ //
// ================================================================================ //
// ========================== Solve a Problem (Video 59) ========================== //
// ================================================================================ //
// ================================================================================ //
/* Cette partie a pour but de m'entraîner à être un Problem Solver, à penser comme un développeur/progrommeur
   Je peux m'aider des slides sur Notion (JS Good Practices > Résoudre un problème en 4 étapes) */

/* Tableau de température donnée (sur une journée) */
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

/* ------------------------------- PROBLEM 1 -------------------------------  */

/* 
We work for a company building a smart home thermometer. 
Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. 
Keep in mind that sometimes there might be a sensor error.

// 0) Traduire le problème en français --------

- En anglais : Given an array of temperatures of one day, calculate the temperature amplitude
- En français : sur un tableau donnée des températures d'une journée, calculer l'amplitude de température

// 1) Comprendre le problème --------

- Qu'est-ce que l'amplitude de température ?
Réponse : C'est la différence entre la plus haute et la plus basse température
C'est donc cette valeur que nous recherchons et que nous voulons que la fonction retourne
- Comment calculer le max et min temperatures ?
- Qu'est-ce qu'une sensor error et que faire si on tombe dessus ? (Réponse: ignorer l'erreur) 

// 2) Diviser le problème en sous-problèmes --------

- Comment ignorer les erreurs ?
- Trouver la valeur max dans l'array temperatures
- Trouver la valeur min dans l'array temperatures
- Soustraire la valeur max à la valeur min (= amplitude) et le retourner
*/

/* 
Note du processus : 
Je commence par créer une fonction qui recevera en input les températures.
Dans cette fonction je veux chercher la valeur max. et la valeur min. des températures mais je ne sais pas encore commment faire.
Je vais donc faire des recherches : "javascript get max value in array" (mdn, stackoverflow...)
Explication de la solution : je crée une variable "max" dans laquelle je stock un array avec la valeur [0] par défaut, ensuite je crée une boucle for qui débute à
l'emplacement 0 de l'array et qui a pour condition de continuer tant que le counter est inférieur à la taille de l'array (on fera donc le tour de l'array)
Et on avancera 1 par 1 (i++)
Explication du if : si la valeur de l'array de l'itération actuel est supérieur à la variable max alors on définit cette valeur à max
Ainsi à chaque itération dès qu'une valeur sera supérieur elle sera défini à max.
Je fais le même travail pour la valeur min.
J'ai crée une variable pour stocker temps[i] car je l'utilise souvent dans les tests if dans ce problème.
Maintenant je m'attaque au problème des "sensor error", pour rappel je veux ignorer ces messages.
Solution : je fais un test de la température actuel, si son type est différent de "number" alors je le skip et je continue
*/

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude); // 23

/* ------------------------------- PROBLEM 2 -------------------------------  */

/* 
La fonction doit maintenant pouvoir recevoir 2 arrays de températures

// 1) Comprendre le problème --------

- Avec les 2 arrays, faut-il implémenter la fonctionnalité 2 fois séparément ?
La question doit être posé au manager/client, ici supposons que NON, nous voulons fusionner les 2 arrays.


// 2) Diviser le problème en sous-problèmes --------

- Comment merge 2 arrays ?
Solution trouvé sur MDN : la Method .concat
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
*/

// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   return max - min;
// };

// /* Je met 2 arrays en input afin de simuler le fonctionnement du .concat Method */
// const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
// console.log(amplitude); // 9

// =================================================================================== //
// =================================================================================== //
// ========================== Debugger de Chrome (Video 61) ========================== //
// =================================================================================== //
// =================================================================================== //
/* Exemple : je crée une fonction qui permet de convertir des degrés celsius en kelvin
   Pour faire cela on aditionne 273 à la valeur en celsius.
   Je ne définis pas de paramètres à la fonction (l'input viendra du prompt)
   Je crée un object measurement puis une variable "kelvin" qui va chercher la propriété "value" de l'Object measurement */

/* -------------------------------------------- */

/* Bug : quand j'entre un nombre dans le prompt (10 par exemple) cela fait une concaténation de string (10 devient 10273) */
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: prompt('Degrees Celsius:'),
//   };

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

/* -------------------------------------------- */

/* Solution de Jonas
   1 - Identifier le problème : lorsqu'on log le résultat de la fonction, elle renvoie une concaténation de string (10 devient 10273)
   2 - Trouver la source du problème : console.log(measurement) -> on voit que le prompt retourne "10" en tant que string !
     Petite astuce : lorsque l'on veut log un object dans la console -> console.log(measurement) affichera un tableau ;)
   3 - Fix le problème : utiliser la fonction "Number" sur le prompt afin de convertir le résultat en Number */

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees Celsius:')),
//   };

//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

/* -------------------------------------------- */

/* Solution de moi-même : je l'ai trouvé tout seul sur stackoverflow -> parseInt */
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: prompt('Degrees Celsius:'),
//   };
//   const convertNumb = parseInt(measurement.value);

//   const kelvin = convertNumb + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// =========================================================================== //
// =========================================================================== //
// ========================== Debugger 2 (Video 61) ========================== //
// =========================================================================== //
// =========================================================================== //

/* ------------- Version original sans bug ------------- */
// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude([3, 5, 1], [9, 4, 5]);
// console.log(amplitude); // 8

/* ------------- Version avec bug ------------- */
/* 1 - Identification du bug : console.log(max, min) retourne 9 et 0 alors que le chiffre le plus bas est 1 (et pas 0)
2 -  */
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug); // 8

// ====================================================================== //
// ====================================================================== //
// ========================== Coding Challenge ========================== //
// ====================================================================== //
// ====================================================================== //

/* Ma Solution */
// const arr = [17, 21, 23];
// let day = [1];

// const printForecast = function () {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`... ${arr[i]}° in ${day++} days`);
//   }
// };

// console.log(printForecast());

/* Solution de Jonas */
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days -> index de l'array + 1

// 2) Breaking up into sub-problem
// - Transform array into string
// - Transform each element to string with °C
// - String need to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to the console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days... `;
  }
  console.log(str);
};

printForecast(data1);
