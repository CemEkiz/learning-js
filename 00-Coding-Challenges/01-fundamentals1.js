/* -------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------- */
/* ------------------------------ Coding Challenge #1 (Variables)------------------------------ */
/* -------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------- */

// const marksMass = 78;
// const marksHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// // With Data 2
// // const marksMass = 95;
// // const marksHeight = 1.88;
// // const johnMass = 85;
// // const johnHeight = 1.76;

// const marksBMI = marksMass / marksHeight ** 2;
// console.log(marksBMI); // 27..
// const johnBMI = johnMass / johnHeight ** 2;
// console.log(johnBMI); // 24..

// const marksHigherBMI = marksBMI > johnBMI;
// console.log(marksHigherBMI); // true

/* ------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------- */
/* ------------------------------ Coding Challenge #2 (if/else) ------------------------------ */
/* ------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------- */

// const marksMass2 = 78;
// const marksHeight2 = 1.69;
// const johnMass2 = 92;
// const johnHeight2 = 1.95;

// const marksBMI2 = marksMass / marksHeight ** 2;
// console.log(marksBMI); // 27..
// const johnBMI2 = johnMass / johnHeight ** 2;
// console.log(johnBMI); // 24..

// if (marksBMI2 > johnBMI2) {
// 	console.log(
// 		`Mark's BMI (${marksBMI2}) is higher than John's BMI (${johnBMI2})`
// 	);
// } else {
// 	console.log(
// 		`John's BMI (${johnBMI2}) is higher than Marks's BMI (${marksBMI2})`
// 	);
// }

/* --------------------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------------------- */
/* ------------------------------ Coding Challenge #3 (if/else and operators) ------------------------------ */
/* --------------------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------------------- */

// const averageScoreDolphins = (96 + 108 + 89) / 3;
// console.log(averageScoreDolphins); // 97
// const averageScoreKoalas = (88 + 91 + 110) / 3;
// console.log(averageScoreKoalas); // 96

// if (averageScoreDolphins > averageScoreKoalas) {
// 	// true
// 	console.log('Dolphins win!');
// } else if (averageScoreDolphins === averageScoreKoalas) {
// 	console.log('There is a draw!');
// } else {
// 	console.log('Koalas win!');
// }

// Bonus 1
// const averageScoreDolphins = (97 + 112 + 101) / 3;
// console.log(averageScoreDolphins); // 103
// const averageScoreKoalas = (109 + 95 + 123) / 3;
// console.log(averageScoreKoalas); // 109

// if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
// 	console.log('Dolphins win!');
// } else if (
// 	averageScoreKoalas > averageScoreDolphins &&
// 	averageScoreKoalas >= 100
// ) {
// 	// true
// 	console.log('Koalas win!');
// } else {
// 	console.log('No ones win!');
// }

// // Bonus 2
// const averageScoreDolphins = (97 + 112 + 101) / 3;
// console.log(averageScoreDolphins);
// const averageScoreKoalas = (109 + 95 + 106) / 3;
// console.log(averageScoreKoalas);

// if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
// 	// false
// 	console.log('Dolphins win!');
// } else if (
// 	averageScoreKoalas > averageScoreDolphins &&
// 	averageScoreKoalas >= 100
// ) {
// 	// false
// 	console.log('Koalas win!');
// } else if (
// 	(averageScoreDolphins === averageScoreKoalas && averageScoreDolphins,
// 	averageScoreKoalas >= 100)
// ) {
// 	// false
// 	console.log('There is a draw!');
// } else {
// 	console.log('No ones win!');
// }

/* ---------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------- */
/* ------------------------------ Coding Challenge #4 (Ternary Operator) ------------------------------ */
/* ---------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------- */

// // 1.
// let bill = 275;
// console.log(bill);

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
// 	`The bill was ${bill}, the tip was ${tip} and te the total value was ${
// 		bill + tip
// 	}`
// );
