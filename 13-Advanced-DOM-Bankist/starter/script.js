'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const allSections = document.querySelectorAll('.section');
const imgTargets = document.querySelectorAll('img[data-src]');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
    btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

/* 
    188: Implementing smooth scrolling
*/
btnScrollTo.addEventListener('click', (e) => {
    const sec1coords = section1.getBoundingClientRect();
    console.log(sec1coords);
    // console.log(e.target.getBoundingClientRect());
    console.log('Current (X/Y)', window.pageXOffset, window.pageYOffset);
    // console.log(
    //     'height/width of view port', document.documentElement.clientHeight, document.documentElement.clientWidth
    // );

    /* 
        When we have scrolled on the page, the co-ords won't be exactly relative to the top of the page
        So, scrolling programmatically doesn't work properly. Hence, find the offset of the btn from top of the page
        and add it to the co-ords 
    */
    // window.scrollTo({
    //     left: sec1coords.left,
    //     top: sec1coords.top + window.pageYOffset,
    //     behavior: 'smooth'
    // });

    // New browser approach
    section1.scrollIntoView({behavior: 'smooth'});
});

/*
    192: Event delegation: Implementing page navigation
*/

// document.querySelectorAll('.nav__link').forEach(function (node) {
//     node.addEventListener('click', function (e) {
//         console.log('LINK');
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         console.log(id);
//         document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//     })
// })

document.querySelector('.nav__links').addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
});


/* 
    194: Building a tabbed component
*/
tabsContainer.addEventListener('click', e => {
    e.preventDefault();
    const clickedTab = e.target.closest('.operations__tab ');
    if (!clickedTab) {
        return
    };
    // activate tab
    tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
    clickedTab.classList.add('operations__tab--active');
    // activate content
    tabsContent.forEach(content => content.classList.remove('operations__content--active'));
    document.querySelector(`.operations__content--${clickedTab.dataset.tab}`)
        .classList.add('operations__content--active');
});

/*
    195: Passing arguments to event handlers
*/

// Menu fade

const handleHover = function (e) {
    if (e.target.classList.contains('nav__link')) {
        const clickedLink = e.target;
        const allLinks = clickedLink.closest('.nav').querySelectorAll('.nav__link');
        allLinks.forEach(link => {
            if (link !== clickedLink) link.style.opacity = this;
        });
        clickedLink.closest('.nav').querySelector('img').style.opacity = this;
    }
}

// .bind() -- creates a function that has same body as the original one
// we can pass parameters into that function on the bind method.
// If there are multiple params, pass them as array. All of it will be available 
// on the "this" keyword inside the function. So make sure to avoid the arrow function
// in this case

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

/*
    196: Implementing the sticky navigation: The scroll event
    * not a vey good way as the scroll event keeps firing for every scroll
*/
// const initialCoOrds = section1.getBoundingClientRect();
// window.addEventListener('scroll', () => {
//     initialCoOrds.top < window.scrollY ?
//         nav.classList.add('sticky') : nav.classList.remove('sticky');
// });

/*
    197: A Better way: The intersection observer API
*/

const navHeight = nav.getBoundingClientRect().height;
const headerSticky = (entries) => {
    const [entry] = entries;
    !entry.isIntersecting ? nav.classList.add('sticky') : nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(headerSticky, {
    root: null,
    threshold: 0,    // start showing the sticky nav when only 0 percent of the header is visible
    rootMargin: `-${navHeight}px`   // use a -ve height equal to the navbar height to transition seamlessly
});
headerObserver.observe(header);

/*
    198: Revealing elements on scroll
*/

const revealSection = (entries, observer) => {
    const [entry] = entries;
    if (!entry.isVisible && entry.isIntersecting) {
        entry.target.classList.remove('section--hidden');
        observer.unobserve(entry.target);
    }
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
});
allSections.forEach(section => {
    sectionObserver.observe(section);
    // section.classList.add('section--hidden');
});

/*
    199: Lazy loading images
*/

const revealImage = (entries, observer) => {
    console.log(entries, observer);
    const [entry] = entries;
    if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;

        entry.target.addEventListener('load', (e) => {
            e.preventDefault();
            entry.target.classList.remove('lazy-img');
        });
        observer.unobserve(entry.target);
    }
};

const imageObserver = new IntersectionObserver(revealImage, {
    root: null,
    threshold: 0.1,
    rootMargin: '200px'
});
imgTargets.forEach(img => {
    imageObserver.observe(img);
});

/*
    200: Building a slider component: Part 1
*/

let currentSlide = 0;

const moveSlide = () => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
};
moveSlide();

btnRight.addEventListener('click', () => {
    currentSlide !== slides.length - 1 ? currentSlide++ : currentSlide = 0;
    moveSlide();
});

btnLeft.addEventListener('click', () => {
    currentSlide !== 0 ? currentSlide-- : currentSlide = slides.length - 1;
    moveSlide();
});

/*
    186: Selecting, Creating and Deleting elements
*/

// // Selecting Elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document.querySelector(`.header`));
// const allSections = document.querySelectorAll(`.section`);      // Returns a nodelist
// console.log(allSections);

// console.log(document.getElementById(`section--1`));
// const allButtons = document.getElementsByTagName(`button`);     // returns a HTMLCollection
// console.log(allButtons);
// const allButtonsByClassName = document.getElementsByClassName(`btn`);  // returns a HTMLCollection
// console.log(allButtonsByClassName);

// // Creating and inserting elements
// // .insertAdjacentHTML -- Bankist app
// const header = document.querySelector(`.header`)
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = `We use cookies for improved functionality and analytics`;
// message.innerHTML = `We use cookies for improved functionality and 
//     analytics. <button class="btn btn--close-cookie">Got it!</button>`
// // Prepend/append -- adds the element as a child element
// // Every element is unique, so prepend/append on same element will move the element
// // header.prepend(message);
// header.append(message);

// // // before/after will insert the new element as a sibling element
// // header.before(message);
// // header.after(message);

// // Delete elements
// document.querySelector(`.btn--close-cookie`).addEventListener('click', () => {
//     message.remove();   // very recent method
// message.parentElement.removeChild(message);     // Old method of traversing the DOM tree and removing the child element
// })

/*
    187: Styles, attributes and classes
*/

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color);       // Empty as it is not defined here
// console.log(message.style.backgroundColor);

// // get all the styles
// console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).height);
// // Increase the height of cookie banner
// message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// //change the custom css variables -- now defined in root
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);
// logo.alt = 'Beautiful minimalist logo';     // Update the attribute

// // Non-standard/custom attributes
// console.log(logo.designer);                     // gives undefined
// console.log(logo.getAttribute('designer'));     // give the custom attribute value
// logo.setAttribute('company', 'bankist');

// console.log(logo.src);                      // absolute path
// console.log(logo.getAttribute('src'));      // relative path

// const link = document.querySelector('.btn--show-modal');
// console.log(link.href);                     // absolute path
// console.log(link.getAttribute('href'));     // relative path

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // Classes

// logo.classList.add('abc', 'jef');
// logo.classList.remove('abc');
// logo.classList.toggle('jef');
// logo.classList.contains('jef');

// // Don't do -- removes all other classes and updates to given class
// logo.className = 'vishu-logo';



/*
    189: Types of events and Event handlers
*/

// const h1 = document.querySelector('h1');
// const alerth1 = (e) => {
//     alert('Yay!! You have entered');
// };
// h1.addEventListener('mouseenter', alerth1);

// // remove eventlistner

// setTimeout(() => {
//     h1.removeEventListener('mouseenter', alerth1);
// }, 3000);

// // old way
// h1.onmouseenter = (e) => {
//     alert('Yay!! You have entered and stayed');
// };

/*
    191: Event propagation in practice
*/

// // We will attach event handlers to the nav link and each of its parent element to see the bubbling

// const randomInt = (min, max) =>
//     Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('LINK', e.target, e.currentTarget);
// });
// document.querySelector('.nav__item').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV-ITEM', e.target, e.currentTarget);
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV-LINKS-UL', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV-LINKS-CONTAINER', e.target);
//     console.log(e.currentTarget === this);
//     e.stopPropagation();    // not advisable
// });
// document.querySelector('.header').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('HEADER', e.target);
// }, true);
// document.querySelector('body').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('BODY', e.target);
// }, {capture: true});


/*
    193: DOM Traversing
*/

// // traverse down
// const h1 = document.querySelector('h1');
// // All child elements with this class will be selected -- no matter how deep they are
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.children);   // direct children
// console.log(h1.firstElementChild);      // returns the first child element
// console.log(h1.firstChild);     // can give the text inside the element

// h1.firstElementChild.style.color = 'pink';
// h1.lastElementChild.style.color = 'orangered';

// // traverse up
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// // closest will traverse up, but not to sibling
// h1.closest('.header__title').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';  // closest element is itself here
// // h1.closest('.section').style.background = 'var(--color-tertiary-opacity)';  // error -- as section is a sibling element

// // going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// // get all the siblings
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach((el) => {
//     if (el !== h1) {
//         el.style.transform = 'scale(0.5)';
//     }
// })


/*
    197: A Better way: The intersection observer API
*/

// const observer = new IntersectionObserver((entries, observer) => {
//     console.log(entries);
//     entries.forEach(entry => {
//         console.log(entry);
//     });
// }, {
//     root: null,
//     threshold: [0, 0.2]
// });
// observer.observe(section1);




