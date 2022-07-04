'use strict';

///////////////////////////////////////
// Modal Window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
	e.preventDefault();
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

// Open Modal
btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

// Close Modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Close Modal w/Escape
document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});

// =============================================================================================== //
// =============================================================================================== //
// ========================== Selecting, Creating and Deleting Elements ========================== //
// =============================================================================================== //
// =============================================================================================== //

// /* ---------------------------- Sélectionner tous les élements ou <head> et <body> ---------------------------- */

// console.log(document.documentElement); //>
// console.log(document.head); //>
// console.log(document.body); //>

// /* ---------------------------- Sélectionner des éléments plus spécifiques ---------------------------- */

// /* _______.querySelector et .querySelectorAll_______ */

// const header = document.querySelector('.header');
// console.log(header); //> Premier élément ayant la class "header"

// const allSections = document.querySelectorAll('.section');
// console.log(allSections); //> NodeList de tous les éléments ayant la class "section"

// /* _______getElementBy..._______ */

// const section1 = document.getElementById('section--1');
// console.log(section1); //> Élément ayant l'ID "section--1"

// const button = document.getElementsByTagName('button');
// console.log(button); //> HTMLCollection de tous les éléments "button"

// const btn = document.getElementsByClassName('btn');
// console.log(btn); //> HTMLCollection de tous les éléments ayant la class "btn"

// /* Différence entre HTMLCollection et NodeList : HTMLCollection se met à jour automatiquement lorsque l'on supprime
// un bouton par exemple contrairement à NodeList qu'il faut mettre à jour manuellement. */

// /* ---------------------------- Créer/Insérer/Supprimer des éléments ---------------------------- */

// /* _______insertAdjacentHTML_______ */
// // cf. Bankist App > displayMovements Function

// /* Créer un élément */
// const message = document.createElement('div');

// /* Ajouter une classe à un élément */
// message.classList.add('cookie-message');
// message.classList.add('foo');
// console.log(message.outerHTML); // <div class="cookie-message foo"></div>

// /* Supprimer une classe à un élément */
// message.classList.remove('foo');
// console.log(message.outerHTML); // <div class="cookie-message"></div>

// /* Ajouter du texte à un élément */
// // message.textContent = "We use cookies for improved functionality and analytics"

// /* Ajouter du texte et insérer du contenu HTML */
// message.innerHTML =
// 	'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// /* Ajouter l'élément au DOM Tree : en premier enfant de "header" */
// // header.prepend(message);

// /* Ajouter l'élément au DOM Tree : en dernier enfant de "header" */
// header.append(message);

// /* Ajouter l'élément au DOM Tree : en jumeau avant "header" */
// // header.before(message);

// /* Ajouter l'élément au DOM Tree : en jumeau après "header" */
// // header.after(message);

// /* Supprimer un élément */
// document
// 	.querySelector('.btn--close-cookie')
// 	.addEventListener('click', function () {
// 		message.remove();
// 		// message.parentElement.removeChild(message);
// 	});
