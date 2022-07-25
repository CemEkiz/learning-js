'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ======================================================================================= //
// ======================================================================================= //
// ========================== First AJAX Call w/ XMLHttpRequest ========================== //
// ======================================================================================= //
// ======================================================================================= //
// /* NOTE: - XMLHttpRequest est l'ancienne manière de faire un AJAX Call
// - Il est cependant important que j'ai un aperçu de son fonctionnement (je pourrais en voir dans le cadre d'un job)
// - Il faut aussi que je comprenne comment les AJAX Calls sont utilisés avec les Events et Callback Functions
// - La méthode la plus moderne pour les AJAX Calls est les "Promises" (cf. section "Promises and the Fetch API") */

// const getCountryData = function (country) {
// 	// Ajax Call
// 	const request = new XMLHttpRequest();
// 	request.open('GET', `https://restcountries.com/v2/name/${country}`);
// 	request.send();

// 	request.addEventListener('load', function () {
// 		// console.log(this.responseText);

// 		// Destructure + Transform the response from string to object
// 		const [data] = JSON.parse(this.responseText);
// 		console.log(data);

// 		const html = `
//     <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
// 							+data.population / 1000000
// 						).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
// 							data.currencies[0].name
// 						}</p>
//           </div>
//         </article>
//     `;

// 		countriesContainer.insertAdjacentHTML('beforeend', html);
// 		countriesContainer.style.opacity = 1;
// 	});
// };

// /* NOTE: Étant donné que les AJAX Calls sont async, elles vont se lancé en même temps, et le premier à charger apparaîtra,
// mais en réalité on les voit tous apparaître quasiment en même temps. C'est une preuve du comportement "non-blocking".
// Par contre si on veut que les AJAX Calls apparaîssent dans un certain ordre il va falloir les "chain" */
// getCountryData('france');
// getCountryData('turkey');

// =================================================================== //
// =================================================================== //
// ========================== Callback Hell ========================== //
// =================================================================== //
// =================================================================== //

// const renderCountry = function (data, className = '') {
// 	const html = `
//     <article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
// 							+data.population / 1000000
// 						).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
// 							data.currencies[0].name
// 						}</p>
//           </div>
//         </article>
//     `;

// 	countriesContainer.insertAdjacentHTML('beforeend', html);
// 	countriesContainer.style.opacity = 1;
// };

// /* NOTE: Dans cette fonction, il y a une Callback function imbriqué dans une autre Callback function
//    -> cf. request et request2
//    Il peut y avoir des situations où encore + de callback function peuvent être imbriquées, on
//    appelle cela "Callback Hell" */

// const getCountryAndNeighbour = function (country) {
// 	// AJAX Call Country 1
// 	const request = new XMLHttpRequest();
// 	request.open('GET', `https://restcountries.com/v2/name/${country}`);
// 	request.send();

// 	request.addEventListener('load', function () {
// 		// Destructure + Transform the response from string to object
// 		const [data] = JSON.parse(this.responseText);
// 		console.log(data);

// 		// Render country 1
// 		renderCountry(data);

// 		// Get neighbour country 2
// 		const neighbour = data.borders?.[0];

// 		// Guard clause (if the country has no border country)
// 		if (!neighbour) return;

// 		// AJAX Call Country 2
// 		const request2 = new XMLHttpRequest();
// 		request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
// 		request2.send();

// 		request2.addEventListener('load', function () {
// 			// Transform the response from string to object
// 			const data2 = JSON.parse(this.responseText);
// 			console.log(data2);

// 			renderCountry(data2, 'neighbour');
// 		});
// 	});
// };

// getCountryAndNeighbour('usa');

// /* Autre exemple de Callback Hell */
// // setTimeout(() => {
// // 	console.log('1 second passed');
// // 	setTimeout(() => {
// // 		console.log('2 second passed');
// // 		setTimeout(() => {
// // 			console.log('3 second passed');
// // 		}, 1000);
// // 	}, 1000);
// // }, 1000);

// /* NOTE: Le problème avec les Callback Hell, c'est que c'est désordonné et souvent difficile à comprendre,
// par conséquent cela peut induire à des bugs/erreurs, et aussi rendre difficile la maintenabilité du code.
// Depuis ES6, on peut se passer des Callback Hell grâce à une nouvelle feature : les Promises. */

// =============================================================== //
// =============================================================== //
// ========================== Fetch API ========================== //
// =============================================================== //
// =============================================================== //

/* ---------------------------- XMLHttpRequest vs Fetch ---------------------------- */

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

/* ---------------------------- with Fetch ---------------------------- */

// const request = fetch('https://restcountries.com/v2/name/france');
// console.log(request); //> Promise {<pending>}

// =============================================================== //
// =============================================================== //
// ========================== Promises =========================== //
// =============================================================== //
// =============================================================== //

// const renderCountry = function (data, className = '') {
// 	const html = `
//     <article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
// 							+data.population / 1000000
// 						).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
// 							data.currencies[0].name
// 						}</p>
//           </div>
//         </article>
//     `;

// 	countriesContainer.insertAdjacentHTML('beforeend', html);
// 	// countriesContainer.style.opacity = 1;
// };

// // /* ---------------------------- Consuming Promises ---------------------------- */

// /* NOTE: - La fetch API retourne une Promise sur laquelle on peut call .then method
// - Sur la response on doit obtenir les données avec la .json method (cela retourne une nouvelle Promise)
// - On utilise ensuite à nouveau .then method sur cette nouvelle Promise afin de retourner les données  */

// // Refacto
// const renderError = function (msg) {
// 	countriesContainer.insertAdjacentText('beforeend', msg);
// 	// countriesContainer.style.opacity = 1;
// };

// // Refacto
// const getJSON = (url, errorMsg = 'Something went wrong') =>
// 	fetch(url).then((response) => {
// 		if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

// 		return response.json();
// 	});

// const getCountryData = function (country) {
// 	// Country 1
// 	getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
// 		.then((data) => {
// 			renderCountry(data[0]);

// 			const neighbour = data[0].borders?.[0];
// 			// const neighbour = 'dqsjdpqs';

// 			if (!neighbour) throw new Error('No neighbour found!');

// 			// Country 2
// 			return getJSON(
// 				`https://restcountries.com/v2/alpha/${neighbour}`,
// 				'Country not found'
// 			);
// 		})
// 		.then((data) => renderCountry(data, 'neighbour'))
// 		.catch((error) => {
// 			console.error(`${error}`);
// 			renderError(`Something went wrong : ${error.message}`);
// 		})
// 		.finally(() => {
// 			countriesContainer.style.opacity = 1;
// 		});
// };

// /* Sans refactoring */
// // const getCountryData = function (country) {
// // 	// Country 1
// // 	fetch(`https://restcountries.com/v2/name/${country}`)
// // 		.then((response) => {
// // 			if (!response.ok) {
// // 				throw new Error(`Country not found (${response.status})`);
// // 			}

// // 			return response.json();
// // 		})
// // 		.then((data) => {
// // 			renderCountry(data[0]);

// // 			const neighbour = data[0].borders?.[0];

// // 			if (!neighbour) return;

// // 			// Country 2
// // 			return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
// // 		})
// // 		.then((response) => {
// // 			if (!response.ok) {
// // 				throw new Error(`Country not found (${response.status})`);
// // 			}

// // 			return response.json();
// // 		})
// // 		.then((data) => renderCountry(data, 'neighbour'))
// // 		.catch((error) => {
// // 			console.error(`${error}`);
// // 			renderError(`Something went wrong : ${error.message}`);
// // 		})
// // 		.finally(() => {
// // 			countriesContainer.style.opacity = 1;
// // 		});
// // };

// /* Pour tester les erreurs en offline */
// // btn.addEventListener('click', function () {
// // 	getCountryData('portugal');
// // });

// getCountryData('australia');

// ================================================================================= //
// ================================================================================= //
// ========================== The Event Loop in Practice =========================== //
// ================================================================================= //
// ================================================================================= //

// // NOTE: Cet exemple illustre l'ordre "Call Stack > Microtask Queue > Callback Queue".
// // Un autre point important : la seconde Promise loop sur un très grand Number, cela
// // a pour effet de "bloquer" l'exécution du setTimeout qui est censé s'exécuter juste après
// // soit pour un certain temps, soit pour "toujours" (mais c'est rare que cela arrive).

// console.log('Test start'); // Order 1
// setTimeout(() => console.log('0 sec timer'), 0); // Order 5
// Promise.resolve('Resolved promise 1').then((res) => console.log(res)); // Order 3
// Promise.resolve('Resolved promise 2').then((res) => {
// 	for (let i = 0; i < 10000000000; i++) {}
// 	console.log(res);
// }); // Order 4
// console.log('Test end'); // 2

// ============================================================================ //
// ============================================================================ //
// ========================== Build a Simple Promise ========================== //
// ============================================================================ //
// ============================================================================ //

// /* NOTE: Une Promise renvoie soit resolve() si elle est fullfiled, soit reject() si elle est rejected
// Si elle est resolved, on peut alors la consume avec .then et .catch, sinon il faut définir un message d'erreur à afficher.  */

// // On crée une Promise (dans la réalité on va surtout fetch un API = Promise)
// const lotteryPromise = new Promise(function (resolve, reject) {
// 	console.log('Lottery draw is happening 🔮');

// 	setTimeout(function () {
// 		if (Math.random() >= 0.5) {
// 			resolve('You WIN 🤑');
// 		} else {
// 			reject(new Error('You lost your money 💩'));
// 		}
// 	}, 2000);
// });

// // On consume la Promise en appellant .then et .catch sur la Promise.
// lotteryPromise
// 	.then((res) => console.log(res))
// 	.catch((err) => console.error(err));

// // Promisifying une function (setTimeout)
// const wait = function (seconds) {
// 	return new Promise(function (resolve) {
// 		setTimeout(resolve, seconds * 1000);
// 	});
// };

// /* ---------------------------- Promises Non-Async ---------------------------- */
// // Ces Promises sont traités immédiatement

// Promise.resolve('abc').then((x) => console.log(x));
// Promise.reject(new Error('Problem!')).catch((x) => console.error(x));

// /* ---------------------------- Callback Hell vs Promises ---------------------------- */

// // /* Callback Hell */
// // // setTimeout(() => {
// // // 	console.log('1 second passed');
// // // 	setTimeout(() => {
// // // 		console.log('2 second passed');
// // // 		setTimeout(() => {
// // // 			console.log('3 second passed');
// // // 		}, 1000);
// // // 	}, 1000);
// // // }, 1000);

// /* Promises */
// wait(1)
// 	.then(() => {
// 		console.log('1 second passed');
// 		return wait(1);
// 	})
// 	.then(() => {
// 		console.log('2 second passed');
// 		return wait(1);
// 	})
// 	.then(() => {
// 		console.log('3 second passed');
// 		return wait(1);
// 	})
// 	.then(() => {
// 		console.log('4 second passed');
// 		return wait(1);
// 	});
