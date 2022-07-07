'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.querySelector('#section--1');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

////////////////////////////////////////////////////////////////////////////////
// Modal Window

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

////////////////////////////////////////////////////////////////////////////////
// Smooth Scrolling

btnScrollTo.addEventListener('click', function (e) {
	section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////////////////////////////////////////////
// Page Navigation

// With Event Delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
	e.preventDefault();
	// console.log(e.target);

	// Matching Strategy
	if (e.target.classList.contains('nav__link')) {
		const id = e.target.getAttribute('href');
		document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
		// console.log(id);
	}
});

////////////////////////////////////////////////////////////////////////////////
// Tab Component

// With Event Delegation
tabsContainer.addEventListener('click', function (e) {
	const clicked = e.target.closest('.operations__tab');
	console.log(clicked);
	console.log(clicked.dataset.tab);

	// Guard Clause
	if (!clicked) return;

	// Remove active state to all tabs
	tabs.forEach((tab) => tab.classList.remove('operations__tab--active'));

	// Remove active state to all contents
	tabsContent.forEach((content) =>
		content.classList.remove('operations__content--active')
	);

	// Add active state to tab selected
	clicked.classList.add('operations__tab--active');

	// Add active state to content selected
	document
		.querySelector(`.operations__content--${clicked.dataset.tab}`)
		.classList.add('operations__content--active');
});

////////////////////////////////////////////////////////////////////////////////
// Menu Fade Animation

const handleHover = function (e) {
	if (e.target.classList.contains('nav__link')) {
		const link = e.target;
		console.log(link);
		const siblings = link.closest('.nav').querySelectorAll('.nav__link');
		console.log(siblings);
		const logo = link.closest('.nav').querySelector('img');
		console.log(logo);

		siblings.forEach((el) => {
			if (el !== link) {
				el.style.opacity = this;
			}
			logo.style.opacity = this;
		});
	}
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));
