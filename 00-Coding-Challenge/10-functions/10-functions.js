/* -------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */
/* ------------------------------ Coding Challenge 1 ------------------------------ */
/* -------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */

// /* Ma solution : j'ai bloqué à partir de la tâche 3 du challenge */
// const poll = {
// 	question: "What is your favourite programming language?",
// 	options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
// 	// This generates [0, 0, 0, 0]. More in the next section!
// 	answers: new Array(4).fill(0),
// 	registerNewAnswer() {
// 		const answer = parseInt(
// 			prompt(
// 				"What is your favorite programming language ? \n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++ \n (Write option number)"
// 			)
// 		);

// 		if (answer >= 0 && answer <= 3) {
// 			this.answers[answer]++;
// 		} else {
// 			console.log("This answer is not in the list");
// 		}
// 	},
// };

// document
// 	.querySelector(".poll")
// 	.addEventListener("click", poll.registerNewAnswer.bind(poll));

// console.log(poll);

// /* La solution de Jonas */
// const poll = {
// 	question: "What is your favourite programming language?",
// 	options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
// 	// This generates [0, 0, 0, 0]. More in the next section!
// 	answers: new Array(4).fill(0),
// 	registerNewAnswer() {
// 		// Get Answer
// 		const answer = Number(
// 			prompt(
// 				`${this.question}\n${this.options.join("\n")}\n(Write option number)`
// 			)
// 		);

// 		console.log(answer);

// 		// Register answer (short-circuiting au lieu de if)
// 		typeof answer === "number" &&
// 			answer < this.answers.length &&
// 			this.answers[answer]++;

// 		this.displayResults();
// 		this.displayResults("string");
// 	},
// 	displayResults(type = "array") {
// 		if (type === "array") {
// 			console.log(this.answers);
// 		} else if (type === "string") {
// 			console.log(`Poll results are ${this.answers.join(", ")}`);
// 		}
// 	},
// };

// document
// 	.querySelector(".poll")
// 	.addEventListener("click", poll.registerNewAnswer.bind(poll));

// // Bonus (juste pour pratiquer même si ça n'a pas vraiment de sens)
// poll.displayResults.call({ answers: [5, 2, 3] }, "string");
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
