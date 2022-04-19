"use strict";

// ========================================================================================= //
// ========================================================================================= //
// ========================== Selecting and Manipulating Elements ========================== // Notion :
// ========================================================================================= //
// ========================================================================================= //

// document.querySelector('.number').textContent = 13;
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.guess').value = 23;

// ============================================================================== //
// ============================================================================== //
// ========================== Guess My Number (no DRY) ========================== // Notion :
// ============================================================================== //
// ============================================================================== //

/* 
Pour ce mini-jeu, il faut définir :
- Un nombre à deviner
- Ce qu’il se passera si l’input est inférieur au nombre à deviner
- Ce qu’il se passera si l’input est supérieur au nombre à deviner
- Ce qu’il se passera si l’input est correct 
*/

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// document.querySelector(".check").addEventListener("click", function () {
// 	// To convert the String to a Number
// 	const guess = Number(document.querySelector(".guess").value);
// 	console.log(guess, typeof guess);

// 	// When there is no input
// 	if (!guess) {
// 		document.querySelector(".message").textContent = "No number...";

// 		// When player wins
// 	} else if (guess === secretNumber) {
// 		document.querySelector(".message").textContent = "Correct number!";
// 		document.querySelector("body").style.backgroundColor = "#60b347";
// 		document.querySelector(".number").style.width = "30rem";
// 		document.querySelector(".number").textContent = secretNumber;

// 		// Highscore
// 		if (score > highscore) {
// 			highscore = score;
// 		}
// 		document.querySelector(".highscore").textContent = highscore;

// 		// When guess is too high
// 	} else if (guess > secretNumber) {
// 		if (score > 1) {
// 			document.querySelector(".message").textContent = "Too high!";
// 			score--;
// 			document.querySelector(".score").textContent = score;
// 		} else {
// 			document.querySelector(".message").textContent = "You lost the game!";
// 			document.querySelector(".score").textContent = 0;
// 		}

// 		// When guess is too low
// 	} else if (guess < secretNumber) {
// 		if (score > 1) {
// 			document.querySelector(".message").textContent = "Too low!";
// 			score--;
// 			document.querySelector(".score").textContent = score;
// 		} else {
// 			document.querySelector(".message").textContent = "You lost the game!";
// 			document.querySelector(".score").textContent = 0;
// 		}
// 	}
// });

// // Again Button for Reset the Game
// document.querySelector(".again").addEventListener("click", function () {
// 	secretNumber = Math.trunc(Math.random() * 20) + 1;
// 	score = 20;
// 	document.querySelector(".message").textContent = "Start guessing...";
// 	document.querySelector(".score").textContent = score;
// 	document.querySelector(".number").textContent = "?";
// 	document.querySelector(".guess").value = "";
// 	document.querySelector("body").style.backgroundColor = "#222";
// 	document.querySelector(".number").style.width = "15rem";
// });

// ============================================================================== //
// ============================================================================== //
// ========================== Guess My Number (with DRY) ========================== // Notion :
// ============================================================================== //
// ============================================================================== //
/* DRY = Dont Repeat Yourself
   Ce principe a pour but d'éviter les lignes de code répétives/redondantes
   Quel est l'intérêt ? Éviter d'avoir à changer plusieurs fois la même chose à plusieurs endroits
   Améliorer la lisibilité en utilisant des fonctions descriptives (ex : displayMessage), etc.  */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
	document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
	// To convert the String to a Number
	const guess = Number(document.querySelector(".guess").value);
	console.log(guess, typeof guess);

	// When there is no input
	if (!guess) {
		// document.querySelector(".message").textContent = "No number...";
		displayMessage("No number!");

		// When player wins
	} else if (guess === secretNumber) {
		displayMessage("Correct number!");
		document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".number").style.width = "30rem";
		document.querySelector(".number").textContent = secretNumber;

		// Highscore
		if (score > highscore) {
			highscore = score;
			document.querySelector(".highscore").textContent = highscore;
		}

		// When guess is wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			displayMessage("You lost the game!");
			document.querySelector(".score").textContent = score;
		}
	}
});

// Again Button for Reset the Game
document.querySelector(".again").addEventListener("click", function () {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;
	displayMessage("Start guessing...");
	document.querySelector(".score").textContent = score;
	document.querySelector(".number").textContent = "?";
	document.querySelector(".guess").value = "";
	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".number").style.width = "15rem";
});
