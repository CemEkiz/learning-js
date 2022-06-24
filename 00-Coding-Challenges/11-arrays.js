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

// 	// const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
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
