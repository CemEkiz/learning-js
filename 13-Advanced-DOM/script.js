'use strict';

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

// ==================================================================================== //
// ==================================================================================== //
// ========================== Styles, Attributes and Classes ========================== //
// ==================================================================================== //
// ==================================================================================== //

// /* On reprend l'exemple du message de cookies */
// const header = document.querySelector('.header');
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
// 	'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.append(message);
// document
// 	.querySelector('.btn--close-cookie')
// 	.addEventListener('click', function () {
// 		message.remove();
// 	});

// /* ---------------------------- Styles ---------------------------- */

// /* Ajouter une propriété/valeur CSS */
// message.style.backgroundColor = '#37383d';
// // message.style.width = '120%';

// /* Lire le style CSS d'un élémént */
// console.log(message.style.backgroundColor); // rgb(55, 56, 61)
// console.log(message.style.color); // Retourne rien car défini dans fichier .css
// console.log(getComputedStyle(message).color); // rgb(187, 187, 187)
// console.log(getComputedStyle(message).height); // 50px

// /* Modifier un style CSS existant */
// message.style.height =
// 	Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
// console.log(getComputedStyle(message).height); // 80px

// /* Changer la valeur d'une variable CSS */
// /* Les variables CSS sont stockés dans le :root, pour y accéder en JS : documentElement */
// // document.documentElement.style.setProperty('--color-primary', 'blue');

// /* ---------------------------- Attributs ---------------------------- */

// const logo = document.querySelector('.nav__logo');
// const btnLink = document.querySelector('.nav__link--btn');

// /* Lire un attribut sans getAttribute */
// console.log(logo.alt); // Bankist logo
// console.log(logo.title); // Bankist Logo
// console.log(logo.designer); // undefined (car non-standard)
// console.log(logo.src); // http://127.0.0.1:5500/13-Advanced-DOM/img/logo.png
// console.log(btnLink.href); // http://127.0.0.1:5500/13-Advanced-DOM/index.html#

// /* Lire un attribut avec getAttribute */
// console.log(logo.getAttribute('alt')); // Bankist logo
// console.log(logo.getAttribute('title')); // Bankist Logo
// console.log(logo.getAttribute('designer')); // Jonas
// console.log(logo.getAttribute('src')); // img/logo.png
// console.log(btnLink.getAttribute('href')); // #

// /* Lire un attribut "data" */
// console.log(logo.dataset.versionNumber); // 3.0

// /* Ajouter un attribut */
// logo.setAttribute('company', 'Bankist');
// console.log(logo.getAttribute('company')); // Bankist

// /* Supprimer un attribut */
// logo.removeAttribute('company');
// console.log(logo.getAttribute('company')); // null

// /* Modifier la valeur d'un attribut */
// logo.alt = 'Beautiful minimalist logo';
// console.log(logo.alt); // Beautiful minimalist logo

// /* ---------------------------- Classes ---------------------------- */

// /* Lire la classe d'un élément */
// console.log(logo.className); // nav__logo

// /* Ajouter une classe à un élément */
// logo.classList.add('cem');
// console.log(logo.className); // nav__logo cem

// /* Supprimer la classe d'un élément */
// logo.classList.remove('cem');
// console.log(logo.className); // nav__logo

// /* Ajoute la classe si elle n'existe pas / Supprime la classe si elle existe */
// logo.classList.toggle('visible');
// console.log(logo.className); // nav__logo visible
// logo.classList.toggle('visible');
// console.log(logo.className); // nav__logo

// /* Toggle en fonction de si la condition est true ou false */
// logo.classList.toggle('test', 5 > 10);
// console.log(logo.className); // nav__logo

// /* Faire un test pour savoir si une classe existe ou pas (true ou false) */
// console.log(logo.classList.contains('cem')); // false
// console.log(logo.classList.contains('nav__logo')); // true

// ============================================================================================ //
// ============================================================================================ //
// ========================== Get useful infos about scroll/viewport ========================== //
// ============================================================================================ //
// ============================================================================================ //

// // Obtenir le DOMRect : Position X/Y, Width/Height, Top/Right/Bottom/Left
// console.log(document.querySelector('.btn--scroll-to').getBoundingClientRect());
// console.log(document.querySelector('#section--1').getBoundingClientRect());

// // Obtenir la distance parcourue en scroll
// console.log('Current Scroll (X/Y),', window.scrollX, window.scrollY);

// // Obtenir la Height/Width de la page dans le Viewport
// console.log(
// 	'Height/Width Viewport',
// 	document.documentElement.clientHeight,
// 	document.documentElement.clientWidth
// );

// // Obtenir la Height/Width d'un élément dans le Viewport
// console.log(document.querySelector('#section--1').clientHeight);
// console.log(document.querySelector('.btn--scroll-to').clientHeight);

// ======================================================================================== //
// ======================================================================================== //
// ========================== Type of Events and Events Handlers ========================== //
// ======================================================================================== //
// ======================================================================================== //

// /* ---------------------------- Type of Events ---------------------------- */
// /* Il existe d'autres types d'events que "click" --> voir MDN : Events Reference */

// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function (e) {
// 	alert('Great! You are reading the heading :)');
// });

// /* Old way (juste à titre d'information, il est tjrs préférable d'utiliser addEventListener) */
// // h1.onmouseenter = function (e) {
// // 	alert('Great! You are reading the heading :)');
// // };

// /* ---------------------------- Event Handlers ---------------------------- */
// /* Il existe un autre Event Handler utile parfois : removeEventListener */

// /* Supprimer un Event Listener après qu'il ait été déclenché */

// const logo = document.querySelector('.nav__logo');

// const alertLogo = function (e) {
// 	alert('You are reading the logo :D');
// 	logo.removeEventListener('mouseenter', alertLogo);
// };

// logo.addEventListener('mouseenter', alertLogo);

// /* Supprimer un Event Listener après un certain temps */

// const navBtn = document.querySelector('.nav__link--btn');

// const alertNavBtn = function (e) {
// 	alert('You are reading the Nav Button :D');
// };

// navBtn.addEventListener('mouseenter', alertNavBtn);

// setTimeout(() => {
// 	navBtn.removeEventListener('mouseenter', alertNavBtn);
// }, 5000);

// ================================================================================================ //
// ================================================================================================ //
// ========================== Event Propagation : Bubbling and Capturing ========================== //
// ================================================================================================ //
// ================================================================================================ //

// /* Pour générer des couleurs random */
// const randomInt = (min, max) =>
// 	Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
// 	`rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

// /* ---------------------------- Event Propagation with Bubbling Phase ---------------------------- */

// /* L'event commence sur la Target puis se propage sur les parents durant la Bubbling Phase. */
// document.querySelector('.nav__link').addEventListener('click', function (e) {
// 	this.style.backgroundColor = randomColor();

// 	// Stop propagation (si nécessaire mais c'est rare)
// 	// e.stopPropagation();

// 	console.log('LINK', e.target, e.currentTarget); //> Cf. Console
// 	console.log(e.currentTarget === this); // true
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
// 	this.style.backgroundColor = randomColor();

// 	console.log('CONTAINER', e.target, e.currentTarget); //> Cf. Console
// 	console.log(e.currentTarget === this); // true
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
// 	this.style.backgroundColor = randomColor();

// 	console.log('NAV', e.target, e.currentTarget); //> Cf. Console
// 	console.log(e.currentTarget === this); // true
// });

// /* ---------------------------- Event Propagation with Capturing Phase ---------------------------- */

// /* Par défaut, l'Event débute sur le Target puis se propage sur les parents durant la Bubbling Phase.
// Toutefois il est possible d'inverser cela et de propager l'event d'abord durant la la Capturing Phase puis sur le Target.
// Comment ? En ajoutant l'argument "true" après notre Event Handler.
// Est-ce utile ? Pas spécialement, généralement on laisse par défaut la propagation se réaliser durant la Bubbling Phase. */

// // document.querySelector('.nav').addEventListener(
// // 	'click',
// // 	function (e) {
// // 		this.style.backgroundColor = randomColor();

// // 		console.log('NAV', e.target, e.currentTarget); //> Cf. Console
// // 		console.log(e.currentTarget === this); // true
// // 	},
// // 	true
// // );

// // document.querySelector('.nav__links').addEventListener(
// // 	'click',
// // 	function (e) {
// // 		this.style.backgroundColor = randomColor();

// // 		console.log('CONTAINER', e.target, e.currentTarget); //> Cf. Console
// // 		console.log(e.currentTarget === this); // true
// // 	},
// // 	true
// // );

// // document.querySelector('.nav__link').addEventListener(
// // 	'click',
// // 	function (e) {
// // 		this.style.backgroundColor = randomColor();

// // 		// Stop propagation (si nécessaire mais c'est rare)
// // 		// e.stopPropagation();

// // 		console.log('LINK', e.target, e.currentTarget); //> Cf. Console
// // 		console.log(e.currentTarget === this); // true
// // 	},
// // 	true
// // );

// ====================================================================== //
// ====================================================================== //
// ========================== Event Delegation ========================== //
// ====================================================================== //
// ====================================================================== //

// /********** Without Event Delegation **********/
// /* On utilisera dans ce cas forEach afin d'appliquer la fonction à tous les éléments mais cela
// risque d'avoir un impact sur les performances s'il y a trop d'éléments (ici il y en a que 3) */

// // document.querySelectorAll('.nav__link').forEach(function (el) {
// // 	el.addEventListener('click', function (e) {
// // 		e.preventDefault();

// // 		const id = this.getAttribute('href');
// // 		// console.log(id);
// // 		document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
// // 	});
// // });

// /********** With Event Delegation **********/
// /* Permet une meilleur performance, surtout quand il s'agit d'appliquer la même fonction à plusieurs
// éléments. Pour cela on va se servir du phénomène de "bubble up" */

// // Étape 1 : on attache l'Event Listener à un parent commun des éléments (ici ".nav__links")
// // Étape 2 : déterminer quel élément est à l'origine de l'event
// document.querySelector('.nav__links').addEventListener('click', function (e) {
// 	e.preventDefault();
// 	// console.log(e.target);

// 	// Matching Strategy (ignorer si le clic ne match pas avec ce que je veux)
// 	if (e.target.classList.contains('nav__link')) {
// 		const id = e.target.getAttribute('href');
// 		document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
// 		// console.log(id);
// 	}
// });

// ==================================================================== //
// ==================================================================== //
// ========================== DOM Traversing ========================== //
// ==================================================================== //
// ==================================================================== //
