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

const checkDogs = function (dogsJulia, dogsKate) {
	const dogsJuliaCorrected = dogsJulia.slice();
	dogsJuliaCorrected.splice(0, 1);
	dogsJuliaCorrected.splice(-2);

	const dogs = dogsJuliaCorrected.concat(dogsKate);
	console.log(dogs);

	dogs.forEach(function (dog, i) {
		if (dog >= 3) {
			console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
		} else {
			console.log(`Dogs number ${i + 1} is still a puppy`);
		}
	});
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
