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
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const imgTargets = document.querySelectorAll('img[data-src]');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

////////////////////////////////////////////////////////////////////////////////
// Modal Window

const openModal = (e) => {
	e.preventDefault();
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModal = () => {
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
	// console.log(clicked);
	// console.log(clicked.dataset.tab);

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
		// console.log(link);
		const siblings = link.closest('.nav').querySelectorAll('.nav__link');
		// console.log(siblings);
		const logo = link.closest('.nav').querySelector('img');
		// console.log(logo);

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

////////////////////////////////////////////////////////////////////////////////
// Sticky Navigation

// 1. Get the height of the Navbar
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

/* 2. Callback function :
   - When the header is visible on the viewport, disable the Sticky Nav
   - When the header is ~ not visible on the viewport, enable the Sicky Nav */
const stickyNav = (entries) => {
	const [entry] = entries;
	// console.log(entry);

	if (!entry.isIntersecting) {
		nav.classList.add('sticky');
	} else {
		nav.classList.remove('sticky');
	}
};

// 3. Options for the IntersectionObserver
const stickyNavOptions = {
	root: null,
	treshold: 0,
	rootMargin: `-${navHeight}px`,
};

// 4. Create the IntersectionObserver
const headerObserver = new IntersectionObserver(stickyNav, stickyNavOptions);

// 5. Call the IntersectionObserver Method (.observe)
headerObserver.observe(header);

////////////////////////////////////////////////////////////////////////////////
// Reveal Sections on Scroll

/* 1. Callback Function for the IntersectionObserver :
- When a section is visible, remove the "section--hidden" class from it
- When a section was observed, unobserve it for keeping performance */
const revealSection = (entries, observer) => {
	const [entry] = entries;
	// console.log(entry);

	// Guard Clause
	if (!entry.isIntersecting) return;

	entry.target.classList.remove('section--hidden');

	observer.unobserve(entry.target);
};

// 2. Options for the IntersectionObserver
const revealSectionOptions = {
	root: null,
	threshold: 0.18,
};

// 3. Create the IntersectionObserver
const sectionObserver = new IntersectionObserver(
	revealSection,
	revealSectionOptions
);

/* 4. - Call the IntersectionObserver Method (.observe)
      - Add .section--hidden class to all sections */
allSections.forEach((section) => {
	sectionObserver.observe(section);
	// section.classList.add('section--hidden');
});

////////////////////////////////////////////////////////////////////////////////
// Lazy Loading Images

/* 1. Callback Function for the IntersectionObserver :
   - Replace src with data-src
   - Remove "lazy-img" class when the HQ image is load */
const loadImg = (entries, observer) => {
	const [entry] = entries;
	console.log(entry);

	// Guard Clause
	if (!entry.isIntersecting) return;

	entry.target.src = entry.target.dataset.src;

	// entry.target.classList.remove('lazy-img');

	entry.target.addEventListener('load', function () {
		entry.target.classList.remove('lazy-img');
	});

	observer.unobserve(entry.target);
};

// 2. Options for the IntersectionObserver
const loadImgOptions = {
	root: null,
	threshold: 0.2,
	rootMargin: '200px',
};

// 3. Create the IntersectionObserver
const imgObserver = new IntersectionObserver(loadImg, loadImgOptions);

// 4. Call the IntersectionObserver Method (.observe)
imgTargets.forEach((img) => {
	imgObserver.observe(img);
});

////////////////////////////////////////////////////////////////////////////////
// Slider (Testimonial)

// To work with a better overview
// document.querySelector('.slider').style.transform = 'scale(0.5)';
// document.querySelector('.slider').style.overflow = 'visible';

// For Changing Slide
let curSlide = 0;

// For stop at the last slide
const maxSlide = slides.length;

// Create Dots below the Slider
const createDots = function () {
	slides.forEach(function (_, i) {
		dotContainer.insertAdjacentHTML(
			'beforeend',
			`<button class="dots__dot" data-slide="${i}"></button>`
		);
	});
};

createDots();

// Set a different color to the dot of the active slide
const activateDot = function (slide) {
	// Remove the active state to all dots
	document
		.querySelectorAll('.dots__dot')
		.forEach((dot) => dot.classList.remove('dots__dot--active'));

	// Add the active class to the active slide (using css attribute selector)
	document
		.querySelector(`.dots__dot[data-slide="${slide}"]`)
		.classList.add('dots__dot--active');
};

// Activate Dot at the beginning
activateDot(0);

// Move to next and previous slide with dots
dotContainer.addEventListener('click', function (e) {
	if (e.target.classList.contains('dots__dot')) {
		// console.log('dot');
		const slide = e.target.dataset.slide;

		goToSlide(slide);
		activateDot(slide);
	}
});

// For translate the X position of the slide
const goToSlide = function (slide) {
	slides.forEach((s, i) => {
		s.style.transform = `translateX(${100 * (i - slide)}%)`;
	});
};

// TranslateX chacune des slides : le 1er à 0%, le 2ème à 100%, le 3ème à 200%, etc. */
goToSlide(0);

// Move to next side
const nextSlide = function () {
	if (curSlide === maxSlide - 1) {
		curSlide = 0;
	} else {
		curSlide++;
	}

	goToSlide(curSlide);
	activateDot(curSlide);
};

// console.log(slides.length);

// Move to previous slide
const prevSlide = function () {
	if (curSlide === 0) {
		// curSlide = slides.length - 1;
		curSlide = maxSlide - 1;
	} else {
		curSlide--;
	}

	// curSlide--;

	goToSlide(curSlide);
	activateDot(curSlide);
};

// Calling nextSlide and prevSlide on click
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

// Calling nextSlide and prevSlide with Keyboard Shortcut
document.addEventListener('keydown', function (e) {
	// console.log(e);
	if (e.key === 'ArrowLeft') {
		prevSlide();
	}

	// with Short-Circuiting
	// e.key === 'ArrowRight' && nextSlide();
});
