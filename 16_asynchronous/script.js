'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ======================================================================================= //
// ======================================================================================= //
// ========================== First AJAX Call w/ XMLHttpRequest ========================== //
// ======================================================================================= //
// ======================================================================================= //
/* - XMLHttpRequest est l'ancienne manière de faire un AJAX Call
   - Il est cependant important que j'ai un aperçu de son fonctionnement (je pourrais en voir dans le cadre d'un job)
   - Il faut aussi que je comprenne comment les AJAX Calls sont utilisés avec les Events et Callback Functions
   - La méthode la plus moderne pour les AJAX Calls est les "Promises" (cf. section "Promises and the Fetch API") */

const getCountryData = function (country) {
	const request = new XMLHttpRequest();
	request.open('GET', `https://restcountries.com/v2/name/${country}`);
	request.send();

	request.addEventListener('load', function () {
		// console.log(this.responseText);

		// Destructure + Transform the response from string to object
		const [data] = JSON.parse(this.responseText);
		console.log(data);

		const html = `
    <article class="country">
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
	});
};

/* - Étant donné que les AJAX Calls sont async, elles vont se lancé en même temps, et le premier à charger apparaîtra,
   mais en réalité on les voit tous apparaître quasiment en même temps. C'est une preuve du comportement "non-blocking"
   - Par contre si on veut que les AJAX Calls apparaîssent dans un certain ordre il va falloir les "chain" */
getCountryData('france');
getCountryData('turkey');
