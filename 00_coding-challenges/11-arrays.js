/* -------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */
/* ------------------------------ Coding Challenge 1 ------------------------------ */
/* -------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */

// __________________ Ma Solution __________________

// let dogsJulia = [3, 5, 2, 12, 7];
// let dogsKate = [3, 5, 2, 12, 7];

// let dogsJuliaCopy = dogsJulia.slice();
// dogsJulia = dogsJuliaCopy.splice(1, 2);
// console.log(dogsJulia);

// const allDogs = dogsJulia.concat(dogsKate);
// console.log(allDogs);

// const checkDogs = function (allDogs) {
// 	allDogs.forEach(function (age, i) {
// 		if (age >= 3) {
// 			console.log(`Dog number ${i + 1} is an adult and is ${age} years old `);
// 		} else {
// 			console.log(`Dog number ${i + 1} is still a puppy`);
// 		}
// 	});
// };

// checkDogs(allDogs);

// __________________ Solution de Jonas __________________

// const checkDogs = function (dogsJulia, dogsKate) {
// 	const dogsJuliaCorrected = dogsJulia.slice();
// 	dogsJuliaCorrected.splice(0, 1);
// 	dogsJuliaCorrected.splice(-2);

// 	const dogs = dogsJuliaCorrected.concat(dogsKate);
// 	console.log(dogs);

// 	dogs.forEach(function (dog, i) {
// 		if (dog >= 3) {
// 			console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
// 		} else {
// 			console.log(`Dogs number ${i + 1} is still a puppy`);
// 		}
// 	});
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

/* -------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */
/* ------------------------------ Coding Challenge 2 ------------------------------ */
/* -------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */

// const dogsAge1 = [5, 2, 4, 1, 15, 8, 3];
// const dogsAge2 = [16, 6, 10, 5, 6, 1, 4];

// __________________ Ma Solution __________________

// const calcAverageHumanAge = function (ages) {
// 	const humanAge = ages.map((dogAge) =>
// 		dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
// 	);

// 	const adultAge = humanAge.filter((dogAge) => dogAge >= 18);

// 	const averageHumanAge =
// 		adultAge.reduce((acc, cur) => acc + cur, 0) / adultAge.length;

// 	console.log(humanAge);
// 	console.log(adultAge);
// 	console.log(averageHumanAge);
// };

// calcAverageHumanAge(dogsAge1);
// // (7) [36, 4, 32, 2, 76, 48, 28]
// // (5) [36, 32, 76, 48, 28]
// // 44
// calcAverageHumanAge(dogsAge2);
// // (7) [80, 40, 56, 36, 40, 2, 32]
// // (6) [80, 40, 56, 36, 40, 32]
// // 47.333333333333336

// __________________ Solution de Jonas __________________

// const calcAverageHumanAge = function (ages) {
// 	const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));

// 	const adults = humanAges.filter((age) => age >= 18);
// 	console.log(humanAges);
// 	console.log(adults);

// 	const average = adults.reduce(
// 		(acc, age, i, arr) => acc + age / arr.length,
// 		0
// 	);

// 	return average;
// };

// const avg1 = calcAverageHumanAge(dogsAge1);
// // (7) [36, 4, 32, 2, 76, 48, 28]
// // (5) [36, 32, 76, 48, 28]
// const avg2 = calcAverageHumanAge(dogsAge2);
// // (7) [80, 40, 56, 36, 40, 2, 32]
// // (6) [80, 40, 56, 36, 40, 32]

// console.log(avg1); // 44
// console.log(avg2); // 47.333333333333336

/* -------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */
/* ------------------------------ Coding Challenge 3 ------------------------------ */
/* -------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */

// __________________ Ma Solution __________________

// const dogsAge1 = [5, 2, 4, 1, 15, 8, 3];
// const dogsAge2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge2 = (ages) => {
// 	const humanAges = ages
// 		.map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
// 		.filter((age) => age >= 18)
// 		.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// 	return humanAges;
// };

// const avg1 = calcAverageHumanAge2(dogsAge1);
// // (7) [36, 4, 32, 2, 76, 48, 28]
// // (5) [36, 32, 76, 48, 28]
// const avg2 = calcAverageHumanAge2(dogsAge2);
// // (7) [80, 40, 56, 36, 40, 2, 32]
// // (6) [80, 40, 56, 36, 40, 32]

// console.log(avg1); // 44
// console.log(avg2); // 47.333333333333336

// __________________ Solution de Jonas __________________

// /* cf. Ma Solution */

/* -------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */
/* ------------------------------ Coding Challenge 4 ------------------------------ */
/* -------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */

/* 
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) 🤓

3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').

4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"

5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)

6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)

7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)

8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects 😉)

Hints:
- Use many different tools to solve these challenges, you can use the summary
lecture to choose between them 😉
- Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion.
*/

// // __________________ Solution de Jonas __________________

// const dogs = [
// 	{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
// 	{ weight: 8, curFood: 200, owners: ['Matilda'] },
// 	{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
// 	{ weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// // 1.
// dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// // 2.
// const dogSarah = dogs.find((dog) => dog.owners.includes('Sarah'));
// console.log(dogSarah); // {weight: 13, curFood: 275, owners: Array(2), recFood: 191}
// console.log(
// 	`Sarah's dog is eating too ${
// 		dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
// 	} `
// ); // Sarah's dog is eating too much

// // 3.
// const ownersEatTooMuch = dogs
// 	.filter((dog) => dog.curFood > dog.recFood)
// 	.flatMap((dog) => dog.owners);

// console.log(ownersEatTooMuch); // (3) ['Matilda', 'Sarah', 'John']

// const ownersEatTooLittle = dogs
// 	.filter((dog) => dog.curFood < dog.recFood)
// 	.flatMap((dog) => dog.owners);

// console.log(ownersEatTooLittle); // (3) ['Alice', 'Bob', 'Michael']

// // 4.
// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
// // "Matilda and Alice and Bob's dogs eat too much!"
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
// //  "Sarah and John and Michael's dogs eat too little!"

// // 5.
// console.log(dogs.some((dog) => dog.curFood === dog.recFood)); // false

// // 6.
// // Formula : current > (recommended * 0.90) && current < (recommended * 1.10)
// const checkEatingOkay = (dog) =>
// 	dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
// console.log(dogs.some(checkEatingOkay)); // true

// // 7.
// console.log(dogs.filter(checkEatingOkay)); //> Cf. Console

// // 8.
// // sort it by recommended food portion in an ascending order [1,2,3]
// const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(dogsSorted);
