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

///////////////////////////////////////
// Smooth Scrolling

const section1 = document.querySelector('#section--1');
const btnScrollTo = document.querySelector('.btn--scroll-to');

/********** Old way **********/

// btnScrollTo.addEventListener('click', function (e) {
// 	// Obtenir les infos de position
// 	const s1coords = section1.getBoundingClientRect();
// 	// console.log(s1coords);

// 	// Scrolling
// 	// window.scrollTo(
// 	// 	s1coords.left + window.scrollX,
// 	// 	s1coords.top + window.scrollY
// 	// );

// 	window.scrollTo({
// 		left: s1coords.left + window.pageXOffset,
// 		top: s1coords.top + window.pageYOffset,
// 		behavior: 'smooth',
// 	});
// });

/********** Modern way **********/

btnScrollTo.addEventListener('click', function (e) {
	section1.scrollIntoView({ behavior: 'smooth' });
});
