"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
	owner: "Jonas Schmedtmann",
	movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
	interestRate: 1.2, // %
	pin: 1111,

	movementsDates: [
		"2019-11-18T21:31:17.178Z",
		"2019-12-23T07:42:02.383Z",
		"2020-01-28T09:15:04.904Z",
		"2020-04-01T10:17:24.185Z",
		"2020-05-08T14:11:59.604Z",
		"2020-05-27T17:01:17.194Z",
		"2020-07-11T23:36:17.929Z",
		"2020-07-12T10:51:36.790Z",
	],
	currency: "EUR",
	locale: "pt-PT", // de-DE
};

const account2 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,

	movementsDates: [
		"2019-11-01T13:15:33.035Z",
		"2019-11-30T09:48:16.867Z",
		"2019-12-25T06:04:23.907Z",
		"2020-01-25T14:18:46.235Z",
		"2020-02-05T16:33:06.386Z",
		"2020-04-10T14:43:26.374Z",
		"2020-06-25T18:49:59.371Z",
		"2020-07-26T12:01:20.894Z",
	],
	currency: "USD",
	locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

///////////////////////////// displayMovements Function /////////////////////////////

const displayMovements = function (acc, sort = false) {
	// Supprimer le contenu HTML de base (c'est fréquent de le faire)
	containerMovements.innerHTML = "";

	// Sort
	const movs = sort
		? acc.movements.slice().sort((a, b) => a - b)
		: acc.movements;

	// Boucle sur tous les éléments de l'array "movements"
	movs.forEach(function (mov, i) {
		// Afin de déterminer quel contenu HTML ajouter
		const type = mov > 0 ? "deposit" : "withdrawal";

		const date = new Date(acc.movementsDates[i]);
		const day = `${date.getDate()}`.padStart(2, 0);
		const month = `${date.getMonth() + 1}`.padStart(2, 0);
		const year = date.getFullYear();
		const displayDate = `${day}/${month}/${year}`;

		// Cibler le contenu HTML à ajouter
		const html = `
		<div class="movements__row">
		<div class="movements__type movements__type--${type}">
		${i + 1} ${type}
		</div>
		<div class="movements__date">${displayDate}</div>
		<div class="movements__value">${mov.toFixed(2)}€</div>
		</div>
		`;

		// Fonction qui ajoute le contenu HTML ciblé ci-dessus
		containerMovements.insertAdjacentHTML("afterbegin", html);
	});
};

///////////////////////////// calcDisplayBalance Function /////////////////////////////

const calcDisplayBalance = function (acc) {
	acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
	labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

///////////////////////////// calcDisplaySummary Function /////////////////////////////

const calcDisplaySummary = function (account) {
	const incomes = account.movements
		.filter((mov) => mov > 0)
		.reduce((acc, mov) => acc + mov, 0);
	labelSumIn.textContent = `${incomes.toFixed(2)}€`;

	const out = account.movements
		.filter((mov) => mov < 0)
		.reduce((acc, mov) => acc + mov, 0);
	labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

	const interest = account.movements
		.filter((mov) => mov > 0)
		.map((deposit) => deposit * (account.interestRate / 100))
		.filter((int) => int >= 1)
		.reduce((acc, int) => acc + int, 0);

	labelSumInterest.textContent = `${interest.toFixed(2)}€`;
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

// ==================================================================== //
// ========================== EVENT HANDLERS ========================== //
// ==================================================================== //

///////////////////////////// Login /////////////////////////////

const updateUI = function (acc) {
	// Display Movements
	displayMovements(acc);

	// Display Balance
	calcDisplayBalance(acc);

	// Display Summary
	calcDisplaySummary(acc);
};

let currentAccount;

btnLogin.addEventListener("click", function (e) {
	e.preventDefault();

	currentAccount = accounts.find(
		(acc) => acc.username === inputLoginUsername.value
	);

	// console.log(currentAccount);

	if (currentAccount?.pin === +inputLoginPin.value) {
		// Display UI and Welcome Message
		containerApp.style.opacity = 100;
		labelWelcome.textContent = `Welcome back, ${
			currentAccount.owner.split(" ")[0]
		}`;

		// Create Current Date
		const now = new Date();
		const day = `${now.getDate()}`.padStart(2, 0);
		const month = `${now.getMonth() + 1}`.padStart(2, 0);
		const year = now.getFullYear();
		const hour = `${now.getHours()}`.padStart(2, 0);
		const min = `${now.getMinutes()}`.padStart(2, 0);
		labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

		// Clear input fields
		inputLoginUsername.value = inputLoginPin.value = "";
		inputLoginPin.blur();

		// Update UI
		updateUI(currentAccount);
	}
});

///////////////////////////// Close Account /////////////////////////////

btnClose.addEventListener("click", function (e) {
	e.preventDefault();

	if (
		inputCloseUsername.value === currentAccount.username &&
		+inputClosePin.value === currentAccount.pin
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

///////////////////////////// Transfers /////////////////////////////

btnTransfer.addEventListener("click", function (e) {
	e.preventDefault();
	const amount = +inputTransferAmount.value;
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

		// Add transfer date
		currentAccount.movementsDates.push(new Date().toISOString());
		receiverAcc.movementsDates.push(new Date().toISOString());

		// Update UI
		updateUI(currentAccount);
	}
});

///////////////////////////// Loan /////////////////////////////

btnLoan.addEventListener("click", function (e) {
	e.preventDefault();

	const amount = Math.floor(inputLoanAmount.value);

	if (
		amount > 0 &&
		currentAccount.movements.some((mov) => mov >= amount * 0.1)
	) {
		// Add movement
		currentAccount.movements.push(amount);

		// Add loan date
		currentAccount.movementsDates.push(new Date().toISOString());

		// Update UI
		updateUI(currentAccount);
	}

	inputLoanAmount.value = "";
});

///////////////////////////// Sort /////////////////////////////

let sorted = false;

btnSort.addEventListener("click", function (e) {
	e.preventDefault();

	displayMovements(currentAccount, !sorted);
	sorted = !sorted;
});
