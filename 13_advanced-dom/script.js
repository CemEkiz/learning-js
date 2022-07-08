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

// /* NOTE: Différence entre HTMLCollection et NodeList : HTMLCollection se met à jour automatiquement lorsque l'on supprime
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

// /* NOTE: Changer la valeur d'une variable CSS, il faut utiliser documentElement
// car elles sont stockés dans le :root */
// document.documentElement.style.setProperty('--color-primary', 'blue');

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

// /* Obtenir le DOMRect : Position X/Y, Width/Height, Top/Right/Bottom/Left */
// console.log(document.querySelector('.btn--scroll-to').getBoundingClientRect());
// console.log(document.querySelector('#section--1').getBoundingClientRect());

// /* Obtenir la distance parcourue en scroll */
// console.log('Current Scroll (X/Y),', window.scrollX, window.scrollY);

// // Obtenir la Height/Width de la page dans le Viewport
// console.log(
// 	'Height/Width Viewport',
// 	document.documentElement.clientHeight,
// 	document.documentElement.clientWidth
// );

// /* Obtenir la Height/Width d'un élément dans le Viewport */
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

// /*  EX: Supprimer un Event Listener après qu'il ait été déclenché */

// const logo = document.querySelector('.nav__logo');

// const alertLogo = function (e) {
// 	alert('You are reading the logo :D');
// 	logo.removeEventListener('mouseenter', alertLogo);
// };

// logo.addEventListener('mouseenter', alertLogo);

// /* EX: Supprimer un Event Listener après un certain temps */

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

// /* NOTE: L'event commence sur la Target puis se propage sur les parents durant la Bubbling Phase. */
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

// /* NOTE: Par défaut, l'Event débute sur le Target puis se propage sur les parents durant la Bubbling Phase.
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
// /* NOTE: On utilisera dans ce cas forEach afin d'appliquer la fonction à tous les éléments mais cela
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
// /* NOTE: Permet une meilleur performance, surtout quand il s'agit d'appliquer la même fonction à plusieurs
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

// const h1 = document.querySelector('h1');
// const nav = document.querySelector('.nav');
// const navItem = document.querySelector('.nav__item');

// /* ---------------------------- Vers le bas : child ---------------------------- */

// console.log(nav.querySelectorAll('.nav__link'));
// //> NodeList(4) [a.nav__link, a.nav__link, a.nav__link, a.nav__link.nav__link--btn.btn--show-modal]
// console.log(nav.childNodes);
// //> NodeList(5) [text, img#logo.nav__logo, text, ul.nav__links, text]
// console.log(nav.children);
// //> HTMLCollection(2) [img#logo.nav__logo, ul.nav__links, logo: img#logo.nav__logo]

// h1.firstElementChild.style.color = 'black';
// h1.lastElementChild.style.color = 'orangered';

// /* ---------------------------- Vers le haut : parent ---------------------------- */

// console.log(navItem.parentNode); //> ul.nav__links
// console.log(h1.parentNode); //> div.header__title
// console.log(nav.parentNode); //> header.header

// console.log(navItem.parentElement); //> ul.nav__links
// console.log(h1.parentElement); //> div.header__title
// console.log(nav.parentElement); //> header.header

// /* ---------------------------- Vers l'élément le plus proche ---------------------------- */

// /* La Method .closest retourne l'élément-parent le plus proche qui match avec le sélecteur */
// h1.closest('.header').style.background = 'grey';
// h1.closest('h1').style.background = 'blue';

// /* ---------------------------- Vers le sens latéral ---------------------------- */

// console.log(h1.previousElementSibling); //> null
// console.log(h1.nextElementSibling); //> h4

// console.log(h1.previousSibling); //> cf. Console
// console.log(h1.nextSibling); //> cf. Console

// console.log(h1.parentElement.children);
// //> HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]

// /* EX: scale à 0.5 tous les éléments-jumeaux de h1 (sauf h1 lui-même) */
// const elArr = [...h1.parentElement.children];
// console.log(elArr);
// elArr.forEach((el) => {
// 	if (el !== h1) {
// 		el.style.transform = 'scale(0.5)';
// 	}
// });

// ======================================================================================= //
// ======================================================================================= //
// ========================== Refactoring / DRY avec les Events ========================== //
// ======================================================================================= //
// ======================================================================================= //

// const navContainer = document.querySelector('.nav');

// /* NOTE: Le Refactoring du code peut survenir après s'être rendu compte de la présence de code en doublon.
//    Le principe de DRY (Dont Repeat Yourself) doit être appliqué. Dans le premier exemple ci-dessous,
//    l'Event Handler se répète beaucoup (cf. Refactoring ci-après) */

// /* ---------------------------- Sans Refactoring (sans DRY) ---------------------------- */

// // navContainer.addEventListener('mouseover', function (e) {
// //     if (e.target.classList.contains('nav__link')) {
// //         const link = e.target;
// // 		console.log(link);
// // 		const siblings = link.closest('.nav').querySelectorAll('.nav__link');
// // 		console.log(siblings);
// // 		const logo = link.closest('.nav').querySelector('img');
// // 		console.log(logo);

// // 		siblings.forEach((el) => {
// //             if (el !== link) {
// //                 el.style.opacity = 0.5;
// // 			}
// // 			logo.style.opacity = 0.5;
// // 		});
// // 	}
// // });

// // navContainer.addEventListener('mouseout', function (e) {
// //     if (e.target.classList.contains('nav__link')) {
// // 		const link = e.target;
// // 		console.log(link);
// // 		const siblings = link.closest('.nav').querySelectorAll('.nav__link');
// // 		console.log(siblings);
// // 		const logo = link.closest('.nav').querySelector('img');
// // 		console.log(logo);

// // 		siblings.forEach((el) => {
// // 			if (el !== link) {
// //                 el.style.opacity = 1;
// // 			}
// // 			logo.style.opacity = 1;
// // 		});
// // 	}
// // });

// /* ---------------------------- Refactoring (DRY) ---------------------------- */

// /* NOTE: Dans l'exemple précédent on va repérer les différences dans les 2 codes (la valeur de l'opacité),
//    Ensuite on va créer une fonction qui va prendre en paramètre cette différence afin d'être modulaire et
//    ré-utilisable avec différents arguments. */

// /* Étape 1 - le code en doublon a été placé dans une fonction, avec l'opacité défini sur "this" (cf. Étape 2) */
// const handleHover = function (e) {
// 	if (e.target.classList.contains('nav__link')) {
// 		const link = e.target;
// 		console.log(link);
// 		const siblings = link.closest('.nav').querySelectorAll('.nav__link');
// 		console.log(siblings);
// 		const logo = link.closest('.nav').querySelector('img');
// 		console.log(logo);

// 		siblings.forEach((el) => {
// 			if (el !== link) {
// 				el.style.opacity = this;
// 			}
// 			logo.style.opacity = this;
// 		});
// 	}
// };

// /* Étape 2 - Call de la fonction contenant l'Event Handler en faisant appel à la .bind Method,
// le "this" de la fonction contenant l'Event Handler pointera sur "l'argument" de la .bind Method */

// navContainer.addEventListener('mouseover', handleHover.bind(0.5));

// navContainer.addEventListener('mouseout', handleHover.bind(1));

// ================================================================== //
// ================================================================== //
// ========================== scroll Event ========================== //
// ================================================================== //
// ================================================================== //

// /* ---------------------------- With "scroll" Event ---------------------------- */
// /* Déconseillé pour une Sticky Nav car manque de perf. */

// const initialCords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
// 	// console.log(window.scrollY);
// 	// console.log(initialCords);

// 	if (window.scrollY > initialCords.top) {
// 		nav.classList.add('sticky');
// 	} else {
// 		nav.classList.remove('sticky');
// 	}
// });

// =============================================================================== //
// =============================================================================== //
// ========================== Intersection Observer API ========================== //
// =============================================================================== //
// =============================================================================== //

// /* NOTE: Il y a une Callback Function, des Options et une Target. Explication :
// - Dès que la Target sort de l'intersection avec le root alors la Callback Function est lancée.
// - Le treshold définissant le % acceptée
// /* cf. Sticky Navigation du Projet Bankist DOM */

// /* NOTE: Il est possible d'entrer la Callback Function et les Options directement à l'intérieur de
// l'IntersectionObserver API mais il est plus propre de les séparer dans des variables. */

// const section11 = document.querySelector('#section--1');

// const obsCallback = function (entries, observer) {
// 	entries.forEach((entry) => {
// 		console.log(entry);
// 	});
// };

// const obsOptions = {
// 	root: null,
// 	treshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);

// // Target
// observer.observe(section11);
