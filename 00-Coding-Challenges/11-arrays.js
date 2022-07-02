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

// // __________________ Solution de Jonas __________________

// const dogs = [
// 	{ weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
// 	{ weight: 8, curFood: 200, owners: ["Matilda"] },
// 	{ weight: 13, curFood: 275, owners: ["Sarah", "John"] },
// 	{ weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// // 1.
// dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// // 2.
// const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
// console.log(dogSarah);
// console.log(
// 	`Sarah's dog is eating too ${
// 		dogSarah.curFood > dogSarah.recFood ? "much" : "little"
// 	} `
// );

// // 3.
// const ownersEatTooMuch = dogs
// 	.filter((dog) => dog.curFood > dog.recFood)
// 	.flatMap((dog) => dog.owners);
// // .flat();
// console.log(ownersEatTooMuch);
// const ownersEatTooLittle = dogs
// 	.filter((dog) => dog.curFood < dog.recFood)
// 	.flatMap((dog) => dog.owners);
// console.log(ownersEatTooLittle);

// // 4.
// // "Matilda and Alice and Bob's dogs eat too much!"
// //  "Sarah and John and Michael's dogs eat too little!"
// console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// // 5.
// console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// // 6.
// // current > (recommended * 0.90) && current < (recommended * 1.10)
// const checkEatingOkay = (dog) =>
// 	dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
// console.log(dogs.some(checkEatingOkay));

// // 7.
// console.log(dogs.filter(checkEatingOkay));

// // 8.
// // sort it by recommended food portion in an ascending order [1,2,3]
// const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(dogsSorted);
