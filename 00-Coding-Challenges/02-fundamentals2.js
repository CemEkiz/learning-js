/* --------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------- */
/* ------------------------------ Coding Challenge #1 (Functions) ------------------------------ */
/* --------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------- */

// const avgScore = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // Test 1
// const dolphinsAvgScore1 = avgScore(44, 23, 71);
// const koalasAvgScore1 = avgScore(65, 54, 49);

// // Test 2
// const dolphinsAvgScore2 = avgScore(85, 54, 41);
// const koalasAvgScore2 = avgScore(23, 34, 27);

// const checkWinner = function (dolphinsAvgScore, koalasAvgScore) {
// 	if (dolphinsAvgScore >= 2 * koalasAvgScore) {
// 		console.log(`Dolphins win (${dolphinsAvgScore} vs. ${koalasAvgScore})`);
// 	} else if (koalasAvgScore >= dolphinsAvgScore * 2) {
// 		console.log(`Koalas win (${koalasAvgScore} vs. ${dolphinsAvgScore})`);
// 	} else {
// 		console.log("No ones win");
// 	}
// };

// // Test 1
// const data1 = checkWinner(dolphinsAvgScore1, koalasAvgScore1);

// // Test 2
// const data2 = checkWinner(dolphinsAvgScore2, koalasAvgScore2);

/* ------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------ */
/* ------------------------------ Coding Challenge #2 (Arrays) ------------------------------ */
/* ------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------ */

// const calcTip = function (bill) {
// 	const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// 	return tip;
// };

// const bills = [125, 555, 44];
// console.log(bills);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// /* À ne pas faire car le "+" va faire une concaténation */
// // const totalsDontDo = bills + tips;
// // console.log(totalsDontDo); // renvoie des Strings

/* ----------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------- */
/* ------------------------------ Coding Challenge #3 (Objects & Methods) ------------------------------ */
/* ----------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------- */

// const john = {
// 	fullName: "John Smith",
// 	mass: 92,
// 	height: 1.95,
// 	calcBMI: function () {
// 		this.BMI = this.mass / this.height ** 2;
// 		return this.BMI;
// 	},
// };

// const mark = {
// 	fullName: "Mark Miller",
// 	mass: 78,
// 	height: 1.69,
// 	calcBMI: function () {
// 		this.BMI = this.mass / this.height ** 2;
// 		return this.BMI;
// 	},
// };

// john.calcBMI();
// mark.calcBMI();
// console.log(john.BMI, mark.BMI);

// if (john.BMI > mark.BMI) {
// 	console.log(
// 		`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})`
// 	);
// } else if (mark.BMI > john.BMI) {
// 	console.log(
// 		`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})`
// 	);
// }

/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
/* ------------------------------ Coding Challenge #4 (Loops) ------------------------------ */
/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */

// const calcTip = function (bill) {
// 	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
// 	const tip = calcTip(bills[i]);
// 	tips.push(tip);
// 	totals.push(tip + bills[i]);
// }

// console.log(bills);
// console.log(tips);
// console.log(totals);

// // Bonus (très difficle à ce niveau)

// const calcAverage = function (arr) {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		// sum = sum + arr[i];
// 		sum += arr[i];
// 	}
// 	return sum / arr.length;
// };

// console.log(calcAverage([2, 3, 7])); // 4
// console.log(calcAverage(totals)); // 275.19 // On paye en moyenne ~275€ au total (bill+tip)
// console.log(calcAverage(tips)); // 42.89 // On paye en moyenne ~42€ de tips
