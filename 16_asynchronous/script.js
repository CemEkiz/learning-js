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
// ========================== Promises ========================== //
// =============================================================== //
// =============================================================== //

const renderCountry = function (data, className = '') {
	const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
							+data.population / 1000000
						).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
							data.currencies[0].name
						}</p>
          </div>
        </article>
    `;

	countriesContainer.insertAdjacentHTML('beforeend', html);
	countriesContainer.style.opacity = 1;
};

/* ---------------------------- Consuming Promises ---------------------------- */

/* NOTE: - La fetch API retourne une Promise sur laquelle on peut call .then method
- Sur la response on doit obtenir les données avec la .json method (cela retourne une nouvelle Promise)
- On utilise ensuite à nouveau .then method sur cette nouvelle Promise afin de retourner les données  */

const getCountryData = function (country) {
	fetch(`https://restcountries.com/v2/name/${country}`)
		.then((response) => response.json())
		.then((data) => renderCountry(data[0]));
};

/* Version explicite (pour mieux comprendre) */
// const getCountryData = function (country) {
// 	fetch(`https://restcountries.com/v2/name/${country}`)
// 		.then(function (response) {
// 			console.log(response);
// 			return response.json();
// 		})
// 		.then(function (data) {
// 			console.log(data);
// 			renderCountry(data[0]);
// 		});
// };

getCountryData('portugal');
