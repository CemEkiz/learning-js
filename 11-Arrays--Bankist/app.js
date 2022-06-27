"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/* Note : cette application est très simplifié mais elle permet de pratiquer tout ce que j'ai
appris jusque là. */
/* Note 2 : on aurait pu utiliser les Maps durant ce projet mais ici Jonas veut simuler une situation
où les données viennent d'un API. Et les données venant d'un API arrivent sous forme d'Object. */

// Data
const account1 = {
	owner: "Jonas Schmedtmann",
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};

const account2 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};

const account3 = {
	owner: "Steven Thomas Williams",
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};

const account4 = {
	owner: "Sarah Smith",
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

///////////////////////////// displayMovements Function /////////////////////////////

const displayMovements = function (movements) {
	// Supprimer le contenu HTML de base (c'est fréquent de le faire)
	containerMovements.innerHTML = "";

	// Boucle sur tous les éléments de l'array "movements"
	movements.forEach(function (mov, i) {
		// Afin de déterminer quel contenu HTML ajouter
		const type = mov > 0 ? "deposit" : "withdrawal";

		// Cibler le contenu HTML à ajouter
		const html = `
		<div class="movements__row">
		<div class="movements__type movements__type--${type}">
		${i + 1} ${type}
		</div>
		<div class="movements__value">${mov} </div>
		</div>
		`;

		// Fonction qui ajoute le contenu HTML ciblé ci-dessus
		containerMovements.insertAdjacentHTML("afterbegin", html);
	});
};

///////////////////////////// calcDisplayBalance Function /////////////////////////////

const calcDisplayBalance = function (acc) {
	acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
	labelBalance.textContent = `${acc.balance} EUR`;
};

///////////////////////////// calcDisplaySummary Function /////////////////////////////

const calcDisplaySummary = function (account) {
	const incomes = account.movements
		.filter((mov) => mov > 0)
		.reduce((acc, mov) => acc + mov, 0);
	labelSumIn.textContent = `${incomes}€`;

	const out = account.movements
		.filter((mov) => mov < 0)
		.reduce((acc, mov) => acc + mov, 0);
	labelSumOut.textContent = `${Math.abs(out)}€`;

	const interest = account.movements
		.filter((mov) => mov > 0)
		.map((deposit) => deposit * (account.interestRate / 100))
		.filter((int) => int >= 1)
		.reduce((acc, int) => acc + int, 0);

	labelSumInterest.textContent = `${interest}`;
};

///////////////////////////// createUsernames Function /////////////////////////////
/* Justification de l'utilisation de forEach : on veut pas retourner un nouvel array dans cette fonction.
On veut surtout faire des modifications sur des éléments existants et forEach est parfait pour cela. */

const createUsernames = function (account) {
	account.forEach(function (acc) {
		acc.username = acc.owner
			.toLowerCase()
			.split(" ")
			.map((name) => name[0])
			.join("");
	});
};

createUsernames(accounts);

// console.log(accounts); //> cf. Console

///////////////////////////// Implementing Login /////////////////////////////

const updateUI = function (acc) {
	// Display Movements
	displayMovements(acc.movements);

	// Display Balance
	calcDisplayBalance(acc);

	// Display Summary
	calcDisplaySummary(acc);
};

let currentAccount;

// Event Handler : Login
btnLogin.addEventListener("click", function (e) {
	e.preventDefault();

	currentAccount = accounts.find(
		(acc) => acc.username === inputLoginUsername.value
	);

	// console.log(currentAccount);

	if (currentAccount?.pin === Number(inputLoginPin.value)) {
		// Display UI and Welcome Message
		containerApp.style.opacity = 100;
		labelWelcome.textContent = `Welcome back, ${
			currentAccount.owner.split(" ")[0]
		}`;

		// Clear input fields
		inputLoginUsername.value = inputLoginPin.value = "";
		inputLoginPin.blur();

		// Update UI
		updateUI(currentAccount);
	}
});

///////////////////////////// Implementing Close Account /////////////////////////////

// Event Handler : Close Account
btnClose.addEventListener("click", function (e) {
	e.preventDefault();

	if (
		inputCloseUsername.value === currentAccount.username &&
		Number(inputClosePin.value) === currentAccount.pin
	) {
		const index = accounts.findIndex(
			(acc) => acc.username === currentAccount.username
		);

		// console.log(index);

		// Delete account
		accounts.splice(index, 1);

		// Hide UI
		containerApp.style.opacity = 0;
	}

	inputCloseUsername.value = inputClosePin.value = "";
});

///////////////////////////// Implementing Transfers /////////////////////////////

// Event Handler : Transfer Money
btnTransfer.addEventListener("click", function (e) {
	e.preventDefault();
	const amount = Number(inputTransferAmount.value);
	const receiverAcc = accounts.find(
		(acc) => acc.username === inputTransferTo.value
	);
	inputTransferAmount.value = inputTransferTo.value = "";

	// console.log(amount, receiverAcc);

	if (
		amount > 0 &&
		receiverAcc &&
		currentAccount.balance >= amount &&
		receiverAcc?.username !== currentAccount.username
	) {
		// Doing the transfer
		currentAccount.movements.push(-amount);
		receiverAcc.movements.push(amount);

		// Update UI
		updateUI(currentAccount);
	}
});

///////////////////////////// Implementing Loan /////////////////////////////

btnLoan.addEventListener("click", function (e) {
	e.preventDefault();

	const amount = Number(inputLoanAmount.value);

	if (
		amount > 0 &&
		currentAccount.movements.some((mov) => mov >= amount * 0.1)
	) {
		// Add movement
		currentAccount.movements.push(amount);

		// Update UI
		updateUI(currentAccount);
	}

	inputLoanAmount.value = "";
});
